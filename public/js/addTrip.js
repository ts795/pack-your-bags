// Add Jquery date pickers
$(function () {
    $("#startDate").datepicker({
        showWeek: true,
        firstDay: 1
    });
});

$(function () {
    $("#endDate").datepicker({
        showWeek: true,
        firstDay: 1
    });
});

// Go back to the main homepage
$("#trip-back-button").click(function () {
    document.location.replace('/trip');
});

$("#add-trip-form").submit(async function (event) {
    event.preventDefault();
    // Get form information to post
    var location = $("#location").val();
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();

    // Make sure all fields are filled in
    if (!location) {
        showAnAlert("Please type in a location");
        return;
    }

    if (!startDate) {
        showAnAlert("Please enter a start date");
        return;
    }

    if (!endDate) {
        showAnAlert("Please enter an end date");
        return;
    }

    const response = await fetch('/trip/add', {
        method: 'POST',
        body: JSON.stringify({ location, startDate, endDate }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const jsonResponse = await response.json();
        // Show the trip page for the user if they logged in
        document.location.replace('/trip/' + jsonResponse.id);
    } else {
        alert('Failed to add trip.');
    }
});