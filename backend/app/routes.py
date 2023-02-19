import time
from flask import current_app, render_template


def init_app():
    @current_app.route("/")
    def index():
        return render_template("index.html")

    @current_app.route("/time")
    def get_current_time():
        return {"time": time.time()}
