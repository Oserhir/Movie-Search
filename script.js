const URL = "https://omdbapi.com/";
const API_KEY = "fc1fef96";

let movieSearch = document.getElementById("form");
let movieSearchBox = document.getElementById("movie-search-box");

movieSearch.addEventListener("keyup", () => {
  getMoviebyName(movieSearchBox.value);
});

let getMoviebyName = (Title) => {
  const FULL_URL = `${URL}?s=${Title}&apikey=${API_KEY}`;
  const MoviePr = fetch(FULL_URL);
  return MoviePr.then((res) => {
    res.json().then((res) => {
      if (res.Response === "False") return;
      return res.Search;
    });
  }).catch((err) => {
    console.log(err);
  });
};

window.onload = () => {
  //  movieSearchBox.value = "";
};

movieSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const Title = movieSearchBox.value;
  const FULL_URL = `${URL}?t=${Title}&apikey=${API_KEY}`;

  getMovieData(FULL_URL).then((res) => {
    showMovie(res);
  });
});

let getMovieData = (URL) => {
  let moviePromis = fetch(URL);
  return moviePromis
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

let showMovie = (moviesData) => {
  document.getElementById("result-grid").innerHTML = `
    <!-- movie information here -->
            <div class="movie-poster">
              <img src="${moviesData["Poster"]}" alt="movie poster" />
            </div>
            <div class="movie-info">
              <h3 class="movie-title">${moviesData["Title"]}</h3>
              <ul class="movie-misc-info">
                <li class="year">Year: ${moviesData["Year"]} </li>
                <li class="rated">Ratings: ${moviesData["Rated"]} </li>
                <li class="released">Released: ${moviesData["Released"]} </li>
              </ul>
              <p class="genre"><b>Genre:</b> ${moviesData["Genre"]}</p>
              <p class="writer">
                <b>Writer:</b> ${moviesData["Writer"]}
              </p>
              <p class="actors">
                <b>Actors: </b> ${moviesData["Actors"]}
              </p>
              <p class="plot">
                <b>Plot:</b>  ${moviesData["Plot"]}
              </p>
              <p class="language"><b>Language:</b> ${moviesData["Language"]} </p>
              <p class="awards">
                <b><i class="fas fa-award"></i></b>  ${moviesData["Awards"]}
              </p>
            </div>
    
    `;
};
