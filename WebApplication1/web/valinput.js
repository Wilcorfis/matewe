
$(document).ready(function () {
    var boton_rut;
    boton_rut = $('#master');
    boton_rut.on('click', function () {
        var valor_input;
        valor_input = window.parent.document.getElementById('prueba').value;
        if (valor_input === '') {
            alert('No Ingresaste nada .Solo se admiten numeros enteros');
                    
        }
    });

});

