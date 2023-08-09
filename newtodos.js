let itemscontainer= document.getElementById("itemscontainer");
const myArray= [];
var count=myArray.length;

var storedArray = JSON.parse(localStorage.getItem("myArray"));
    for (let element of storedArray) {
        myArray.push(element);
    createlistElements(element);
}

function getText(){
    let input= document.getElementById("myTextBox");
    if(input.value===""){
        alert("Enter valid text");
        return;
    }
    let todoItem={
        name: input.value,
        count: count,
        check: false
    };
    count++;
    createlistElements(todoItem);
    myArray.push(todoItem);
    input.value="";

}

function createlistElements(n){
    let todoId= "todoId"+n.count;
    let Mycheckbox= "checkBox"+n.count;
    let LabelId="LabelId"+n.count;
    
    let todoelement= document.createElement("li");
    todoelement.classList.add("todo-item-container","d-flex");
    todoelement.id= todoId;
    itemscontainer.appendChild(todoelement);

    let inputelement = document.createElement("input");
    inputelement.classList.add("tasks");
    inputelement.type="checkbox";
    inputelement.id=Mycheckbox;
    inputelement.checked=n.check;
    inputelement.onclick=function(){
        statusupdate(Mycheckbox,LabelId,n);
    }
    todoelement.appendChild(inputelement);

    let labelcontainer = document.createElement("div");
    labelcontainer.classList.add("label-container","d-flex","flex-row");
    todoelement.appendChild(labelcontainer);

    let labelelement = document.createElement("label");
    labelelement.classList.add("checkbox-label");
    labelelement.setAttribute('for',Mycheckbox);
    labelelement.textContent=n.name;
    labelelement.id=LabelId;
    if(inputelement.checked===true){
        labelelement.classList.add("checked");
    }
    else{
        labelelement.classList.remove("checked");
    }
    labelcontainer.appendChild(labelelement);

    let delcontainer =document.createElement("div");
    delcontainer.classList.add("delete-icon-container");
    labelcontainer.appendChild(delcontainer);

    let deleteicon = document.createElement("i");
    deleteicon.classList.add("fas","fa","fa-trash-alt","delete-icon");
    deleteicon.onclick=function(){
        deletetodoList(todoId,n.count,n.name);
    }
    delcontainer.appendChild(deleteicon);
}

function statusupdate(Mycheckbox,LabelId,n){
    let cb= document.getElementById(Mycheckbox);
    let lb= document.getElementById(LabelId);
    if(cb.checked=== true){
        lb.classList.add("checked");
        n.check=true;
    }
    else{
        lb.classList.remove("checked");
        n.check=false;
    }
}

function deletetodoList(todoId,c,n){
    let delTodoList= document.getElementById(todoId);
    itemscontainer.removeChild(delTodoList);
    //Retrieve the array from localStorage
    var storedArray = JSON.parse(localStorage.getItem("myArray"));

// Find the index of the element you want to delete
    for(let i=0;i<storedArray.length;i++){
        if(storedArray[i].name===n){
            storedArray.splice(i, 1);
        }
    }
    
    localStorage.setItem("myArray", JSON.stringify(storedArray));
    

}

function SaveTodoList(){


    let DatatoLocalStorage=JSON.stringify(myArray);
    localStorage.setItem("myArray", DatatoLocalStorage);


}

function GetData(){
    var storedArray = JSON.parse(localStorage.getItem("myArray"));
    for (let element of storedArray) {
    createlistElements(element);
    }
}
count =myArray.length;


