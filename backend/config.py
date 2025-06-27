import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "secret")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI", "mysql+pymysql://root:password@localhost/ecommerce")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
