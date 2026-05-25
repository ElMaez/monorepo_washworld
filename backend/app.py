# ============================================================
#  app.py  —  the ENTRY POINT of the backend.
#  `flask run` (see Dockerfile) looks for a file named exactly
#  "app.py" and runs the `app` object defined here.
# ============================================================

from flask import Flask, jsonify
from flask_cors import CORS
from flask_session import Session

# Her fortælles at man gerne vil benytte sig routes fra users.py
# Den blueprint der er blevet lavet i den anden fil under api'er
from api.users import users_bp
from api.locations import locations_bp


app = Flask(__name__)


app.config["SESSION_TYPE"] = "filesystem"
Session(app)

CORS(app)

# Her bliver blueprint registeret. Det er syntaksen for at den så kører på serveren.
# Det samme biver gjort med de andre moduler / filer der bliver oprettet.
app.register_blueprint(users_bp)

app.register_blueprint(locations_bp)
