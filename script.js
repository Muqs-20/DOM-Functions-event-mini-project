//script 
//counter
let counter=0;
const counterValue=document.getElementById('counterValue');

document.getElementById('incBtn').addEventListener('click',function(){
    counter++;
    counterValue.textContent=counter;
});
document.getElementById('decBtn').addEventListener('click',function(){
    counter--;
    counterValue.textContent=counter;
});
document.getElementById('resetBtn').addEventListener('click',function(){
    counter=0;
    counterValue.textContent=counter;
});
// Color Changer
const colorBox = document.getElementById("colorBox");
const colorInput = document.getElementById("colorInput");

document.getElementById("applyColorBtn").addEventListener("click", function() {
    const color = colorInput.value.trim();
    if(color) colorBox.style.background = color;
});

document.getElementById("resetColorBtn").addEventListener("click", function() {
    colorBox.style.background = "#ddd";
    colorInput.value = "";
});