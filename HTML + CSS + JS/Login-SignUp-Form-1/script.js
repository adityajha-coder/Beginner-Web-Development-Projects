document.addEventListener('DOMContentLoaded', function() {
    const authContainer = document.getElementById('auth-container');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const forgotForm = document.getElementById('forgot-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const forgotPassword = document.getElementById('forgot-password');
    const backToLogin = document.getElementById('back-to-login');

    // Toggle between login and signup forms
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        forgotForm.style.display = 'none';
        authContainer.style.maxWidth = '450px';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        forgotForm.style.display = 'none';
        authContainer.style.maxWidth = '450px';
    });

    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        forgotForm.style.display = 'block';
        authContainer.style.maxWidth = '450px';
    });

    backToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        forgotForm.style.display = 'none';
        authContainer.style.maxWidth = '450px';
    });

    // Form submission handling
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorElement = document.getElementById('login-error');
        const successElement = document.getElementById('login-success');

        // Simple validation
        if (!email || !password) {
            errorElement.textContent = 'Please fill in all fields.';
            errorElement.style.display = 'block';
            successElement.style.display = 'none';
            return;
        }

        // Simulate login
        errorElement.style.display = 'none';
        successElement.textContent = 'Login successful!';
        successElement.style.display = 'block';

        // Reset form
        this.reset();
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const errorElement = document.getElementById('signup-error');
        const successElement = document.getElementById('signup-success');

        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
            errorElement.textContent = 'Please fill in all fields.';
            errorElement.style.display = 'block';
            successElement.style.display = 'none';
            return;
        }

        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match.';
            errorElement.style.display = 'block';
            successElement.style.display = 'none';
            return;
        }

        // Simulate signup
        errorElement.style.display = 'none';
        successElement.textContent = 'Account created successfully!';
        successElement.style.display = 'block';

        // Reset form
        this.reset();
    });

    document.getElementById('forgotForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgot-email').value;
        const errorElement = document.getElementById('forgot-error');
        const successElement = document.getElementById('forgot-success');

        // Simple validation
        if (!email) {
            errorElement.textContent = 'Please enter your email.';
            errorElement.style.display = 'block';
            successElement.style.display = 'none';
            return;
        }

        // Simulate password reset
        errorElement.style.display = 'none';
        successElement.textContent = 'Password reset link sent to your email!';
        successElement.style.display = 'block';

        // Reset form
        this.reset();
    });
});
