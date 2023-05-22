let itemscontainer = document.getElementById("itemcontainer");

let count = 1;
function getText(){
    let userInput = document.getElementById("myTextBox");
    if(userInput.value===""){
        alert("Enter valid message");
        return;
    }
    let uservalue =userInput.value;
    count =count+1;
    let newTodo = {
        text: uservalue,
        idNo: count,
    }
    createlistElements(newTodo);
    userInput.value="";

}

function deletetodoList(todoId){
    let todoelement=document.getElementById(todoId);
    itemscontainer.removeChild(todoelement);
}

function createlistElements(n){
    let Mycheckbox= "checkbox"+n.idNo;
    let LabelId= "LabelId"+ n.idNo;
    let todoId= "todo"+ n.idNo;

    let todoelement= document.createElement("li");
    todoelement.classList.add("todo-item-container","d-flex");
    todoelement.id= todoId;
    itemscontainer.appendChild(todoelement);

    let inputelement = document.createElement("input");
    inputelement.classList.add("tasks");
    inputelement.type="checkbox";
    inputelement.id=Mycheckbox;
    inputelement.onclick=function(){
        statusupdate(Mycheckbox,LabelId);
    }
    todoelement.appendChild(inputelement);

    let labelcontainer = document.createElement("div");
    labelcontainer.classList.add("label-container","d-flex","flex-row");
    todoelement.appendChild(labelcontainer);

    let labelelement = document.createElement("label");
    labelelement.classList.add("checkbox-label");
    labelelement.setAttribute('for',Mycheckbox);
    labelelement.textContent=n.text;
    labelelement.id= LabelId;
    labelcontainer.appendChild(labelelement);

    let delcontainer =document.createElement("div");
    delcontainer.classList.add("delete-icon-container");
    labelcontainer.appendChild(delcontainer);

    let deleteicon = document.createElement("i");
    deleteicon.classList.add("fas","fa","fa-trash-alt","delete-icon");
    deleteicon.onclick= function(){
        deletetodoList(todoId);
    }
    delcontainer.appendChild(deleteicon);
}


function statusupdate(Mycheckbox,LabelId){
    let cb= document.getElementById(Mycheckbox);
    let lb= document.getElementById(LabelId);
    if(cb.checked=== true){
        lb.classList.add("checked");
    }
    else{
        lb.classList.remove("checked");
    }
}


