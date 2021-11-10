//Funcion que elimina el formulario para datos medicos
export default function eliminartablamedicos() {

    var titulomedicos = document.getElementById("tituloMedicos");
    titulomedicos.parentNode.removeChild(titulomedicos);

    var tablamedicos = document.getElementById("salud");
    tablamedicos.parentNode.removeChild(tablamedicos);

    

}