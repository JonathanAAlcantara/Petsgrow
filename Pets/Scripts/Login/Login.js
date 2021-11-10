var app = angular.module("MyApp", []);

document.getElementById('campo_span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#txtPassword');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'password';
    }
});

//funcion inicial para agregar las empresas
app.controller("MyController", function ($scope, $http, $window) {

    var urlPathSystem = "";

    $scope.visibleError = false;

    var uno = {
        "IdRol": "1",
        "Resultado": "Hola mundo"
    };

    $scope.ValidarLogin = function (varUsuario, varPassword) {
        $('#myModalLoader').modal('show');

        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Inicio/ValidarLogin",
            data: JSON.stringify(
                {
                    'usuario': varUsuario,
                    'password': varPassword
                }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                //if (datos.IdRol === 4) {
                //    $window.location.href = urlPathSystem + "/Membresias/Mimascota";
                //}
                //else if (datos.IdRol === 5) {
                //    $window.location.href = urlPathSystem + "/Membresias/Micriadero";
                //}

                if (datos.IdRol == 1 && datos.Resultado == "OK") {

                    $window.location.href = urlPathSystem + "/Membresias/Micriadero";
                }
                else if (datos.IdRol == 4 && datos.Resultado == "OK") {
                    $window.location.href = urlPathSystem + "/Membresias/Mimascota";
                }
                else if (datos.IdRol == 5 && datos.Resultado == "OK") {
                    $window.location.href = urlPathSystem + "/Membresias/Micriadero";
                }
                else if (datos.IdRol == 6 && datos.Resultado == "OK") {
                    $window.location.href = urlPathSystem + "/Membresias/Micriadero";
                }
                else if (datos.IdRol == 7 && datos.Resultado == "OK") {
                    $window.location.href = urlPathSystem + "/Membresias/Micriadero";
                }
                else if (datos.IdRol == 8 && datos.Resultado == "OK") {
                    $window.location.href = urlPathSystem + "/Membresias/Micriadero";
                } else {

                    $('#myModalLoader').on('shown.bs.modal', function (e) {
                        $("#myModalLoader").modal('hide');
                    })

                    $('.toastFracasoIngreso').toast('show')

                    $scope.$apply();}


            },
            error: function (error) {

                $('#myModalLoader').on('shown.bs.modal', function (e) {
                    $("#myModalLoader").modal('hide');
                })

                
            }
        });
    };

    //function MessageInfo(titulo, message) {
    //    $.notify({
    //        // options
    //        icon: 'fa fa-info-circle fa-lg',
    //        title: "<span class='title-notify'><strong>" + titulo + "</strong></span><br/>",
    //        message: "<span class='message-notify'>" + message + "</span><br/>"
    //    }, {
    //        // settings
    //        type: 'info',
    //        delay: 8000
    //    });
    //}

    //function MessageSuccess(titulo, message) {
    //    $.notify({
    //        // options
    //        icon: 'fa fa-check-circle fa-lg',
    //        title: "<span class='title-notify'><strong>" + titulo + "</strong></span><br/>",
    //        message: "<span class='message-notify'>" + message + "</span><br/>"
    //    }, {
    //        // settings
    //        type: 'success',
    //        delay: 8000
    //    });
    //}

    //function MessageDanger(titulo, message) {
    //    $.notify({
    //        // options
    //        icon: 'fa fa-window-close fa-lg',
    //        title: "<span class='title-notify'><strong>" + titulo + "</strong></span><br/>",
    //        message: "<span class='message-notify'>" + message + "</span><br/>"
    //    }, {
    //        // settings
    //        type: 'danger',
    //        delay: 8000
    //    });
    //}

});
