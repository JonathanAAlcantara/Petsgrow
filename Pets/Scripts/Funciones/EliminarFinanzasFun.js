//Funcion que elimina el formulario para datos financieros

export default function eliminartablafinanzas() {

    var titulofinanzas = document.getElementById("tituloFinanzas");
    titulofinanzas.parentNode.removeChild(titulofinanzas);

    var tablaingresos = document.getElementById("FormIngresos");
    tablaingresos.parentNode.removeChild(tablaingresos);

    var tablaegresos = document.getElementById("FormEgresos");
    tablaegresos.parentNode.removeChild(tablaegresos);

    //var botonactualizar = document.getElementById("actualizar_ingresos");
    //botonactualizar.parentNode.removeChild(botonactualizar);

    var chart1 = document.getElementById("chart_div");
    chart1.parentNode.removeChild(chart1);

    var chart2 = document.getElementById("chart_div2");
    chart2.parentNode.removeChild(chart2);

    var borrarformato = document.getElementById("_form-finanzas");
    borrarformato.classList.remove("_dataform2")


}