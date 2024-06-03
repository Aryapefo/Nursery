document.addEventListener('DOMContentLoaded', () => {
    const checkoutList = document.getElementById('checkout-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        checkoutList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const plantDiv = document.createElement('div');
            plantDiv.className = 'plant';
            plantDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> ${item.price}</p>
            `;
            checkoutList.appendChild(plantDiv);
        });
    }

    document.getElementById('checkout-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; // Redirect to home page
    });
});
