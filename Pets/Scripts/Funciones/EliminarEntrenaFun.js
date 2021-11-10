//Funcion que elimina el formulario para datos medicos
export default function eliminartablaentrenamientos() {

    var tituloentrenamientos = document.getElementById("tituloMedicos");
    tituloentrenamientos.parentNode.removeChild(tituloentrenamientos);

    var tablaentrenamiento = document.getElementById("entrenamiento");
    tablaentrenamiento.parentNode.removeChild(tablaentrenamiento);

    var formulariocompleto = document.getElementById("_form-entrenamiento");
    formulariocompleto.classList.add("_z-fondo")

    

}