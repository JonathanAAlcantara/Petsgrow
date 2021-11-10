//Funcion que elimina el formulario para datos del perro
export default function eliminartablaperro() {

    
    var tituloperro = document.getElementById("tituloPerro");
    tituloperro.parentNode.removeChild(tituloperro);

    var tablaperro = document.getElementById("perro");
    tablaperro.parentNode.removeChild(tablaperro);

    //var formulariocompleto = document.getElementById("_form-perro");
    //formulariocompleto.classList.toggle("_z-fondo")

    
}
