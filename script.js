// Mobile Menu Toggle Script
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Get all navbar links
  const navLinks = document.querySelectorAll('.navbar a');

  // Add event listener for each navbar link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent the default link behavior
      e.preventDefault();

      // Get the target section ID from the href attribute
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Define sections to animate
  const sections = document.querySelectorAll('section');
  
  // Create an intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class when the section is in view
        entry.target.classList.add(entry.target.dataset.animation);
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the section is in view
  
  // Observe each section with a specific animation class
  sections.forEach(section => {
    observer.observe(section);
  });
});



