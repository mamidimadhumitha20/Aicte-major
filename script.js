// Get form elements
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Event Listener for Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form submission
    validateForm();
});

// Main validation function
function validateForm() {
    let isValid = true;

    // Name Validation
    if (nameInput.value.length < 5) {
        showError("nameError", "Name must be at least 5 characters");
        isValid = false;
    } else {
        clearError("nameError");
    }

    // Email Validation
    if (!emailInput.value.includes("@")) {
        showError("emailError", "Enter a valid email address");
        isValid = false;
    } else {
        clearError("emailError");
    }

    // Phone Validation
    if (
        phoneInput.value.length !== 10 ||
        phoneInput.value === "123456789" ||
        isNaN(phoneInput.value)
    ) {
        showError("phoneError", "Enter a valid 10-digit phone number");
        isValid = false;
    } else {
        clearError("phoneError");
    }

    // Password Validation
    const password = passwordInput.value.toLowerCase();
    const name = nameInput.value.toLowerCase();

    if (
        password.length < 8 ||
        password === "password" ||
        password.includes(name)
    ) {
        showError("passwordError", "Password is not strong");
        isValid = false;
    } else {
        clearError("passwordError");
    }

    // Confirm Password Validation
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError("confirmPasswordError", "Passwords do not match");
        isValid = false;
    } else {
        clearError("confirmPasswordError");
    }

    // If everything is valid
    if (isValid) {
        alert("Registration Successful!");
        form.reset();
    }
}

// Function to show error
function showError(id, message) {
    document.getElementById(id).innerText = message;
}

// Function to clear error
function clearError(id) {
    document.getElementById(id).innerText = "";
}
