// let text = JSON.parse(localStorage.getItem("todos")) || [];

// const Add = () => {
//   const todoInput = document.querySelector("#input").value;
//   if (todoInput.length == 0) {
//     alert("please fill the text...");
//     return;
//   }

//   let data = {
//     id: Math.random().toString(36).substring(2, 15),
//     todoText: todoInput,
//     isCompleted: false,
//     isEdits: false,
//   };

//   text.unshift(data);
//   localStorage.setItem("todos", JSON.stringify(todos));
//   appendData();
//   alert("Your Data Has Been Added In To LS");
//   document.querySelector("#input").value = "";
// };

// const appendData = () => {
//   const dataInfo = document.querySelector("#text");

//   dataInfo.innerHTML = "";

//   if (text.length == 0) {
//     let notify = document.createElement("h1");
//     notify.innerText = "You Don't Have Data...";
//     dataInfo.append(notify);
//   }
//   text &&
//     text.forEach((el, i) => {
//       let id = document.createElement("p");
//       let div = document.createElement("div");

//       div.className = "dataRow";

//       id.innerText = el.id;
//     });
// };

let dataBase = JSON.parse(localStorage.getItem("formData")) || [];

function handleForm(e) {
  e.preventDefault();
  let todoName = document.querySelector("#taskInput").value;

  let personData = {
    id: Date.now(),
    textTodo: todoName,
    isEdit: false,
    isComplete: false,
  };

  dataBase.unshift(personData);
  localStorage.setItem("formData", JSON.stringify(dataBase));
  renderTodoList();
  document.querySelector("#taskInput").value = "";
}
const renderTodoList = () => {
  let todoTable = document.getElementById("todoTable");

  todoTable.innerHTML = "";
  dataBase?.map((el) => {
    let div = document.createElement("div");
    let button = document.createElement("div");
    let text = document.createElement("h4");
    let edits_btn = document.createElement("button");
    let delete_btn = document.createElement("button");
    let id = document.createElement("p");
    let checkBox = document.createElement("input");

    div.className = "div";
    button.className = "button";
    checkBox.className = "checkbox";
    checkBox.type = "checkBox";
    text.innerText = el.textTodo;
    id.innerText = el.id;

    edits_btn.innerText = "edits";
    delete_btn.innerText = "delete";

    button.append(edits_btn, delete_btn);
    div.append(checkBox, id, text, button);
    todoTable.append(div);
  });
};
