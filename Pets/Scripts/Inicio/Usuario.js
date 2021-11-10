

//VALIDACIÓN DEL FORMULARIO

var app = angular.module("MyApp", []);

app.controller("MyController", function ($scope, $http, $window) {

    //VALIDACIÓN DEL FORMULARIO

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');
    const btn_final = document.querySelector("._fin");

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,40}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    }

    const campos = {
        usuario: false,
        correo: false,
        password: false,
        rol: false,
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');

                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
                validarPassword();
                break;
            case "confirmacion":
                validarPassword();

                break;

        }
    }

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`group-${campo}`).classList.remove('_form-group-incorrecto');
            document.getElementById(`group-${campo}`).classList.add('_form-group-correcto');
            document.querySelector(`#group-${campo} ._form-info`).classList.remove('_form-info-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`group-${campo}`).classList.add('_form-group-incorrecto');
            document.getElementById(`group-${campo}`).classList.remove('_form-group-correcto');
            document.querySelector(`#group-${campo} ._form-info`).classList.add('_form-info-activo');
            campos[campo] = false;
        }
    }

    const validarPassword = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('confirmacion');

        if (inputPassword1.value !== inputPassword2.value) {
            document.getElementById('group-confirmacion').classList.add('_form-group-incorrecto');
            document.getElementById('group-confirmacion').classList.remove('_form-group-correcto');
            document.querySelector('#group-confirmacion ._form-info').classList.add('_form-info-activo');
            campos['password'] = false;
        } else {
            document.getElementById('group-confirmacion').classList.remove('_form-group-incorrecto');
            document.getElementById('group-confirmacion').classList.add('_form-group-correcto');
            document.querySelector('#group-confirmacion ._form-info').classList.remove('_form-info-activo');
            campos['password'] = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

  
    const rol = document.getElementById('rolUsuarioMod');

    if (rol === '') {
        campos['rol'] = false;
    } else {
        campos['rol'] = true;
    }


    /*btn_final.addEventListener('click', (e) => {
        e.preventDefault();

        const terminos = document.getElementById('terminos');
        if (campos.usuario && campos.correo && campos.password && terminos.checked) {
            campos.reset();

            document.querySelectorAll('_form-group-correcto').forEach((icono) => {
                icono.classList.remove('_form-group-correcto');
            });
        } else {
            document.getElementById('form-warning').classList.add('_form-warning-active');
        }
    });*/



    $scope.Hola = "Hola mundo...";

    $scope.ListaCatRol = [
        {
            Id: 1,
            Rol: "Sistema",
            Descripcion: "Super usuario"
        },
        {
            Id: 2,
            Rol: "Administrador",
            Descripcion: "Tiene acceso a todas las opciones"
        },
        {
            Id: 3,
            Rol: "Usuario",
            Descripcion: "Tiene acceso a algunos menus"
        },
        {
            Id: 4,
            Rol: "Usuario A",
            Descripcion: "Tiene acceso a mi mascota"
        },
        {
            Id: 5,
            Rol: "Usuario B",
            Descripcion: "Tiene acceso a mi criadero"
        },
        {
            Id: 6,
            Rol: "Usuario B pro",
            Descripcion: "Tiene acceso a mi cradero pro"
        },
        {
            Id: 7,
            Rol: "Criaderos",
            Descripcion: "Tiene acceso a mi criadero pro con boton de anuncio"
        },
        {
            Id: 8,
            Rol: "Alianzas",
            Descripcion: "Tiene acceso a mi criadero pro con boton de anuncio"
        },
    ];

    $scope.RolAgregar = null

    var urlPathSystem = "";

    $.ajax({
        type: "POST",
        url: urlPathSystem + "/Usuario/ObtenerUsuario",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (datos) {

            $scope.ListUsuario = datos.ListaUsuario;

            $scope.ListCatRol = datos.ListaCatRol;

            $scope.UsuarioAgregar = datos.Usuario;

            $scope.EsSistema = datos.EsSistema;

            $scope.$apply();

        },
        error: function (error) {

        }
    });

    $scope.AgregarUsuario = function (usuario, catRol) {

        const terminos = document.getElementById('terminos');
        if (campos.usuario && campos.correo && campos.password /*&& campos.rol */&& terminos.checked)
        {
            $('#myModalLoader').modal('show');

            $.ajax({
                type: "POST",
                url: urlPathSystem + "/Usuario/AgregarUsuario",
                data: JSON.stringify(
                    {
                        'usuario': usuario,
                        'rol': catRol
                    }),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (datos) {

                    console.log(datos.MensajeEnvio);

                    if (datos.ListaUsuario[0].StrEstatus = "Activo") {

                        $('.toastCuentaDuplicada').toast('show')

                        $scope.$apply();
                    }
                    else {

                        if (datos.Mensaje == "OK") {
                            $scope.ListUsuario = datos.ListaUsuario;

                            $('.toastExito').toast('show')

                            $scope.$apply();
                        }
                        else {
                            $scope.ListUsuario = null;

                            $('.toastError').toast('show')

                            $scope.$apply();
                        }

                        $scope.$apply();

                    }

                    
                },
                error: function (error) {

                }
            });
        }
        else {
            document.getElementById('form-warning').classList.add('_form-warning-active');
        }
    }

    $scope.ValidarAgregarUsuario = function (Usuario, Rol) {
        if (Usuario == null || Usuario.Login == null || Usuario.Login == "" || Usuario.Nombre == null || Usuario.Nombre == "" || Usuario.Password == null || Usuario.Password == "" ||
            Usuario.ConfirmarPassword == null || Usuario.ConfirmarPassword == "" || Rol.Id <= 0 || Usuario.Password != Usuario.ConfirmarPassword) {
            return true;
        }
        else {
            return false;
        }
    }



});