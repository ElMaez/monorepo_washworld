# Importeres Blueprint for at splitte routes op i opdelte filer
from flask import Blueprint, jsonify
from icecream import ic
from utils import no_cache
from utils import validation_REGEX


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
        user_fullname ="Kat"

        #Checker at vores data bliver postet
        return jsonify({"message": f"Hello: {user_fullname} :)"}), 200

    except Exception as ex:
        # Error
        ic(ex)

        
        if "company_exception in user_fullname" in str(ex):
            error_message = (
                f"user fullname {validation_REGEX.USER_FULLNAME_MIN} to "
                f"{validation_REGEX.USER_FULLNAME_MAX} characters"
            )
            return jsonify({"error": error_message}), 400

        # Server error ( det din skyld at det ikke virker )
        return jsonify({"error": "System under maintenance"}), 500
