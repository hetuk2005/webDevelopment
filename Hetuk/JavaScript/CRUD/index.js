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

  const main_div = document.querySelector("#dataInfo");

  main_div.innerHTML = "";

  data.forEach((el) => {
    let div = document.createElement("div");
    let id = document.createElement("p");
    let text = document.createElement("p");
    let input = document.createElement("input");
    let checkbox = document.createElement("input");
    let delete_btn = document.createElement("button");
    let edit_btn = document.createElement("button");
    let x = document.createElement("button");
    let y = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.name = "checkbox";

    div.className = "todo_list";
    id.classList.add("id");

    id.innerText = el.id;
    text.innerText = el.text;
    x.src = "./Edit_Btn.svg";
    y.src = "";
    delete_btn.innerHTML = "🗑️";
    edit_btn.innerHTML = "✏️";

    div.append(checkbox, id, text, edit_btn, delete_btn);
    main_div.append(div);
  });
}
