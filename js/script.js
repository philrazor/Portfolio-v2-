// Select the menu icon (hamburger icon for mobile navigation) and the navbar (navigation menu)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle between adding/removing 'bx-x' class (which transforms the icon to an 'X') 
// and the 'active' class (which displays the navigation menu) when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Adds/removes 'bx-x' class to change icon
    navbar.classList.toggle('active'); // Adds/removes 'active' class to toggle the navbar
};

// Select all section elements and all navigation links
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Handle scrolling behavior
window.onscroll = () => {
    // Iterate over all sections to check which section is in the viewport
    sections.forEach(sec => {
        let top = window.scrollY; // Current scroll position
        let offset = sec.offsetTop - 150; // Section's top position minus an offset (for smoother scrolling)
        let height = sec.offsetHeight; // Section's height
        let id = sec.getAttribute('id'); // Get the section's ID

        // Check if the section is in the viewport (between offset and offset + height)
        if (top >= offset && top < offset + height) {
            // Remove the 'active' class from all navigation links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add the 'active' class to the navigation link that corresponds to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    // Sticky header effect: Add 'sticky' class to the header when the page is scrolled down by 100px or more
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // When scrolling, remove 'bx-x' from the menu icon and 'active' from the navbar to close the mobile menu
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize ScrollReveal animations with a configuration
ScrollReveal({
    // reset: true, // (Optional) If set to true, animations will reset on every scroll
    distance: '80px', // Distance for the element to travel during animation
    duration: 2000, // Duration of the animation in milliseconds
    delay: 200 // Delay before starting the animation
});

// Apply ScrollReveal for different elements coming from different origins
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Animates from the top
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Animates from the bottom
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' }); // Animates from the left
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); // Animates from the right

// Initialize the typing animation (Typed.js) for the text with class 'multiple-text'
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'DevOps Engineer', 'System Architect'], // Array of strings to type
    typeSpeed: 100, // Speed at which characters are typed
    backSpeed: 100, // Speed at which characters are deleted
    backDelay: 1000, // Delay before starting to delete characters
    loop: true // Loops the typing animation infinitely
});
