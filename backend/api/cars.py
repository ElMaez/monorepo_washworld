from utils import config
from utils import regex
# Importeres Blueprint for at splitte routes op i opdelte filer
from flask import Blueprint, jsonify, request, session, redirect
from werkzeug.security import generate_password_hash, check_password_hash
from icecream import ic
from utils import no_cache
from utils import regex

import uuid
import time

ic.configureOutput(prefix="______________ | ", includeContext=True)

# Her bliver vores blueprint lavet, hvor vi bruger
# cars_bp som en slags label på vores tegning
cars_bp = Blueprint("cars", __name__)




########################################################################################################

#                                               Cars CRUD                                             #

########################################################################################################


@cars_bp.post("/api-create-car")
@no_cache.no_cache
def api_create_car():
    try:
        #Validate data
        #uuid
        car_pk = uuid.uuid4().hex
        car_licenseplate = regex.validate_car_licenseplate()
        
        db, cursor = config.db()
        q= """INSERT INTO `cars
        (car_pk, car_licenseplate, car_most_recent_wash, car_image, car_created_at, car_updated_at, car_deleted_at)
        VALUES ('%s','%s','%s','%s','%s','%s','%s')
        """
        cursor.execute(q, (car_pk, car_licenseplate,))



        db.commit()
        return jsonify({"msg" : "IT'S AAAALIIIIVE!?"}), 200

    except Exception as ex:
        # Error
        ic(ex)
        
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()