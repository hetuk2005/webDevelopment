const apiKey = "3d15e923";

// Get IMDb ID from URL
const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get("id");

// Fetch movie details using IMDb ID
const getMovieDetails = async () => {
  if (!imdbID) return;

  const api = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
  try {
    const response = await fetch(api);
    const data = await response.json();

    showDetails(data);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const showDetails = (movie) => {
  const container = document.getElementById("movieDetails");
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

getMovieDetails();
