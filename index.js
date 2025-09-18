function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "À Cupidon - Ronsard",
    autoStart: true,
    cursor: null,
  });
}

let poemFormElement = document.getElementById("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
