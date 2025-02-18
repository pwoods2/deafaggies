// photo-script.js
 
// Gallery Slideshow
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.gallery-item');

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

    // Hide all slides
    slides.forEach((slide, idx) => {
        if (idx === currentSlideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Automatically show the first slide on load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
});

// Next and previous button event listeners (if you have such buttons)
document.getElementById('next-btn').addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
});
document.getElementById('prev-btn').addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
});

// Optionally, auto-change slides every 3 seconds
setInterval(() => {
    showSlide(currentSlideIndex + 1);
}, 3000);
