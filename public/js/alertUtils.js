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
    $('body').prepend(div);
}