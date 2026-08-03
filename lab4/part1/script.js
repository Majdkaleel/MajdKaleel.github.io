/*
Name: Majd
File: script.js
Date: 03 August 2026
Description: Silly Story Generator logic
*/

// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"
];

// Base story text
const storyText =
  "It was 94 Fahrenheit outside, so :insertx: went for a walk. " +
  "When they got to :inserty:, they stared in horror for a few moments, then :insertz:. " +
  "Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Partial return random string function

function returnRandomStoryString() {
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  // Random replacements
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // Custom name replacement
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // UK conversions
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature = Math.round((94 - 32) * 5 / 9) + " centigrade";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // Final output
  story.textContent = newStory;
  story.style.visibility = "visible";
}
