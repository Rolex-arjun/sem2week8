// creeating javascript for our e commerce web site
const navElement = document.querySelector('nav');
const headerElement = document.querySelector('header');

// Basic dynamic setup for an e-commerce platform
document.addEventListener('DOMContentLoaded', () => {
    setupNavBar();
    setupHeader();
    setupProductList();
});
function setupNavBar() {
    navElement.innerHTML = `
        <ul style="display: flex; list-style-type: none; gap: 10px;">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#cart">Cart</a></li>
        </ul>
    `;
}
function setupHeader() {
    headerElement.innerHTML = `
        <h1>Welcome to Jaswanth's E-Commerce</h1>
        <p>Your one-stop shop for amazing products!</p>
    `;
}

// Example Product Data
const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
];

// Function to display a list of products dynamically
function setupProductList() {
    const productSection = document.createElement('section');
    productSection.id = 'products';
    productSection.innerHTML = '<h2>Our Products</h2>';

    const productList = document.createElement('ul');
    productList.style.listStyleType = 'none';
    productList.style.padding = 0;

    products.forEach((product) => {
        const productItem = document.createElement('li');
        productItem.style.marginBottom = '10px';
        productItem.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    productSection.appendChild(productList);
    document.body.appendChild(productSection);
}

// Cart functionality
const cart = [];

// Function to handle adding items to the cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} added to cart!`);
        updateCartView();
    }
}

// Function to display cart items dynamically
function updateCartView() {
    let cartSection = document.querySelector('#cartSection');
    if (!cartSection) {
        cartSection = document.createElement('section');
        cartSection.id = 'cartSection';
        cartSection.innerHTML = '<h2>Your Cart</h2>';
        document.body.appendChild(cartSection);
    }
    cartSection.innerHTML = `
        <h2>Your Cart</h2>
        <ul style="list-style-type: none; padding: 0;">
            ${cart.map(
                (item, index) =>
                    `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></li>`
            ).join('')}
        </ul>
        <p>Total: $${cart.reduce((total, item) => total + item.price, 0)}</p>
    `;
}

// Function to remove items from the cart
function removeFromCart(cartIndex) {
    cart.splice(cartIndex, 1);
    alert('Item removed from cart!');
    updateCartView();
}
