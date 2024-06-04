document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = document.getElementById('ordered-items');
    const order = JSON.parse(localStorage.getItem('order')) || [];

    if (order.length === 0) {
        orderDetails.innerHTML = '<li>No items in the order.</li>';
    } else {
        order.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${item.name}</strong> - ${item.price}<br>
                ${item.description}
            `;
            orderDetails.appendChild(listItem);
        });
    }

    // Clear the order after displaying the order details
    localStorage.removeItem('order');
});

function goToHome() {
    window.location.href = 'index.html';
}
