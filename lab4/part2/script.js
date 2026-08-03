/*
Name: Majd Kaleel
File: script.js
Date: 03 August 2026
Description: Part 2 - Image Gallery JavaScript
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// REQUIRED: array of objects
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// REQUIRED: base URL
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// REQUIRED: loop through images and create thumbnails
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + image.filename;
  newImage.alt = image.alt;
  newImage.tabIndex = 0; // keyboard focusable

  thumbBar.appendChild(newImage);

  // REQUIRED: click handler
  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });

  // REQUIRED: Enter key handler
  newImage.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// REQUIRED: updateDisplayedImage()
function updateDisplayedImage(img) {
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

// REQUIRED: Darken/Lighten button
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  // Stretch goal: toggle class in one line
  btn.classList.toggle("dark");
});
