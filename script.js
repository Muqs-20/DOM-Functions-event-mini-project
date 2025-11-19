//script 
//counter
let counter=0;
const counterValue=document.getElementById('counterValue'); //HTML me jo <h3 id="counterValue"> hai usko JavaScript me connect kiya (DOM access)


document.getElementById('incBtn').addEventListener('click',function(){ // "Increase" button par click event listener lagaya
    counter++;
    counterValue.textContent=counter;
});
document.getElementById('decBtn').addEventListener('click',function(){ // "Decrease" button par click event listener lagaya
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
//Dono HTML elements ko JS me connect kiya.

document.getElementById("applyColorBtn").addEventListener("click", function() { //Apply button par click event lagaya
    const color = colorInput.value.trim(); //User ne jo color likha tha → usse hum ek variable me store kar rahe hain.
    if(color) colorBox.style.background = color; //Agar input empty nahi hai → box ka background change kar do.
});

document.getElementById("resetColorBtn").addEventListener("click", function() {
    colorBox.style.background = "#ddd";
    colorInput.value = "";
});

//to-do list
document.getElementById("addTaskBtn").onclick = function() {

    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerText = taskText;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}


/* Variables= counter
Functions = inside addEventListener

Events = click events

DOM Manipulation = .innerText, .style.background

Simple validation = check empty input

The trim() method in JavaScript is a built-in string function used to remove whitespace characters from both the beginning and end of a string. It returns a new string with the leading and trailing whitespace removed, without modifying the original string

*/