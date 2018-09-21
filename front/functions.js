window.onload = function () {
    cargarLista();
}



function refrescaLista(array) {
    var tabla = "";
    $("#tbody").html(tabla);

    for (var i = 0; i < array.length; i++) {
        tabla +=
            "<tr>"
            + "<td>" + array[i].id + "</td>"
            + "<td>" + array[i].titulo + "</td>"
            + "<td>" + array[i].cantante + "</td>"
            + "<td>" + array[i].anio + "</td>"
            + "</tr>"
    }
    $("#tbody").html(tabla);
}

function cargarLista() {
    $.ajax({
        success: function (responseText) {
            refrescaLista((responseText));
        },
        type: "GET",
        url: 'https://juntasmeyro.000webhostapp.com/zzAPI3zz/api/index.php/cd/',
    });
}

function alta() {
    //var id = $("#id").val();  // es autoincrementable
    var cantante = $("#cantante").val();
    var titulo = $("#titulo").val();
    var anio = $("#anio").val();
    var foto = $("#foto").val();

    datos = {
        'cantante': cantante,
        'titulo': titulo,
        'anio': anio,
        'foto': foto,
    }

    $.ajax({
        success: function () {
           // cargarLista();
        },
        type: "POST",
        data: datos,
        url: 'https://juntasmeyro.000webhostapp.com/zzAPI3zz/api/index.php/cd/',
    });
}

function baja(index) {

    //"DELETE FROM `cds` WHERE `cds`.`id` = 13"


}
