function showAdvice(response) {
  console.log("advice generated", response);

  let adviceElement = document.getElementById("advice-text");
  adviceElement.innerHTML = ""; // clear old poem

  let lines = response.data.answer
    .split("\n")
    .filter((line) => line.trim() !== "");

  let typewriter = new Typewriter(adviceElementElement, {
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

function generateAdvice(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions-input");
  let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
  let prompt = `Generate a travel advise for ${instructionsInput.value}`;
  let context =
    "You are a travel guide. You provide detailed and engaging travel advice for various destinations around the world. Your advice includes must-see attractions, local culture, cuisine recommendations, and travel tips to help travelers make the most of their visit.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let adviceContainer = document.getElementById("travel-container");
  let adviceElement = document.getElementById("travel-text");

  adviceContainer.style.display = "block";
  adviceElement.innerHTML = `Generating travel advice for the country <em>${instructionsInput.value}</em>...`;

  console.log("Generating travel advice with the following parameters:");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(showAdvice);
}

let poemFormElement = document.getElementById("advice-form");
poemFormElement.addEventListener("submit", generateAdvice);
