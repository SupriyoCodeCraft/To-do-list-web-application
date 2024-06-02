const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector("button");

console.dir(inputBox);

btn.addEventListener("click", ()=>{
    if(inputBox.value == ''){
        alert("You need to write something")
    }

    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }   
    inputBox.value = '';
})

listContainer.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);