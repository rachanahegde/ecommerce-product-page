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
const navIcons = document.getElementsByClassName("nav-icons")[0];
const sideNav = document.getElementById("mySidenav");
const navOverlay = document.getElementById("nav-overlay");

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

// Remove the cart amount number displayed above cart icon
function removeAmt() {
  const quantityInfo = document.getElementById("quantity");
  if (quantityInfo !== null) {
    const secondChild = navIcons.children[1];
    console.log(secondChild);
    navIcons.removeChild(secondChild);
  }
}

function emptyCart() {
  // If the cart is now empty, display empty cart text and hide the checkout button
  const emptyTextDiv = document.createElement("div");
  emptyTextDiv.setAttribute("id", "empty-cart-text");
  emptyTextDiv.innerHTML = '<p id="empty-text">Your cart is empty.</p>';
  cartItemsEl.appendChild(emptyTextDiv);

  // Hide the checkout button
  checkoutBtn.style.display = "none";

  // Remove the cart amount number displayed above cart icon
  removeAmt();
}

if (!cartItemsEl.hasChildNodes()) {
  emptyCart();
}

// Add items to the cart
updateCartBtn.addEventListener("click", (event) => {
  if (inputField.value > 0) {
    // Remove existing product from cart and update it with new quantities of product
    if (cartItemsEl.hasChildNodes()) {
      cartItemsEl.removeChild(cartItemsEl.firstChild);

      // Remove the cart amount number displayed above cart icon
      removeAmt();
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

    // Update cart icon with number indicating amount of items in cart
    const quantityDiv = document.createElement("div");
    quantityDiv.id = "quantity";

    const quantityText = document.createElement("p");
    quantityText.id = "quantity-text";
    quantityText.textContent = quantity;
    quantityDiv.appendChild(quantityText);

    // Append the quantityDiv to the nav-icons div after nav-cart-icon
    const navIconsDiv = document.getElementsByClassName("nav-icons")[0];
    const secondChild = navIconsDiv.children[1];
    navIconsDiv.insertBefore(quantityDiv, secondChild);

    // Display checkout button
    checkoutBtn.style.display = "flex";

    // Delete item from cart
    let trash = document.querySelector("#trash-icon");
    trash.addEventListener("click", (event) => {
      const trashedItem = trashIcon.parentNode.parentNode; // Get the parent of the parent of the trash icon, which is the cart item
      cartItemsEl.removeChild(trashedItem); // Remove the cart item from the cart

      if (!cartItemsEl.hasChildNodes()) {
        emptyCart();
      }
    });
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

// MOBILE NAVIGATION
// Open and close side nav menu
function openNav() {
  sideNav.style.width = "250px";
  // Display overlay
  navOverlay.style.display = "block";
}

function closeNav() {
  sideNav.style.width = "0";
  // Hide the overlay
  navOverlay.style.display = "none";
}
