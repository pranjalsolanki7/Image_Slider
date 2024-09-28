// Image Array
const images = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg"
];

let currentIndex = 0;

// Display the first image when the page loads
window.onload = function() {
    document.getElementById('slider-image').src = images[currentIndex];
    startAutoSlide();
};

// Function to go to the previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop back to last image
    }
    document.getElementById('slider-image').src = images[currentIndex];
}

// Function to go to the next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to the first image
    }
    document.getElementById('slider-image').src = images[currentIndex];
}

// Automatic Slideshow function
function startAutoSlide() {
    setInterval(function() {
        nextImage();
    }, 3000); // Change image every 7 seconds
}
