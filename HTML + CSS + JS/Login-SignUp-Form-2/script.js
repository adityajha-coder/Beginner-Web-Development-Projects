document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');

    // Event listener to show the Register form
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('active');
    });

    // Event listener to show the Login form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.remove('active');
    });

    // Prevent default form submission for demonstration
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Login form submitted (simulated)');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Register form submitted (simulated)');
    });
});
