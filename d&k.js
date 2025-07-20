// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Search Toggle
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchBox.classList.toggle('hide');
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
    searchBox.classList.add('hide');
  }
});

// Product click handler
document.querySelectorAll('.pro').forEach(product => {
  product.addEventListener('click', (e) => {
    // Don't navigate if clicking the button
    if (e.target.tagName !== 'BUTTON') {
      // In a real app, you would navigate to the product page
      // window.location.href = 'product.html?id=' + product.dataset.id;
      console.log('Navigating to product page');
    }
  });
});

// Add to cart functionality
document.querySelectorAll('.pro button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const product = e.target.closest('.pro');
    const productName = product.querySelector('h5').textContent;
    const productPrice = product.querySelector('h5:last-child').textContent;
    
    // In a real app, you would add to cart here
    alert(`${productName} added to cart! ${productPrice}`);
  });
});