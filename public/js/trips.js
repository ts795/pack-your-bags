// Show the add trip page
$("#add-trip-button").click(function () {
    document.location.replace('/trip/add');
});


// Delete the trip
$("#delete-confirmation-button").click(async function () {
    $('#confirmDeleteTripModal').modal('toggle');
    // Delete the trip
    // Get the ID for the trip from the route
    var urlComponents = window.location.href.split('/');
    var tripId = urlComponents[urlComponents.length - 1];
    const response = await fetch('/trip/' + tripId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Show the trip page
        document.location.replace('/trip');
    } else {
        alert('Failed to delete trip.');
    }
});

// Add a sign out
$("#sign-out-button").click(async function () {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Show the home page
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
});
$(document).on("click", ".trip", function () {
    var tripId = $(this).attr("data-trip-id");
    document.location.replace('/trip/' + tripId);
});

$(function () {
    $("#needByDate").datepicker({
        showWeek: true,
        firstDay: 1
    });
});

const listFormHandler = async (event) => {
    event.preventDefault();

    const item_title = document.querySelector('#floatingTextarea').value.trim();
    const item_description = document.querySelector('#floatingItemDescription').value.trim();
    const date_needby = document.querySelector('#needByDate').value.trim();
    var completion = false;
    var urlComponents = window.location.href.split('/');
    var trip_id = urlComponents[urlComponents.length - 1];

    // Make sure the itemTitleForm and itemDescriptionForm are filled in
    if (item_title) {
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({ item_title, item_description, date_needby, completion, trip_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/trip/' + trip_id);
        } else {
            alert('Failed to add items in.');
        }
    }
};
var formElement = document.querySelector('#addItemForm');
if (formElement) {
    formElement.addEventListener('submit', listFormHandler);
}
$('input:checkbox').change(
    async function () {
        var completion = $(this).is(':checked');
        var itemId = $(this).attr("data-item-id");
        const response = await fetch('/api/items/' + itemId, {
            body: JSON.stringify({ completion }),
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // Show the home page
            console.log("Successfully updated status");
        } else {
            alert('Failed to update check box');
        }
    });
