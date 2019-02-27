from flask import Flask, render_template
import os
import logging

app = Flask(__name__)


@app.route("/notes", methods=["GET", "POST"])
def index():
    return render_template("index.html")


if __name__ == "__main__":
    port = int(os.getenv("PORT", 10000))
    logging.debug("Starting app on port %d" % port)

    app.config["TEMPLATES_AUTO_RELOAD"] = True
    app.config["JSON_SORT_KEYS"] = False
    app.config["JSON_AS_ASCII"] = False
    app.run(debug=True, port=port, host="0.0.0.0", threaded=True)