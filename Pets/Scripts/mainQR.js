var miCodigoQR = new QRCode("codigoQR");
$(document).ready(function () {
    $("#generarCodigo").on("click", function () {
        var cadena = $("#item_txt").val();
        if (cadena == "") {
            alert("Ingresa un texto");
            $("#item_txt").focus();
        } else {
            $("#descargarCodigo").css("display", "none");
            miCodigoQR.makeCode(cadena);
        }
    });


});


    function pruebaDivAPdf() {
            var pdf = new jsPDF('p', 'pt', 'letter');
            source = $('#imprimir')[0];

            specialElementHandlers = {
        '#bypassme': function (element, renderer) {
                    return true
                }
            };

            margins = {
        top: 80,
                bottom: 60,
                left: 40,
                width: 522
            };

            pdf.fromHTML(
                source,
                margins.left, // x coord
                margins.top, { // y coord
        'width': margins.width,
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
        pdf.save('IDPetsgrow.pdf');
                }, margins
            );


        }

