function load(url) {
  let isLoaded = document.querySelectorAll(".dynamic-script");

  if (isLoaded === null || isLoaded === undefined || isLoaded.length > 0) {
    console.log("Not Loading The Scripts");
    return;
  }
  let myScript = document.createElement("script");
  myScript.src = url;
  myScript.className = "dynamic-script";
  document.body.append(myScript);
  console.log("Loading The Scripts");
}

let searchInput = document.querySelector("#search_input");

searchInput.addEventListener("focus", function () {
  load("https://code.jquery.com/jquery-3.7.1.min.js");
});
