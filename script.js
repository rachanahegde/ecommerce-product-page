"use strict";

// Selecting elements

// TODO Open modal/lightbox functionality

// TODO Add to cart functionality
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const inputField = document.getElementById("input");

minusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});

/*
Your users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

*/
