const plants = [
    { id: 1, name: 'Seasonal Agave', image: 'plant6.jpg', price: '$8.00', description: 'Seasonal Agave is commonly found in deserts' },
    { id: 2, name: 'Agave', image: 'plant7.jpg', price: '$10.00', description: 'Agave is found in deserts' },
    { id: 3, name: 'Sempervivum', image: 'plant8.jpg', price: '$9.00', description: 'Sempervivum is found in Southern Europe' },
    { id: 4, name: 'Haworthia', image: 'plant9.jpg', price: '$12.00', description: 'Haworthia is found in Southern Africa' },
    { id: 5, name: 'Echeveria', image: 'plant10.jpg', price: '$11.00', description: 'Echeveria is found in North America' },
    { id: 6, name: 'Seasonal Agave', image: 'plant6.jpg', price: '$8.00', description: 'Seasonal Agave is commonly found in deserts' },
    { id: 7, name: 'Agave', image: 'plant7.jpg', price: '$10.00', description: 'Agave is found in deserts' },
    { id: 8, name: 'Sempervivum', image: 'plant8.jpg', price: '$9.00', description: 'Sempervivum is found in Southern Europe' },
    { id: 9, name: 'Haworthia', image: 'plant9.jpg', price: '$12.00', description: 'Haworthia is found in Southern Africa' },
    { id: 10, name: 'Echeveria', image: 'plant10.jpg', price: '$11.00', description: 'Echeveria is found in North America' },
    { id: 11, name: 'Seasonal Agave', image: 'plant6.jpg', price: '$8.00', description: 'Seasonal Agave is commonly found in deserts' },
    { id: 12, name: 'Agave', image: 'plant7.jpg', price: '$10.00', description: 'Agave is found in deserts' },
    { id: 13, name: 'Sempervivum', image: 'plant8.jpg', price: '$9.00', description: 'Sempervivum is found in Southern Europe' },
    { id: 14, name: 'Haworthia', image: 'plant9.jpg', price: '$12.00', description: 'Haworthia is found in Southern Africa' },
    { id: 15, name: 'Echeveria', image: 'plant10.jpg', price: '$11.00', description: 'Echeveria is found in North America' },
    { id: 16, name: 'Seasonal Agave', image: 'plant6.jpg', price: '$8.00', description: 'Seasonal Agave is commonly found in deserts' },
    { id: 17, name: 'Agave', image: 'plant7.jpg', price: '$10.00', description: 'Agave is found in deserts' },
    { id: 18, name: 'Sempervivum', image: 'plant8.jpg', price: '$9.00', description: 'Sempervivum is found in Southern Europe' },
    { id: 19, name: 'Haworthia', image: 'plant9.jpg', price: '$12.00', description: 'Haworthia is found in Southern Africa' },
    { id: 20, name: 'Echeveria', image: 'plant10.jpg', price: '$11.00', description: 'Echeveria is found in North America' },
    { id: 21, name: 'Seasonal Agave', image: 'plant6.jpg', price: '$8.00', description: 'Seasonal Agave is commonly found in deserts' },
    { id: 22, name: 'Agave', image: 'plant7.jpg', price: '$10.00', description: 'Agave is found in deserts' },
    { id: 23, name: 'Sempervivum', image: 'plant8.jpg', price: '$9.00', description: 'Sempervivum is found in Southern Europe' },
    { id: 24, name: 'Haworthia', image: 'plant9.jpg', price: '$12.00', description: 'Haworthia is found in Southern Africa' },
    { id: 25, name: 'Echeveria', image: 'plant10.jpg', price: '$11.00', description: 'Echeveria is found in North America' },
    { id: 26, name: 'Seasonal Agave', image: 'plant6.jpg', price: '$8.00', description: 'Seasonal Agave is commonly found in deserts' },
    { id: 27, name: 'Agave', image: 'plant7.jpg', price: '$10.00', description: 'Agave is found in deserts' },
    { id: 28, name: 'Sempervivum', image: 'plant8.jpg', price: '$9.00', description: 'Sempervivum is found in Southern Europe' },
    { id: 29, name: 'Haworthia', image: 'plant9.jpg', price: '$12.00', description: 'Haworthia is found in Southern Africa' },
    { id: 30, name: 'Echeveria', image: 'plant10.jpg', price: '$11.00', description: 'Echeveria is found in North America' },
];

const plantsPerPage = 25;
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
        `;
        plantDiv.addEventListener('click', () => viewDetails(plant.id));
        plantList.appendChild(plantDiv);
    });

    document.getElementById('pageInfo').innerText = `Page ${currentPage} of ${Math.ceil(plants.length / plantsPerPage)}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = end >= plants.length;
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