const plants = [
    { id: 1, name: 'Lawngrass', image: 'grass1.jpg', price: '$8.00', description: 'Lawngrass is commonly found in your backyard' },
    { id: 2, name: 'Dewgrass', image: 'grass2.jpg', price: '$10.00', description: 'Dewgrass is a softer type of grass than lawngrass' },
    { id: 3, name: 'Tall grass', image: 'grass3.jpg', price: '$9.00', description: 'Tall grass is found in fields and forests' },
    { id: 4, name: 'Perennial ryegrass', image: 'grass4.jpg', price: '$12.00', description: 'Perennial ryegrass is found everywhere' },
    { id: 5, name: 'Bentgrass', image: 'grass5.jpg', price: '$11.00', description: 'Bentgrass is commonly found on coastlines' },
    { id: 6, name: 'Lawngrass', image: 'grass1.jpg', price: '$8.00', description: 'Lawngrass is commonly found in your backyard' },
    { id: 7, name: 'Dewgrass', image: 'grass2.jpg', price: '$10.00', description: 'Dewgrass is a softer type of grass than lawngrass' },
    { id: 8, name: 'Tall grass', image: 'grass3.jpg', price: '$9.00', description: 'Tall grass is found in fields and forests' },
    { id: 9, name: 'Perennial ryegrass', image: 'grass4.jpg', price: '$12.00', description: 'Perennial ryegrass is found everywhere' },
    { id: 10, name: 'Bentgrass', image: 'grass5.jpg', price: '$11.00', description: 'Bentgrass is commonly found on coastlines' },
    { id: 11, name: 'Lawngrass', image: 'grass1.jpg', price: '$8.00', description: 'Lawngrass is commonly found in your backyard' },
    { id: 12, name: 'Dewgrass', image: 'grass2.jpg', price: '$10.00', description: 'Dewgrass is a softer type of grass than lawngrass' },
    { id: 13, name: 'Tall grass', image: 'grass3.jpg', price: '$9.00', description: 'Tall grass is found in fields and forests' },
    { id: 14, name: 'Perennial ryegrass', image: 'grass4.jpg', price: '$12.00', description: 'Perennial ryegrass is found everywhere' },
    { id: 15, name: 'Bentgrass', image: 'grass5.jpg', price: '$11.00', description: 'Bentgrass is commonly found on coastlines' },
    { id: 16, name: 'Lawngrass', image: 'grass1.jpg', price: '$8.00', description: 'Lawngrass is commonly found in your backyard' },
    { id: 17, name: 'Dewgrass', image: 'grass2.jpg', price: '$10.00', description: 'Dewgrass is a softer type of grass than lawngrass' },
    { id: 18, name: 'Tall grass', image: 'grass3.jpg', price: '$9.00', description: 'Tall grass is found in fields and forests' },
    { id: 19, name: 'Perennial ryegrass', image: 'grass4.jpg', price: '$12.00', description: 'Perennial ryegrass is found everywhere' },
    { id: 20, name: 'Bentgrass', image: 'grass5.jpg', price: '$11.00', description: 'Bentgrass is commonly found on coastlines' },
    { id: 21, name: 'Lawngrass', image: 'grass1.jpg', price: '$8.00', description: 'Lawngrass is commonly found in your backyard' },
    { id: 22, name: 'Dewgrass', image: 'grass2.jpg', price: '$10.00', description: 'Dewgrass is a softer type of grass than lawngrass' },
    { id: 23, name: 'Tall grass', image: 'grass3.jpg', price: '$9.00', description: 'Tall grass is found in fields and forests' },
    { id: 24, name: 'Perennial ryegrass', image: 'grass4.jpg', price: '$12.00', description: 'Perennial ryegrass is found everywhere' },
    { id: 25, name: 'Bentgrass', image: 'grass5.jpg', price: '$11.00', description: 'Bentgrass is commonly found on coastlines' },
    { id: 26, name: 'Lawngrass', image: 'grass1.jpg', price: '$8.00', description: 'Lawngrass is commonly found in your backyard' },
    { id: 27, name: 'Dewgrass', image: 'grass2.jpg', price: '$10.00', description: 'Dewgrass is a softer type of grass than lawngrass' },
    { id: 28, name: 'Tall grass', image: 'grass3.jpg', price: '$9.00', description: 'Tall grass is found in fields and forests' },
    { id: 29, name: 'Perennial ryegrass', image: 'grass4.jpg', price: '$12.00', description: 'Perennial ryegrass is found everywhere' },
    { id: 30, name: 'Bentgrass', image: 'grass5.jpg', price: '$11.00', description: 'Bentgrass is commonly found on coastlines' },
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
