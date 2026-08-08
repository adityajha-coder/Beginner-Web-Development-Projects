document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // Add floating animation to shapes
    document.querySelectorAll('.shape').forEach((shape, index) => {
        shape.style.animationDuration = `${15 + index * 5}s`;
        shape.style.animationDelay = `${index * 2}s`;
    });

    // Add ripple effect on button click
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (e.target.type === 'submit') {
                e.preventDefault();
            }
            
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Form validation visual feedback
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value) {
                this.style.borderLeft = '3px solid #667eea';
            } else {
                this.style.borderLeft = 'none';
            }
        });
    });
});

function togglePanel() {
    const container = document.getElementById('container');
    container.classList.toggle("right-panel-active");
}
