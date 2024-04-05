// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const companyVisionSection = document.getElementById('home');

    companyVisionSection.addEventListener('click', function() {
        // 在这里添加你想要执行的动作或效果
        alert('Welcome to YoVenture!');
    });
});


// Form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorDiv = document.getElementById('error');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        errorDiv.textContent = 'Please fill out all fields';
        return;
    }

    // Your code for form submission goes here...
    // You can use AJAX to submit the form data to your server
});
