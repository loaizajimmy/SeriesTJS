$(function () {
    $("#checkbox1").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
        }
        else {
            $(this).attr('value', 'false');
        }
    });
});