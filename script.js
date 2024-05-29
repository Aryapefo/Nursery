function openARVisualizer() {
	alert("This would open the AR visualizer for the plant.");
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
