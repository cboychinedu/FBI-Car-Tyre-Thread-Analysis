#!/usr/bin/env python3 

# Importing the necessary modules 
import os 
import cv2
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
        
        # Cv2 
        image = cv2.imread(homePath); 
        print(image.shape) 
        sleep(5); 


        return { 
            "status": "success-post",
        }
             


    elif request.method == "GET": 

        print(request.method); 

        return {
            "status": "success-get", 
            "message": "the analysis is 30% match.."
        }