//Funcion que construye el formulario para datos del dueño
const elem = document.getElementById("_form-humano")
export default function mostrartabla(_humano) {
    elem.classList.add("_dataform", "_font")

    const titulo = document.createElement("h2")
    titulo.textContent = "Mis datos"
    titulo.setAttribute("id", "tituloHumano")

    elem.appendChild(titulo)

    const hijo = document.createElement("form")

    hijo.setAttribute("id", "humano")
    hijo.classList.add("_form", "_font")
    hijo.innerHTML = `
        <label class="_label" for="exampleInputEmail1">Usuario ID</label>
        <span id="sh_id" class="_label-form">${_humano.getId()}</span>
        <label class="_label" for="exampleInputEmail1">Nombre de usuario</label>
        <span id="sh_name" class="_label-form">${_humano.getPropietario()}</span>
        <label class="_label" for="exampleInputEmail1">Estado</label>
        <span id="sh_estado" class="_label-form">${_humano.getEstado()}</span>
        <div id="select-estados">
        </div>
        <label class="_label" for="exampleInputEmail1">Municipio</label>
        <span id="sh_municipio" class="_label-form">${_humano.getMunicipio()}</span>
        <div id="select-municipios">
        </div>
        <label class="_label" for="exampleInputEmail1">Colonia</label>
        <span id="sh_colonia" class="_label-form">${_humano.getColonia()}</span>
        <label class="_label" for="exampleInputEmail1">Direccion</label>
        <span id="sh_direccion" class="_label-form">${_humano.getDireccion()}</span>
        <label class="_label" for="exampleInputEmail1">Teléfono</label>
        <span id="sh_telefono" class="_label-form">${_humano.getTelefono()}</span>
        
        <div id="_buttons" class="_command-buttons">
            <button id="update_humano" type="button" class="_btn-editar">Editar</button>
        </div>
    `
    elem.appendChild(hijo)
}

//Cambiamos los span de la tabla de humano por input para modificar los valores 

export function reemplazar(_humano) {
    const ih_name = document.createElement("input");
    ih_name.classList.add("_form-input", "_label-form", "_font");
    ih_name.setAttribute("id", "ih_name");
    ih_name.setAttribute("type", "text");
    ih_name.setAttribute("placeholder", `${_humano.getPropietario()}`);
    ih_name.setAttribute("ng-model", "Humano.Nombre");


    const ih_name_content = document.createTextNode("Diego López");

    ih_name.appendChild(ih_name_content);

    const sh_name = document.getElementById("sh_name");
    const humano = document.getElementById("humano");
    humano.replaceChild(ih_name, sh_name);
}

export function reemplazar1(_humano) {

    const mostrarSelect0 = document.getElementById("ih_estado")
    mostrarSelect0.classList.remove('_ocultar')

    const ocultarLabel0 = document.getElementById("sh_estado")
    ocultarLabel0.classList.add('_ocultar')

    var origen0 = document.getElementById("ih_estado");
    var destino0 = document.getElementById("select-estados");
    destino0.appendChild(origen0);
}

export function reemplazar2(_humano) {
    //municipio
    const mostrarSelect = document.getElementById("_typeMunicipios")
    mostrarSelect.classList.remove('_ocultar')
    mostrarSelect.innerText = "${ _humano.getMunicipio() }"

    const ocultarLabel = document.getElementById("sh_municipio")
    ocultarLabel.classList.add('_ocultar')

    var origen = document.getElementById("_typeMunicipios");
    var destino = document.getElementById("select-municipios");
    destino.appendChild(origen);

    
    
}

export function reemplazar3(_humano) {
    const ih_colonia = document.createElement("input");
    ih_colonia.classList.add("_form-input", "_label-form", "_font");
    ih_colonia.setAttribute("id", "ih_colonia");
    ih_colonia.setAttribute("type", "text");
    ih_colonia.setAttribute("placeholder", `${_humano.getColonia()}`);
    ih_colonia.setAttribute("ng-model", "Humano.Colonia");

    const ih_colonia_content = document.createTextNode("Centro");

    ih_colonia.appendChild(ih_colonia_content);

    const sh_colonia = document.getElementById("sh_colonia");
    const humano = document.getElementById("humano");
    humano.replaceChild(ih_colonia, sh_colonia);
}

export function reemplazar4(_humano) {
    const ih_direccion = document.createElement("input");
    ih_direccion.classList.add("_form-input", "_label-form", "_font");
    ih_direccion.setAttribute("id", "ih_direccion");
    ih_direccion.setAttribute("type", "text");
    ih_direccion.setAttribute("placeholder", `${_humano.getDireccion()}`);
    ih_name.setAttribute("ng-model", "Humano.Direccion");

    const ih_direccion_content = document.createTextNode("Benito Juárez 123");

    ih_direccion.appendChild(ih_direccion_content);

    const sh_direccion = document.getElementById("sh_direccion");
    const humano = document.getElementById("humano");
    humano.replaceChild(ih_direccion, sh_direccion);
}

export function reemplazar5(_humano) {
    const ih_telefono = document.createElement("input");
    ih_telefono.classList.add("_form-input", "_label-form", "_font");
    ih_telefono.setAttribute("id", "ih_telefono");
    ih_telefono.setAttribute("type", "text");
    ih_telefono.setAttribute("placeholder", `${_humano.getTelefono()}`);
    ih_telefono.setAttribute("ng-model", "Humano.telefono");

    const ih_telefono_content = document.createTextNode("555-5555555");

    ih_telefono.appendChild(ih_telefono_content);

    const sh_telefono = document.getElementById("sh_telefono");
    const humano = document.getElementById("humano");
    humano.replaceChild(ih_telefono, sh_telefono);
}

export function reemplazar6(_humano) {
    const ih_correo = document.createElement("input");
    ih_correo.classList.add("_form-input", "_label-form", "_font");
    ih_correo.setAttribute("id", "ih_correo");
    ih_correo.setAttribute("type", "text");
    ih_correo.setAttribute("placeholder", `${_humano.getEmail()}`);
    ih_name.setAttribute("ng-model", "Humano.Email");

    const ih_correo_content = document.createTextNode("soyusuario@gmail.com");

    ih_correo.appendChild(ih_correo_content);

    const sh_correo = document.getElementById("sh_correo");
    const humano = document.getElementById("humano");
    humano.replaceChild(ih_correo, sh_correo);
}
