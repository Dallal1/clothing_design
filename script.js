function myFunction(smallImg) {
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
}

/*Start Icons*/

function t_schert(){
    document.getElementById("m1").style.display = "block";
    document.getElementById("m2").style.display = "none";
    document.getElementById("m3").style.display = "none";
}
function t_text(){
    document.getElementById("m1").style.display = "none";
    document.getElementById("m2").style.display = "block";
    document.getElementById("m3").style.display = "none";
}
function imag_upload(){
    document.getElementById("m1").style.display = "none";
    document.getElementById("m2").style.display = "none";
    document.getElementById("m3").style.display = "block";
}
/*End Icons*/