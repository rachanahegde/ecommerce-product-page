# E-commerce Product Page

This e-commerce product page was built using HTML, CSS, and vanilla JS. The page features a lightbox product gallery and cart functionality. Users are able to add and remove items to/from cart and view cart. Furthermore, there is a side navigation menu for mobile view. The design for this website was provided by [Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Overview

### Key Functionality

For this Frontend Mentor challenge, the goal was to implement the following functionality:

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshots - Desktop

<img src="/screenshots/Ecommerce-Page-Laptop.jpeg" width="650"/>
<img src="/screenshots/Ecommerce-Page-Laptop-Lightbox.jpeg" width="650"/>
<img src="/screenshots/Ecommerce-Page-Laptop-Full-Cart.jpeg" width="650"/>
<img src="/screenshots/Ecommerce-Page-Laptop-Empty-Cart.jpeg" width="650"/>

### Screenshots - Mobile

<img src="/screenshots/Ecommerce-Page-iPhone.jpeg" width="300" display="inline-block"/>  <img src="/screenshots/Ecommerce-Page-Phone-Full-Cart.jpeg" width="300" display="inline-block"/>  <img src="/screenshots/Ecommerce-Page-Phone-Empty-Cart.jpeg" width="300" display="inline-block"/>

### Links

- Live Site URL: [Website](https://rachanahegde.github.io/ecommerce-product-page/)

## My process

### What I learned
This project was a great opportunity to learn how to set up modal/lightbox functionality - I used this <a href="https://www.w3schools.com/howto/howto_js_lightbox.asp">w3schools code</a> as a starting point and modified it to use CSS grid so that it would be responsive. Another issue I had to deal with was adding the image overlay color on hover for the thumbnail images of the modal because this turned out to have knock on effects for the layout of the page. (<a href="https://stackoverflow.com/questions/46362548/image-hover-color-overlay">This</a> stack overflow post explaining how to implement the image hover color overlay functionality also proved helpful.) I'm not sure if this was the best solution but I nested more divs to ensure that the elements of the page remained centered correctly and to make sure that they still responded to the resizing of the browser window. 

I used <a href="https://stackoverflow.com/questions/61514041/how-to-use-javascript-to-dynamically-add-content-to-list-in-shopping-cart-menu">this</a> code as a starting point for understanding how to set up the shopping cart functionality in conjunction with <a href="https://stackoverflow.com/questions/52125163/how-to-create-a-minus-and-plus-button-to-update-a-field">this Stackoverflow post</a> on creating minus and plus buttons that update the field of a form.

To set up the mobile navigation menu as a sidebar, I turned to w3schools again and <a href="https://www.w3schools.com/howto/howto_js_sidenav.asp">this article</a> was incredibly helpful. I also found <a href="https://stackoverflow.com/questions/46082016/overlay-when-i-open-slide-out-menu"> a Stack Overflow post</a> on adding an overlay when the nav bar is opened.

### Useful resources

- [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/) 
- [Adding a shadow to a button with CSS](https://www.shecodes.io/athena/21966-how-to-add-a-shadow-to-a-button-in-css#:~:text=To)
- Useful articles for changing the color of the SVG icons on hover: <a href="https://codepen.io/sosuke/pen/Pjoqqp"> CSS filter generator to convert from black to target hex color </a>, <a href="https://convertingcolors.com/hsl-color-25_100_94.html">Converting color to different formats</a>, <a href="https://www.reddit.com/r/webdev/comments/ppm6io/changing_the_color_of_an_svg_image_with_css_on/?rdt=56361"> Reddit post on changing the color of an SVG image with CSS on hover</a>, <a href="https://css-tricks.com/cascading-svg-fill-color/"> CSS Tricks article on Cascading SVG fill color</a>.

## Author
- Website - [Rachana Hegde](http://rachanahegde.squarespace.com/)
- Twitter - [@Rachana\_\_H](https://twitter.com/Rachana__H)
- Frontend Mentor - [@rachanahegde](https://www.frontendmentor.io/profile/rachanahegde)

