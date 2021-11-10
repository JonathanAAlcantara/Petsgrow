
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

function mostrarOpcion(municipio) {
    const selectMun = document.getElementById("_typeMunicipios")
    const opcion = document.createElement("option")

    opcion.innerHTML = `
                        <option value="${municipio.getClaveMunicipio()}">${municipio.getNombreMunicipio()}</option>
                    `
    selectMun.appendChild(opcion)
}

//ENVÍO DEL FORMULARIO A LA BD
var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope, $http, $window) {

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

});