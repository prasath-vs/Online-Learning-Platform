document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userType = document.getElementById("userType").value;

    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Basic password length validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Simulating authentication
    var users = {
        "admin": { email: "admin@example.com", password: "admin123" },
        "educator": { email: "educator@example.com", password: "educator123" },
        "general": { email: "user@example.com", password: "user123" }
    };

    var user = users[userType];

    if (!user || user.email !== email || user.password !== password) {
        alert("Invalid email or password.");
        return;
    }

    // If all validations pass, you can redirect the user or perform further actions
    alert("Login successful. Redirecting...");

    // For demonstration, let's redirect the user to a new page after 1 second
    setTimeout(function() {
        window.location.href = "dashboard.html"; // Redirect to dashboard page
    }, 1000);
});
