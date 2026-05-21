from flask import request
import re

##########################################################################################################################################################################

# 0 to 9 letters a to f
REGEX_UUID4 = "^[0-9a-f]{32}$"
def validate_uuid4(uuid4):
    uuid = uuid4.strip()
    if not re.match(REGEX_UUID4, uuid):
        raise Exception("company_exception uuid4 invalid")
    return uuid

##########################################################################################################################################################################

USER_FULLNAME_MIN = 2
USER_FULLNAME_MAX = 255
REGEX_USER_FULLNAME = f"^.{{{USER_FULLNAME_MIN},{USER_FULLNAME_MAX}}}$"

def validate_user_fullname():
    user_fullname = request.form.get("user_fullname", "").strip()
    if not re.match(REGEX_USER_FULLNAME,user_fullname):
        raise Exception("company_exception in user_fullname")
    return user_fullname

##########################################################################################################################################################################

USER_ADDRESS_MIN = 2
USER_ADDRESS_MAX = 255
REGEX_USER_ADDRESS = f"^.{{{USER_ADDRESS_MIN},{USER_ADDRESS_MAX}}}$"

def validate_user_address():
    user_address = request.form.get("user_address", "").strip()
    if not re.match(REGEX_USER_ADDRESS,user_address):
        raise Exception("company_exception in user_address")
    return user_address

################################################################################################################################################################################

USER_PHONENUMBER_MIN = 4
USER_PHONENUMBER_MAX = 16
REGEX_USER_PHONENUMBER = f"^.{{{USER_PHONENUMBER_MIN},{USER_PHONENUMBER_MAX}}}$" 

def validate_user_phonenumber():
    user_phonenumber = request.form.get("user_phonenumber", "").strip()
    if not re.match(REGEX_USER_PHONENUMBER,user_phonenumber):
        raise Exception("company_exception in user_phonenumber")
    return user_phonenumber

################################################################################################################################################################################

REGEX_USER_EMAIL = "^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
def validate_user_email():
    user_email = request.form.get("user_email", "").strip()
    if not re.match(REGEX_USER_EMAIL, user_email):
        raise Exception("company_exception user_email")
    return user_email

#################################################################################################################################################################################

USER_PASSWORD_MIN = 8
USER_PASSWORD_MAX = 50
REGEX_USER_PASSWORD = f"^.{{{USER_PASSWORD_MIN},{USER_PASSWORD_MAX}}}$"

def validate_user_password():
    user_password = request.form.get("user_password", "").strip()
    if not re.match(REGEX_USER_PASSWORD, user_password):
        raise Exception("company_exception in user_password")
    return user_password

##################################################################################################################################################################################