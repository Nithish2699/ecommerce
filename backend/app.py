from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample product data
products = [
    {"id": 1, "name": "Red Shirt", "description": "Comfortable cotton shirt", "price": 499, "image": "https://via.placeholder.com/300x200"},
    {"id": 2, "name": "Blue Jeans", "description": "Stylish denim jeans", "price": 899, "image": "https://via.placeholder.com/300x200"},
    {"id": 3, "name": "Sneakers", "description": "Sporty and durable", "price": 1299, "image": "https://via.placeholder.com/300x200"}
]

# Get all products
@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

# Get product by ID
@app.route("/api/products/<int:product_id>", methods=["GET"])
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

# Placeholder for checkout (future enhancement)
@app.route("/api/checkout", methods=["POST"])
def checkout():
    data = request.get_json()
    print("Order received:", data)
    return jsonify({"message": "Order placed successfully!"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
