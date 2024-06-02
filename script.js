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
