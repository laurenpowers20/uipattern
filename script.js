const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

fetch(url)
  .then((res) => res.json())
  .then((res) => console.log("success!", res))
  .catch((err) => console.log("something went wrong...", error));

let name = document.querySelector(".name");
let quote = document.querySelector(".quote");
let image = document.querySelector(".image");
const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");

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



closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
