let movieDetails = null;
let from = 0;
let to = 4;
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
    `<div class="sliderParent"><div  onclick="setSlideData('left','${elementId}')" class="slideBtn"><</div></div>` +
    cards +
    `<div class="sliderParent"><div onclick="setSlideData('right','${elementId}')" class="slideBtn">></div></div>`;

  docCard.innerHTML = cards;
}

fetchMovies("Tom", "cardId1");
fetchMovies("jerry", "cardId2");
// fetchMovies("dora", "cardId3");
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
fetchMovies("chhota bheem", "premireCard");

function setSlideData(slideDirection, elementId) {
  console.log(from, to, elementId);
  if (slideDirection == "left") {
    to -= 4;
    from -= 4;
  } else {
    to += 4;
    from += 4;
  }
  if (from < 0) {
    from = 0;
    to = 4;
  }
  if (to > movieDetails.length) {
    from = movieDetails.length - 5;
    to = movieDetails.length - 1;
  }
  createMovieCard(elementId);
}
let loginBtn = document.getElementById("btn");
const favDialog = document.getElementById('favDialog');
const closeBtn = favDialog.querySelector('#closeBtn');
loginBtn.addEventListener('click', () => {
  favDialog.showModal(); 
});
closeBtn.addEventListener('click', (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(); // Have to send the select box value here.
});


