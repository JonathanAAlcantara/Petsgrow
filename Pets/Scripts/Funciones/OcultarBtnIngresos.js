export default function contenerbotoningresos() {

    //Contener boton de vacunas
    const ocultarBoton = document.getElementById("actualizar_ingresos")

    ocultarBoton.classList.add('_ocultar')

    var origen = document.getElementById('actualizar_ingresos');
    var destino = document.getElementById('Actualizar_ingresos-contenedor');
    destino.appendChild(origen);

    const elemp = document.getElementById("_form-finanzas");

    const eliminardivdentroformulario = document.getElementById("actualizar_ingresos-div");

    elemp.removeChild(eliminardivdentroformulario);

    //Contener boton de filtrar
    const ocultarBtnFiltro = document.getElementById("filtrar_fechas")

    ocultarBtnFiltro.classList.add('_ocultar')

    var origen = document.getElementById('filtrar_fechas');
    var destino = document.getElementById('Actualizar_ingresos-contenedor');

    destino.appendChild(origen);

    const eliminardivFiltro = document.getElementById("filtroFechas");

    elemp.removeChild(eliminardivFiltro);

}