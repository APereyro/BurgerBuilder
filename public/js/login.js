const signupFormHandler = async (event) => {
  console.log('signupFormHandler function called');
    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  console.log(email);
  console.log(password);
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email);
  console.log(password);
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/ingredients');
      } else {
        alert(response.statusText);
      }
    }
  };
  
    // Your code here 
    // switch these two order to get them to work 
    document.getElementById('login').addEventListener('submit', loginFormHandler);
    
