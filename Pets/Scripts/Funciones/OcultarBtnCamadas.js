export default function contenerbotoncamadas() {

    //Contener boton de vacunas
    const ocultarBoton = document.getElementById("Actualizar_camadas")

    ocultarBoton.classList.remove('_mostrar')
    ocultarBoton.classList.add('_ocultar')

    var origen = document.getElementById('tabla-camadas');
    var destino = document.getElementById('Actualizar_btn-contenedor');
    destino.appendChild(origen);

}