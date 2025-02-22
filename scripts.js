// Products Data
const products = [
  { id: 1, name: "Cent 1", price: "৳1200", category: "cent", image: "images/cent1.jpg" },
  { id: 2, name: "Spray 1", price: "৳1500", category: "spray", image: "images/spray1.jpg" },
  { id: 3, name: "Oil 1", price: "৳800", category: "oil", image: "images/oil1.jpg" },
  // Add more products here
];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const cartCount = document.getElementById('cart-count');

// Cart and Wishlist
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Display all products by default
displayProducts(products);

// Filter products by category
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  });
});

// Display products
function displayProducts(products) {
  productGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
    </div>
  `).join('');
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Add to Wishlist
function addToWishlist(productId) {
  const product = products.find(p => p.id === productId);
  wishlist.push(product);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(`${product.name} added to wishlist!`);
}

// Update Cart Count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// View Cart
function viewCart() {
  console.log(cart); // Replace with a modal or separate page to display cart items
}
