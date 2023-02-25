function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}

/*Start Icons*/

function t_schert(){
  document.getElementById("m1").style.display = "block";
  document.getElementById("m2").style.display = "none";
  document.getElementById("m3").style.display = "none";
  document.getElementById("m4").style.display = "none";
}
function t_text(){
  document.getElementById("m1").style.display = "none";
  document.getElementById("m2").style.display = "block";
  document.getElementById("m3").style.display = "none";
  document.getElementById("m4").style.display = "none";
}
function imag_upload(){
  document.getElementById("m1").style.display = "none";
  document.getElementById("m2").style.display = "none";
  document.getElementById("m3").style.display = "block";
  document.getElementById("m4").style.display = "none";
}
function t_doawnload(){
  document.getElementById("m1").style.display = "none";
  document.getElementById("m2").style.display = "none";
  document.getElementById("m3").style.display = "none";
  document.getElementById("m4").style.display = "block";
}
/*End Icons*/
/*Start Downlod*/
const fileInput = document.querySelector('input'),
      downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click', e => {
  e.preventDefault();
  downloadBtn.innerText = 'Downloading dile...';
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url).then(res => res.blob()).then(file => {
    let tempUrl = URL.createObjectURL(file);
    const aTag = document.createElement('a');
    aTag.href = tempUrl;
    aTag.download = url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(aTag);
    aTag.click();
    downloadBtn.innerText = 'Download file';
    URL.revokeObjectURL(tempUrl);
    aTag.remove;
  }).catch(() => {
    alert('Failed to download file!');
    downloadBtn.innerText = 'Download filed';
  });
}
/*End Downlod*/