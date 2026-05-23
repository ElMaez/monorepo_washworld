from utils import config
from utils import regex
# Importeres Blueprint for at splitte routes op i opdelte filer
from flask import Blueprint, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
from icecream import ic
from utils import no_cache
from utils import regex

import uuid
import time


ic.configureOutput(prefix="______________ | ", includeContext=True)

# Her bliver vores blueprint lavet, hvor vi bruger
# users_bp som en slags label på vores tegning
users_bp = Blueprint("users", __name__)

########################_____SIGNUP_____########################
@users_bp.post("/api-signup")
@no_cache.no_cache
def api_create_user():
    try:
        #Validate data
        #uuid
        user_pk = uuid.uuid4().hex
        user_fullname = regex.validate_user_fullname()
        user_password = regex.validate_user_password()
        user_email = regex.validate_user_email()
        user_phonenumber = regex.validate_user_phonenumber()
        user_adress = regex.validate_user_address()
        # fortæller at adgangskoden skal være skjult i db
        user_hashed_password = generate_password_hash(user_password)
        # epoch / timestamp
        user_created_at = int(time.time())+7200
        
        # define db & cursor
        db, cursor = config.db()
        #query
        q = """INSERT INTO users
       (user_pk, user_fullname, user_phonenumber, user_email, user_password,
        user_address, user_created_at, user_updated_at, user_deleted_at)
       VALUES (%s, %s, %s, %s, %s, %s, %s, 0, 0)"""
        cursor.execute(q, (user_pk,user_fullname,user_phonenumber,user_email,user_hashed_password,user_adress,user_created_at, ))
        db.commit()
        return jsonify({"msg" : "hurray you have signed up"}), 200
    except Exception as ex:
        # Error
        ic(ex)        
        if "company_exception in user_fullname" in str(ex):
            error_message = (
                f"user fullname {regex.USER_FULLNAME_MIN} to "
                f"{regex.USER_FULLNAME_MAX} characters"
            )
            return jsonify({"error": error_message}), 400

        # Server error ( det din skyld at det ikke virker )
        return jsonify({"msg" : "lel you failed"}), 500
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()