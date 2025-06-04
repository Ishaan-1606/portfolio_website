// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Scroll to the target element smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect: change background color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar'); // Get the navbar element

    // If the scroll position is greater than 50px, change background to a darker, more opaque color
    // Otherwise, revert to the initial semi-transparent color
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});
