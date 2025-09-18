function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.getElementById("poem");

  new Typewriter(poemElement, {
    strings: "À Cupidon - Ronsard",
    autoStart: true,
    cursor: null,
  });
}

let poemFormElement = document.getElementById("poem-form");
poemFormElement.addEventListener("submit", generatePoem);
