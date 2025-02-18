// Get all navigation links and content sections
const navLinks = document.querySelectorAll('.dropdown-content a');
const contentSections = document.querySelectorAll('#content > .content-section');

// Event listener for each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior

        // Get the ID of the target section from the link's href attribute
        const targetSectionId = this.getAttribute('href').substring(1);

        // Hide all content sections
        contentSections.forEach(section => section.style.display = 'none');

        // Show the target content section
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});

// Load a section based on the URL hash, or show the default section ('home')
const defaultSectionId = window.location.hash ? window.location.hash.substring(1) : 'home';

// Hide all sections initially
contentSections.forEach(section => section.style.display = 'none');

// Show the section that matches the URL hash, or the default 'home' section
document.getElementById(defaultSectionId)?.style.display = 'block';
