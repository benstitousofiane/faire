let toDoInput = document.getElementById("toDoInput");
let toDoAdd = document.getElementById("toDoAdd");
let toDoContainer = document.getElementById("toDoContainer")


toDoAdd.addEventListener('click', function(){
    
    let newTodo = document.createElement('p');
    newTodo.innerText = toDoInput.value;
    toDoContainer.appendChild(newTodo);
    toDoInput.value = "";
    newTodo.addEventListener('click', function(){
        newTodo.style.textDecoration = "line-through";
    })
    newTodo.addEventListener('dblclick', function(){
        toDoContainer.removeChild(newTodo);
    })
})

