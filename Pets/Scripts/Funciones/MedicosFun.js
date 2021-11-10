//Funcion que construye el formulario para datos medicos

const salud = document.getElementById("_form-salud")

export default function mostrartabla3(_medico, _perro) {
    salud.classList.add("_dataform", "_font")

    const titulo = document.createElement("h2")
    titulo.textContent = "Historial Médico"
    titulo.setAttribute("id", "tituloMedicos")

    salud.appendChild(titulo)

    const hijo = document.createElement("form")

    hijo.setAttribute("id", "salud")
    hijo.classList.add("_form", "_font")
    hijo.innerHTML = `
        <label class="_label" for="exampleInputEmail1">Vacunas</label>        
        <div id="_tabla-vacunas">
            
        </div>
       
        <label class="_label" for="exampleInputEmail1">Desparacitación Interna</label>
        <span id="sm_desparacitacion_interna" class="_label-form">${_medico.getDesparasitacionInterna()}</span>
        <label class="_label" for="exampleInputEmail1">Desparacitación Externa</label>
        <span id="sm_desparacitacion_externa" class="_label-form">${_medico.getDesparasitacionExterna()}</span>
        <label class="_label" for="exampleInputEmail1">Medicamentos</label>
        <span id="sm_medicamentos" class="_label-form">${_medico.getMedicamentos()}</span>
        <label class="_label" for="exampleInputEmail1">Tratamientos</label>
        <span id="sm_tratamientos" class="_label-form">${_medico.getTratamientos()}</span>
        <label class="_label" for="exampleInputEmail1">Dieta</label>
        <span id="sm_dieta" class="_label-form">${_medico.getDieta()}</span>
        <label class="_label" for="exampleInputEmail1">Cirugías</label>
        <span id="sm_cirujias" class="_label-form">${_medico.getCirugias()}</span>
        <label class="_label" for="exampleInputEmail1">Alergias</label>
        <span id="sm_alergias" class="_label-form">${_medico.getAlergias()}</span>
        <label class="_label" for="exampleInputEmail1">Esterilización</label>
        <span id="sm_esterilizacion" class="_label-form">${_medico.getEsterilizacion()}</span>
        
        
   
        <div id="_buttons" class="_command-buttons">
            <button id="update_salud" runat="server" type="button" class="_btn-editar">Editar</button>
        </div>
    `
        //< label class="_label" for= "exampleInputEmail1" id = "input-celo" > Celo</label >
        //<span id="sm_celo" class="_label-form">${_medico.getCelo()}</span>

    salud.appendChild(hijo)

    //Agregar boton de vacunas
    const mostrarBoton = document.getElementById("Actualizar_vacunas")

    mostrarBoton.classList.remove('_ocultar')

    var origen = document.getElementById('Actualizar_vacunas');
    var destino = document.getElementById('_tabla-vacunas');
    destino.appendChild(origen);

    //Lógica para celos y esterilización
    //Si está esterilizado no se muestra el campo de celos

    //var sexoPerro = `${_perro.getSexo()}`

    //if (sexoPerro == "Macho") {

    //    const a = document.getElementById("input-celo")
    //    a.classList.add('_ocultar')

    //    const b = document.getElementById("sm_celo")
    //    b.classList.add('_ocultar')

    //}
    //else {

    //}
};


//<span id="sm_vacunas" class="_label-form">${_medico.getVacunas()}</span>

//Cambiamos los span de la tabla de salud por input para modificar los valores  

//export function reemplazarvacunas(_medico) {
//    const im_vacunas = document.createElement("input");
//    im_vacunas.classList.add("_form-input", "_label-form", "_font");
//    im_vacunas.setAttribute("id", "im_vacunas");
//    im_vacunas.setAttribute("type", "text");
//    im_vacunas.setAttribute("runat", "server");
//    im_vacunas.setAttribute("placeholder", `${_medico.getVacunas()}`);


//    const im_vacunas_content = document.createTextNode("Algunas vacunas");

//    im_vacunas.appendChild(im_vacunas_content);

//    const sm_vacunas = document.getElementById("sm_vacunas");
//    const salud = document.getElementById("salud");
//    salud.replaceChild(im_vacunas, sm_vacunas);
//}

export function reemplazardesparacitacioninterna(_medico) {
    const im_desparacitacion_interna = document.createElement("input");
    im_desparacitacion_interna.classList.add("_form-input", "_label-form", "_font");
    im_desparacitacion_interna.setAttribute("id", "im_desparacitacion_interna");
    im_desparacitacion_interna.setAttribute("type", "text");
    im_desparacitacion_interna.setAttribute("placeholder", `${_medico.getDesparasitacionInterna()}`);


    const im_desparacitacion_content = document.createTextNode("25/05/2016");

    im_desparacitacion_interna.appendChild(im_desparacitacion_content);

    const sm_desparacitacion_interna = document.getElementById("sm_desparacitacion_interna");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_desparacitacion_interna, sm_desparacitacion_interna);
}

export function reemplazardesparacitacionexterna(_medico) {
    const im_desparacitacion_externa = document.createElement("input");
    im_desparacitacion_externa.classList.add("_form-input", "_label-form", "_font");
    im_desparacitacion_externa.setAttribute("id", "im_desparacitacion_externa");
    im_desparacitacion_externa.setAttribute("type", "text");
    im_desparacitacion_externa.setAttribute("placeholder", `${_medico.getDesparasitacionExterna()}`);


    const im_desparacitacion_content = document.createTextNode("25/05/2016");

    im_desparacitacion_externa.appendChild(im_desparacitacion_content);

    const sm_desparacitacion_externa = document.getElementById("sm_desparacitacion_externa");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_desparacitacion_externa, sm_desparacitacion_externa);
}

export function reemplazarmedicamentos(_medico) {
    const im_medicamentos = document.createElement("input");
    im_medicamentos.classList.add("_form-input", "_label-form", "_font");
    im_medicamentos.setAttribute("id", "im_medicamentos");
    im_medicamentos.setAttribute("type", "text");
    im_medicamentos.setAttribute("placeholder", `${_medico.getMedicamentos()}`);


    const im_medicamentos_content = document.createTextNode("Algunos medicamentos");

    im_medicamentos.appendChild(im_medicamentos_content);

    const sm_medicamentos = document.getElementById("sm_medicamentos");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_medicamentos, sm_medicamentos);
}

export function reemplazartratamientos(_medico) {
    const im_tratamientos = document.createElement("input");
    im_tratamientos.classList.add("_form-input", "_label-form", "_font");
    im_tratamientos.setAttribute("id", "im_tratamientos");
    im_tratamientos.setAttribute("type", "text");
    im_tratamientos.setAttribute("placeholder", `${_medico.getTratamientos()}`);


    const im_tratamientos_content = document.createTextNode("Algunos tratamientos");

    im_tratamientos.appendChild(im_tratamientos_content);

    const sm_tratamientos = document.getElementById("sm_tratamientos");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_tratamientos, sm_tratamientos);
}

export function reemplazardieta(_medico) {
    const im_dieta = document.createElement("input");
    im_dieta.classList.add("_form-input", "_label-form", "_font");
    im_dieta.setAttribute("id", "im_dieta");
    im_dieta.setAttribute("type", "text");
    im_dieta.setAttribute("placeholder", `${_medico.getDieta()}`);


    const im_dieta_content = document.createTextNode("Alguna dieta");

    im_dieta.appendChild(im_dieta_content);

    const sm_dieta = document.getElementById("sm_dieta");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_dieta, sm_dieta);
}

export function reemplazarcirujia(_medico) {
    const im_cirujia = document.createElement("input");
    im_cirujia.classList.add("_form-input", "_label-form", "_font");
    im_cirujia.setAttribute("id", "im_cirujia");
    im_cirujia.setAttribute("type", "text");
    im_cirujia.setAttribute("placeholder", `${_medico.getCirugias()}`);


    const im_cirujia_content = document.createTextNode("Alguna cirujia");

    im_cirujia.appendChild(im_cirujia_content);

    const sm_cirujia = document.getElementById("sm_cirujias");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_cirujia, sm_cirujia);
}

export function reemplazaralergia(_medico) {
    const im_alergia = document.createElement("input");
    im_alergia.classList.add("_form-input", "_label-form", "_font");
    im_alergia.setAttribute("id", "im_alergia");
    im_alergia.setAttribute("type", "text");
    im_alergia.setAttribute("placeholder", `${_medico.getAlergias()}`);


    const im_alergia_content = document.createTextNode("Alguna alergia");

    im_alergia.appendChild(im_alergia_content);

    const sm_alergia = document.getElementById("sm_alergias");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_alergia, sm_alergia);
}

//export function reemplazarcelo(_medico, _perro) {

//    var sexoPerro = `${_perro.getSexo()}`

//    if (sexoPerro == "Hembra") {

//        const im_celo = document.createElement("input");
//        im_celo.classList.add("_form-input", "_label-form", "_font");
//        im_celo.setAttribute("id", "im_celo");
//        im_celo.setAttribute("type", "text");
//        im_celo.setAttribute("placeholder", `${_medico.getCelo()}`);


//        const im_celo_content = document.createTextNode("25/05/2016");

//        im_celo.appendChild(im_celo_content);

//        const sm_celo = document.getElementById("sm_celo");
//        const salud = document.getElementById("salud");
//        salud.replaceChild(im_celo, sm_celo);
//    }
//    else {

//    }

    
//}

export function reemplazaresterilizacion(_medico) {
    const im_esterilizacion = document.createElement("select");
    im_esterilizacion.classList.add("_form-input", "_label-form", "_font");
    im_esterilizacion.setAttribute("id", "im_esterilizacion");
    im_esterilizacion.setAttribute("type", "text");

    var option00 = document.createElement("option");
    option00.setAttribute('value', '');
    option00.appendChild(document.createTextNode(""));

    var optionSi = document.createElement("option");
    optionSi.setAttribute('value', 'Si');
    optionSi.appendChild(document.createTextNode("Si"));

    var optionNo = document.createElement("option");
    optionNo.setAttribute('value', 'No');
    optionNo.appendChild(document.createTextNode("No"));

    im_esterilizacion.appendChild(option00);
    im_esterilizacion.appendChild(optionSi);
    im_esterilizacion.appendChild(optionNo);

    

    

    const sm_esterilizacion = document.getElementById("sm_esterilizacion");
    const salud = document.getElementById("salud");
    salud.replaceChild(im_esterilizacion, sm_esterilizacion);
}