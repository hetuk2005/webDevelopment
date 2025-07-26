const api = "https://api-database-1.onrender.com/ToDo";

async function myTodos() {
  let value = document.querySelector("#todos").value;

  let objectData = {
    id: crypto.randomUUID(),
    text: value,
    isEdit: false,
    isCompleted: false,
  };

  try {
    const res = await fetch(api, {
      method: "POST",
      body: JSON.stringify(objectData),
      headers: {
        "Content-type": "application/json",
      },
    });
    appendData();
    document.querySelector("#todos").value = "";
  } catch (error) {
    console.log(error);
  }
}

async function appendData() {
  let data;

  try {
    const res = await fetch(api);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  console.log("data:", data);

  const main_div = document.querySelector("#datainfo");

  main_div.innerHTML = "";

  data.forEach((el) => {
    let div = document.createElement("div");
    let id = document.createElement("p");
    let text = document.createElement("p");
    let input = document.createElement("input");
    let checkbox = document.createElement("input");
    let delete_btn = document.createElement("button");
    let edit_btn = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.name = "checkbox";

    div.className = "todo_list";

    id.innerText = el.id;
    text.innerText = el.text;
    delete_btn.innerHTML = "<b>Delete</b>";
    edit_btn.innerHTML = "<b>Edit</b>";

    div.append(checkbox, id, text, edit_btn, delete_btn);
    main_div.append(div);
  });
}
