const plants = [
    { id: 1, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 2, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 3, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 4, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 5, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 6, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 7, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 8, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 9, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 10, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 11, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 12, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 13, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 14, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 15, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 16, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 17, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 18, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 19, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 20, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 21, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 22, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 23, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 24, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 25, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 26, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
    { id: 27, name: 'Giant Wildrye', image: 'plants/Grasses/Giant Wildrye.jpg', price: '$9.00', description: 'Leymus condensatus is native to eastern Oregon, California and northern Mexico.' },
    { id: 28, name: 'Purple Needlegrass', image: 'plants/Grasses/Purple Needlegrass.jpeg', price: '$12.00', description: 'Nassella pulchra, basionym Stipa pulchra is native to the U.S. state of California, where it occurs throughout the coastal hills, valleys, and mountain ranges.' },
    { id: 29, name: 'California Fescue', image: 'plants/Grasses/California Fescue.jpeg', price: '$8.00', description: 'Festuca californica is native to the U.S. states of California and Oregon, where it is a member of many plant communities, including chaparral and oak woodlands.' },
    { id: 30, name: 'Deer Grass', image: 'plants/Grasses/Deer Grass.jpeg', price: '$10.00', description: 'Muhlenbergia rigens is found in sandy or well-drained soils below 7,000 feet (2,100 m) in elevation in the Southwestern United States and parts of Mexico.' },
];

const plantsPerPage = 9;
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
