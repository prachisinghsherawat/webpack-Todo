
import "./index.css"
import image from "./todo.png"

let imgDiv = document.querySelector(".imgdiv");

let imgIs = document.createElement("img");
imgIs.src = image;

let arr = [];
let form = document.getElementById("form");

displayTask(arr);

form.addEventListener("submit",onSearch)

function onSearch(event){
    event.preventDefault();

    let task = document.getElementById("task").value;
   // console.log(task);

    let obj = {task,}
    console.log(obj);

    arr.push(obj);
    localStorage.setItem("taskData",JSON.stringify(arr));
    displayTask(arr)
}
//let todoDiv = document.querySelector(".tododiv");
function displayTask(arr){

    document.querySelector(".tododiv").innerHTML=null;
    arr.map( (el,index)=>{
       
        console.log(el)
       let p = document.createElement("p");
       p.innerText = el.task;
        
    document.querySelector(".tododiv").append(p);
    })

}

imgDiv.append(imgIs);


