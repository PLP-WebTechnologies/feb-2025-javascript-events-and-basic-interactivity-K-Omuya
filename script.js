// Button click to change text and color
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function() {
    colorButton.textContent = "You clicked me!";
    colorButton.style.backgroundColor = "#FF5733";
});

// Hover effect on image gallery
const images = document.querySelectorAll("#gallery img");
images.forEach(image => {
    image.addEventListener("mouseover", function() {
        image.style.opacity = "0.7";
    });
    image.addEventListener("mouseout", function() {
        image.style.opacity = "1";
    });
});

// Keypress detection
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        alert("You pressed the Enter key!");
    }
});

// Double-click or long press secret action
colorButton.addEventListener("dblclick", function() {
    alert("Double-clicked! Secret action activated!");
});
// Get the form and its input fields
const form = document.getElementById("userForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Add an event listener to the form's submit event
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission until validation is done

    // Check if the email and password fields are empty
    if (!email.value || !password.value) {
        alert("All fields are required.");
    }
    // Check if the email contains the "@" symbol (basic email validation)
    else if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
    }
    // Check if the password is at least 8 characters long
    else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long.");
    }
    // If all checks pass, submit the form (this is a mock submission here)
    else {
        alert("Form submitted successfully!");
        // You can use the code below to actually submit the form if you need to:
        // form.submit();
    }
});
