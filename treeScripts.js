const plants = [
    { id: 1, name: 'Blue Elderberry', image: 'plants/Trees/Blue Elderberry.png', price: '$8.00', description: 'Blue Elderberry is found in forests' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Desert Willow is found in deserts' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Hollyleaf Cherry is found in North America' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Oregon Grape is found in Oregon' },
    { id: 5, name: 'Valley Oak', image: 'plants/Trees/Valley Oak.jpeg', price: '$11.00', description: 'Valley Oak is found in North America' },
    { id: 1, name: 'Blue Elderberry', image: 'plants/Trees/Blue Elderberry.png', price: '$8.00', description: 'Blue Elderberry is found in forests' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Desert Willow is found in deserts' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Hollyleaf Cherry is found in North America' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Oregon Grape is found in Oregon' },
    { id: 5, name: 'Valley Oak', image: 'plants/Trees/Valley Oak.jpeg', price: '$11.00', description: 'Valley Oak is found in North America' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Desert Willow is found in deserts' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Hollyleaf Cherry is found in North America' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Oregon Grape is found in Oregon' },
    { id: 5, name: 'Valley Oak', image: 'plants/Trees/Valley Oak.jpeg', price: '$11.00', description: 'Valley Oak is found in North America' },
    { id: 1, name: 'Blue Elderberry', image: 'plants/Trees/Blue Elderberry.png', price: '$8.00', description: 'Blue Elderberry is found in forests' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Desert Willow is found in deserts' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Hollyleaf Cherry is found in North America' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Oregon Grape is found in Oregon' },
    
];

const plantsPerPage = 10;
let currentPage = 1;

function renderPlants() {
    const start = (currentPage - 1) * plantsPerPage;
    const end = start + plantsPerPage;
    const paginatedPlants = plants.slice(start, end);

    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = '';

    paginatedPlants.forEach(plant => {
        const plantDiv = document.createElement('div');
        plantDiv.className = 'plant';
        plantDiv.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}" onclick="viewDetails(${plant.id})">
            <h3>${plant.name}</h3>
            <p>${plant.description}</p>
            <p><strong>Price:</strong> ${plant.price}</p>
            <button onclick="addToCart(${plant.id})">Add to Cart</button>
        `;
        plantList.appendChild(plantDiv);
    });

    document.getElementById('pageInfo').innerText = `Page ${currentPage} of ${Math.ceil(plants.length / plantsPerPage)}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = end >= plants.length;
}

function addToCart(plantId) {
    const plant = plants.find(p => p.id === plantId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(plant);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${plant.name} has been added to your cart.`);
}

function viewDetails(plantId) {
    const selectedPlant = plants.find(plant => plant.id === plantId);
    localStorage.setItem('selectedPlant', JSON.stringify(selectedPlant));
    window.location.href = 'details.html';
}

function changePage(direction) {
    currentPage += direction;
    renderPlants();
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlants();
});
