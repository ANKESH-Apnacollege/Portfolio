

JavaScript (script.js)


// Navigation Menu
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero Section Button
const heroButton = document.querySelector('#home button');

heroButton.addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Project Filter
const projectButtons = document.querySelectorAll('#projects .project');
const projectFilters = document.querySelectorAll('#projects .project-filter');

projectFilters.forEach((filter) => {
  filter.addEventListener('click', (e) => {
    const filterValue = filter.getAttribute('data-filter');
    projectButtons.forEach((button) => {
      if (button.getAttribute('data-category') === filterValue || filterValue === 'all') {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  });
});

// Contact Form
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Send email using your preferred email service
  console.log(name, email, message);
});

// Scroll to Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = 'Back to Top';
scrollTopButton.classList.add('scroll-top');

document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});





