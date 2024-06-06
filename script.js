function openARVisualizer() {
	document.getElementById("ar-visualizer").style.display = "block";
	dragElement(document.getElementById("draggable-plant"));
}

function closeARVisualizer() {
	document.getElementById("ar-visualizer").style.display = "none";
}

function navigateTo(page) {
    window.location.href = page;
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
		"To successfully plant tomatoes, choose a sunny spot that receives at least 6-8 hours of direct sunlight per day. Ensure the soil is well-draining and enriched with compost or organic matter. Plant your tomatoes after the danger of frost has passed to give them the best start.",
	"best fertilizer for roses":
		"Roses thrive with fertilizers that provide a balanced nutrient mix, such as a 10-10-10 formula. Apply this type of fertilizer or a nutrient-rich compost tea every four weeks during the growing season. Avoid over-fertilization which can lead to excessive leaf growth at the expense of blooms.",
	"when to prune apple trees":
		"Prune apple trees during the late winter or early spring before new growth starts. This timing helps prevent the spread of diseases and allows the tree to heal quickly. Pruning during this period encourages healthy growth and fruit production in the coming season.",
	"what native plants are good for San Jose gardens":
		"San Jose gardens benefit from native plants like California poppies, Coyote mint, and Manzanita. These plants are well-adapted to the local climate, require less water, and support local wildlife. They are also excellent for creating a sustainable garden landscape.",
	"how often to water succulents in hot climates":
		"In hot climates, succulents should be watered once every one to two weeks, depending on the weather conditions. Allow the soil to completely dry out between waterings to prevent root rot. During extremely hot spells, occasional misting may be necessary to reduce stress.",
	"identify pests on lemon trees":
		"Common pests affecting lemon trees include aphids, spider mites, and scale insects. These pests often produce sticky honeydew and may cause leaf curling or yellowing. Regular inspections and treatments with appropriate organic or chemical insecticides can help manage these pests.",
	"tips for growing herbs indoors":
		"Growing herbs indoors requires bright light, ideally from a south-facing window. Use pots with good drainage and plant in a well-draining potting mix. Water the herbs when the top inch of soil is dry, and ensure they are not sitting in water.",
	"how to test soil ph":
		"Testing soil pH is crucial for understanding soil suitability for different plants. Use a home testing kit from a garden store, collecting multiple soil samples from different areas of your garden. Mix these samples together and follow the instructions provided with the kit for accurate results.",
	"best plants for a shade garden":
		"Shade gardens benefit from plants like hostas, ferns, and astilbes, which thrive in low-light conditions. These plants are not only adaptable to shade but also add significant texture and varying colors to your garden. They are ideal for under trees or in the shadow of buildings.",
	"how to make compost at home":
		"Making compost at home involves mixing green waste, such as kitchen scraps and grass clippings, with brown waste, like dry leaves and small branches. Keep the compost moist and turn it regularly to speed up the decomposition process. This practice will yield rich soil conditioner in a few months.",
	"where to find native plants in San Jose":
		"In San Jose, native plants can be sourced from local nurseries such as Almaden Valley Nursery or organizations like the California Native Plant Society's Santa Clara Valley Chapter. These sources often provide a variety of plants suited for the local climate and soil conditions.",
	"natural ways to repel garden pests":
		"Natural methods to repel garden pests include planting marigolds or garlic among your other plants. These plants emit natural odors that deter common pests like nematodes and aphids, helping to keep your garden healthy without the use of chemicals.",
	"when is the best time to plant spring bulbs in California":
		"The optimal time to plant spring bulbs in California is during the fall, specifically around October or November. Planting during this period allows the bulbs to establish roots and take full advantage of the rainy winter season, leading to vibrant blooms in spring.",
};

function showResponse(questionKey) {
	const responseArea = document.getElementById("gardener-response");
	responseArea.style.display = "block";
	responseArea.innerHTML = `<p>${responses[questionKey]}</p>`;
	document.getElementById("example-questions").style.display = "none";
}

function getGardenerResponse() {
	document.querySelector(".response-area").style.display = "none";
	const question = document.getElementById("question-box").value.toLowerCase();
	showResponse(question);
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

function successMessage(event) {
	event.preventDefault();
	document.getElementById("helpForm").style.display = "none";
	document.getElementById("successMessage").style.display = "block";
}

