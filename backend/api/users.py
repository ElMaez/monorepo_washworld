from utils import config
from utils import regex
# Importeres Blueprint for at splitte routes op i opdelte filer
from flask import Blueprint, jsonify, request, session, redirect, render_template
from werkzeug.security import generate_password_hash, check_password_hash
from icecream import ic
from utils import no_cache
from utils import regex

import uuid
import time

# import for email
import os
from dotenv import load_dotenv
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


ic.configureOutput(prefix="______________ | ", includeContext=True)

# Her bliver vores blueprint lavet, hvor vi bruger
# users_bp som en slags label på vores tegning. navnet er vores første arg. 
# __name__ bruges til at finde vores templates/statics.

# Med Blueprint bliver alle routes automatisk url_prefix
users_bp = Blueprint("users", __name__)

load_dotenv()
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
        
        #validate the user for email
        verification_key = uuid.uuid4().hex
        
        # epoch / timestamp
        user_created_at = int(time.time())+7200
        
        # define db & cursor
        db, cursor = config.db()
        #query 
        # add verification key to the query
        q = """INSERT INTO users
       (user_pk, user_fullname, user_verification_key, user_phonenumber, user_email, user_password,
        user_address, user_created_at, user_updated_at, user_deleted_at)
       VALUES (%s, %s, %s, %s, %s, %s, %s, %s, 0, 0)"""
        cursor.execute(q, (user_pk,user_fullname, verification_key, user_phonenumber,user_email,user_hashed_password,user_adress,user_created_at, ))
        db.commit()
        
        html = render_template("email_verification.html", verification_key=verification_key)
        
        send_email(user_email, html)
        return jsonify({"msg" : "Please check your email."}), 200
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

########################_____SEND EMAIL FOR SIGNUP_____########################
def send_email(to_email, html): 
    # create gmail
    sender_email = "katjamaehleke98@gmail.com"
    password = "tmvh xvx qxqz rubhi"
    
    #The user whos receives the password 
    receiver_email = to_email
    
    #Creating the email msg
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = to_email
    message['Subject'] = "Verify your account here"
    
    message.attach(MIMEText(html, "html"))
    
    # Connecting to gmails smtp server and send the email
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls() #this secures the connection
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        ic("Email sent :) ")


@users_bp.get("/api-verify/<key>")
@no_cache.no_cache
def api_verify_account(key):
    try:
        # TODO: Validate the key
        key = uuid.uuid4().hex
        # TODO: Connect to the DB
        cursor, db = config.db()
        # TODO: Update the verified_at column
        verified_at = int(time.time())
        # TODO: Update the verification_key column
        q = """UPDATE users SET user_verified_at = %s, user_verification_key= %s WHERE user_verification_key = %s"""
        cursor.execute(q, (verified_at, key))
        db.commit()
        return jsonify({"message" : "Yay, its verified. Go wash ur car"}), 201
    except Exception as ex: 
        ic(ex)
        return jsonify({"message" : "Verification failed :( )"}), 500
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()  



########################_____LOGIN_____########################
@users_bp.post("/api-login")
@no_cache.no_cache
def api_user_login():
    try:
        #validate data
        user_email = regex.validate_user_email()
        user_password = regex.validate_user_password()
        db, cursor = config.db()
        
        #query
        q ="""SELECT * FROM users WHERE user_email = %s"""
        
        cursor.execute(q, (user_email,))
        
        # fetch user from the db
        user = cursor.fetchone()
        #wrong user
        if not user: 
            return jsonify({"msg" : "invalid credentials"}), 400
        #wrong password
        if not check_password_hash(user["user_password"], user_password):
            return jsonify({"msg" : "invalid credentials"}), 400


        user.pop("user_password")
        session["user_pk"] = user["user_pk"]
        return jsonify({"msg" : "You're logged in :) "}), 200
        
        
    except Exception as ex: 
        ic(ex)
        return jsonify({"msg" : "oh noooooo :( )"}), 500
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()
        
### LOGOUT ###
@users_bp.route('/logout')
def logout():
    try:
        session.clear()
        return jsonify({"msg" : "du er nu loggede ud"}), 204
    except Exception as ex: 
        ic(ex)
        return "haha u can't figure out to logout. sad."        

### USER FORGETS PASSWORD ###
@users_bp.post("/forget-password")
def reset_password():
    try:
        email = config.validate_user_email()
        #validate data
        cursor, db = config.db()
        q =""
        cursor.execute(q,(email,))
        
        row = cursor.fetchone()
    except Exception as ex:
        ic(ex)
    finally:
         if "db" in locals(): db.close()
         if "cursor" in locals(): cursor.close()