export default function contenerbotoncompetencias() {

    //Contener boton de vacunas
    const ocultarBoton = document.getElementById("Actualizar_competencias")

    ocultarBoton.classList.remove('_mostrar')
    ocultarBoton.classList.add('_ocultar')

    var origen = document.getElementById('tabla-competencias');
    var destino = document.getElementById('Actualizar_btn-contenedor');
    destino.appendChild(origen);

}