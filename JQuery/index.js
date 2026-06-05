const h1 = document.querySelector("h1").innerText;
console.log("✈️  h1: ", h1);

let object = {
  name: "Patel",
};

let obj = {
  ...object,
  name1: "Hetuk",
};

object.age = 99;

let value = object.name;
console.log("✈️  value: ", value);

$("h1").text();

document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded");
});

$(document).ready(() => {
  console.log("DOM Loaded JQuery");
});

// ID Select

$("#heading_2").mouseover(() => {
  $("#heading_2, #heading_3").css("background", "red").fadeOut(1000);
});

$("#heading_2").mouseout(() => {
  $("#heading_2, #heading_3").css("background", "transparent").fadeIn(1000);
});
