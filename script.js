const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

fetch(url)
  .then((res) => res.json())
  .then((res) => console.log("success!", res))
  .catch((err) => console.log("something went wrong...", err));

let button = document.querySelector("#button");
let image = document.querySelector(".simpsonsPic");
let quote = document.querySelector(".quote");

function getImage() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => (image.src = res[0].image));
}

button.addEventListener("click", getImage);
