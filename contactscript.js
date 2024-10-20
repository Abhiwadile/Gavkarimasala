document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Display an alert with form data (This would be replaced with actual form handling, such as an email or database submission)
    alert(`Thank you for your message, ${name}!\nWe will get back to you soon.`);
    
    // Reset the form
    document.getElementById('contact-form').reset();
});


document.getElementById('whatsapp-order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const order = document.getElementById('order').value;

    const message = `Name: ${encodeURIComponent(name)}\nOrder: ${encodeURIComponent(order)}`;
    const phoneNumber = '919765867320'; // Replace with your phone number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
});
