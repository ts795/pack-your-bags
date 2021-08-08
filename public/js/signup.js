// The minimum required length of the password when signing up the user
const minRequiredPasswordLength = 8;

function showAnAlert(alertMessage) {
    var div = $('<div>');
    div.addClass(['alert', 'alert-warning', 'alert-dismissible', 'fade', 'show']);
    div.attr('role', 'alert');
    div.text(alertMessage);
    // add a dismiss button
    var dismiss = $('<button>');
    dismiss.attr('type', 'button');
    dismiss.attr('data-bs-dismiss', 'alert');
    dismiss.attr('aria-label', 'Close');
    dismiss.addClass('btn-close');
    div.append(dismiss);
    $('body').append(div);
}

const signUpFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();

    if (password.length < minRequiredPasswordLength) {
        //alert(`The password must be at least ${minRequiredPasswordLength} characters`);
        //$("#password-too-short-alert").show();
        showAnAlert(`The password must be at least ${minRequiredPasswordLength} characters`);
        return;
    }

    // Make sure the username and password are filled in
    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Show the trip page for the user if they logged in
            document.location.replace('/trip');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.sign-in-form')
    .addEventListener('submit', signUpFormHandler);
