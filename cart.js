document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const plantDiv = document.createElement('div');
            plantDiv.className = 'plant';
            plantDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartList.appendChild(plantDiv);
        });
    }
});

function removeFromCart(plantId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== plantId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Reload the page to update the cart
}

function goToCheckout() {
    window.location.href = 'checkout.html';
}
