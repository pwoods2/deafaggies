// Gallery Slideshow
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.photo');

// Function to show the current slide and hide others
function showSlide(index) {
    // Ensure index wraps around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides and show the current one
    slides.forEach((slide, idx) => {
        if (idx === currentSlideIndex) {
            slide.style.display = 'block';  // Show the current slide
        } else {
            slide.style.display = 'none';   // Hide other slides
        }
    });
}

// Automatically show the first slide on load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
});

// Next and previous button event listeners
document.getElementById('next-btn').addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
});
document.getElementById('prev-btn').addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
});
