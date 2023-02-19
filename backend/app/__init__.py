from flask import Flask
from config import Config
from app import routes


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    with app.app_context():
        routes.init_app()

    return app
