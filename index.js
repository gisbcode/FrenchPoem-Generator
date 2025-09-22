

function showPoem(response) {
  console.log("poem generated", response);

  let poemElement = document.getElementById("poem-text");
  poemElement.innerHTML = ""; // clear old poem

  let lines = response.data.answer
    .split("\n")
    .filter((line) => line.trim() !== "");

  let typewriter = new Typewriter(poemElement, {
    autoStart: true,
    cursor: "",
    delay: 50,
    loop: false, // no looping
    deleteSpeed: 999999, // prevent deleting
  });

  lines.forEach((line) => {
    typewriter
      .typeString(line + "<br>") // type line + break
      .pauseFor(200);
  });

  typewriter.start();
}


function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions-input");
  let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
  let prompt = `Generate a French poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert, and love writing short poems. Your mission is to generate a 4 line poem in French. Do not erase the lines, write exactly 4 lines one by one.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemContainer = document.getElementById("poem-container");
  let poemElement = document.getElementById("poem-text");

  poemContainer.style.display = "block";
  poemElement.innerHTML = `Generating a French poem about <em>${instructionsInput.value}</em>...`;

  console.log("Generating poem with the following parameters:");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(showPoem);
}

let poemFormElement = document.getElementById("poem-form");
poemFormElement.addEventListener("submit", generatePoem);
