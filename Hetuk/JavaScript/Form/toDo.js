let input = document.querySelector("#input");
let text = document.querySelector(".text");

function Add() {
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    let Element = document.createElement("ul");
    Element.innerHTML = `${input.value}`;
    let NewEle = document.createElement("li");
    NewEle.textContent = `${input.value}`;
    text.appendChild(NewEle);
  }
}
