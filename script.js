function openARVisualizer() {
	document.getElementById("ar-visualizer").style.display = "block";
	dragElement(document.getElementById("draggable-plant"));
}

function closeARVisualizer() {
	document.getElementById("ar-visualizer").style.display = "none";
}

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
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
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

const responses = {
	"how to plant tomatoes":
		"Tomatoes need full sun and well-drained soil. Plant them after the last frost date.",
	"best fertilizer for roses":
		"Use a balanced 10-10-10 fertilizer or compost tea every four weeks.",
	"when to prune apple trees":
		"Prune apple trees in late winter to encourage spring growth.",
	"what native plants are good for San Jose gardens":
		"San Jose is ideal for California poppies, Coyote mint, and Manzanita. These natives are drought-tolerant and great for attracting pollinators.",
	"how often to water succulents in hot climates":
		"In hot climates, water succulents once every 1-2 weeks, allowing the soil to dry out completely between waterings.",
	"identify pests on lemon trees":
		"Common pests on lemon trees include aphids, mites, and scale. Check for sticky leaves, webbing, or bumps on stems and leaves.",
	"tips for growing herbs indoors":
		"Provide herbs with at least six hours of sunlight, use well-draining pots, and water when the top inch of soil feels dry.",
	"how to test soil ph":
		"You can test soil pH using a home test kit from a garden store. Collect soil samples from different areas, mix them, and follow the kit instructions.",
	"best plants for a shade garden":
		"For shaded gardens, consider hostas, ferns, and astilbes. These plants thrive in low-light conditions and add texture and color.",
	"how to make compost at home":
		"Combine green waste (vegetable scraps, grass clippings) and brown waste (dry leaves, branches) in a bin. Turn the pile regularly and keep it moist.",
	"where to find native plants in San Jose":
		"You can find native plants at local nurseries like the Almaden Valley Nursery or through the California Native Plant Society's Santa Clara Valley Chapter.",
	"natural ways to repel garden pests":
		"Plant marigolds or garlic around your garden as they naturally repel pests like nematodes and aphids.",
	"when is the best time to plant spring bulbs in California":
		"In California, plant spring bulbs in the fall, around October or November, to ensure they bloom beautifully in spring.",
};

function getGardenerResponse() {
	document.querySelector(".response-area").style.display = "none";
	const question = document.getElementById("question-box").value.toLowerCase();
	const responseArea = document.getElementById("gardener-response");
	responseArea.style.display = "block";
	const response =
		responses[question] ||
		"Sorry, I don't have an answer for that. Try another question!";
	responseArea.innerHTML = `<p>${response}</p>`;
	document.getElementById("question-box").value = "";
}

const plantsPerPage = 25;
let currentPage = 1;

function renderPlants() {
	const start = (currentPage - 1) * plantsPerPage;
	const end = start + plantsPerPage;
	const paginatedPlants = plants.slice(start, end);

	const plantList = document.getElementById("plant-list");
	plantList.innerHTML = "";

	paginatedPlants.forEach((plant) => {
		const plantDiv = document.createElement("div");
		plantDiv.className = "plant";
		plantDiv.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}" onclick="viewDetails(${plant.id})">
            <h3>${plant.name}</h3>
            <p>${plant.description}</p>
            <button onclick="addToCart(${plant.id})">Add to Cart</button>
        `;
		plantList.appendChild(plantDiv);
	});

	document.getElementById(
		"pageInfo"
	).innerText = `Page ${currentPage} of ${Math.ceil(
		plants.length / plantsPerPage
	)}`;
	document.getElementById("prevPage").disabled = currentPage === 1;
	document.getElementById("nextPage").disabled = end >= plants.length;
}

function addToCart(plantId) {
	const plant = plants.find((p) => p.id === plantId);
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart.push(plant);
	localStorage.setItem("cart", JSON.stringify(cart));
	alert(`${plant.name} has been added to your cart.`);
}

function viewDetails(plantId) {
	const selectedPlant = plants.find((plant) => plant.id === plantId);
	localStorage.setItem("selectedPlant", JSON.stringify(selectedPlant));
	window.location.href = "details.html";
}

function changePage(direction) {
	currentPage += direction;
	renderPlants();
}

document.addEventListener("DOMContentLoaded", () => {
	renderPlants();
});

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("loadingScreen").style.display = "none";
	showLocationModal();
});

// window.onload = function () {
// 	document.getElementById("loadingScreen").style.display = "none";
// 	showLocationModal();
// };

function showLocationModal() {
	if (!sessionStorage.getItem("modalShown")) {
		document.getElementById("locationModal").style.display = "block";
		sessionStorage.setItem("modalShown", "true");
	}
}

document
	.getElementById("locationForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const location = document.getElementById("location").value;
		document.getElementById(
			"userLocation"
		).innerText = `Your location: ${location}`;
		closeModal();
		loadRecommendations(location);
	});

function closeModal() {
	// document.getElementById("loadingScreen").style.display = "none";
	document.getElementById("locationModal").style.display = "none";
	document.getElementById("loadingScreen").style.display = "block";
	setTimeout(() => {
		document.getElementById("loadingScreen").style.display = "none"; //show a fake loading screen
	}, 1500);
	document.getElementById("mainHeader").style.display = "block";
	document.getElementById("recommendationSection").style.display = "block";
}

function loadRecommendations(location) {
	const recommendations = {
		"San Jose": ["California Poppy", "Coyote Mint", "Manzanita"],
		default: ["Sunflower", "Lavender", "Rose"],
	};

	const plants = recommendations[location] || recommendations["default"];
	const container = document.getElementById("recommendedPlants");
	container.innerHTML = "";
	plants.forEach((plant) => {
		container.innerHTML += `<p>${plant}</p>`;
	});
}

const succulents = plants.filter((plant) => plant.type === "Succulent");
const grasses = plants.filter((plant) => plant.type === "Grass");

function renderPlants(plantList, containerId) {
	const container = document.getElementById(containerId);
	container.innerHTML = "";

	plantList.forEach((plant) => {
		const plantDiv = document.createElement("div");
		plantDiv.className = "plant-card";
		plantDiv.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p>${plant.description}</p>
            <p><strong>Price:</strong> ${plant.price}</p>
            <button onclick="addToCart(${plant.id})">Add to Cart</button>
        `;
		container.appendChild(plantDiv);
	});
}

function addToCart(plantId) {
	const plant = plants.find((p) => p.id === plantId);
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart.push(plant);
	localStorage.setItem("cart", JSON.stringify(cart));
	alert(`${plant.name} has been added to your cart.`);
}

document.addEventListener("DOMContentLoaded", () => {
	renderPlants(succulents, "succulent-list");
	renderPlants(grasses, "grass-list");
});

const plants = [
	{
		id: 1,
		name: "Lawngrass",
		image: "grass1.jpg",
		price: "$8.00",
		description: "Lawngrass is commonly found in your backyard",
		type: "Grass",
	},
	{
		id: 2,
		name: "Aloe Vera",
		image: "succulent1.jpg",
		price: "$15.00",
		description: "Aloe Vera is good for skin treatment and decoration",
		type: "Succulent",
	},
];
