//Funcion que elimina el formulario para datos del dueño

export default function eliminartablahumano() {

    var titulohumano = document.getElementById("tituloHumano");
    titulohumano.parentNode.removeChild(titulohumano);

    var tablahumano = document.getElementById("humano");
    tablahumano.parentNode.removeChild(tablahumano);

    

}