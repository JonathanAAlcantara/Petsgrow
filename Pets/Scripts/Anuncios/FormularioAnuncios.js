
//MOSTRAR CATEGORÍAS O RAZAS
document.getElementById("TipoPublicacion").addEventListener("change", cambiarSelect);

function cambiarSelect() {

    var j = document.getElementById("TipoPublicacion").value;

    if (j == "Servicios") {

        const catlabel = document.getElementById("CategoriaLabel");
        catlabel.classList.remove("_ocultar");

        const catinput = document.getElementById("CategoriaInput");
        catinput.classList.remove("_ocultar");

        const razlabel = document.getElementById("RazaLabel");
        razlabel.classList.add("_ocultar");

        const razinput = document.getElementById("_typeRazas");
        razinput.classList.add("_ocultar");

    }
    else if (j == "Criadero") {

        const razlabel = document.getElementById("RazaLabel");
        razlabel.classList.remove("_ocultar");

        const razinput = document.getElementById("_typeRazas");
        razinput.classList.remove("_ocultar");

        const catlabel = document.getElementById("CategoriaLabel");
        catlabel.classList.add("_ocultar");

        const catinput = document.getElementById("CategoriaInput");
        catinput.classList.add("_ocultar");

        class Razas {
            constructor(idraza, grupo, seccion, raza, pais) {
                this.idraza = idraza
                this.grupo = grupo
                this.seccion = seccion
                this.raza = raza
                this.pais = pais
            }

            getIdRaza() {
                return this.idraza
            }

            getGrupo() {
                return this.grupo
            }

            getSeccion() {
                return this.seccion
            }

            getRaza() {
                return this.raza
            }

            getPais() {
                return this.pais
            }

            setIdRaza(idraza) {
                this.idraza = idraza
            }

            setGrupo(grupo) {
                this.grupo = grupo
            }

            setSeccion(seccion) {
                this.seccion = seccion
            }

            setRaza(raza) {
                this.raza = raza
            }

            setPais(pais) {
                this.pais = pais
            }

        }
        let raza = new Razas

        //FUNCION PARA CREAR LAS OPCIONES DEL SELECT

        function mostrarOpcion(raza) {
            const selectRaza = document.querySelector('#_typeRazas')

            const opcion = document.createElement("option")

            opcion.innerHTML = `
                        <option value="${raza.getIdRaza()}">${raza.getRaza()}</option>
                    `
            selectRaza.appendChild(opcion)
        }

        var urlPathSystem = "";

        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Anuncios/ObtenerRazas",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(
                {
                    'raza': raza
                }),
            success: function (datosrazas) {

                const selectRaza = document.getElementById("_typeRazas")

                selectRaza.innerHTML = "";

                for (let i = 0; i < datosrazas.length; i++) {

                    raza.idraza = datosrazas[i].IdRaza;
                    raza.grupo = datosrazas[i].Grupo;
                    raza.seccion = datosrazas[i].Seccion;
                    raza.raza = datosrazas[i].Raza;
                    raza.pais = datosrazas[i].Pais;

                    mostrarOpcion(raza)
                }


            },
            error: function (error) {

            }
        });

    }

}


//EVENTOS DEL FORMULARIO POR ETAPAS
const movPag = document.querySelector("._movPag");
const btn_adelante2 = document.querySelector("._sigPag");

const btn_atras1 = document.querySelector("._volver-pag1");
const btn_adelante3 = document.querySelector("._adelante-pag3");
const btn_atras2 = document.querySelector("._volver-pag2");
const btn_final = document.querySelector("._fin");

const progressText = document.querySelectorAll("._step p");
const progressCheck = document.querySelectorAll("._step ._check");
const num = document.querySelectorAll("._step ._num");

let max = 3;
let cont = 1;

btn_adelante2.addEventListener("click", function (e) {
    e.preventDefault();

    movPag.style.marginLeft = "-33.33%";
    num[cont - 1].classList.add("_active");
    progressCheck[cont - 1].classList.add("_active");
    progressText[cont - 1].classList.add("_active");
    cont += 1;
});

btn_adelante3.addEventListener("click", function (e) {
    e.preventDefault();

    movPag.style.marginLeft = "-66.66%";
    num[cont - 1].classList.add("_active");
    progressCheck[cont - 1].classList.add("_active");
    progressText[cont - 1].classList.add("_active");
    cont += 1;
});

//btn_final.addEventListener("click", function (e) {
//    e.preventDefault();

//    movPag.style.marginLeft = "-99.99%";
//    num[cont - 1].classList.add("_active");
//    progressCheck[cont - 1].classList.add("_active");
//    progressText[cont - 1].classList.add("_active");
//    cont += 1;
//    alert("Aquí finaliza el registro.");
//});

btn_atras1.addEventListener("click", function (e) {
    e.preventDefault();

    movPag.style.marginLeft = "0%";
    num[cont - 2].classList.remove("_active");
    progressCheck[cont - 2].classList.remove("_active");
    progressText[cont - 2].classList.remove("_active");
    cont -= 1;
});

btn_atras2.addEventListener("click", function (e) {
    e.preventDefault();

    movPag.style.marginLeft = "-33.33%";
    num[cont - 2].classList.remove("_active");
    progressCheck[cont - 2].classList.remove("_active");
    progressText[cont - 2].classList.remove("_active");
    cont -= 1;
});

//CLASE DE ESTADOS Y MUNICIPIOS
class Municipios {
    constructor(claveestado, nombreestado, clavemunicipio, nombremunicipio) {
        this.claveestado = claveestado
        this.nombreestado = nombreestado
        this.clavemunicipio = clavemunicipio
        this.nombremunicipio = nombremunicipio
    }

    getClaveEstado() {
        return this.claveestado
    }

    getNombreEstado() {
        return this.nombreestado
    }

    getClaveMunicipio() {
        return this.clavemunicipio
    }

    getNombreMunicipio() {
        return this.nombremunicipio
    }



    setClaveEstado(claveestado) {
        this.claveestado = claveestado
    }

    setNombreEstado(nombreestado) {
        this.nombreestado = nombreestado
    }

    setClaveMunicipio(clavemunicipio) {
        this.clavemunicipio = clavemunicipio
    }

    setNombreMunicipio(nombremunicipio) {
        this.nombremunicipio = nombremunicipio
    }

}

let Municipio = new Municipios

//FUNCION PARA CREAR LAS OPCIONES DEL SELECT
const selectMun = document.getElementById("_typeMunicipios")
function mostrarOpcion(municipio) {
    const opcion = document.createElement("option")

    opcion.innerHTML = `
                        <option value="${municipio.getClaveMunicipio()}">${municipio.getNombreMunicipio()}</option>
                    `
    selectMun.appendChild(opcion)
}

//ENVÍO DEL FORMULARIO A LA BD
var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope, $http, $window) {

    //VALIDACIÓN DEL FORMULARIO

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');
    const selects = document.querySelectorAll('#formulario select');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,40}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/, // 4 a 12 digitos.
        direccion: /^[a-zA-ZÀ-ÿ0-9\s\#\.\,]{1,40}$/,
        texto: /^[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]+$/, // Letras y espacios, pueden llevar acentos y numeros.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.

    }

    const campos = {
        tipopublicacion: false,
        principal: false,
        titulonegocio: false,
        descripcion: false,
        estado: false,
        municipio: false,
        correocontacto: false,
        direccion: false,
        telefono: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "tipopublicacion":
                validarCampo(expresiones.usuario, e.target, 'tipopublicacion');
                break;
            case "principal":
                validarCampo(expresiones.texto, e.target, 'principal');

                break;
            case "titulonegocio":
                validarCampo(expresiones.nombre, e.target, 'titulonegocio');

                break;
            case "descripcion":
                validarCampo(expresiones.texto, e.target, 'descripcion');

                break;
            //case "estado":
            //    validarCampo(expresiones.nombre, e.target, 'estado');

            //    break;
            case "municipio":
                validarCampo(expresiones.nombre, e.target, 'municipio');

                break;
            case "correocontacto":
                validarCampo(expresiones.correo, e.target, 'correocontacto');

                break;
            case "direccion":
                validarCampo(expresiones.direccion, e.target, 'direccion');

                break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');

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


    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    selects.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    //VALIDACIÓN DEL FORMULARIO

    var urlPathSystem = "";

    //OBTENER MUNICIPIOS DE LA BASE DE DATOS Y CREAR LAS OPCIONES 
    $scope.BuscarMunicipios = function (estado) {

        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Anuncios/ObtenerMunicipios",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(
                {
                    'estado': estado
                }),
            success: function (datosmun) {

                const selectMun = document.getElementById("_typeMunicipios")

                selectMun.innerHTML = "";

                for (let i = 0; i < datosmun.length; i++) {

                    Municipio.claveestado = datosmun[i].ClaveEntidad;
                    Municipio.nombreestado = datosmun[i].NombreEntidad;
                    Municipio.clavemunicipio = datosmun[i].ClaveMunicipio;
                    Municipio.nombremunicipio = datosmun[i].NombreMunicipio;

                    mostrarOpcion(Municipio)
                }


            },
            error: function (error) {

            }
        });

    }

    $scope.AgregarAnuncio = function (formulario) {

        if (campos.tipopublicacion && campos.principal && campos.titulonegocio
            && campos.descripcion && campos.correocontacto
            && campos.direccion && campos.telefono) {

            var file = fileInput.files[0];
            var data = new FormData();
            data.append("myFile", file);
            //data.append("formulario", formulario)

            var municipio = $("#_typeMunicipios option:selected").text().trim();
            var estado = $("#_typeEstado option:selected").text().trim();
            var raza = $("#_typeRazas option:selected").text().trim();
            var categoria = $("#CategoriaInput option:selected").text().trim(); 

            formulario.Municipio = municipio;
            formulario.Estado = estado;
            formulario.Raza = raza;
            formulario.categoria = categoria;

            var jsonFormulario = JSON.stringify(
                {
                    'formulario': formulario,
                });
            data.append("datos", jsonFormulario);

            $.ajax({
                type: "POST",
                url: urlPathSystem + "/Inicio/AgregarAnuncio",
                /*data: JSON.stringify(
                    {
                        'myFile': file,
                        'formulario': formulario
                    }),*/
                data: data,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                contentType: false,
                processData: false,
                success: function (datos) {

                    if (datos.Mensaje == "OK") {
                        $scope.ListUsuario = datos.ListaUsuario;

                        $('.toastExitoRegistroPrimerPerro').toast('show')
                        $scope.$apply();
                    }
                    else {
                        $scope.ListUsuario = null;

                        $('.toastFracasoRegistroPrimerPerro').toast('show')
                        $scope.$apply();
                    }

                    $scope.$apply();



                },
                error: function (error) {


                }
            });
        }
        else {
            document.getElementById('form-warning').classList.add('_form-warning-active');
        }

    }

    $("#fileInput").change(function () {

        var file = fileInput.files[0];
        var data = new FormData();
        data.append("myFile", file);
        data.append("titulo", "hola mundo");

        /*$.ajax({
            type: "POST",
            url: urlPathSystem + "/Inicio/AgregarArchivo",
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (datos) {              

                $scope.$apply();


            },
            error: function (error) {


            }
        });

        alert('changed!');*/
    });

});