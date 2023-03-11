# importing the necessary modules 
import os 
import logging 
from datetime import datetime 
from flask import Flask, url_for 
from flask_cors import CORS 

# Importing the views 
from routes.serverHomeRoute import home

# Setting the base directory 
basedir = os.getcwd(); 

# Creating the flask application instance 
app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True; 
app.config['SECRET_KEY'] = "secret_key"; 

# Setting the cors 
CORS(app); 

# Register the views 
app.register_blueprint(home, url_prefix="/")

# Creating instanc of the Routes class 
# homeRoutes = HomeRoutes()

# Running the flask applications 
if __name__ == "__main__": 
    app.run(port=5001, 
            host="localhost", 
            debug=True)