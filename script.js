const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

let name = document.querySelector(".name");
let quote = document.querySelector(".quote");
let closeButton = document.querySelector(".close-button");
let modal = document.querySelector(".modal");
let trigger = document.querySelector(".duff");
let image = document.querySelector(".image");
let newCharacter = document.querySelector(".donut");

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

getCharacter();

newCharacter.addEventListener("click", getCharacter);

function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
