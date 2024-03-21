const BtnAdd = document.querySelector("#btnAdd");
let inputTxt = document.querySelector("#inputText");
const Mode = document.querySelector("#mode");
const container = document.querySelector(".container");
const changeIcon = document.querySelector(".fa-moon");

const addNewItems = () => {
    const addDiv = document.createElement("div");
    addDiv.id = "container-items";
    const addItem = document.createElement("list");
    addItem.id = "list-items";
    addItem.innerText=inputTxt.value;
    let editBtn = document.createElement("button");
    editBtn.id = "edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    const editIcon  = document.createElement("i");
    editIcon.className += "fa-solid fa-pen-to-square fa-2x";
    const deleteIcon  = document.createElement("i");
    deleteIcon.className +="fa-solid fa-trash fa-2x";
    container.appendChild(addDiv);
    addDiv.appendChild(addItem);
    addDiv.appendChild(editBtn);
    editBtn.appendChild(editIcon);
    addDiv.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener("click",DeleteTask = () => {
    addDiv.remove();
    addItem.remove();
    });

    editBtn.addEventListener("click",EdiTask = () => {
    addItem.setAttribute("contenteditable", "true")
    addItem.focus();
    const selection = window.getSelection(); 
    selection.selectAllChildren(addItem);
    selection.collapseToEnd();
     });
 
}

BtnAdd.addEventListener("click",AddNewTask  = () => {
    addNewItems();
    inputTxt.value="";
});

Mode.addEventListener("click", changeMode = () => {

    const selectEditIcon = document.querySelectorAll(".fa-pen-to-square")
    const selectDeleteIcon = document.querySelectorAll(".fa-trash")
    const selectAddIcon = document.querySelector(".fa-plus");
    if (changeIcon.classList.contains("fa-moon")){
        changeIcon.setAttribute("class", "fa-solid fa-sun fa-3x");
        changeIcon.setAttribute("style", "color:white");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        inputTxt.style.backgroundColor = "black";
        inputTxt.style.borderColor = "white";
        Mode.style.backgroundColor = "black";
        selectEditIcon.forEach(icon => {
            icon.style.color = "white"
        });
        selectDeleteIcon.forEach(icon => {
            icon.style.color = "white"
        });
        BtnAdd.style.backgroundColor = "white"
        selectAddIcon.setAttribute("style","color:black");
    } else {
        changeIcon.setAttribute("class", "fa-sharp fa-solid fa-moon fa-3x")
        changeIcon.setAttribute("style", "color:black");
        document.body.style.backgroundColor = "#efebeb";
        document.body.style.color = "black";
        inputTxt.style.backgroundColor = "#efebeb";
        inputTxt.style.borderColor = "red";
        Mode.style.backgroundColor = "#efebeb";
        selectEditIcon.forEach(icon => {
            icon.style.color = "black"
        });
        selectDeleteIcon.forEach(icon => {
            icon.style.color = "black"
        });
        BtnAdd.style.backgroundColor = "black"
        selectAddIcon.setAttribute("style","color:white");
}
}); 