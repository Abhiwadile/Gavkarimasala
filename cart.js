// Initialize cart
function addToCart(name, price, image) {
    // Create the item object
    const item = { name, price, image };

    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(item);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count display
    document.getElementById('cart-count').innerText = cart.length;
}

// Update cart display on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    // Clear the cart items display
    cartItemsContainer.innerHTML = '';

    // Populate the cart items
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}" style="width: 100px;">
            <p>Price: $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
    });

    // Update the total price display
    totalPriceElement.innerText = total.toFixed(2);
}

// Call the function to display cart items when the cart page is loaded
document.addEventListener('DOMContentLoaded', displayCartItems);

