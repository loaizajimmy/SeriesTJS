$(function () {

    /**
     * Cambia el valor del check en True o False
     */
    $("#enEmision").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
        }
        else {
            $(this).attr('value', 'false');
        }
    });

    /**
     * Data tooltips en enlaces
     */
    $('a[data-toggle="tooltip"]').tooltip();

    /**
     * Ejecuta el DataTables
     */
    $('#tablaTemporadas').DataTable();

    $('a.nav-link').on('click', function () {
        $('li.nav-item.active').removeClass('active');
        $(this).parent().addClass('active');
    });

    $("#formEdit").submit(function () {
        editSerie();
    });


});

function editSerie() {
    let data = $('#formEdit').serializeArray();
    console.log(data);
    $.ajax({
        type: 'PUT',
        url: `/series/edit/${data[0].value}`,
        contentType: 'application/json',
        async: false,
        data: JSON.stringify({
            nombre: data[1].value,
            fechaEstreno: data[2].value,
            genero: data[4].value,
            imagen: data[5].value
        }),
        dataType: 'json',
        success: function (data) {
            alert('Update Successfully');
        }
    });


}