const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

fetch(url)
  .then((res) => res.json())
  .then((res) => console.log("success!", res))
  .catch((err) => console.log("something went wrong...", error));

let button = document.querySelector(".button");
let image = document.querySelector(".simpsons-pic");
let name = document.querySelector(".name");
let quote = document.querySelector(".quote");
let simpsonsPic = document.querySelectorAll(".simpson-pic");

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

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
button.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
