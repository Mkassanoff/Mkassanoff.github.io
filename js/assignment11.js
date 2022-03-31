function button1Clicked(){
  document.getElementById('button-1').classList.toggle('was-clicked');
}
function button2Mouseover(){
  document.getElementById('button-2').classList.toggle('was-mouseover');
}
function windowLoaded(){
console.log('loaded');
document.getElementById('button-1').addEventListener('click', button1Clicked);
document.getElementById('button-2').addEventListener('mouseover', button2Mouseover);
}
window.onload = windowLoaded;
