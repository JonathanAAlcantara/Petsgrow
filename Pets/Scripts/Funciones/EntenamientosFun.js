//Funcion que construye el formulario para datos del perro

const elemp = document.getElementById("_form-entrenamiento")

export default function mostrartabla4(_entrenamiento, _perro, _medico) {
    elemp.classList.add("_dataform", "_font")

    const titulo = document.createElement("h2")
    titulo.textContent = "Datos de mi criadero"
    titulo.setAttribute("id", "tituloMedicos")

    elemp.appendChild(titulo)

    const hijop = document.createElement("form")

    hijop.setAttribute("id", "entrenamiento")
    hijop.classList.add("_form", "_font")
    hijop.innerHTML = `
        <label class="_label" for="exampleInputEmail1">Certificados</label>
        <span id="se_certificados" class="_label-form">${_entrenamiento.getCertificados()}</span>
        <label class="_label" for="exampleInputEmail1">Competencias</label>
         <div id="tabla-competencias">

        </div>

        <label class="_label" for="exampleInputEmail1" id="label-camadas">Camadas</label>
        <div id="tabla-camadas">

        </div>

        <label class="_label" for="exampleInputEmail1">Cuidados especiales</label>
        <span id="se_cuidados" class="_label-form">${_entrenamiento.getCuidados()}</span>
        <label class="_label" for="exampleInputEmail1">Póximos eventos</label>
        <span id="se_proxeventos" class="_label-form">${_entrenamiento.getProxEventos()}</span>
        <label class="_label" for="exampleInputEmail1">Entrenamientos</label>
        <span id="se_entrenamientos" class="_label-form">${_entrenamiento.getEntrenamientos()}</span>
        <label class="_label" for="exampleInputEmail1">Títulos obtenidos</label>
        <span id="se_titulos" class="_label-form">${_entrenamiento.getTitulos()}</span>

        <div id="_buttons" class="_command-buttons">
            <button id="update_entrenamiento" runat="server" type="button" class="_btn-editar">Editar</button>
        </div>
    `
    elemp.appendChild(hijop)

    //Agregar botones de competencias y camadas
    const mostrarBoton1 = document.getElementById("Actualizar_competencias")
    mostrarBoton1.classList.remove('_ocultar')
    

    var origen1 = document.getElementById('Actualizar_competencias');
    var destino1 = document.getElementById('tabla-competencias');
    destino1.appendChild(origen1);

   

    //Lógica para eliminar camadas
    //Si es macho no se muestra el campo de camadas
    //Si está esterilizada no se muestra el campo de camadas

    var sexoPerro = `${_perro.getSexo()}`
    var esterilizado = `${_medico.getEsterilizacion()}`

    if (sexoPerro == "Macho") {

        const a = document.getElementById("label-camadas")
        a.classList.add('_ocultar')

    }
    else {
        if (esterilizado == "Si") {

            const a = document.getElementById("label-camadas")
            a.classList.add('_ocultar')
        }
        else {

            const mostrarBoton2 = document.getElementById("Actualizar_camadas")
            mostrarBoton2.classList.remove('_ocultar')

            var origen2 = document.getElementById('Actualizar_camadas');
            var destino2 = document.getElementById('tabla-camadas');
            destino2.appendChild(origen2);

        }
    }


}

////////////////////////////////////////

//<span id="se_competencias" class="_label-form">${_entrenamiento.getCompetencias()}</span>

//<label class="_label" for="exampleInputEmail1">Historial de celos</label>
//<span id="se_hcelos" class="_label-form">${_entrenamiento.getHcelos()}</span>
//    <label class="_label" for="exampleInputEmail1">Historial de cruzas</label>
//    <span id="se_hcruzas" class="_label-form">${_entrenamiento.getHcruzas()}</span>
//    <label class="_label" for="exampleInputEmail1">Camadas</label>
//    <span id="se_camadas" class="_label-form">${_entrenamiento.getCamadas()}</span>
//    <label class="_label" for="exampleInputEmail1">Celo y cruce actual</label>
//    <span id="se_celocruceactual" class="_label-form">${_entrenamiento.getCeloCruceActual()}</span>
//    <label class="_label" for="exampleInputEmail1">Camada actual</label>
//    <span id="se_camadaactual" class="_label-form">${_entrenamiento.getCamadaActual()}</span>
//    <label class="_label" for="exampleInputEmail1">Proximo celo</label>
//    <span id="se_proxcelo" class="_label-form">${_entrenamiento.getProxCelo()}</span>
//    
//////////////////////////////////////////


//Cambiamos los span de la tabla de perro por input para modificar los valores 

export function reemplazarcertificados(_entrenamiento) {
    const ie_certificados = document.createElement("input");
    ie_certificados.classList.add("_form-input", "_label-form", "_font");
    ie_certificados.setAttribute("id", "ie_certificados");
    ie_certificados.setAttribute("type", "text");
    ie_certificados.setAttribute("placeholder", `${_entrenamiento.getCertificados()}`);


    const ie_certificados_content = document.createTextNode("Alguno");

    ie_certificados.appendChild(ie_certificados_content);

    const se_certificados = document.getElementById("se_certificados");
    const entrenamiento = document.getElementById("entrenamiento");
    entrenamiento.replaceChild(ie_certificados, se_certificados);
}

//export function reemplazarcompetencias(_entrenamiento) {
//    const ie_competencias = document.createElement("input");
//    ie_competencias.classList.add("_form-input", "_label-form", "_font");
//    ie_competencias.setAttribute("id", "ie_competencias");
//    ie_competencias.setAttribute("type", "text");
//    ie_competencias.setAttribute("placeholder", `${_entrenamiento.getCompetencias()}`);


//    const ie_competencias_content = document.createTextNode("Alguno");

//    ie_competencias.appendChild(ie_competencias_content);

//    const se_competencias = document.getElementById("se_competencias");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_competencias, se_competencias);
//}

//export function reemplazhcelos(_entrenamiento) {
//    const ie_hcelos = document.createElement("input");
//    ie_hcelos.classList.add("_form-input", "_label-form", "_font");
//    ie_hcelos.setAttribute("id", "ie_hcelos");
//    ie_hcelos.setAttribute("type", "text");
//    ie_hcelos.setAttribute("placeholder", `${_entrenamiento.getHcelos()}`);


//    const ie_hcelos_content = document.createTextNode("Alguno");

//    ie_hcelos.appendChild(ie_hcelos_content);

//    const se_hcelos = document.getElementById("se_hcelos");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_hcelos, se_hcelos);
//}

//export function reemplazarhcruzas(_entrenamiento) {
//    const ie_hcruzas = document.createElement("input");
//    ie_hcruzas.classList.add("_form-input", "_label-form", "_font");
//    ie_hcruzas.setAttribute("id", "ie_hcruzas");
//    ie_hcruzas.setAttribute("type", "text");
//    ie_hcruzas.setAttribute("placeholder", `${_entrenamiento.getHcruzas()}`);


//    const ie_hcruzas_content = document.createTextNode("Alguno");

//    ie_hcruzas.appendChild(ie_hcruzas_content);

//    const se_hcruzas = document.getElementById("se_hcruzas");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_hcruzas, se_hcruzas);
//}

//export function reemplazarcamadas(_entrenamiento) {
//    const ie_camadas = document.createElement("input");
//    ie_camadas.classList.add("_form-input", "_label-form", "_font");
//    ie_camadas.setAttribute("id", "ie_camadas");
//    ie_camadas.setAttribute("type", "text");
//    ie_camadas.setAttribute("placeholder", `${_entrenamiento.getCamadas()}`);


//    const ie_camadas_content = document.createTextNode("Alguno");

//    ie_camadas.appendChild(ie_camadas_content);

//    const se_camadas = document.getElementById("se_camadas");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_camadas, se_camadas);
//}

//export function reemplazarcelocruceactual(_entrenamiento) {
//    const ie_celocruceactual = document.createElement("input");
//    ie_celocruceactual.classList.add("_form-input", "_label-form", "_font");
//    ie_celocruceactual.setAttribute("id", "ie_celocruceactual");
//    ie_celocruceactual.setAttribute("type", "text");
//    ie_celocruceactual.setAttribute("placeholder", `${_entrenamiento.getCeloCruceActual()}`);


//    const ie_celocruceactual_content = document.createTextNode("Alguno");

//    ie_celocruceactual.appendChild(ie_celocruceactual_content);

//    const se_celocruceactual = document.getElementById("se_celocruceactual");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_celocruceactual, se_celocruceactual);
//}

//export function reemplazarcamadaactual(_entrenamiento) {
//    const ie_camadaactual = document.createElement("input");
//    ie_camadaactual.classList.add("_form-input", "_label-form", "_font");
//    ie_camadaactual.setAttribute("id", "ie_camadaactual");
//    ie_camadaactual.setAttribute("type", "text");
//    ie_camadaactual.setAttribute("placeholder", `${_entrenamiento.getCamadaActual()}`);


//    const ie_camadaactual_content = document.createTextNode("Alguno");

//    ie_camadaactual.appendChild(ie_camadaactual_content);

//    const se_camadaactual = document.getElementById("se_camadaactual");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_camadaactual, se_camadaactual);
//}

//export function reemplazarproxcelo(_entrenamiento) {
//    const ie_proxcelo = document.createElement("input");
//    ie_proxcelo.classList.add("_form-input", "_label-form", "_font");
//    ie_proxcelo.setAttribute("id", "ie_proxcelo");
//    ie_proxcelo.setAttribute("type", "text");
//    ie_proxcelo.setAttribute("placeholder", `${_entrenamiento.getProxCelo()}`);


//    const ie_proxcelo_content = document.createTextNode("Alguno");

//    ie_proxcelo.appendChild(ie_proxcelo_content);

//    const se_proxcelo = document.getElementById("se_proxcelo");
//    const entrenamiento = document.getElementById("entrenamiento");
//    entrenamiento.replaceChild(ie_proxcelo, se_proxcelo);
//}

export function reemplazarcuidados(_entrenamiento) {
    const ie_cuidados = document.createElement("input");
    ie_cuidados.classList.add("_form-input", "_label-form", "_font");
    ie_cuidados.setAttribute("id", "ie_cuidados");
    ie_cuidados.setAttribute("type", "text");
    ie_cuidados.setAttribute("placeholder", `${_entrenamiento.getCuidados()}`);


    const ie_cuidados_content = document.createTextNode("Alguno");

    ie_cuidados.appendChild(ie_cuidados_content);

    const se_cuidados = document.getElementById("se_cuidados");
    const entrenamiento = document.getElementById("entrenamiento");
    entrenamiento.replaceChild(ie_cuidados, se_cuidados);
}

export function reemplazarproxeventos(_entrenamiento) {
    const ie_proxeventos = document.createElement("input");
    ie_proxeventos.classList.add("_form-input", "_label-form", "_font");
    ie_proxeventos.setAttribute("id", "ie_proxeventos");
    ie_proxeventos.setAttribute("type", "text");
    ie_proxeventos.setAttribute("placeholder", `${_entrenamiento.getProxEventos()}`);


    const ie_proxeventos_content = document.createTextNode("Alguno");

    ie_proxeventos.appendChild(ie_proxeventos_content);

    const se_proxeventos = document.getElementById("se_proxeventos");
    const entrenamiento = document.getElementById("entrenamiento");
    entrenamiento.replaceChild(ie_proxeventos, se_proxeventos);
}

export function reemplazarentrenamientos(_entrenamiento) {
    const ie_entrenamientos = document.createElement("input");
    ie_entrenamientos.classList.add("_form-input", "_label-form", "_font");
    ie_entrenamientos.setAttribute("id", "ie_entrenamientos");
    ie_entrenamientos.setAttribute("type", "text");
    ie_entrenamientos.setAttribute("placeholder", `${_entrenamiento.getEntrenamientos()}`);


    const ie_entrenamientos_content = document.createTextNode("Alguno");

    ie_entrenamientos.appendChild(ie_entrenamientos_content);

    const se_entrenamientos = document.getElementById("se_entrenamientos");
    const entrenamiento = document.getElementById("entrenamiento");
    entrenamiento.replaceChild(ie_entrenamientos, se_entrenamientos);
}

export function reemplazartitulos(_entrenamiento) {
    const ie_titulos = document.createElement("input");
    ie_titulos.classList.add("_form-input", "_label-form", "_font");
    ie_titulos.setAttribute("id", "ie_titulos");
    ie_titulos.setAttribute("type", "text");
    ie_titulos.setAttribute("placeholder", `${_entrenamiento.getTitulos()}`);


    const ie_titulos_content = document.createTextNode("Alguno");

    ie_titulos.appendChild(ie_titulos_content);

    const se_titulos = document.getElementById("se_titulos");
    const entrenamiento = document.getElementById("entrenamiento");
    entrenamiento.replaceChild(ie_titulos, se_titulos);
}