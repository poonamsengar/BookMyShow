let movieDetails = null;
let from = 0;
let to =4;
function fetchMovies(key, elementId) {
   fetch(`http://www.omdbapi.com/?s=${key}&apikey=7ac316df`)
    .then((response) => response.json())
    .then((data) => {
      movieDetails = data.Search;
      createMovieCard(elementId);
      
    });
}
function createMovieCard(elementId) {

  let cards = "";
  let docCard = document.getElementById(elementId);
 
  for (let i = from; i <= to; ++i) {
    let movie = movieDetails[i];
    cards += `<div>
    <img
      src=${movie.Poster}
      alt="images" />
    <h3>${movie.Title}</h3>
    <p>${movie.Type}</p>
  </div> `;
  }
  cards = 
  // `<div class="slideBtn"><i onclick="setSlideData('left','cardId')" class="fa-solid fa-angle-left"></div>`
   cards +
 `<div class="slideBtn"><i onclick="setSlideData('right','cardId')" class="fa-solid fa-angle-right"></div>`;

 docCard.innerHTML = cards;
}

fetchMovies("Tom", "cardId1");
fetchMovies("jerry", "cardId2");
fetchMovies("doremon", "cardId3");
fetchMovies("spider-man", "cardId4");
fetchMovies("jerry", "cardId5");
fetchMovies("nobita", "cardId6");
fetchMovies("Tom", "cardId7");
fetchMovies("jerry", "cardId8");
fetchMovies("doraemon", "cardId9");
fetchMovies("Tom", "cardId10");
fetchMovies("jerry", "cardId11");
fetchMovies("sunrise", "cardId12");
fetchMovies("Tom", "cardId13");
fetchMovies("jerry", "cardId14");
fetchMovies("kids", "cardId15");
fetchMovies("chhota bheem","premireCard");

function setSlideData(slideDirection, elementId){
  if(slideDirection == "left"){
    to -= 4;
    from -= 4;
  }else{
    to += 4;
    from += 4;
  }
  if(from < 0){
    from = 0;
    to = 4
  }
  if(to > movieDetails.length){
    from = movieDetails.length - 5;
    to = movieDetails.length - 1;
  }

  createMovieCard(elementId);
}

