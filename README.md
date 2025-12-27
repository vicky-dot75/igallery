## Ex.07 Design of Interactive Image Gallery
## Date:26-12-2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
<html>
<head>
    <meta charset="UTF-8">
    <title>gallary of cars</title>
    <link rel="stylesheet" href="gall.css">
</head>
<body>
    <div class="box">
        <h1 class="heading">men love cars</h1>
        <p class="small-text"> bently . masarati . benz . lambo . ferrari</p>

        <div class="image-area">
            <img src="BMW M6 GT3 Super Car desktop Wallpaper.jpg" id="photo" alt="universe picture">

            <p class="title" id="title-text">supar cars</p>
            <p class="info" id="info-text">
               they said luxuary i heared cars.
            </p>
        </div>

        <div class="buttons">
            <button onclick="prev()">Previous</button>
            <button onclick="next()">Next</button>
        </div>

        <p class="count" id="count-text">1 / 6</p>
    </div>

    <footer class="footer">
        &copy; vignesh s (25014344)
    </footer>

    <script src="gall.js"></script>
</body>
</html>
```
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background: url("BMW M6 GT3 Super Car desktop Wallpaper.jpg") no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: white;
}
.box {
    width: 90%;
    max-width: 600px;
    margin-left:460px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 15px;
    margin-top:68px;
}
.heading {
    font-size: 32px;
    margin-bottom: 4px;
    margin-top:5px;
}
.small-text {
    font-size: 12px;
    margin-bottom: 15px;
    color: #cdd4ff;
}
.image-area img {
    margin-top:20px;
    width: 100%;
    max-width:400px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #ffd4ec;
}
.title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
}
.info {
    margin-top: 4px;
    font-size: 14px;
}
.buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.buttons button {
    width: 120px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #ffd4ec;
    color: #2b1022;
}
.count {
    margin-top: 10px;
    font-size: 13px;
    color: #cdd4ff;
}
.footer {
    margin-left:75px;
    font-size: 13px;
    padding: 8px;
    color: #09e5f1;
    background-color: #2b1022;
    background-color: rgba(0, 0, 0, 0.9);
}
```
```
var pics = [
    {
        image: "2025 Bentley Continental GT_ A Blend of Luxury and Performance _ Bentley Continental GT Review.jpg",
        title: "the bentky",
        info: "they said luxuary i heared bently."
    },
    {
        image: "download (13).jpg",
        title: "the masarati",
        info: "yes uniqueness = masarati."
    },
    {
        image: "download (14).jpg",
        title: "the benzz",
        info: "Mercedes-Benz is a German luxury automobile brand known for innovation, performance, and timeless design.."
    },
    {
        image: "minchia__.jpg",
        title: "the lambo",
        info: "the speed is alwas shows the lambo."
    },
    {
        image: "Yellow Ferrari F8 On Slate Brick Road  3D Sublimation 20oz Skinny Straight Tumblr Wrap  300 DPI PNG Commercial Use  Supercar Enthusiast Gift.jpg",
        title: "the ferrari",
        info: "their uniquness in their vibrant colour(redand yellow)."
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();
```
```
## OUTPUT:
<img width="1920" height="1080" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/103d95fa-86ee-4bf1-aff4-04cd78606003" />

<img width="1920" height="1080" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/44650f7c-2af8-472f-812b-dbea0c906c63" />

<img width="1920" height="1080" alt="Screenshot (34)" src="https://github.com/user-attachments/assets/29b145ab-78c8-4e06-bcc8-f2506ecf40d6" />

<img width="1920" height="1080" alt="Screenshot (35)" src="https://github.com/user-attachments/assets/de6c9ea0-82ee-4545-82e2-76cce2012159" />




## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
