# ============================================================
#  app.py  —  the ENTRY POINT of the backend.
# ============================================================

from flask import Flask, jsonify
from flask_cors import CORS
from flask_session import Session
import os
# JWT

# Her fortælles at man gerne vil benytte sig routes fra users.py
# Den blueprint der er blevet lavet i den anden fil under api'er
from api.users import users_bp
from api.locations import locations_bp
from flask_jwt_extended import JWTManager

app = Flask(__name__)

app.config["SESSION_TYPE"] = "filesystem"
app.config["JWT_SECRET_KEY"] = "..."

Session(app)
jwt = JWTManager(app)

CORS(app, supports_credentials=True, origins=["http://localhost:3000"])

# Her bliver blueprint registeret. Det er syntaksen for at den så kører på serveren.
# Det samme biver gjort med de andre moduler / filer der bliver oprettet.
app.register_blueprint(users_bp)

app.register_blueprint(locations_bp)


@app.get("/debug-routes")
def debug_routes():
    return jsonify([
        f"{rule.methods - {'HEAD', 'OPTIONS'}} {rule}"
        for rule in app.url_map.iter_rules()
    ])