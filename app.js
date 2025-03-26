document.getElementById("leadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Gather form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        projectPreferences: document.getElementById("projectPreferences").value,
        budget: document.getElementById("budget").value,
    };

    // Send data to the backend
    fetch("https://my-backend-ar9m.onrender.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Show a friendly message to the user
        document.getElementById("formMessage").innerHTML = "✅ Thank you! Your submission has been received.";
        document.getElementById("formMessage").style.color = "green"; // Make it visually stand out
        document.getElementById("leadForm").reset(); // Clear the form fields
    })
    .catch((error) => {
        document.getElementById("formMessage").innerHTML = "❌ Error submitting the form. Please try again.";
        document.getElementById("formMessage").style.color = "red";
        console.error("Error:", error);
    });
});
