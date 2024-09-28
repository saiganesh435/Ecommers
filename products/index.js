let toggle=document.querySelector(".toggle")
let menu=document.querySelector(".menu")

toggle.onclick=function(){
    menu.classList.toggle("active")
}
// Assuming you have two buttons for men and women pages
const menButton = document.getElementById("men");
const womenButton = document.getElementById("women");


// Add event listeners to the buttons
menButton.addEventListener("click", checkLoginAndRedirect);
womenButton.addEventListener("click", checkLoginAndRedirect);


// Function to check if user is logged in and redirect accordingly
function checkLoginAndRedirect(event) {
  event.preventDefault();
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && token.login) {
 
    if (event.target.id === "men") {
      window.location.href = "men.html";
    } else {
      window.location.href = "women.html";
    }
  } else {
    // User is not logged in, alert and redirect to login page
    alert("Please login before accessing men/women page");
    window.location.href = "login.html";
  }
}

const product = document.getElementById("men-wear");

product.addEventListener("click", checkLoginAndRedirects);

function checkLoginAndRedirects(event) {
  event.preventDefault();
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && token.login) {
  
  
      window.location.href = "men.html";
    
  } else {
  
    alert("Please login before accessing men/women page");
    window.location.href = "login.html";
  }
}

const product1 = document.getElementById("women-wear");

product1.addEventListener("click", checkLoginAndRedirects1);

function checkLoginAndRedirects1(event) {
  event.preventDefault();
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && token.login) {
  
  
      window.location.href = "women.html";
    
  } else {
  
    alert("Please login before accessing men/women page");
    window.location.href = "login.html";
  }
}

// adding index mens products
const products = [
  {
    src: "https://images.meesho.com/images/marketing/1692191045019_300.webp",
    alt: "Men's Wear Image 1",
    description: "Product Description 1"
  },
  {
    src: "https://previews.123rf.com/images/evaletova/evaletova1212/evaletova121200398/17014452-male-fashion-clothes-collection.jpg",
    alt: "Men's Wear Image 2",
    description: "Product Description 2"
  },
  {
    src: "https://images.meesho.com/images/products/216426123/e1q4g_512.webp",
    alt: "Men's Wear Image 2",
    description: "Product Description 2"
  },
  {
    src: "https://images.meesho.com/images/products/436953370/nlnzj_512.webp",
    alt: "Men's Wear Image 2",
    description: "Product Description 2"
  },
  {
    src: "https://images.meesho.com/images/products/392630888/3rh8e_400.webp",
    alt: "Men's Wear Image 2",
    description: "Product Description 2"
  },
  {
    src: "https://images.meesho.com/images/products/377911380/vxbv8_400.webp",
    alt: "Men's Wear Image 2",
    description: "Product Description 2"
  }
];

const productGrid = document.getElementById("product-grid");

products.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.className = "product-item";

  const img = document.createElement("img");
  img.src = product.src;
  img.alt = product.alt;

  const p = document.createElement("p");
  p.textContent = product.description;

  productItem.appendChild(img);
  productItem.appendChild(p);

  productGrid.appendChild(productItem);
});


   