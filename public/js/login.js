const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();

    // Make sure the username and password are filled in
    if (!username) {
        showAnAlert("Please enter your username");
        return;
    }

    if (!password) {
        showAnAlert("Please enter your password");
        return;
    }

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Show the trip page for the user if they logged in
        document.location.replace('/trip');
    } else {
        showAnAlert('Incorrect password or username.');
    }
};

document
    .querySelector('.sign-in-form')
    .addEventListener('submit', loginFormHandler);
