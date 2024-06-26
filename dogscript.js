var dogImgElement = document.getElementById("dogImgElement")
const beauImgPaths = ["beau1.jpg","beau2.jpg","beau3.jpg"]
var imageIncrementer = 1
function dogRated(){
    dogImgElement.src = beauImgPaths[imageIncrementer];
    imageIncrementer = imageIncrementer +1;
    if (imageIncrementer>2){
        imageIncrementer=0
    }
}