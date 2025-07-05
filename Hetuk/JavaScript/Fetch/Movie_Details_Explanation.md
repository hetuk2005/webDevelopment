# 🎬 Movie Details Page – JavaScript Explanation

This file explains how your `Movie_Details.js` script works, step by step.

---

## 📌 1. API Key Setup

```js
const apiKey = "3d15e923";
```
This is your **OMDB API key**, required to fetch movie information.

---

## 📌 2. Get the IMDb ID from the URL

```js
const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get("id");
```
- This extracts the IMDb ID from the page URL.  
- If the URL is `movie-details.html?id=tt1234567`, then `imdbID` will be `"tt1234567"`.

---

## 📌 3. Fetch Movie Details Using That IMDb ID

```js
const getMovieDetails = async () => {
  if (!imdbID) return;
```

- This function starts only if there's a valid `imdbID`.
- If the ID is missing, the function exits early.

```js
  const api = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
```
- Constructs the API URL to fetch movie by IMDb ID.

```js
  try {
    const response = await fetch(api);
    const data = await response.json();
    showDetails(data);
  } catch (error) {
    console.log("Error: ", error);
  }
};
```
- Calls the API using `fetch()`.
- Converts the response to JSON.
- Passes the result to `showDetails()` to display it.
- If something fails, it logs an error.

---

## 📌 4. Display Movie Details on the Page

```js
const showDetails = (movie) => {
  const container = document.getElementById("movieDetails");
```
- Selects the `<div id="movieDetails">` from your HTML.

```js
  container.innerHTML = `
    <div class="movie-detail-card">
      <h1>${movie.Title}</h1>
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <p><strong>Language:</strong> ${movie.Language}</p>
      <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
    </div>
  `;
};
```
- This dynamically inserts movie information into the HTML.
- It shows all important movie info like: title, poster, genre, plot, etc.

---

## 📌 5. Call the Function on Page Load

```js
getMovieDetails();
```
- Runs everything when the page loads.

---

## ✅ In Simple Words

- We get the IMDb ID from the URL.
- Use that ID to request full movie details from the OMDb API.
- Then display those details beautifully on the web page.

---