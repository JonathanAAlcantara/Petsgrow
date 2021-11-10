export default function contenerbotonvacunas() {

    //Contener boton de vacunas
    const ocultarBoton = document.getElementById("Actualizar_vacunas")

    ocultarBoton.classList.remove('_mostrar')
    ocultarBoton.classList.add('_ocultar')

    var origen = document.getElementById('_tabla-vacunas');
    var destino = document.getElementById('Actualizar_vacunas-contenedor');
    destino.appendChild(origen);

}