document.getElementById("leadForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        projectPreferences: document.getElementById("projectPreferences").value,
        budget: document.getElementById("budget").value,
    };

    try {
        // Send data to backend
        const response = await fetch("https://my-backend-ar9m.onrender.com/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // Check if the request was successful
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("leadForm").reset();
        } else {
            alert("Error submitting form. Please try again.");
        }
    } catch (error) {
        alert("There was an error submitting the form.");
        console.error("Error:", error);
    }
});
