


// Select all cart elements
const carts = document.querySelectorAll('#cart');

// Loop through each cart element
carts.forEach(cart => {
  // Select the heart icon within the current cart
  const heartIcon = cart.querySelector('.fa-heart');

  // Select the image, name, rating, and price within the current cart
  const cartData = {
    image: cart.querySelector("img").src,
    name: cart.querySelector("p:nth-child(3)").textContent,
    rating: cart.querySelector("#cont p:nth-child(1)").textContent,
    price: cart.querySelector("#cont p:nth-child(2)").textContent
  };

  // Add event listener to the heart icon
  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('active');
    if (heartIcon.classList.contains('active')) {
      localStorage.setItem('likedProducts', JSON.stringify([...JSON.parse(localStorage.getItem('likedProducts') || '[]'), cartData]));
    } else {
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
      const index = likedProducts.findIndex(product => product.name === cartData.name);
      if (index !== -1) {
        likedProducts.splice(index, 1);
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
      }
    }
  });
});