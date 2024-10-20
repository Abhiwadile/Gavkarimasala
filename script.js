let slideIndex = 0;
const slides = document.querySelectorAll('.banner-img');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

// Auto-slide every 3 seconds (3000 ms)
setInterval(nextSlide, 3000);

// Initially show the first slide
showSlide(slideIndex);

// script.js

let cartCount = 0;

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productName = productCard.getAttribute('data-name');
        const productPrice = productCard.getAttribute('data-price');
        
        // Increment cart count
        cartCount++;
        updateCartCount();

        // Optional: Alert the user
        alert(`${productName} has been added to your cart for $${productPrice}!`);
    });
});

// Slide functionality for the banner
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.banner-img');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.banner-img');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.banner-img');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Smooth scroll to products section when "Shop Now" is clicked
document.getElementById('shop-now').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});


