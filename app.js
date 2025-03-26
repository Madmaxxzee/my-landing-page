<script>
  document.getElementById("leadForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Gather form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      projectPreferences: document.getElementById("projectPreferences").value,
      budget: document.getElementById("budget").value,
    };

    // Send data to the backend
    try {
      const response = await fetch("https://my-backend-ar9m.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the backend
      const result = await response.json();
      
      if (response.ok) {
        alert("Your submission was successful!");
        console.log(result); // For debugging purposes
      } else {
        alert("There was an error submitting the form. Please try again.");
        console.error("Error:", result.error);
      }
    } catch (error) {
      alert("There was an error submitting the form.");
      console.error("Error:", error);
    }
  });
</script>
