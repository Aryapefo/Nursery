
document.addEventListener('DOMContentLoaded', () => {
    const plantDetails = document.getElementById('plant-details');
    const selectedPlant = JSON.parse(localStorage.getItem('selectedPlant'));

    if (selectedPlant) {
        plantDetails.innerHTML = `
            <img src="${selectedPlant.image}" alt="${selectedPlant.name}">
            <h2>${selectedPlant.name}</h2>
            <p><strong>Price:</strong> ${selectedPlant.price}</p>
            <p><strong>Description:</strong> ${selectedPlant.description}</p>
        `;
    } else {
        plantDetails.innerHTML = '<p>No plant details available.</p>';
    }
});


function goBack() {
    window.history.back();
}
