// Smooth scrolling for contact link
    document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
const products = [
  { id: 1, name: "Cent 1", price: "৳1200", category: "cent", image: "cent1.jpg" },
  { id: 2, name: "Spray 1", price: "৳1500", category: "spray", image: "spray1.jpg" },
  { id: 3, name: "Oil 1", price: "৳800", category: "oil", image: "oil1.jpg" },
  // Add more products here
];

const productGrid = document.querySelector('.product-grid');
const categoryButtons = document.querySelectorAll('.category-btn');

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

// Function to display products
function displayProducts(products) {
  productGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}
// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

// Login function
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => alert('Logged in successfully!'))
    .catch(error => alert(error.message));
}

// Signup function
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => alert('Account created successfully!'))
    .catch(error => alert(error.message));
}

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function viewCart() {
  console.log(cart); // Display cart items in a modal or separate page
}

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId) {
  const product = products.find(p => p.id === productId);
  wishlist.push(product);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(`${product.name} added to wishlist!`);
          }
