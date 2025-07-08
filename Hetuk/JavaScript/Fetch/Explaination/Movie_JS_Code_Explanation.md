
# 🎬 Movie Website JavaScript Code Explanation

This file explains how your movie website JavaScript works — **step by step**, in simple and basic JavaScript terms.

---

## 📦 Variables and API Key

```js
const apiKey = `3d15e923`;
```

- This is your **API Key** from [OMDB API](https://www.omdbapi.com/).
- You need it to get movie data like posters, title, year, etc.

---

## 🔄 dataLoad Function – Loads Random Movie Posters

```js
const dataLoad = async () => {
  myFunction();
  ...
};
```

### 🔸 What it does:
- Picks a **random movie name** from a list.
- Calls the OMDB API to get data.
- Shows movie cards on your page.

### 💡 Steps:
```js
let random = [...];
```
- This is a list of movie topics like `ironman`, `thor`, `space`, etc.

```js
let movie = Math.round(Math.random() * random.length);
let moviename = random[movie].name;
```
- Picks a **random name** from that list.

```js
const api = `https://www.omdbapi.com/?s=${moviename}&apikey=${apiKey}`;
```
- Makes an API link using the random name.

```js
const response = await fetch(api);
const data = await response.json();
```
- Uses `fetch()` to get data from the OMDB website.
- Converts it into a JSON object.

```js
appendsFunc(data);
```
- Sends the data to a function that shows it on your website.

---

## 🔍 ApiCalling Function – Search Movies with Enter Key

```js
const ApiCalling = async (event) => {
  if (event.key === "Enter") {
    ...
  }
};
```

### 🔸 What it does:
- Waits for the user to press the **Enter key**.
- Then fetches movie data based on the text entered in the search box.

```js
const searchApi = document.querySelector("#searchInput");
```
- Gets the search box input element.

```js
const api = `https://www.omdbapi.com/?s=${searchApi.value}&apikey=${apiKey}`;
```
- Creates an API link using the search text.

```js
const response = await fetch(api);
const data = await response.json();
appendsFunc(data);
```
- Fetches the search result and displays it using `appendsFunc`.

---

## 🧩 appendsFunc – Displays Movies on the Web Page

```js
const appendsFunc = (data) => {
  ...
};
```

### 🔸 What it does:
- Loops through the movie results.
- Creates a card for each movie.
- Adds the movie poster, title, year, IMDB ID, and type.

### 💡 Key Parts:
```js
let mainDiv = document.getElementById("info");
mainDiv.innerHTML = "";
```
- Gets the container where movie cards will be shown.
- Clears it before adding new ones.

```js
data.Search.forEach((hello) => {
  ...
});
```
- Loops through all the movies.

Each card has:
- Image (`<img>`)
- Title (`<h3>`)
- Year (`<p>`)
- IMDB ID (`<p>`)
- Type (movie/series) (`<p>`)
- Link to details page (`<a href="Movie_Details.html?id=...">`)

---

## ⌛ myFunction and showPage – Loader Function

```js
function myFunction() {
  myVar = setTimeout(showPage, 1500);
}
```

- Runs a timer of **1.5 seconds** before showing the main content.

```js
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
```

- Hides the loader and shows the actual movie content.

---

## 🎞️ loadPosters – Scrollable Poster Section

```js
const keywords = ["batman", "marvel", "avengers", "harry potter"];
```

- List of keywords for popular movie posters.

```js
async function loadPosters() {
  const scrollDiv = document.getElementById("posterScroll");
  ...
}
```

### 🔸 What it does:
- Loads posters for each keyword (batman, marvel, etc.)
- Appends them one by one to the scroll area.

Each poster is:
- Clickable (`<a>`)
- Opens movie details page using `imdbID`

---

## 🪄 window.onload – Start When Page Loads

```js
window.addEventListener("load", loadPosters);
```

- When the website loads, it automatically calls `loadPosters()` to show some posters right away.

---

## ✅ Summary

| Function Name     | Purpose                                            |
|------------------|----------------------------------------------------|
| `dataLoad()`      | Loads a random movie section                      |
| `ApiCalling()`    | Searches movies when Enter is pressed             |
| `appendsFunc()`   | Adds movie cards to the page                      |
| `loadPosters()`   | Adds posters to a scroll section                  |
| `myFunction()`    | Shows loader for 1.5 seconds before showing page  |
| `showPage()`      | Hides loader and displays movie content           |
