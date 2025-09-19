function showPoem(response) {
  console.log("poem generated");
  let poemElement = document.getElementById("poem-text");

  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions-input");
  let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
  let prompt = `Generate a French poem about flowers ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert, and love writing short poems. Your mission is to generate a 4 lines poem in French.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating poem with the following parameters:");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(showPoem);
}

let poemFormElement = document.getElementById("poem-form");
poemFormElement.addEventListener("submit", generatePoem);
