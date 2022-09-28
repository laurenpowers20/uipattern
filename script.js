const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

fetch(url)
  .then((res) => res.json())
  .then((res) => console.log("success!", res))
  .catch((err) => console.log("something went wrong...", err));

let button = document.querySelector("#button");
let image = document.querySelector(".simpsonsPic");
let name = document.querySelector(".name");
let quote = document.querySelector(".quote");

function getCharacter() {
  fetch(url)
    .then((res) => res.json())
    .then(
      (res) => (
        (image.src = res[0].image),
        (name.innerText = res[0].character),
        (quote.innerText = res[0].quote)
      )
    );
}

button.addEventListener("click", getCharacter);
