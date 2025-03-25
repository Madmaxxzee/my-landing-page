document.getElementById("leadForm").addEventListener("submit", function (event) {
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
    fetch('http://localhost:3000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      alert("Your submission was successful!");
      console.log(data); // For debugging purposes
    })
    .catch((error) => {
      alert("There was an error submitting the form.");
      console.error("Error:", error);
    });
  });
  