const form = document.getElementById("registration-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Reset error messages
    document.getElementById("username-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";

    // Username validation (at least 3 characters)
    if (username.length < 3) {
        document.getElementById("username-error").textContent = "Username must be at least 3 characters long.";
        return;
    }

    // Email validation (basic check for @ and .)
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").textContent = "Invalid email address.";
        return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Password do not match.";
        return;
    }
    if (password === confirmPassword) {
        alert("Registration successful!");
        document.getElementById("confirm-password-error").textContent = "";
        document.getElementById("password-error").textContent = "";

        return;
    }
   
}
