const plants = [
    { id: 1, name: 'Blue Elderberry', image: 'plants/Trees/Blue Elderberry.png', price: '$8.00', description: 'S. cerulea is native to the Western United States, northwestern Mexico, and British Columbia. It is found from the Pacific coasts, through California and the Great Basin, to Montana, Wyoming, Texas and Oklahoma.' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Chilopsis linearis can be found through much of the southwestern United States and northern Mexico. It is usually found below 5,000 feet (1,500 m).' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Prunus ilicifolia is native to California chaparral and foothill woodlands along the Coast Ranges below 1,600 m (5,200 ft).' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Berberis aquifolium is a native plant in the North American West from Southeast Alaska to Northern California to central New Mexico, often occurring in the understory of Douglas-fir forests.' },
    { id: 5, name: 'Valley Oak', image: 'plants/Trees/Valley Oak.jpeg', price: '$11.00', description: 'The Valley Oak is widely distributed in the California Central Valley and many smaller valleys such as the San Fernando Valley.' },
    { id: 1, name: 'Blue Elderberry', image: 'plants/Trees/Blue Elderberry.png', price: '$8.00', description: 'S. cerulea is native to the Western United States, northwestern Mexico, and British Columbia. It is found from the Pacific coasts, through California and the Great Basin, to Montana, Wyoming, Texas and Oklahoma.' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Chilopsis linearis can be found through much of the southwestern United States and northern Mexico. It is usually found below 5,000 feet (1,500 m).' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Prunus ilicifolia is native to California chaparral and foothill woodlands along the Coast Ranges below 1,600 m (5,200 ft).' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Berberis aquifolium is a native plant in the North American West from Southeast Alaska to Northern California to central New Mexico, often occurring in the understory of Douglas-fir forests.' },
    { id: 5, name: 'Valley Oak', image: 'plants/Trees/Valley Oak.jpeg', price: '$11.00', description: 'The Valley Oak is widely distributed in the California Central Valley and many smaller valleys such as the San Fernando Valley.' },
    { id: 1, name: 'Blue Elderberry', image: 'plants/Trees/Blue Elderberry.png', price: '$8.00', description: 'S. cerulea is native to the Western United States, northwestern Mexico, and British Columbia. It is found from the Pacific coasts, through California and the Great Basin, to Montana, Wyoming, Texas and Oklahoma.' },
    { id: 2, name: 'Desert Willow', image: 'plants/Trees/Desert Willow.jpg', price: '$10.00', description: 'Chilopsis linearis can be found through much of the southwestern United States and northern Mexico. It is usually found below 5,000 feet (1,500 m).' },
    { id: 3, name: 'Hollyleaf Cherry', image: 'plants/Trees/Hollyleaf Cherry.jpeg', price: '$9.00', description: 'Prunus ilicifolia is native to California chaparral and foothill woodlands along the Coast Ranges below 1,600 m (5,200 ft).' },
    { id: 4, name: 'Oregon Grape', image: 'plants/Trees/Oregon Grape.jpeg', price: '$12.00', description: 'Berberis aquifolium is a native plant in the North American West from Southeast Alaska to Northern California to central New Mexico, often occurring in the understory of Douglas-fir forests.' },
    { id: 5, name: 'Valley Oak', image: 'plants/Trees/Valley Oak.jpeg', price: '$11.00', description: 'The Valley Oak is widely distributed in the California Central Valley and many smaller valleys such as the San Fernando Valley.' },
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
            <img src="${plant.image}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p>${plant.description}</p>
            <p><strong>Price:</strong> ${plant.price}</p>
            <button onclick="addToCart(${plant.id})">Add to Cart</button>
            <button onclick="openARVisualizer('${plant.image}')">View in AR</button>  <!-- Added button here -->
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

function openARVisualizer(imgSrc) {
    document.getElementById('ar-visualizer').style.display = 'block';
    document.getElementById('draggable-plant').src = imgSrc;  // Change source dynamically
    dragElement(document.getElementById("draggable-plant"));
}


function closeARVisualizer() {
    document.getElementById('ar-visualizer').style.display = 'none';
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // New position calculations will be within the modal:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}