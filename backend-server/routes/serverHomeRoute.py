#!/usr/bin/env python3

# Importing the necessary modules
import os
import cv2
import pickle
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

    # # Getting the image path from the json data
    # imagePath = os.listdir("./static/uploads")[0]

    # # image = cv2.imread(imagePath)
    # # print(image)


    # print(request)
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

        print(result);

        return {
            "status": "success",
            "AnalysisResult": "97.8%",
            "ThreadType": result,
        }





    elif request.method == "GET":

        print(request.method);

        return {
            "status": "success-get",
            "message": "the analysis is 30% match.."
        }
