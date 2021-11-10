let ord = ["popular", "reciente", "nombre"]

const chOrden = document.getElementById("checkbox-group-order")

function mostrarcheckOrden(orden) {
    const check = document.createElement("div")

    check.classList.add("_check")

    const checkbox = document.createElement("input")
    checkbox.type = "radio"
    checkbox.name = "radioOrden";
    checkbox.value = orden
    checkbox.classList.add("_check-input")

    checkbox.onclick = function () {
        if (this.checked) {
            const elem = document.getElementById("Alianzas1")
            elem.innerHTML = "";

            var orden = this.value;

            $.ajax({
                type: "POST",
                url: "/Anuncios/ObtenerInformacionServiciosOrdenados",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(
                    {
                        'orden': orden
                    }),
                success: function (datos) {

                    const elem = document.getElementById("Alianzas1")
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
                        Anuncio.facebook = datos.ListAnuncio[i].Telefono;
                        Anuncio.instagram = datos.ListAnuncio[i].Facebook;
                        Anuncio.youtube = datos.ListAnuncio[i].Instagram;
                        Anuncio.twitter = datos.ListAnuncio[i].Youtube;
                        Anuncio.imagen = datos.ListAnuncio[i].Twitter;
                        Anuncio.imagen = datos.ListAnuncio[i].Imagen;
                        Anuncio.contacto = datos.ListAnuncio[i].Contacto;

                        //CONSTRUCTOR PARA LOS ELEMENTOS QUE SE MOSTRARÁN EN LA VISTA

                        mostrarAliado(Anuncio)

                    }
                },
                error: function (error) {

                }
            });
        }
    };

    var label = document.createElement('label')
    label.classList.add("_check-label");
    label.appendChild(document.createTextNode(orden));

    check.appendChild(checkbox);
    check.appendChild(label);

    chOrden.appendChild(check)
}

for (let n = 0; n < ord.length; n++) {
    mostrarcheckOrden(datos[n]);
}