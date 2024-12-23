document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({behavior: 'smooth'});
        
        // Close menu after clicking a link (mobile)
        const navList = document.querySelector('nav ul');
        const hamburger = document.querySelector('.hamburger');
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// hamburger menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});