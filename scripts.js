var modal = document.getElementById("viewPictureModal");
var artCropImgs = document.querySelectorAll(".artcrop"); // we create a nodelist containing a lsit of every .artcrop img 
var modalImg = document.getElementById("full-image");


artCropImgs.forEach(function(thumbnail){thumbnail.onclick = openModal;});
// here we define an anonymous functio that sets the onclick property of each .artcrop img  



function openModal(){
    // this function is asigned as the one to be called by a 
    //this sets the display to block aka not invisible,
    modal.style.display = "block";
    modalImg.src = this.src;
}
function closeModal(){
    modal.style.display = "none";
}