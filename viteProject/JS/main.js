import "../CSS/style.css";
import { RRCharacters } from "../JS/itemArray";

const DOMSelectors = {
  container: document.querySelector(".container"),
};

let idCounter = 0;

function start() {
  RRCharacters.forEach((card) => {
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
start();
