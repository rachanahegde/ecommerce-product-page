"use strict";

// SELECTING ELEMENTS
const modal = document.getElementById("myModal");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("demo");
const columns = document.getElementsByClassName("column");
const overlays = document.getElementsByClassName("overlay");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const inputField = document.getElementById("input");
const updateCartBtn = document.getElementById("update-cart");
const cartItemsEl = document.getElementById("cart-items");
const cart = document.getElementById("nav-cart-icon");
const cartContainer = document.getElementById("cart-container");
const checkoutBtn = document.getElementById("checkout-btn");

// MODAL/LIGHTBOX FUNCTIONALITY

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

// ADD TO CART FUNCTIONALITY

// Increase/decrease input value when minus/plus button is pressed
minusButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default behavior of button
  const currentValue = Number(inputField.value) || 0;
  // Restrict negative input
  if (currentValue > 0) {
    inputField.value = currentValue - 1; // Decrease value in input field by 1
  }
});

plusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1; // Increase value in input field by 1
});

// Example HTML structure for each cart item - generated with JS below
// <div class="cart-item">
//   <img src="./images/image-product-1-thumbnail.jpg" class="cart-item-img">
//   <div class="item-info">
//     <div class="item-text">
//       <p>Fall Limited Edition Sneakers</p>
//     </div>
//     <div class="item-cost">
//       <p>$125.00 x 3<span class="total-item-cost">$375.00</span></p>
//     </div>
//   </div>
//   <div class="trash-item">
//     <img src="./images/icon-delete.svg" id="trash-icon">
//   </div>
// </div>

// Add items to the cart
updateCartBtn.addEventListener("click", (event) => {
  if (inputField.value > 0) {
    // Remove existing product from cart and update it with new quantities of product
    if (cartItemsEl.hasChildNodes()) {
      cartItemsEl.removeChild(cartItemsEl.firstChild);
    }

    // Get product name, price, quantity, and calculate total
    const quantity = inputField.value;
    const productName = document.getElementById("product-name").textContent;
    const price = document.getElementById("current-price").textContent;
    const formattedPrice = Number(price.replace("$", ""));
    const totalPrice = `$${formattedPrice * quantity}.00`;

    // Create new cart item
    const cartItem = document.createElement("div");
    // Add class name 'cart-item'
    cartItem.setAttribute("class", "cart-item");

    // Create thumbnail image element and set its source
    const itemImg = document.createElement("img");
    itemImg.src = document.getElementById("main-thumbnail").src;
    itemImg.classList.add("cart-item-img");

    // Create the item-info container
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    // Create the item-text container
    const itemText = document.createElement("div");
    itemText.classList.add("item-text");
    const itemName = document.createElement("p");
    itemName.textContent = productName;
    itemText.appendChild(itemName);

    // Create the item-cost container
    const itemCost = document.createElement("div");
    itemCost.classList.add("item-cost");
    const itemCostText = document.createElement("p");
    itemCostText.innerHTML = `${price} x ${quantity}<span class='total-item-cost'>${totalPrice}</span>`;
    itemCost.appendChild(itemCostText);

    // Append item-text and item-cost containers to the item-info container
    itemInfo.appendChild(itemText);
    itemInfo.appendChild(itemCost);

    // Create the trash-item container and trash icon
    const trashItem = document.createElement("div");
    trashItem.classList.add("trash-item");
    const trashIcon = document.createElement("img");
    trashIcon.src = "./images/icon-delete.svg";
    trashIcon.id = "trash-icon";
    trashItem.appendChild(trashIcon);

    // Append the child elements to the cart item container
    cartItem.appendChild(itemImg);
    cartItem.appendChild(itemInfo);
    cartItem.appendChild(trashItem);

    // Append cart-item to the parent container
    cartItemsEl.appendChild(cartItem);
  }
});

// View and hide the cart when user clicks on cart icon
cart.addEventListener("click", (event) => {
  if (cartContainer.style.display === "") {
    cartContainer.style.display = "grid";
  } else {
    cartContainer.style.display = "";
  }
});

// Display "Your cart is empty" text
// Render this HTML: <div id="empty-cart-text"><p id="empty-text">Your cart is empty.</p></div>
if (!cartItemsEl.hasChildNodes()) {
  // Display text
  const emptyTextDiv = document.createElement("div");
  emptyTextDiv.setAttribute("id", "empty-cart-text");
  emptyTextDiv.innerHTML = '<p id="empty-text">Your cart is empty.</p>';
  cartItemsEl.appendChild(emptyTextDiv);

  // Hide the checkout button
  checkoutBtn.style.display = "none";
}

// TODO Remove items from cart
// If user clicks trash icon then the cart is empty
// Delete cart item

// TODO ADD NUMBER TO SHOPPING CART ICON INDICATING NUMBER OF ITEMS IN CART

// ---------------------------------------------------------------------------

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
