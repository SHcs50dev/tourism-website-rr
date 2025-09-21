document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth Scrolling for Navigation ---
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          // Prevent default hash behavior
          e.preventDefault(); 
          const targetId = this.getAttribute('href');
          // Check if it's an internal link
          if (targetId.startsWith('#')) {
              const targetSection = document.querySelector(targetId);
              if (targetSection) {
                  window.scrollTo({
                      top: targetSection.offsetTop - 70, // Adjust for sticky header
                      behavior: 'smooth'
                  });
              }
          } else {
              // If it's an external link, just navigate
              window.location.href = targetId;
          }
          // Close mobile menu after clicking
          if (document.querySelector('.nav-links.active')) {
              document.querySelector('.nav-links').classList.remove('active');
          }
      });
  });

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
  });

  // --- Endorsements Slider (Carousel) ---
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function moveSlider() {
      currentIndex = (currentIndex + 1) % slides.length;
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  // Auto-advance the slider every 5 seconds
  setInterval(moveSlider, 5000);

  // --- Form Validation (Simple) ---
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
      registrationForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent form from submitting normally
          
          // Basic validation
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const aadhaar = document.getElementById('aadhaar').value;
          
          if (name && email && phone && aadhaar) {
              alert('Registration Successful! Thank you for joining us.');
              this.reset(); // Clear the form
          } else {
              alert('Please fill out all fields.');
          }
      });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent form from submitting normally
          alert('Login functionality coming soon!');
          this.reset(); // Clear the form
      });
  }
});