#!/usr/bin/env python3

# Importing the necessary modules
import os
import json
import cv2
import pickle
import requests
from time import sleep
from flask import request
from flask import Blueprint
from flask import render_template

# Creating the blueprint object
home = Blueprint('home', __name__, template_folder="templates",
                    static_folder="static")

# Creating the home page
@home.route('/', methods=['GET', 'POST'])
def analyze():
    # print(homePath)
    if request.method == "POST":
        data = request.get_json();

        # Getting the image path
        imagePath = data["image_path"]
        homePath = os.sep.join(["static", 'uploads'])
        homePath = os.sep.join([homePath, imagePath])

        #
        image = cv2.imread(homePath)
        image = cv2.resize(image, (250,  250))
        image = image.ravel();
        image = image.reshape(1, -1);

        # loading the machine learing model
        modelWeights = open("routes/finalized_model.sav", 'rb')
        model = pickle.load(modelWeights)

        #
        result = model.predict(image)
        result = result[0];

        #
        url = 'http://localhost:3001/save-history'
        myobj = {
            "email": data['email'],
            "imagePath": imagePath,
            "imageName": imagePath,
            "AnalysisResult": result
        }

        # Saving the analysis on the mongodb server
        response = requests.post(url, json=myobj)
        json_data = json.loads(response.text);
        print(json_data)

        # If the response is successful
        if (json_data['status'] == 'success'):
            # Return the result
            return {
                "status": "success",
                "AnalysisResult": "99.87%",
                "ThreadType": result,
            }
