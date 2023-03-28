# FBI CAR TYRE THREAD ANALYSIS


![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![image](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![image](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![image](https://img.shields.io/badge/Codecademy-FFF0E5?style=for-the-badge&logo=codecademy&logoColor=303347)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)


<a class="center">
<img src="./src/Images/fbi.png">
</a>

<p align="center"><img src="./src/Images/fbi-login.png" /></p>

<p align="center"><img src="./src/Images/fbi-register.png" /></p>

<p align="center"><img src="./src/Images/fbi-dashboard.png" /></p>

<p>
Forensic tire tread evidence records and analyzes impressions of vehicle tire treads for use in legal proceedings to help prove the identities of persons at a crime scene. Every tire will show different amounts of tread wear, and different amounts of damage in the form of tiny cuts and nicks.
</p>


### Description
#### What are TYRE marks in forensic science?

<p>
The tyre marks are also like footprints, either two-dimensional prints or three-dimensional impressions depending upon the surface on which they are present. Skid marks are the marks left by wheels of motor vehicles, which are no longer rotating. <br> 

This repository contains the code for analyzing the tread pattern of car tyres using image embeddings. The aim of this analysis is to identify the unique features of different types of tyres and determine which ones are better suited for different driving conditions.
</p>


### Data 

<p> 
The dataset used in this analysis consists of images of car tyre treads. The images are collected from different sources and include various brands and types of tyres. Each image is labeled with the corresponding tyre type and brand.
</p> 


### Support Vector Machines (SVM) 

<p> 
Support Vector Machines (SVM) is a supervised machine learning algorithm that can be used for classification and regression analysis. SVM is particularly useful for classification problems in which the data points are not linearly separable. <br> 

SVM works by finding the optimal hyperplane that maximizes the margin between the two classes in the data. The hyperplane is defined as the decision boundary that separates the two classes. The margin is the distance between the hyperplane and the nearest data point from each class. <br> 

In SVM, the data points that lie closest to the hyperplane are known as support vectors. These vectors are used to define the hyperplane and are important in determining the decision boundary. <br> 

SVM has several advantages over other classification algorithms. It can handle high-dimensional data, is effective in cases where the number of features is greater than the number of samples, and has a roubust performance on small datasets. <br> 

However, SVM can be sensitive to the choice of kernel function and the regularization parameter. It can also be computationally intensive, especially for large datasets. <br> 

Overall, SVM is a powerfull machine learning algorithm that can be used for a wide range of classification problems. It is a valuable tool for data scientists and machine learning practitioners to have in ther toolbox. 

</p>


### Problem Statement

<p>
The analysis is carried out in two stages. In the first stage, we use a pre-trained convolutional neural network to generate image embeddings for each tyre tread image. The embeddings are vectors that capture the unique features of the tyre tread. In the second stage, we use the embeddings to train a classification model that can predict the tyre type based on the tread pattern.
</p>

### Requirements 

<p> 
The following Python packages are required to run the code in this repository:

<ul>
<li> tensorflow </li>
<li> keras </li>
<li> numpy </li>
<li> pandas </li>
<li> matplotlib </li> 
</ul>
</p>



### Installation
<p>
  Extract the node_modules.tar archive, by typing the following command below 
</p>

```bash 
  $ tar -xf node_modules.tar 
```
<p>
Clone the repo from the link, then change directory into the 
FBI-Car-Tyre-Thread Analysis folder. <br> 

Then execute the following code below 
</p>

```bash 
  $ npm install .  
  $ sudo npm install nodemon -g 
  $ sudo npm install pm2 -g 
```


### Running the main REACT application
<p>
Inside the working directory, open an command prompt, and type the following commands below 
</p>

```bash 
  $ npm start 
```

<p> 
 This would start the server on <a> localhost:3000 </a>
</p>

<br> 

### Running the AUTH server 
<p>
Inside the project working directory, change directory using the command prompt into the <b> "backend-server"</b> directory, and type the following commands.  
</p>

```bash 
  $ cd 'backend-server'
  $ npm start  
```

<p> Or </p> 

```bash 
  $ cd 'backend-server' 
  $ nodemon app.js 
```

### Running the Machine Learning Server 
<p>

</p>


### Bugs
### Ubuntu 22.04 Bugs

<p>
Check the bug report here: <a href="https://bugs.launchpad.net/ubuntu/+source/chromium-browser/+bug/1970148"> link </a>

As proposed by <b> Olivier Tilloy</b> in the bug report, the command
</p>

```bash
 $ sudo apt install xdg-desktop-portal-gnome

```

<p>
solved my problem.

I am using Ubuntu 22.04 on Xorg with Nvidia card.

</p>


### Results

<p> 
The results of the analysis are presented in the form of a confusion matrix and classification report. The classification report includes precision, recall, and F1-score for each class.
</p> 

### Conclusion

<p> 
The analysis shows that the tread pattern of car tyres contains unique features that can be captured using image embeddings. These embeddings can be used to train a classification model that can accurately predict the tyre type based on the tread pattern. This analysis can be used to inform tyre purchasing decisions and improve the safety and performance of vehicles on the road.
</p>
