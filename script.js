const URL = "https://omdbapi.com/";
const API_KEY = "fc1fef96";

let movieSearch = document.getElementById("form");
let movieSearchBox = document.getElementById("movie-search-box");

window.onload = () => {
  movieSearchBox.value = "";
};

movieSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const Title = movieSearchBox.value;
  const FULL_URL = `${URL}?t=${Title}&apikey=${API_KEY}`;

  getMovieData(FULL_URL).then((res) => {
    showMovie(res.Search[0]);
  });
});

let getMovieData = (URL) => {
  let moviePromis = fetch(URL);
  return moviePromis
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      // return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

let showMovie = (moviesData) => {
  document.getElementById("result-grid").innerHTML = `
    <!-- movie information here -->
            <div class="movie-poster">
              <img src="" alt="movie poster" />
            </div>
            <div class="movie-info">
              <h3 class="movie-title">${moviesData["Title"]}</h3>
              <ul class="movie-misc-info">
                <li class="year">Year: ${moviesData["Year"]} </li>
                <li class="rated">Ratings: ${moviesData["Title"]} </li>
                <li class="released">Released: ${moviesData["Title"]} </li>
              </ul>
              <p class="genre"><b>Genre:</b> ${moviesData["Title"]}</p>
              <p class="writer">
                <b>Writer:</b> James Gunn, Don Abnett, Andy Lanning
              </p>
              <p class="actors">
                <b>Actors: </b>Chris Pratt, Zoe Saldana, Dave Bautista
              </p>
              <p class="plot">
                <b>Plot:</b> The Guardians struggle to keep together as a team
                while dealing with their personal family issues, notably
                Star-Lord's ecounter with his father the ambitious celestial
                being Ego.
              </p>
              <p class="language"><b>Language:</b> English</p>
              <p class="awards">
                <b><i class="fas fa-award"></i></b> Nominated for 1 Oscar
              </p>
            </div>
    
    `;
};
