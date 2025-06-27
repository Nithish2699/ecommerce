from flask import Blueprint, jsonify, request
from models.product import Product
from app import db
from flask_jwt_extended import jwt_required

product_bp = Blueprint('products', __name__, url_prefix="/products")

@product_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([{"id": p.id, "name": p.name, "price": p.price, "stock": p.stock} for p in products])

@product_bp.route("/", methods=["POST"])
@jwt_required()
def add_product():
    data = request.json
    product = Product(name=data["name"], price=data["price"], stock=data["stock"])
    db.session.add(product)
    db.session.commit()
    return jsonify({"msg": "Product added"}), 201
