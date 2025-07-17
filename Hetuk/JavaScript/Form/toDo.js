let arrStorage = JSON.parse(localStorage.getItem("todos")) || [];

const myTodos = () => {
  const todoVal = document.querySelector("#todos").value;
  if (todoVal.length == 0) {
    alert("please fill the text...");
    return;
  }

  let data = {
    id: Math.random().toString(36).substring(2, 15),
    todoText: todoVal,
    isCompleted: false,
    isEdits: false,
  };

  arrStorage.unshift(data);
  localStorage.setItem("todos", JSON.stringify(arrStorage));
  appendData();
  alert("Your Data Has Been Added In To LS");
  document.querySelector("#todos").value = "";
};

const appendData = () => {
  const dataInfo = document.querySelector("#dataInfo");

  dataInfo.innerHTML = "";

  if (arrStorage.length == 0) {
    let notify = document.createElement("h1");
    notify.innerText = "You Don't Have Data...";
    dataInfo.append(notify);
  }
  arrStorage &&
    arrStorage.forEach((el, i) => {
      let div = document.createElement("div");
      let id = document.querySelector("p");

      div.className = "dataRow";

      id.innerText = el.id;
    });
};
