$(function () {
    $('a#play-option').on('click', function () {
        const src = $(this).attr('data-src');
        let iframe = `<iframe src="${src}">`;
        $('#reproductor').html(iframe);
        $('.hidden').removeClass('hidden');
    });

    $('a#btn-close').on('click', function () {
        $('#reproductor').empty();
        $('#close-reproductor').addClass('hidden');
    });
});