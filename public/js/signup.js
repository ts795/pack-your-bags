// The minimum required length of the password when signing up the user
const minRequiredPasswordLength = 8;

const signUpFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();

    if (password.length < minRequiredPasswordLength) {
        showAnAlert(`The password must be at least ${minRequiredPasswordLength} characters`);
        return;
    }

    if (!username) {
        showAnAlert("Please enter your username");
        return;
    }

    const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Show the trip page for the user if they logged in
        document.location.replace('/trip');
    } else {
        // Get JSON to see if there is an error message
        const jsonResponse = await response.json();
        if (jsonResponse.message) {
            showAnAlert(jsonResponse.message);
        } else {
            showAnAlert('Failed to create an account.');
        }
    }
};

document
    .querySelector('.sign-in-form')
    .addEventListener('submit', signUpFormHandler);
