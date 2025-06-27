from flask import Blueprint, request, jsonify
from models.order import Order
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

order_bp = Blueprint('orders', __name__, url_prefix="/orders")

@order_bp.route("/", methods=["POST"])
@jwt_required()
def create_order():
    data = request.json
    order = Order(
        user_id=get_jwt_identity(),
        product_id=data["product_id"],
        quantity=data["quantity"]
    )
    db.session.add(order)
    db.session.commit()
    return jsonify({"msg": "Order placed"}), 201

@order_bp.route("/", methods=["GET"])
@jwt_required()
def get_user_orders():
    user_id = get_jwt_identity()
    orders = Order.query.filter_by(user_id=user_id).all()
    return jsonify([{"id": o.id, "product_id": o.product_id, "quantity": o.quantity} for o in orders])
