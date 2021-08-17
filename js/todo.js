const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // make array to string and save into local storage
}

function deleteToDo(event) {
    const li = event.target.parentElement; // event = click, target = button, button's parentElement = li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // make new array and set the array to 'toDos', the array contains parsedtoDos without clicked element
    // toDo.id is int, li.id is string
    saveToDos();
}

function paintToDo(newTodo) {
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // put text newTodo inside of the span
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    list.appendChild(span); // put span inside of the list
    list.appendChild(button);
    toDoList.appendChild(list); // put list inside of the id = "todo-list"
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // make string in local storage to javascript object
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // forEach() allows to execute a function for each item in array
    // '=>' arrow function
}