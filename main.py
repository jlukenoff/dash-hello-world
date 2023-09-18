# Import packages
import os
from dash import Dash, html, dash_table
import pandas as pd
from flask import send_from_directory, Blueprint, jsonify

from dotenv import load_dotenv

load_dotenv("env")

# Incorporate data
df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv')

# Initialize the app
app = Dash(__name__)

CLIENT_DIST_DIR = os.path.join(os.path.dirname(__file__), "client/dist")

custom_bp = Blueprint("custom", app.server.name, url_prefix="/custom")

@custom_bp.route('/static', defaults={'path': ''})
@custom_bp.route('/static/<path:path>')
def serve(path):
    path_to_send = os.path.join(CLIENT_DIST_DIR, path)
    if path != "" and os.path.exists(path_to_send):
        return send_from_directory(CLIENT_DIST_DIR, path)
    else:
        return send_from_directory(CLIENT_DIST_DIR, 'index.html')

@custom_bp.route("/api/example", methods=["GET"])
def example_custom_route(req):
    return jsonify(req)

# App layout
app.layout = html.Div([
    html.Div(children='My First App with Data'),
    dash_table.DataTable(data=df.to_dict('records'), page_size=10),
    html.Iframe(
        src="/custom/static/index.html",
        style={"height": "100%", "width": "100%", "borderStyle": "none"},
        sandbox="allow-scripts",
    )
])

app.server.register_blueprint(custom_bp)

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
