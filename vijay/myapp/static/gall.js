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