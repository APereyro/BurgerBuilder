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




document.getElementById('signup').addEventListener('submit', signupFormHandler);