<script setup>
import axios from "axios";
import {ref} from "vue";

const movies = ref(null);

const img = document.createElement('img');
const p = document.createElement('p');
const iframe = document.createElement('iframe');
const t = document.createElement('t');
const tagline = document.createElement('tagline'); 
const overview = document.createElement('overview'); 
const budget = document.createElement('budget'); 
const released = document.createElement('released'); 
const revenue = document.createElement('revenue');
const runtime = document.createElement('runtime');
const languages = document.createElement('languages');
const popularity = document.createElement('popularity');

function myFunction() {

  if (document.getElementById("select").value == "default"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove(); 
    languages.remove(); 
    popularity.remove();
  }
  if (document.getElementById("select").value == "spiderman"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();
    popularity.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "spiderman no way home",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "shang-chi"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Shang chi and the legend",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "into-the-spiderverse"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Spider-Man: Into the Spider-Verse",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "top-gun"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Top Gun: Maverick",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "el-camino"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "El Camino: A Breaking Bad Movie",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "pokemon"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Pokemon Detective Pikachu",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "jurassic-park"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Jurassic Park III",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "jjk"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Jujutsu Kaisen 0",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "infinity-war"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Avengers: Infinity War",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "endgame"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Avengers Endgame",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
}
</script>

<template>
  <div class="parent">
  </div>
  <h1 class="header">Movie Site</h1>
  <label for="movies">List of Movies: </label>
  <select name="movies" id="select">
    <option value="default">--</option>  
    <option value="spiderman">Spider-Man: No Way Home</option>
    <option value="shang-chi">Shang Chi and the Legend of the Ten Rings</option>
    <option value="into-the-spiderverse">Spider-Man: Into the Spider-Verse</option>
    <option value="top-gun">Top Gun: Maverick</option>
    <option value="el-camino">El Camino</option>
    <option value="pokemon">Pokemon Detective Pikachu</option>
    <option value="jurassic-park">Jurassic Park III</option>
    <option value="jjk">Jujutsu Kaisen 0</option>
    <option value="infinity-war">Avengers: Infinity War</option>
    <option value="endgame">Avengers: Endgame</option>
  </select>
  <br><br>
  <button @click="myFunction()" id="get">Get</button>
  <hr class="divider">
</template>

<style>
*{margin: 0; padding: 0; background-color: black;}

body {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas: 
    "parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent"
    "img img img img img img img . t t t t t t t t t t t t"
    "img img img img img img img . overview overview overview overview overview overview overview overview overview overview overview overview"
    "img img img img img img img . p p p popularity popularity popularity popularity languages languages languages . ."
    "img img img img img img img . budget budget . revenue revenue . runtime runtime . released released ."
    "img img img img img img img . iframe iframe iframe iframe iframe iframe iframe iframe . . . ."
    "tagline tagline tagline tagline tagline tagline tagline . iframe iframe iframe iframe iframe iframe iframe iframe . . . .";
    width: 100%;
    aspect-ratio: 16/9;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.parent {
    text-align: center;
    flex-grow: 3;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 1%;
    grid-area: parent;
}

.header {
    margin-top: 1%;
    margin-bottom: 1%;
}

#select, option, #get {
  background-color: white;
}

.divider {
    border: 3px solid red;
    margin-top: 3%;
}

img {
    margin-top: 10%;
    margin-left: 7%;
    grid-area: img;
    height: 650px;
    width: 450px;
}

t {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 50px;
    font-style: normal;
    grid-area: t;
    margin-top: 1%;
    padding: 5% 0%;
}

tagline {
    grid-area: tagline;
    margin-bottom: 30%;
    margin-left: 10%;
    font-size: 30px;
    font-style: italic;
}

overview {
    grid-area: overview;
    font-size: 20px;
}

p {
    grid-area: p;
    font-size: 20px;
    width: 100%;
    margin-top: 10px;
}

budget {
    grid-area: budget;
    font-size: 20px;
}

released {
    grid-area: released;
    font-size: 20px;
}

revenue {
    grid-area: revenue;
    font-size: 20px;
}

runtime {
    grid-area: runtime;
    font-size: 20px;
}

popularity {
    grid-area: popularity;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 25px;
}

languages {
    grid-area: languages;
    font-size: 20px;
    margin-top: 7px;
    margin-right: 5px;
}

iframe {
    grid-area: iframe;
    height: 300px;
    aspect-ratio: 16/9;
}
</style>
