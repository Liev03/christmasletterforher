let currentImageIndex = 1;
const images = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
    document.getElementById("image4")
];

const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

const santaText = document.getElementById("santa-text");  // Reference to the text element

function updateButtonState() {
    // Disable Previous button on the first page
    if (currentImageIndex === 1) {
        leftButton.disabled = true; // Disable left button
    } else {
        leftButton.disabled = false; // Enable left button
    }

    // Show/Hide Santa text based on the current image index
    if (currentImageIndex === 4) {
        santaText.style.display = "block"; // Show the text on the 4th image
    } else {
        santaText.style.display = "none"; // Hide the text on other images
    }
}

function showNextImage() {
    // When on the last image (4th), cycle back to the first image
    if (currentImageIndex === images.length) {
        images[currentImageIndex - 1].style.display = "none"; // Hide current image
        currentImageIndex = 1; // Reset to the first image
        images[currentImageIndex - 1].style.display = "block"; // Show the first image
    } else {
        // Show the next image
        images[currentImageIndex - 1].style.display = "none";
        currentImageIndex++;
        images[currentImageIndex - 1].style.display = "block";
    }
    updateButtonState(); // Update button states after changing the image
}

function showPreviousImage() {
    if (currentImageIndex > 1) {
        images[currentImageIndex - 1].style.display = "none";
        currentImageIndex--;
        images[currentImageIndex - 1].style.display = "block";
    }
    updateButtonState(); // Update button states after changing the image
}

// Initialize button states on page load
updateButtonState();
