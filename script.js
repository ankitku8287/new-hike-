function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && !isValidPhone(email)) {
        alert('Please enter a valid email address or phone number');
        return false;
    }
    
    // Basic password validation (minimum 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    
    // Here you would typically send the data to a server
    // For demo purposes, we'll just show a success message
    alert('Login successful!');
    return false; // Prevent form submission for this demo
}

function isValidPhone(phone) {
    // Basic phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Add password visibility toggle
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    
    // Prevent form submission on Enter key (for demo)
    document.getElementById('loginForm').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            validateForm();
        }
    });
});