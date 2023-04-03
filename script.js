import { data } from "./data.js";

// Header
const primaryNavigation = document.querySelector("#primary-navigation");
const openMenuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");

openMenuButton.addEventListener("click", () => {
  primaryNavigation.classList.add("active");
  (openMenuButton && closeMenuButton).ariaExpanded = true;
});

closeMenuButton.addEventListener("click", () => {
  primaryNavigation.classList.remove("active");
  (openMenuButton && closeMenuButton).ariaExpanded = false;
});

// Destination
const destinationTabButtons = document.querySelectorAll(
  ".destination-tab-button"
);
const destinationImg = document.querySelector("#destination-img");
const destinationTitle = document.querySelector("#destination-title");
const destinationDescription = document.querySelector(
  "#destination-description"
);
const destinationDistance = document.querySelector("#destination-distance");
const destinationTime = document.querySelector("#destination-time");

if (destinationTabButtons.length > 0) {
  destinationImg.setAttribute("src", data.destinations[0].images.webp);
  destinationTitle.textContent = data.destinations[0].name;
  destinationDescription.textContent = data.destinations[0].description;
  destinationDistance.textContent = data.destinations[0].distance;
  destinationTime.textContent = data.destinations[0].travel;
}

for (let i = 0; i < destinationTabButtons.length; i++) {
  destinationTabButtons[i].addEventListener("click", () => {
    destinationImg.setAttribute("src", data.destinations[i].images.webp);

    destinationTitle.textContent = data.destinations[i].name;
    destinationDescription.textContent = data.destinations[i].description;
    destinationDistance.textContent = data.destinations[i].distance;
    destinationTime.textContent = data.destinations[i].travel;

    destinationTabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active");
    });
    destinationTabButtons[i].classList.add("active");
  });
}

// Crew
const crewTabButtons = document.querySelectorAll(".crew-tab-button");
const crewImg = document.querySelector("#crew-img");
const crewTitle = document.querySelector("#crew-title");
const crewName = document.querySelector("#crew-name");
const crewDescription = document.querySelector("#crew-description");

if (crewTabButtons.length > 0) {
  crewImg.setAttribute("src", data.crew[0].images.webp);
  crewTitle.textContent = data.crew[0].role;
  crewName.textContent = data.crew[0].name;
  crewDescription.textContent = data.crew[0].bio;
}

for (let i = 0; i < crewTabButtons.length; i++) {
  crewTabButtons[i].addEventListener("click", () => {
    crewImg.setAttribute("src", data.crew[i].images.webp);
    crewTitle.textContent = data.crew[i].role;
    crewName.textContent = data.crew[i].name;
    crewDescription.textContent = data.crew[i].bio;

    crewTabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active");
    });
    crewTabButtons[i].classList.add("active");
  });
}

// Technology
const technologyTabButtons = document.querySelectorAll(
  ".technology-tab-button"
);
const technologyMobileImg = document.querySelector("#technology-img-mobile");
const technologyDesktopImg = document.querySelector("#technology-img-desktop");
const technologyName = document.querySelector("#technology-name");
const technologyDescription = document.querySelector("#technology-description");

if (technologyTabButtons.length > 0) {
  technologyMobileImg.setAttribute("src", data.technology[0].images.landscape);
  technologyDesktopImg.setAttribute("src", data.technology[0].images.portrait);
  technologyName.textContent = data.technology[0].name;
  technologyDescription.textContent = data.technology[0].description;
}

for (let i = 0; i < technologyTabButtons.length; i++) {
  technologyTabButtons[i].addEventListener("click", () => {
    technologyMobileImg.setAttribute(
      "src",
      data.technology[i].images.landscape
    );
    technologyDesktopImg.setAttribute(
      "src",
      data.technology[i].images.portrait
    );
    technologyName.textContent = data.technology[i].name;
    technologyDescription.textContent = data.technology[i].description;

    technologyTabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active");
    });
    technologyTabButtons[i].classList.add("active");
  });
}
