//EVENTOS DEL MENU
document.getElementById('filtroEstado').addEventListener('click',
    () => {
        document.getElementById('checkbox-group-estado').classList.toggle('_checkbox-group-deploy')
    })

document.getElementById('filtroEstado').addEventListener('click',
    () => {
        document.getElementById('filtroEstado').classList.toggle('_filter-image-down')
    })

document.getElementById('filtroMunicipio').addEventListener('click',
    () => {
        document.getElementById('checkbox-group-municipio').classList.toggle('_checkbox-group-deploy')
    })

document.getElementById('filtroMunicipio').addEventListener('click',
    () => {
        document.getElementById('filtroMunicipio').classList.toggle('_filter-image-down')
    })

document.getElementById('filtroRaza').addEventListener('click',
    () => {
        document.getElementById('checkbox-group-raza').classList.toggle('_checkbox-group-deploy')
    })

document.getElementById('filtroRaza').addEventListener('click',
    () => {
        document.getElementById('filtroRaza').classList.toggle('_filter-image-down')
    })


//SE IMPORTAN LAS CLASES NECESARIAS
import Criadero from "./Clases/Criaderos.js"

//SE CARGA LA INFORMACIÓN DE LA BASE DE DATOS

const Pastor = new Criadero("Pastores felices", "/Content/Images/criaderos.jpg", "9999999999", "Guanajuato", "León")
const Beagle = new Criadero("Beagle contento", "/Content/Images/parejas.jpg", "8888888888", "Guerrero", "Taxco")
const Husky = new Criadero("El Husky siberiano", "/Content/Images/alianzas.jpg", "8888888888", "México", "Toluca")
const SanBernardo = new Criadero("El San Bernie", "/Content/Images/micriadero.jpg", "8888888888", "Ciudad de México", "Coyoacán")
const Pastor1 = new Criadero("Pastores felices", "/Content/Images/criaderos.jpg", "9999999999", "Guanajuato", "León")
const Beagle1 = new Criadero("Beagle contento", "/Content/Images/parejas.jpg", "8888888888", "Guerrero", "Taxco")
const Husky1 = new Criadero("El Husky siberiano", "/Content/Images/alianzas.jpg", "8888888888", "México", "Toluca")
const SanBernardo1 = new Criadero("El San Bernie", "/Content/Images/micriadero.jpg", "8888888888", "Ciudad de México", "Coyoacán")

let Anuncio = new Criadero;

var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope, $http, $window) {

    var urlPathSystem = "";

    $.ajax({
        type: "POST",
        url: "/Anuncios/ObtenerInformacionAnuncios",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (datos) {

            const elem = document.getElementById("criadero1")

            function mostrarCriadero(criadero) {
                const hijo = document.createElement("div")

                const img = criadero.imagen.replaceAll('\\', '\\\\');

                hijo.classList.add("card", "_card")
                hijo.innerHTML = `
                <img class="card-img-top _card-image" src ="${criadero.getImagen()}" alt="Card image cap"/>
                <div class="card-body _card-style" onclick="contar()">
                    <h5 class="card-title">${criadero.getTituloNegocio()}</h5>
                    <p class="_card-text">Estado:<span>${criadero.getEstado()}</span></p>
                    <p class="_card-text">Municipio:<span>${criadero.getMunicipio()}</span></p>
                    <p class="_card-text">Contacto:<span>${criadero.getTelefono()}</span></p>
                  <button type="button" class="btn _btn" onclick="VerModalDetalle(${criadero.id}, '${img}', '${criadero.titulonegocio}', '${criadero.descripcion}', '${criadero.correo}',
                                        '${criadero.direccion}', '${criadero.telefono}', '${criadero.facebook}', '${criadero.instagram}', '${criadero.youtube}', '${criadero.twitter}')">Ver mas</button>

                </div>
                </div>

                `
                elem.appendChild(hijo)
            }

            const chEstado = document.getElementById("checkbox-group-estado")

            function mostrarcheckEstado(estado) {
                const check = document.createElement("div")

                check.classList.add("_check")

                const checkbox = document.createElement("input")
                checkbox.type = "radio"
                checkbox.name = "radioEstado";
                checkbox.value = estado
                checkbox.classList.add("_check-input")

                checkbox.onclick = function () {
                    if (this.checked)
                    {
                        const elem = document.getElementById("criadero1")
                        elem.innerHTML = "";

                        var estado = this.value;

                        $.ajax({
                            type: "POST",
                            url: "/Anuncios/ObtenerMunicipio",
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            data: JSON.stringify(
                                {
                                    'estado': estado
                                }),
                            success: function (datos) {

                                //alert(datos);

                                const chMunicipio = document.getElementById("checkbox-group-municipio")
                                chMunicipio.innerHTML = "";

                                const chRaza = document.getElementById("checkbox-group-raza")
                                chRaza.innerHTML = "";

                                function mostrarcheckMunicipio(municipio) {
                                    const checkM = document.createElement("div")

                                    checkM.classList.add("_check")

                                    const checkboxM = document.createElement("input")
                                    checkboxM.type = "checkbox"
                                    checkboxM.name = "checkMunicipio";
                                    checkboxM.value = municipio
                                    checkboxM.classList.add("_check-input")

                                    checkboxM.onclick = function () {

                                        var lMunicipio = $("#checkbox-group-municipio input[type=checkbox]:checked");
                                        var listaMunicipio = [];

                                        for (let n = 0; n < lMunicipio.length; n++) {
                                            listaMunicipio.push($(lMunicipio[n]).val());
                                        }

                                        $.ajax({
                                            type: "POST",
                                            url: "/Anuncios/ObtenerRaza",
                                            contentType: 'application/json; charset=utf-8',
                                            dataType: 'json',
                                            data: JSON.stringify(
                                                {
                                                    'ListMunicipio': listaMunicipio
                                                }),
                                            success: function (datos) {
                                                //alert(datos);

                                                const chRaza = document.getElementById("checkbox-group-raza")
                                                chRaza.innerHTML = "";

                                                function mostrarcheckRaza(raza) {
                                                    const checkR = document.createElement("div")

                                                    checkR.classList.add("_check")

                                                    const checkboxR = document.createElement("input")
                                                    checkboxR.type = "checkbox"
                                                    checkboxR.name = "checkRaza";
                                                    checkboxR.value = raza
                                                    checkboxR.classList.add("_check-input")

                                                    checkboxR.onclick = function () {
                                                        var lRaza = $("#checkbox-group-raza input[type=checkbox]:checked");
                                                        var listaRaza = [];

                                                        for (let n = 0; n < lRaza.length; n++) {
                                                            listaRaza.push($(lRaza[n]).val());
                                                        }

                                                        $.ajax({
                                                            type: "POST",
                                                            url: "/Anuncios/ObtenerInformacionRaza",
                                                            contentType: 'application/json; charset=utf-8',
                                                            dataType: 'json',
                                                            data: JSON.stringify(
                                                                {
                                                                    'ListRaza': listaRaza
                                                                }),
                                                            success: function (datos) {

                                                                const elem = document.getElementById("criadero1")
                                                                elem.innerHTML = "";

                                                               

                                                                for (let i = 0; i < datos.ListAnuncio.length; i++) {

                                                                    Anuncio.id = datos.ListAnuncio[i].Id;
                                                                    Anuncio.idusuario = datos.ListAnuncio[i].IdUsuario;
                                                                    Anuncio.idrol = datos.ListAnuncio[i].IdRol;
                                                                    Anuncio.tipopublicacion = datos.ListAnuncio[i].TipoPublicacion;
                                                                    Anuncio.categoria = datos.ListAnuncio[i].Categoria;
                                                                    Anuncio.principal = datos.ListAnuncio[i].Principal;
                                                                    Anuncio.secundario = datos.ListAnuncio[i].Secundario;
                                                                    Anuncio.titulonegocio = datos.ListAnuncio[i].TituloNegocio;
                                                                    Anuncio.descripcion = datos.ListAnuncio[i].Descripcion;
                                                                    Anuncio.estado = datos.ListAnuncio[i].Estado;
                                                                    Anuncio.municipio = datos.ListAnuncio[i].Municipio;
                                                                    Anuncio.correo = datos.ListAnuncio[i].Correo;
                                                                    Anuncio.direccion = datos.ListAnuncio[i].Direccion;
                                                                    Anuncio.facebook = datos.ListAnuncio[i].Facebook;
                                                                    Anuncio.instagram = datos.ListAnuncio[i].Instagram;
                                                                    Anuncio.youtube = datos.ListAnuncio[i].Youtube;
                                                                    Anuncio.twitter = datos.ListAnuncio[i].Twitter;
                                                                    Anuncio.telefono = datos.ListAnuncio[i].Telefono;
                                                                    Anuncio.imagen = datos.ListAnuncio[i].Imagen;

                                                                    //CONSTRUCTOR PARA LOS ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA

                                                                    mostrarCriadero(Anuncio)

                                                                }

                                                            },
                                                            error: function (error) {

                                                            }
                                                        });

                                                    };

                                                    var labelR = document.createElement('label')
                                                    labelR.classList.add("_check-label");
                                                    labelR.appendChild(document.createTextNode(raza));

                                                    checkR.appendChild(checkboxR);
                                                    checkR.appendChild(labelR);

                                                    chRaza.appendChild(checkR);
                                                }

                                                for (let n = 0; n < datos.length; n++) {
                                                    mostrarcheckRaza(datos[n]);
                                                }
                                            },
                                            error: function (error) {

                                            }
                                        });
                                    };

                                    var labelM = document.createElement('label')
                                    labelM.classList.add("_check-label");
                                    labelM.appendChild(document.createTextNode(municipio));

                                    checkM.appendChild(checkboxM);
                                    checkM.appendChild(labelM);

                                    chMunicipio.appendChild(checkM)
                                }

                                for (let n = 0; n < datos.length; n++) {
                                    mostrarcheckMunicipio(datos[n])
                                }

                                $scope.$apply();

                            },
                            error: function (error) {

                            }
                        });
                    }
                };

                var label = document.createElement('label')
                label.classList.add("_check-label");
                label.appendChild(document.createTextNode(estado));

                check.appendChild(checkbox);
                check.appendChild(label);

                chEstado.appendChild(check)
            }

            for (let i = 0; i < datos.ListAnuncio.length; i++) {

                Anuncio.id = datos.ListAnuncio[i].Id;
                Anuncio.idusuario = datos.ListAnuncio[i].IdUsuario;
                Anuncio.idrol = datos.ListAnuncio[i].IdRol;
                Anuncio.tipopublicacion = datos.ListAnuncio[i].TipoPublicacion;
                Anuncio.categoria = datos.ListAnuncio[i].Categoria;
                Anuncio.principal = datos.ListAnuncio[i].Principal;
                Anuncio.secundario = datos.ListAnuncio[i].Secundario;
                Anuncio.titulonegocio = datos.ListAnuncio[i].TituloNegocio;
                Anuncio.descripcion = datos.ListAnuncio[i].Descripcion;
                Anuncio.estado = datos.ListAnuncio[i].Estado;
                Anuncio.municipio = datos.ListAnuncio[i].Municipio;
                Anuncio.correo = datos.ListAnuncio[i].Correo;
                Anuncio.direccion = datos.ListAnuncio[i].Direccion;
                Anuncio.facebook = datos.ListAnuncio[i].Telefono;
                Anuncio.instagram = datos.ListAnuncio[i].Facebook;
                Anuncio.youtube = datos.ListAnuncio[i].Instagram;
                Anuncio.twitter = datos.ListAnuncio[i].Youtube;
                Anuncio.imagen = datos.ListAnuncio[i].Twitter;
                Anuncio.imagen = datos.ListAnuncio[i].Imagen;

                //CONSTRUCTOR PARA LOS ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA
                
                mostrarCriadero(Anuncio)
            }

            for (let n = 0; n < datos.ListEstado.length; n++) {
                mostrarcheckEstado(datos.ListEstado[n])
            }

  
        },
        error: function (error) {

            $('#myModalLoader').on('shown.bs.modal', function (e) {
                $("#myModalLoader").modal('hide');
            })
        }

    });

    $scope.OrderPopular = function () {

        const elem = document.getElementById("criadero1")

        function mostrarCriadero(criadero) {
            const hijo = document.createElement("div")

            hijo.classList.add("card", "_card")
            hijo.innerHTML = `
                <img class="card-img-top _card-image" src ="${criadero.getImagen()}" alt="Card image cap"/>
                <div class="card-body _card-style" onclick="contar()">
                    <h5 class="card-title">${criadero.getTituloNegocio()}</h5>
                    <p class="_card-text">Estado:<span>${criadero.getEstado()}</span></p>
                    <p class="_card-text">Municipio:<span>${criadero.getMunicipio()}</span></p>
                    <p class="_card-text">Contacto:<span>${criadero.getTelefono()}</span></p>
                  <button type="button" class="btn btn-primary" onclick="VerModalDetalle(${criadero.id}, '${criadero.imagen}', '${criadero.titulonegocio}', '${criadero.descripcion}', '${criadero.correo}',
                                        '${criadero.direccion}', '${criadero.telefono}', '${criadero.facebook}', '${criadero.instagram}', '${criadero.youtube}', '${criadero.twitter}')">Ver mas</button>

                </div>
                </div>

                `
            elem.appendChild(hijo)
        }


        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Anuncios/OrdenarPopularidadCriad",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(
                {

                }),
            success: function (datos) {

                const elem = document.getElementById("criadero1")
                elem.innerHTML = "";

                for (let i = 0; i < datos.length; i++) {

                    Anuncio.id = datos[i].Id;
                    Anuncio.idusuario = datos[i].IdUsuario;
                    Anuncio.idrol = datos[i].IdRol;
                    Anuncio.tipopublicacion = datos[i].TipoPublicacion;
                    Anuncio.categoria = datos[i].Categoria;
                    Anuncio.principal = datos[i].Principal;
                    Anuncio.secundario = datos[i].Secundario;
                    Anuncio.titulonegocio = datos[i].TituloNegocio;
                    Anuncio.descripcion = datos[i].Descripcion;
                    Anuncio.estado = datos[i].Estado;
                    Anuncio.municipio = datos[i].Municipio;
                    Anuncio.correo = datos[i].Correo;
                    Anuncio.direccion = datos[i].Direccion;
                    Anuncio.facebook = datos[i].Telefono;
                    Anuncio.instagram = datos[i].Facebook;
                    Anuncio.youtube = datos[i].Instagram;
                    Anuncio.twitter = datos[i].Youtube;
                    Anuncio.imagen = datos[i].Twitter;
                    Anuncio.imagen = datos[i].Imagen;
                    Anuncio.contacto = datos[i].Contacto;

                    //CONSTRUCTOR PARA LOS ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA

                    mostrarCriadero(Anuncio)

                }

            },
            error: function (error) {

            }
        });
    }

    $scope.OrderName = function () {

        const elem = document.getElementById("criadero1")

        function mostrarCriadero(criadero) {
            const hijo = document.createElement("div")

            

            hijo.classList.add("card", "_card")
            hijo.innerHTML = `
                <img class="card-img-top _card-image" src ="${criadero.getImagen()}" alt="Card image cap"/>
                <div class="card-body _card-style" onclick="contar()">
                    <h5 class="card-title">${criadero.getTituloNegocio()}</h5>
                    <p class="_card-text">Estado:<span>${criadero.getEstado()}</span></p>
                    <p class="_card-text">Municipio:<span>${criadero.getMunicipio()}</span></p>
                    <p class="_card-text">Contacto:<span>${criadero.getTelefono()}</span></p>
                  <button type="button" class="btn btn-primary" onclick="VerModalDetalle(${criadero.id}, '${img}', '${criadero.titulonegocio}', '${criadero.descripcion}', '${criadero.correo}',
                                        '${criadero.direccion}', '${criadero.telefono}', '${criadero.facebook}', '${criadero.instagram}', '${criadero.youtube}', '${criadero.twitter}')">Ver mas</button>

                </div>
                </div>

                `
            elem.appendChild(hijo)
        }


        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Anuncios/OrdenarNombreAZCriad",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(
                {

                }),
            success: function (datos) {

                const elem = document.getElementById("criadero1")
                elem.innerHTML = "";

                for (let i = 0; i < datos.length; i++) {

                    Anuncio.id = datos[i].Id;
                    Anuncio.idusuario = datos[i].IdUsuario;
                    Anuncio.idrol = datos[i].IdRol;
                    Anuncio.tipopublicacion = datos[i].TipoPublicacion;
                    Anuncio.categoria = datos[i].Categoria;
                    Anuncio.principal = datos[i].Principal;
                    Anuncio.secundario = datos[i].Secundario;
                    Anuncio.titulonegocio = datos[i].TituloNegocio;
                    Anuncio.descripcion = datos[i].Descripcion;
                    Anuncio.estado = datos[i].Estado;
                    Anuncio.municipio = datos[i].Municipio;
                    Anuncio.correo = datos[i].Correo;
                    Anuncio.direccion = datos[i].Direccion;
                    Anuncio.facebook = datos[i].Telefono;
                    Anuncio.instagram = datos[i].Facebook;
                    Anuncio.youtube = datos[i].Instagram;
                    Anuncio.twitter = datos[i].Youtube;
                    Anuncio.imagen = datos[i].Twitter;
                    Anuncio.imagen = datos[i].Imagen;
                    Anuncio.contacto = datos[i].Contacto;

                    //CONSTRUCTOR PARA LOS ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA

                    mostrarCriadero(Anuncio)

                }

            },
            error: function (error) {

            }
        });
    }


})

//const listacheckbox = document.getElementsByClassName('_check-input')

//listacheckbox.addEventListener('change', e => {
//    if (e.target.checked) {
//        console.log('El campo ha sido marcado')
//    } else {
//        console.log('El campo NO ha sido marcado')
//    }
//})

//var checkbox = document.querySelector("._check-input");

//checkbox.addEventListener('change', function () {
//    if (this.checked) {
//        // Checkbox is checked..
//    } else {
//        // Checkbox is not checked..
//    }
//});

//$('._check-input').change(function () {
//    if ($(this).is(':checked')) {
//        // Checkbox is checked..
//    } else {
//        // Checkbox is not checked..
//    }
//});


////CONSTRUCTOR PARA LOS ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA
//const elem = document.getElementById("criadero1")

//function mostrarCriadero(criadero) {
//    const hijo = document.createElement("div")

//    hijo.classList.add("card", "_card")
//    hijo.innerHTML = `
//    //<img class="card-img-top _card-image" src ="${criadero.getImagen()}" alt="Card image cap"/>
//    <div class="card-body _card-style">
//        <h5 class="card-title">${criadero.getTituloNegocio()}</h5>
//        <p class="_card-text">Estado:<span>${criadero.getEstado()}</span></p>
//        <p class="_card-text">Municipio:<span>${criadero.getMunicipio()}</span></p>
//        <p class="_card-text">Contacto:<span>${criadero.getTelefono()}</span></p>
//        <a href="@Url.Action("Mimascota", "Membresias")" class="btn btn-light">Ver mas</a>
//    </div>
//    `
//    elem.appendChild(hijo)
//}

////ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA

//mostrarCriadero(Pastor)
//mostrarCriadero(Beagle)
//mostrarCriadero(Husky)
//mostrarCriadero(SanBernardo)
//mostrarCriadero(Pastor1)
//mostrarCriadero(Beagle1)
//mostrarCriadero(Husky1)
//mostrarCriadero(SanBernardo1)



