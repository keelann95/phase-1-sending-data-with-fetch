// Add your code here
function submitData(name, email) {
    // Define the endpoint URL
    const url = 'http://localhost:3000/users';
    
    // Create the fetch request
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      // Manipulate DOM to append new id
      document.body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch(error => {
      // Handle errors by appending error message to DOM
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
  }
  