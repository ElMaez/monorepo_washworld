from ..utils import x
from ..utils import no_cache
from ..utils import validation_REGEX

from flask import Flask, render_template, request, jsonify, session, redirect
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from icecream import ic
from flask_cors import CORS 
from flask_session import Session
import config
import uuid
import time

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText



ic.configureOutput(prefix=f'______________ | ', includeContext=True)

app = Flask(__name__)
if __name__ == "__main__":
    app.run(debug=True, port=5000)

app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

CORS(app)

####################################################################################################
#                                              Users                                               #
####################################################################################################

#CRUD#
@app.post("/api-create-user")
@no_cache.no_cache
def api_create_user():
    try:
        user_fullname = validation_REGEX.validate_user_fullname()
        user_phonenumber = validation_REGEX.validate_user_phonenumber()
        user_email = validation_REGEX.validate_user_email()
        user_address = validation_REGEX.validate_user_address()

        user_password = validation_REGEX.validate_user_password()
        user_hashed_password = generate_password_hash(user_password)


        user_pk = uuid.uuid4().hex
        user_created_at = int(time.time())

        db, cursor = x.db()
        q = "INSERT INTO users VALUES(%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(q, (user_pk, user_fullname, user_phonenumber, user_email, user_hashed_password, user_address, user_created_at))
        db.commit()

    except Exception as ex:
        ic(ex)
        if "company_exception in user_phonenumber" in str(ex):
            error_message = f"user phonenumber {validation_REGEX.USER_PHONENUMBER_MIN} to {validation_REGEX.USER_PHONENUMBER_MAX} characters"
            return jsonify({"error": error_message}), 400 
        
        if "company_exception in user_fullname" in str(ex):
            error_message = f"user fullname {validation_REGEX.USER_FULLNAME_MIN} to {validation_REGEX.USER_FULLNAME_MAX} characters"
            return jsonify({"error": error_message}), 400 
        
        if "company_exception in user_email" in str(ex):
            error_message = f"user email invalid"
            return jsonify({"error": error_message}), 400 
        
        if "company_exception in user_address" in str(ex):
            error_message = f"user address {validation_REGEX.USER_ADDRESS_MIN} to {validation_REGEX.USER_ADDRESS_MAX} characters"
            return jsonify({"error": error_message}), 400 

        # Worst case
        error_message = "System under maintenance"
        return jsonify({"error": error_message}), 500 

    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()

####################################################################################################

@app.get("/api-get-user-by-id/<user_pk>")
def api_get_user_by_id(user_pk):
    try:
        user_pk = validation_REGEX.validate_uuid4(user_pk)

        db, cursor = x.db()
        q = "SELECT * FROM users WHERE user_pk = %s"

        cursor.execute(q,(user_pk,))
        oneuser = cursor.fetchone()

        return jsonify({"oneuser":oneuser}), 200
    
    except Exception as ex:
        ic(ex, flush=True)
        error_message = "System under maintenance"
        return jsonify({"error": error_message}), 500
    
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()

####################################################################################################

@app.patch("/api-update-user-by-id/<user_pk>")
@no_cache.no_cache
def api_update_user_by_id(user_pk):
    try:
        user_pk = validation_REGEX.validate_uuid4(user_pk)
        user_fullname = validation_REGEX.validate_user_fullname()
        user_phonenumber = validation_REGEX.validate_user_phonenumber()
        user_email = validation_REGEX.validate_user_email()
        user_address = validation_REGEX.validate_user_address()

        parts = []
        values = []

        user_updated_at = int(time.time())
        parts.append("user_updated_at = %s")
        values.append(user_updated_at)

        user_fullname = user_fullname.strip()
        if user_fullname:
            parts.append("user_fullname = %s")
            values.append(user_fullname)
        
        user_phonenumber = user_phonenumber.strip()
        if user_phonenumber:
            parts.append("user_phonenumber = %s")
            values.append(user_phonenumber)

        user_email = user_email.strip()
        if user_email:
            parts.append("user_email = %s")
            values.append(user_email)

        user_address = user_address.strip()
        if user_address:
            parts.append("user_address = %s")
            values.append(user_address)

        if not user_fullname and not user_phonenumber and not user_email and not user_address: return "nothing to update", 400
        partial_query = ", ".join(parts)

        values.append(user_pk)

        q = f"""
            UPDATE users
            SET	{partial_query}
            WHERE user_pk = %s
        """

        db, cursor = x.db()
        cursor.execute(q, tuple(values,))
        db.commit()
        oneuser = cursor.fetchone()

        return jsonify({"oneuser":oneuser}), 200
    
    except Exception as ex:
        ic(ex, flush=True)
        if "company_exception in user_phonenumber" in str(ex):
            error_message = f"user phonenumber {validation_REGEX.USER_PHONENUMBER_MIN} to {validation_REGEX.USER_PHONENUMBER_MAX} characters"
            return jsonify({"error": error_message}), 400 
        
        if "company_exception in user_fullname" in str(ex):
            error_message = f"user fullname {validation_REGEX.USER_FULLNAME_MIN} to {validation_REGEX.USER_FULLNAME_MAX} characters"
            return jsonify({"error": error_message}), 400 
        
        if "company_exception in user_email" in str(ex):
            error_message = f"user email invalid"
            return jsonify({"error": error_message}), 400 
        
        if "company_exception in user_address" in str(ex):
            error_message = f"user address {validation_REGEX.USER_ADDRESS_MIN} to {validation_REGEX.USER_ADDRESS_MAX} characters"
            return jsonify({"error": error_message}), 400 

        # Worst case
        error_message = "System under maintenance"
        return jsonify({"error": error_message}), 500 
    
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()

####################################################################################################

@app.delete("/users/<user_pk>")
@x.no_cache
def delete_user(user_pk):
    try:
        user_pk = validation_REGEX.validate_uuid4(user_pk)
        db, cursor = x.db()

        q = "DELETE FROM users WHERE user_pk = %s"
        cursor.execute(q, (user_pk,))
        db.commit()
        return 204

    except Exception as ex:
        ic(ex)
        error_message = "System under maintenance"
        return jsonify({"error": error_message}), 500
    
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()