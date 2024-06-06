const plants = [
    { id: 1, name: 'Chalk Dudleya', image: 'plants/Succulents/Chalk Dudleya.jpeg', price: '$8.00', description: 'Dudleya pulverulenta is native to California and Baja California. Its range extends from extreme southern Monterey County southward to Punta Prieta in the central desert of Baja California.' },
    { id: 2, name: 'Coast Dudleya', image: 'plants/Succulents/Coast Dudleya.jpeg', price: '$10.00', description: 'Dudleya caespitosa is a succulent plant that is endemic to California, where it grows along the coastline in the southern half of the state.' },
    { id: 3, name: 'Fingertips', image: 'plants/Succulents/Fingertips.jpeg', price: '$9.00', description: 'Dudleya edulis is endemic to chaparral habitats, and is native to southwestern Southern California and slightly into northwestern Baja California.' },
    { id: 4, name: 'Rock Lettuce', image: 'plants/Succulents/Rock Lettuce.jpg', price: '$12.00', description: 'Dudleya cymosa is found in rock areas in the low elevations of the California mountains. ' },
    { id: 5, name: 'Santa Barbara Island Dudleya', image: 'plants/Succulents/Santa Barbara Island Dudleya.jpg', price: '$11.00', description: 'Dudleya traskiae is known only from Santa Barbara Island, California.' },
    { id: 6, name: 'Chalk Dudleya', image: 'plants/Succulents/Chalk Dudleya.jpeg', price: '$8.00', description: 'Dudleya pulverulenta is native to California and Baja California. Its range extends from extreme southern Monterey County southward to Punta Prieta in the central desert of Baja California.' },
    { id: 7, name: 'Coast Dudleya', image: 'plants/Succulents/Coast Dudleya.jpeg', price: '$10.00', description: 'Dudleya caespitosa is a succulent plant that is endemic to California, where it grows along the coastline in the southern half of the state.' },
    { id: 8, name: 'Fingertips', image: 'plants/Succulents/Fingertips.jpeg', price: '$9.00', description: 'Dudleya edulis is endemic to chaparral habitats, and is native to southwestern Southern California and slightly into northwestern Baja California.' },
    { id: 9, name: 'Rock Lettuce', image: 'plants/Succulents/Rock Lettuce.jpg', price: '$12.00', description: 'Dudleya cymosa is found in rock areas in the low elevations of the California mountains. ' },
    { id: 10, name: 'Santa Barbara Island Dudleya', image: 'plants/Succulents/Santa Barbara Island Dudleya.jpg', price: '$11.00', description: 'Dudleya traskiae is known only from Santa Barbara Island, California.' },
    { id: 11, name: 'Chalk Dudleya', image: 'plants/Succulents/Chalk Dudleya.jpeg', price: '$8.00', description: 'Dudleya pulverulenta is native to California and Baja California. Its range extends from extreme southern Monterey County southward to Punta Prieta in the central desert of Baja California.' },
    { id: 12, name: 'Coast Dudleya', image: 'plants/Succulents/Coast Dudleya.jpeg', price: '$10.00', description: 'Dudleya caespitosa is a succulent plant that is endemic to California, where it grows along the coastline in the southern half of the state.' },
    { id: 13, name: 'Fingertips', image: 'plants/Succulents/Fingertips.jpeg', price: '$9.00', description: 'Dudleya edulis is endemic to chaparral habitats, and is native to southwestern Southern California and slightly into northwestern Baja California.' },
    { id: 14, name: 'Rock Lettuce', image: 'plants/Succulents/Rock Lettuce.jpg', price: '$12.00', description: 'Dudleya cymosa is found in rock areas in the low elevations of the California mountains. ' },
    { id: 15, name: 'Santa Barbara Island Dudleya', image: 'plants/Succulents/Santa Barbara Island Dudleya.jpg', price: '$11.00', description: 'Dudleya traskiae is known only from Santa Barbara Island, California.' },
    { id: 16, name: 'Chalk Dudleya', image: 'plants/Succulents/Chalk Dudleya.jpeg', price: '$8.00', description: 'Dudleya pulverulenta is native to California and Baja California. Its range extends from extreme southern Monterey County southward to Punta Prieta in the central desert of Baja California.' },
    { id: 17, name: 'Coast Dudleya', image: 'plants/Succulents/Coast Dudleya.jpeg', price: '$10.00', description: 'Dudleya caespitosa is a succulent plant that is endemic to California, where it grows along the coastline in the southern half of the state.' },
    { id: 18, name: 'Fingertips', image: 'plants/Succulents/Fingertips.jpeg', price: '$9.00', description: 'Dudleya edulis is endemic to chaparral habitats, and is native to southwestern Southern California and slightly into northwestern Baja California.' },
    { id: 19, name: 'Rock Lettuce', image: 'plants/Succulents/Rock Lettuce.jpg', price: '$12.00', description: 'Dudleya cymosa is found in rock areas in the low elevations of the California mountains. ' },
    { id: 20, name: 'Santa Barbara Island Dudleya', image: 'plants/Succulents/Santa Barbara Island Dudleya.jpg', price: '$11.00', description: 'Dudleya traskiae is known only from Santa Barbara Island, California.' },
    { id: 21, name: 'Chalk Dudleya', image: 'plants/Succulents/Chalk Dudleya.jpeg', price: '$8.00', description: 'Dudleya pulverulenta is native to California and Baja California. Its range extends from extreme southern Monterey County southward to Punta Prieta in the central desert of Baja California.' },
    { id: 22, name: 'Coast Dudleya', image: 'plants/Succulents/Coast Dudleya.jpeg', price: '$10.00', description: 'Dudleya caespitosa is a succulent plant that is endemic to California, where it grows along the coastline in the southern half of the state.' },
    { id: 23, name: 'Fingertips', image: 'plants/Succulents/Fingertips.jpeg', price: '$9.00', description: 'Dudleya edulis is endemic to chaparral habitats, and is native to southwestern Southern California and slightly into northwestern Baja California.' },
    { id: 24, name: 'Rock Lettuce', image: 'plants/Succulents/Rock Lettuce.jpg', price: '$12.00', description: 'Dudleya cymosa is found in rock areas in the low elevations of the California mountains. ' },
    { id: 25, name: 'Santa Barbara Island Dudleya', image: 'plants/Succulents/Santa Barbara Island Dudleya.jpg', price: '$11.00', description: 'Dudleya traskiae is known only from Santa Barbara Island, California.' },
    { id: 26, name: 'Chalk Dudleya', image: 'plants/Succulents/Chalk Dudleya.jpeg', price: '$8.00', description: 'Dudleya pulverulenta is native to California and Baja California. Its range extends from extreme southern Monterey County southward to Punta Prieta in the central desert of Baja California.' },
    { id: 27, name: 'Coast Dudleya', image: 'plants/Succulents/Coast Dudleya.jpeg', price: '$10.00', description: 'Dudleya caespitosa is a succulent plant that is endemic to California, where it grows along the coastline in the southern half of the state.' },
    { id: 28, name: 'Fingertips', image: 'plants/Succulents/Fingertips.jpeg', price: '$9.00', description: 'Dudleya edulis is endemic to chaparral habitats, and is native to southwestern Southern California and slightly into northwestern Baja California.' },
    { id: 29, name: 'Rock Lettuce', image: 'plants/Succulents/Rock Lettuce.jpg', price: '$12.00', description: 'Dudleya cymosa is found in rock areas in the low elevations of the California mountains. ' },
    { id: 30, name: 'Santa Barbara Island Dudleya', image: 'plants/Succulents/Santa Barbara Island Dudleya.jpg', price: '$11.00', description: 'Dudleya traskiae is known only from Santa Barbara Island, California.' },
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
