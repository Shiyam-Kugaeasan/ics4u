<script>
import axios from "axios";
import {ref} from "vue";

// const img = document.createElement('img');
// const p = document.createElement('p');
// const iframe = document.createElement('iframe');
// const t = document.createElement('t');
// const tagline = document.createElement('tagline'); 
// const overview = document.createElement('overview'); 
// const budget = document.createElement('budget'); 
// const released = document.createElement('released'); 
// const revenue = document.createElement('revenue');
// const runtime = document.createElement('runtime');
// const languages = document.createElement('languages');
// const popularity = document.createElement('popularity');

const list = ref(null);
const movie = ref(true);

const getMovie = async () => {
  const data = list.value;
  movie.value = (await axios.get(`https://api.themoviedb.org/3/movie/${data}`, {
    params: {
      api_key: "d074056107be35c2b2df712431dcd31f",
      include_adult: "false",
      append_to_response: "videos"
    },
  })).data;
};
</script>

<template>
  <!-- <h1 class="header">Movie Site</h1>
  <label for="movies">List of Movies: </label>
  <select name="movies" id="select">
    <option value="default">--</option>  
    <option value="634649">Spider-Man: No Way Home</option>
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
  <hr class="divider"> -->
  <!-- <div class="app">
    <Suspense>
      <Movies />
    </Suspense>
  </div> -->
  <Suspense>
    <div class="parent">
      <h1 class="header">Movie Site</h1>
      <label for="movies">List of Movies: </label>
      <select v-model="list">
        <option value="default">--</option>  
        <option value="634649">Spider-Man: No Way Home</option>
        <option value="566525">Shang Chi and the Legend of the Ten Rings</option>
        <option value="324857">Spider-Man: Into the Spider-Verse</option>
        <option value="361743">Top Gun: Maverick</option>
        <option value="557">El Camino</option>
        <option value="447404">Pokemon Detective Pikachu</option>
        <option value="329">Jurassic Park III</option>
        <option value="810693">Jujutsu Kaisen 0</option>
        <option value="299536">Avengers: Infinity War</option>
        <option value="299534">Avengers: Endgame</option>
      </select>
      <br><br>
      <button @click="getMovie" id="get">Get</button>
      <hr class="divider">
    </div>
      <div v-if="movie" class="info">
        <p class="t">{{movie.title}}</p>
        <p class="overview">{{movie.overview}}</p>
        <p class="tagline">{{movieData.data.tagline}}</p>
        <p class="budget">Budget: ${{movieData.data.budget}}</p>
        <p class="released">Status: {{movieData.data.status}}</p>
        <p class="p">Release Date: {{movie.release_date}}</p>
        <p class="revenue">Revenue: ${{movieData.data.revenue}}</p>
        <p class="runtime">Runtime: {{movieData.data.runtime}} min</p>
        <p class="languages">Original Language: {{movieData.data.original_language}}</p>
        <p class="popularity">Popularity Score: {{movieData.data.popularity}}</p>
      </div>
  </Suspense>
</template>

<style>
*{margin: 0; padding: 0;}

body {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas: 
    "parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent parent"
    "img img img img img img img t t t t t t t t t t t t t"
    "img img img img img img img overview overview overview overview overview overview overview overview overview overview overview overview overview"
    "img img img img img img img p p p popularity popularity popularity popularity languages languages languages released released ."
    "img img img img img img img budget budget budget revenue revenue revenue runtime runtime runtime . . . ."
    "img img img img img img img iframe iframe iframe iframe iframe iframe iframe iframe . . . . ."
    "tagline tagline tagline tagline tagline tagline tagline iframe iframe iframe iframe iframe iframe iframe iframe . . . . .";
    background-color: black;
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

.divider {
    border: 3px solid red;
    margin-top: 3%;
}

img {
    margin-top: 10%;
    margin-left: 10%;
    grid-area: img;
    height: 650px;
    width: 450px;
}

.t {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 50px;
    font-style: normal;
    grid-area: t;
    margin-top: 1%;
    padding: 5% 0%;
}

.tagline {
    grid-area: tagline;
    margin-bottom: 30%;
    margin-left: 10%;
    font-size: 30px;
    font-style: italic;
}

.overview {
    grid-area: overview;
    font-size: 20px;
}

.p {
    grid-area: p;
    font-size: 20px;
    width: 100%;
    margin-top: 10px;
}

.budget {
    grid-area: budget;
    font-size: 20px;
}

.released {
    grid-area: released;
    font-size: 20px;
    margin-top: 4%;
}

.revenue {
    grid-area: revenue;
    font-size: 20px;
}

.runtime {
    grid-area: runtime;
    font-size: 20px;
}

.popularity {
    grid-area: popularity;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 25px;
}

.languages {
    grid-area: languages;
    font-size: 20px;
    margin-top: 7px;
}

iframe {
    grid-area: iframe;
    height: 300px;
    aspect-ratio: 16/9;
}
</style>