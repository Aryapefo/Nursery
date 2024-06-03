function openARVisualizer() {
    document.getElementById('ar-visualizer').style.display = 'block';
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

function askGardener() {
    const responseArea = document.getElementById("gardener-response");
    responseArea.innerText =
        "This is a pre-defined response to common gardening questions.";
}

const responses = {
    "how to plant tomatoes":
        "Tomatoes need full sun and well-drained soil. Plant them after the last frost date.",
    "best fertilizer for roses":
        "Use a balanced 10-10-10 fertilizer or compost tea every four weeks.",
    "when to prune apple trees":
        "Prune apple trees in late winter to encourage spring growth.",
};

function getGardenerResponse() {
    const question = document.getElementById("question-box").value.toLowerCase();
    const responseArea = document.getElementById("gardener-response");
    const response =
        responses[question] ||
        "Sorry, I don't have an answer for that. Try another question!";
    responseArea.innerHTML = `<p>${response}</p>`;
}

// New functions for cart and pagination
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
            <p>${plant.description}</p>
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
