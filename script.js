"use strict";

// Selecting elements
const modal = document.getElementById("myModal");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("demo");
const columns = document.getElementsByClassName("column");
const overlays = document.getElementsByClassName("overlay");

// Modal/Lightbox functionality

// Open the Modal
function openModal() {
  modal.style.display = "block";
}

// Close the Modal
function closeModal() {
  modal.style.display = "none";
}

let slideIndex = 1; // Sets default slide to be displayed

// Call showSlides with default slide index to display first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Loop through slides and hide them
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop through dots and remove active class
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Loop through columns and remove active class
  for (i = 0; i < columns.length; i++) {
    columns[i].className = columns[i].className.replace(" active", "");
  }

  // Loop through overlays and remove active class
  for (i = 0; i < overlays.length; i++) {
    overlays[i].className = overlays[i].className.replace(" active", "");
  }

  // Display current slide and add active class to corresponding dot, column, and overlay
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  columns[slideIndex - 1].className += " active";
  overlays[slideIndex - 1].className += " active";
}

// TODO Add to cart functionality
// const minusButton = document.getElementById("minus");
// const plusButton = document.getElementById("plus");
// const inputField = document.getElementById("input");

// minusButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const currentValue = Number(inputField.value) || 0;
//   inputField.value = currentValue - 1;
// });

// plusButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const currentValue = Number(inputField.value) || 0;
//   inputField.value = currentValue + 1;
// });

/*
TODO Remaining Functionality
Your users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

*/
