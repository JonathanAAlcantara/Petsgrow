//Funcion que construye el formulario para control financiero

const elemp = document.getElementById("_form-finanzas")


export default function mostrartabla5(datos) {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    elemp.classList.add("_dataform2", "_font")
     
    const titulo = document.createElement("h2")
    titulo.textContent = "Mi control financiero"
    titulo.setAttribute("id", "tituloFinanzas")

    elemp.appendChild(titulo)

    const hijop = document.createElement("form")

    hijop.setAttribute("id", "FormIngresos")
    hijop.classList.add("_form", "_font", "_form-fin")
    hijop.innerHTML = `
        <label class="_label">Tipo de Ingreso</label>
        <select name="ingresos" id="tipoIngresos">
            <option value="1">Competencias</option>
            <option value="2">Cruces</option>
            <option value="3">Cachorros</option>
            <option value="4">Venta</option>
        </select>
        <label class="_label">Fecha</label>
        <input type="datetime" class="_form-input _label-form _font" id="fechaingreso" value=${today.toLocaleDateString()} 
        data-toggle="modal" data-target="#modalFechaIngresos"/>
        <label class="_label">Detalle</label>
        <input type="text" class="_form-input _label-form _font" id="detalleingreso"/>
        <label class="_label">Monto</label>
        <input type="number" class="_form-input _label-form _font" id="montoingreso"/>
       
    `
    elemp.appendChild(hijop)

    //var examDateClonedObj = $("#fechaDocumento").clone();
    //$(examDateClonedObj).removeClass("datepicker");
    //$(examDateClonedObj).appendTo("#fechaDocumento");
    //$(examDateClonedObj).show();

    //$("#fechaDocumento").clone().appendTo("#_form-finanzas");

    const hijoe = document.createElement("form")

    hijoe.setAttribute("id", "FormEgresos")
    hijoe.classList.add("_form", "_font", "_form-fin")
    hijoe.innerHTML = `
        <label class="_label">Tipo de Egreso</label>
        <select name="ingresos" id="tipoEgresos">
            <option value="1">Alimentación</option>
            <option value="2">Estética</option>
            <option value="3">Gastos Médicos</option>
            <option value="4">Entrenamiento</option>
            <option value="5">Transporte</option>
            <option value="6">Viáticos</option>
            <option value="7">Varios</option>
        </select>
        <label class="_label">Fecha</label>
        <input type="datetime" class="_form-input _label-form _font" id="fechaegreso" value =${today.toLocaleDateString()} 
        data-toggle="modal" data-target="#modalFechaEgresos"/>
        <label class="_label">Detalle</label>
        <input type="text" class="_form-input _label-form _font" id="detalleegreso"/>
        <label class="_label">Monto</label>
        <input type="number" class="_form-input _label-form _font" id="montoegreso"/>
        
    `
    elemp.appendChild(hijoe)

    
    const botonIng = document.createElement("div")
    botonIng.setAttribute("id", "actualizar_ingresos-div")

    elemp.appendChild(botonIng)

    const mostrarBotonIng = document.getElementById("actualizar_ingresos")
    mostrarBotonIng.classList.remove('_ocultar')

    var origen = document.getElementById('actualizar_ingresos');
    var destino = document.getElementById('actualizar_ingresos-div');
    destino.appendChild(origen);


    //Filtro de fechas para cargar la información
    const filtro = document.createElement("div");
    filtro.setAttribute("id", "filtroFechas");
    filtro.classList.add("_filtrofechas")

    filtro.innerHTML = `

    <input type="datetime" class="_form-input _input-size _font" id="fechaInicial" data-toggle="modal" data-target="#modalFechaInicio" value=${today.toLocaleDateString()}/>
    <input type="datetime" class="_form-input _input-size _font" id="fechaFinal" data-toggle="modal" data-target="#modalFechaFinal" value=${today.toLocaleDateString()}/>
    
                
    `
    elemp.appendChild(filtro);

    const mostrarBotonFiltro = document.getElementById("filtrar_fechas")
    mostrarBotonFiltro.classList.remove('_ocultar')

    var origen2 = document.getElementById('filtrar_fechas');
    var destino2 = document.getElementById('filtroFechas');
    destino2.appendChild(origen2);





    //const actualizarIng = document.createElement("button")
    //actualizarIng.classList.add("_btn-naranja")
    //actualizarIng.innerText = "Actualizar"
    //actualizarIng.setAttribute("id", "actualizar_ingresos")
    //actualizarIng.setAttribute("type", "button")
    //actualizarIng.setAttribute("style", "top:10px")

    //elemp.appendChild(actualizarIng)

    const graph = document.createElement("div")
    graph.classList.add("_chart")
    graph.setAttribute("id", "chart_div")

    elemp.appendChild(graph)

    const graph2 = document.createElement("div")
    graph2.classList.add("_chart2")
    graph2.setAttribute("id", "chart_div2")

    elemp.appendChild(graph2)

    ////GOOGLE CHARTS

    //google.charts.load('current', { packages: ['corechart', 'bar'] });
    //google.charts.setOnLoadCallback(drawBarColors);

    //function drawBarColors() {
    //    var data2 = google.visualization.arrayToDataTable([
    //        ['Total', 'Ingresos', 'Egresos'],
    //        ['Total', datos.totalIngresos, datos.totalEgresos],


    //    ], false);

    //    var options2 = {
    //        width: '100%',
    //        height: '230',
    //        title: 'Balance financiero',
    //        chartArea: { width: '40%' },
    //        colors: ['#FFD345', '#F4AB43'],
    //        hAxis: {
    //            title: 'Unidad MXN',
    //            minValue: 0,
    //            format: 'currency'
    //        },
    //        vAxis: {
    //            title: ''
    //        }
    //    };
    //    var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
    //    chart2.draw(data2, options2);
    //}
}



