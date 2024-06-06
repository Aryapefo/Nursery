document.addEventListener('DOMContentLoaded', () => {
    const checkoutList = document.getElementById('checkout-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

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

            const itemPrice = parseFloat(item.price.replace('$', ''));
            totalPrice += itemPrice;
        });
        totalPriceElement.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
    }

    document.getElementById('checkout-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const ccNumber = document.getElementById('cc-number').value;
        const ccRegex = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;

        if (!ccRegex.test(ccNumber)) {
            alert('Please enter a valid credit card number.');
            return;
        }

        alert('Order placed successfully!');
        localStorage.setItem('order', JSON.stringify(cart));
        localStorage.removeItem('cart');
        window.location.href = 'order-confirmation.html';
    });
});
