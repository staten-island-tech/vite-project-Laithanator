import "../CSS/style.css";
import "../CSS/var.css";
import { RRCharacters } from "../JS/itemArray";

const DOMSelectors = {
  container: document.querySelector(".container"),
  shirtless: document.querySelector("#shirtless"),
  nShirtless: document.querySelector("#nShirtless"),
  all: document.querySelector("#all"),
  theme: document.querySelector("#theme"),
};

let idCounter = 0;

function cardCreate(array) {
  DOMSelectors.container.innerHTML = "";
  array.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card" id="card-${idCounter}">
    <h2 class="card-heading" id="heading-${idCounter}">${card.characterName}</h2>
    <h3 class="card-subheading" id="heading-${idCounter}">${card.movieName}</h3>
    <img class="card-img" id="img-${idCounter}" src="${card.imgLink}" alt="${card.alt}"></div>`
    );
  });
}
cardCreate(RRCharacters);
DOMSelectors.shirtless.addEventListener("click", () => {
  const shirtlessCards = RRCharacters.filter(
    (character) => character.shirtless === true
  );
  cardCreate(shirtlessCards);
});

DOMSelectors.nShirtless.addEventListener("click", () => {
  const nShirtlessCards = RRCharacters.filter(
    (character) => character.shirtless === false
  );
  cardCreate(nShirtlessCards);
});

DOMSelectors.all.addEventListener("click", () => {
  cardCreate(RRCharacters);
});

DOMSelectors.theme.addEventListener("click", () => {
  if (document.body.classList.contains("version1")) {
    document.body.classList.add("version2");
    document.body.classList.remove("version1");
  } else {
    document.body.classList.add("version1");
    document.body.classList.remove("version2");
  }
});
