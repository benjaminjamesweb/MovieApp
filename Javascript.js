const Popular_Movies_API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9a990adf18ee05300fca499e3987e038";
const Top_Rated_Movies_API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=9a990adf18ee05300fca499e3987e038";
const Upcoming_Movies_API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=9a990adf18ee05300fca499e3987e038";


let PopularMovieData = [];
const popularMovies = document.getElementById("popular");

async function getPopularMovieInfo() {
  try {
    const data = await fetch(Popular_Movies_API_URL);
    const dataInJson = await data.json();
    PopularMovieData = dataInJson.results;
    generatePopularMoviePosters(PopularMovieData);
  } catch (error) {
    console.log("There was an error", error);
    PopularMovieData = [];
  }
}

let TopRatedMovieData = [];
const topRatedMovies = document.getElementById("top-rated");

async function getTopRatedMovieInfo() {
  try {
    const data = await fetch(Top_Rated_Movies_API_URL);
    const dataInJson = await data.json();
    TopRatedMovieData = dataInJson.results;
    generateTopRatedMoviePosters(TopRatedMovieData);
  } catch (error) {
    console.log("There was an error", error);
    TopRatedMovieData = [];
  }
}



let UpcomingMovieData = [];
const upcomingMovies = document.getElementById("upcoming");

async function getUpcomingMovieInfo() {
  try {
    const data = await fetch(Upcoming_Movies_API_URL);
    const dataInJson = await data.json();
    UpcomingMovieData = dataInJson.results;
    generateUpcomingMoviePosters(UpcomingMovieData);
  } catch (error) {
    console.log("There was an error", error);
    UpcomingMovieData = [];
  }
}


function generatePopularMoviePosters(data = []) {
  for(let i = 0; i < data.length; i++) {
    generatePopularMoviePoster(data[i]);
  } 
}

function generateTopRatedMoviePosters(data = []) {
  for(let i = 0; i < data.length; i++) {
    generateTopRatedMoviePoster(data[i]);
  } 
}

function generateUpcomingMoviePosters(data = []) {
  for(let i = 0; i < data.length; i++) {
    generateUpcomingMoviePoster(data[i]);
  } 
}



function generatePopularMoviePoster(movie) {
    let movieCard = `
            <article class="border border-light">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h1 class="movie-title">${movie.original_title}</h1>
                <p class="movie-releasedate">Release Year: ${movie.release_date.slice(0, 4)}</p>
                <p class="movie-overview">${movie.overview}</p>
                <p class="movie-vote-average">Audience rating: ${movie.vote_average.toFixed(1)}</p>
            </article>
        `;
    popularMovies.innerHTML += movieCard;
}


function generateTopRatedMoviePoster(movie) {
    let movieCard = `
      <article class="border border-dark">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
          <h1 class="movie-title">${movie.original_title}</h1>
          <p class="movie-releasedate">Release Year: ${movie.release_date.slice(0, 4)}</p>
          <p class="movie-overview">${movie.overview}</p>
          <p class="movie-vote-average">Audience rating: ${movie.vote_average.toFixed(1)}</p>
      </article>
    `;
    topRatedMovies.innerHTML += movieCard;
  }


  function generateUpcomingMoviePoster(movie) {
    let movieCard = `
      <article class="border border-dark">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
          <h1 class="movie-title">${movie.original_title}</h1>
          <p class="movie-releasedate">Release Year: ${movie.release_date.slice(0, 4)}</p>
          <p class="movie-overview">${movie.overview}</p>
          <p class="movie-vote-average">Audience rating: ${movie.vote_average.toFixed(1)}</p>
      </article>
    `;
    upcomingMovies.innerHTML += movieCard;
  }


getPopularMovieInfo();
getTopRatedMovieInfo();
getUpcomingMovieInfo();