// Function to validate user inputs
function validateInputs() {
    // Get values from input fields
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let zipCode = document.getElementById("zipCode").value;

    // Combine first and last names with a space in between
    let fullName = firstName + " " + lastName;

    // Check if the full name exceeds 20 characters
    if (fullName.length > 20) {
        alert("Full name must be 20 characters or less.");
        return; // Stop execution if invalid
    }

    // Regular expression to check if zip code is exactly 5 digits
    let zipCodePattern = /^\d{5}$/;
    if (!zipCodePattern.test(zipCode)) {
        alert("Please enter a valid 5-digit zip code.");
        return; // Stop if execution invalid
    }

    // If both inputs are valid, display the secret message
    displaySecretMessage();
}

// Function to display the secret message
function displaySecretMessage() {
    // Show the secret message "RaspberryPi" after validation passes
    document.getElementById("result").innerText = "Congratulations! Your secret message is: RaspberryPi";
}
