from flask import Blueprint, request, jsonify
from models.user import User
from utils.auth_utils import hash_password, verify_password
from app import db
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__, url_prefix="/auth")

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"msg": "User already exists"}), 400
    user = User(email=data["email"], password=hash_password(data["password"]))
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "User registered"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(email=data["email"]).first()
    if user and verify_password(data["password"], user.password):
        token = create_access_token(identity=user.id)
        return jsonify({"token": token}), 200
    return jsonify({"msg": "Invalid credentials"}), 401
