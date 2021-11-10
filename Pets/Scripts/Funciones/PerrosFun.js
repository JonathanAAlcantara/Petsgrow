//Funcion que construye el formulario para datos del perro

const elemp = document.getElementById("_form-perro")

export default function mostrartabla2(_perro) {
    elemp.classList.add("_dataform", "_font")

    const titulo = document.createElement("h2")
    titulo.textContent = "Datos de mi perro"
    titulo.setAttribute("id", "tituloPerro")

    elemp.appendChild(titulo)

    const hijop = document.createElement("form")

    hijop.setAttribute("id", "perro")
    hijop.classList.add("_formp", "_font")
    hijop.innerHTML = `
        <label class="_label" for="exampleInputEmail1">Perro ID</label>
        <span id="sp_perroid" class="_label-form">${_perro.getId()}</span>
        <label class="_label" for="exampleInputEmail1">Nombre del perro</label>
        <span id="sp_nombre" class="_label-form">${_perro.getNombrePerro()}</span>
        <label class="_label" for="exampleInputEmail1">Número de chip</label>
        <span id="sp_chip" class="_label-form">${_perro.getChip()}</span>
        <label class="_label" for="exampleInputEmail1">Raza</label>
        <span id="sp_raza" class="_label-form">${_perro.getRaza()}</span>
        <label class="_label" for="exampleInputEmail1">Número de tatuaje</label>
        <span id="sp_tatuaje" class="_label-form">${_perro.getTatuaje()}</span>
        <label class="_label" for="exampleInputEmail1">Nacimiento</label>
        <span id="sp_nacimiento" class="_label-form">${_perro.getNacimiento()}</span>
        <label class="_label" for="exampleInputEmail1">Pedigree</label>
        <span style="overflow-x: scroll" id="sp_pedigree" class="_label-form">${_perro.getPedigree()}</span>
        <a id="sp-link" style="color: var(--secondary-color)" href="${_perro.getPedigree()}">Ir al sitio</a><br />
        <label class="_label" for="exampleInputEmail1">Sexo</label>
        <span id="sp_sexo" class="_label-form">${_perro.getSexo()}</span>
        <label class="_label" for="exampleInputEmail1">Señas particulares</label>
        <span style="overflow-x: scroll" id="sp_particulares" class="_label-form">${_perro.getParticulares()}</span>
        <label class="_label" for="exampleInputEmail1">Color</label>
        <span id="sp_color" class="_label-form">${_perro.getColor()}</span>
        <label class="_label" for="exampleInputEmail1">Peso (kilogramos)</label>
        <span id="sp_peso" class="_label-form">${_perro.getPeso()}</span>
        <label class="_label" for="exampleInputEmail1">Tipo de pelo</label>
        <span id="sp_pelo" class="_label-form">${_perro.getPelo()}</span>
        <label class="_label" for="exampleInputEmail1">Altura a la cruz (centímetros)</label>
        <span id="sp_altura" class="_label-form">${_perro.getAltura()}</span>
        <label class="_label" for="exampleInputEmail1">Criador</label>
        <span id="sp_criador" class="_label-form">${_perro.getCriador()}</span>
        <label class="_label" for="exampleInputEmail1">Consanguinidad</label>
        <span style="overflow-x: scroll" id="sp_consanguinidad" class="_label-form">${_perro.getConsanguinidad()}</span>
        <div id="_buttons" class="_command-buttons">
            <button id="update_perro" runat="server" type="button" class="_btn-editar">Editar</button>
        </div>
    `
    elemp.appendChild(hijop)

    var link = `${_perro.getPedigree()}`;

    if (link == null || link == '') {

        const idLinkString = document.getElementById("sp-link");

        idLinkString.classList.add('_ocultar');

    }
}

//Cambiamos los span de la tabla de perro por input para modificar los valores 

export function reemplazarnombre(_perro) {
    const ip_nombre = document.createElement("input");
    ip_nombre.classList.add("_form-input", "_label-form", "_font");
    ip_nombre.setAttribute("id", "ip_nombre");
    ip_nombre.setAttribute("type", "text");
    ip_nombre.setAttribute("placeholder", `${_perro.getNombrePerro()}`);


    const ip_nombre_content = document.createTextNode("Rufo");

    ip_nombre.appendChild(ip_nombre_content);

    const sp_nombre = document.getElementById("sp_nombre");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_nombre, sp_nombre);
}

export function reemplazarchip(_perro) {
    const ip_chip = document.createElement("input");
    ip_chip.classList.add("_form-input", "_label-form", "_font");
    ip_chip.setAttribute("id", "ip_chip");
    ip_chip.setAttribute("type", "text");
    ip_chip.setAttribute("placeholder", `${_perro.getChip()}`);


    const ip_chip_content = document.createTextNode("876543");

    ip_chip.appendChild(ip_chip_content);

    const sp_chip = document.getElementById("sp_chip");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_chip, sp_chip);
}

//export function reemplazarraza(_perro) {
//    const ip_raza = document.createElement("input");
//    ip_raza.classList.add("_form-input", "_label-form", "_font");
//    ip_raza.setAttribute("id", "ip_raza");
//    ip_raza.setAttribute("type", "text");
//    ip_raza.setAttribute("placeholder", `${_perro.getRaza()}`);


//    const ip_raza_content = document.createTextNode("Pastor Inglés");

//    ip_raza.appendChild(ip_raza_content);

//    const sp_raza = document.getElementById("sp_raza");
//    const perro = document.getElementById("perro");
//    perro.replaceChild(ip_raza, sp_raza);
//}

export function reemplazarraza(_perro) {

    //CLASE DE ESTADOS Y MUNICIPIOS
    class Razas {
        constructor(idraza, grupo, seccion, raza, pais) {
            this.idraza = idraza
            this.grupo = grupo
            this.seccion = seccion
            this.raza = raza
            this.pais = pais
        }

        getIdRaza() {
            return this.idraza
        }

        getGrupo() {
            return this.grupo
        }

        getSeccion() {
            return this.seccion
        }

        getRaza() {
            return this.raza
        }

        getPais() {
            return this.pais
        }

        setIdRaza(idraza) {
            this.idraza = idraza
        }

        setGrupo(grupo) {
            this.grupo = grupo
        }

        setSeccion(seccion) {
            this.seccion = seccion
        }

        setRaza(raza) {
            this.raza = raza
        }

        setPais(pais) {
            this.pais = pais
        }

    }
    let raza = new Razas

    //CREA EL ELEMENTO SELECT
    const ip_raza = document.createElement("select");
    ip_raza.classList.add("_font", "_form-input");
    ip_raza.setAttribute("id", "_typeRazas");
    ip_raza.setAttribute("name", "raza");
    
    //FUNCION PARA CREAR LAS OPCIONES DEL SELECT
    
    function mostrarOpcion(raza) {
        const selectRaza = document.querySelector('#_typeRazas')

        var option00 = document.createElement("option");
        option00.setAttribute('value', '');
        option00.appendChild(document.createTextNode(""));
        selectRaza.appendChild(option00);

        const opcion = document.createElement("option")

        opcion.innerHTML = `
                        <option value="${raza.getIdRaza()}">${raza.getRaza()}</option>
                    `
        selectRaza.appendChild(opcion)
    }

    var urlPathSystem = "";

    $.ajax({
        type: "POST",
        url: urlPathSystem + "/Anuncios/ObtenerRazas",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(
            {
                'raza': raza
            }),
        success: function (datosrazas) {

            const selectRaza = document.getElementById("_typeRazas")

            selectRaza.innerHTML = "";

            for (let i = 0; i < datosrazas.length; i++) {

                raza.idraza = datosrazas[i].IdRaza;
                raza.grupo = datosrazas[i].Grupo;
                raza.seccion = datosrazas[i].Seccion;
                raza.raza = datosrazas[i].Raza;
                raza.pais = datosrazas[i].Pais;

                mostrarOpcion(raza)
            }


        },
        error: function (error) {

        }
    });


    //const ip_raza_content = document.createTextNode("Pastor Inglés");

    //ip_raza.appendChild(ip_raza_content);

    const sp_raza = document.getElementById("sp_raza");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_raza, sp_raza);
}

export function reemplazartatuaje(_perro) {
    const ip_tatuaje = document.createElement("input");
    ip_tatuaje.classList.add("_form-input", "_label-form", "_font");
    ip_tatuaje.setAttribute("id", "ip_tatuaje");
    ip_tatuaje.setAttribute("type", "text");
    ip_tatuaje.setAttribute("placeholder", `${_perro.getTatuaje()}`);


    const ip_tatuaje_content = document.createTextNode("874626");

    ip_tatuaje.appendChild(ip_tatuaje_content);

    const sp_tatuaje = document.getElementById("sp_tatuaje");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_tatuaje, sp_tatuaje);
}

export function reemplazarnacimiento(_perro) {
    const ip_nacimiento = document.createElement("input");
    ip_nacimiento.classList.add("_form-input", "_label-form", "_font");
    ip_nacimiento.setAttribute("id", "ip_nacimiento");
    ip_nacimiento.setAttribute("type", "text");
    ip_nacimiento.setAttribute("data-toggle", "modal");
    ip_nacimiento.setAttribute("data-target", "#modalFechaNacimiento");
    ip_nacimiento.setAttribute("placeholder", `${_perro.getNacimiento()}`);


    const ip_nacimiento_content = document.createTextNode("25/05/2016");

    ip_nacimiento.appendChild(ip_nacimiento_content);

    const sp_nacimiento = document.getElementById("sp_nacimiento");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_nacimiento, sp_nacimiento);
}

export function reemplazarpedigree(_perro) {
    const ip_pedigree = document.createElement("input");
    ip_pedigree.classList.add("_form-input", "_label-form", "_font");
    ip_pedigree.setAttribute("id", "ip_pedigree");
    ip_pedigree.setAttribute("type", "text");
    ip_pedigree.setAttribute("placeholder", `${_perro.getPedigree()}`);



    const ip_pedigree_content = document.createTextNode("Si");

    ip_pedigree.appendChild(ip_pedigree_content);

    const sp_pedigree = document.getElementById("sp_pedigree");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_pedigree, sp_pedigree);

}

export function reemplazarsexo(_perro) {
    const ip_sexo = document.createElement("select");
    ip_sexo.classList.add("_form-input", "_label-form", "_font");
    ip_sexo.setAttribute("id", "ip_sexo");
    ip_sexo.setAttribute("type", "text");

    var option0 = document.createElement("option");
    option0.setAttribute('value', '');
    option0.appendChild(document.createTextNode(""));

    var option1 = document.createElement("option");
    option1.setAttribute('value', 1);
    option1.appendChild(document.createTextNode("Macho"));

    var option2 = document.createElement("option");
    option2.setAttribute('value', 2);
    option2.appendChild(document.createTextNode("Hembra"));

    ip_sexo.appendChild(option0);
    ip_sexo.appendChild(option1);
    ip_sexo.appendChild(option2);

    //const ip_sexo = document.createElement("input");
    //ip_sexo.classList.add("_form-input", "_label-form", "_font");
    //ip_sexo.setAttribute("id", "ip_sexo");
    //ip_sexo.setAttribute("type", "text");
    //ip_sexo.setAttribute("placeholder", `${_perro.getSexo()}`);

    //const ip_sexo_content = document.createTextNode("Macho");

    //ip_sexo.appendChild(ip_sexo_content);

    const sp_sexo = document.getElementById("sp_sexo");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_sexo, sp_sexo);
}

export function reemplazarparticulares(_perro) {
    const ip_particulares = document.createElement("input");
    ip_particulares.classList.add("_form-input", "_label-form", "_font");
    ip_particulares.setAttribute("id", "ip_particulares");
    ip_particulares.setAttribute("type", "text");
    ip_particulares.setAttribute("placeholder", `${_perro.getParticulares()}`);


    const ip_particulares_content = document.createTextNode("Ninguna");

    ip_particulares.appendChild(ip_particulares_content);

    const sp_particulares = document.getElementById("sp_particulares");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_particulares, sp_particulares);
}

export function reemplazarcolor(_perro) {
    const ip_color = document.createElement("input");
    ip_color.classList.add("_form-input", "_label-form", "_font");
    ip_color.setAttribute("id", "ip_color");
    ip_color.setAttribute("type", "text");
    ip_color.setAttribute("placeholder", `${_perro.getColor()}`);


    const ip_color_content = document.createTextNode("Gris con negro");

    ip_color.appendChild(ip_color_content);

    const sp_color = document.getElementById("sp_color");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_color, sp_color);
}

export function reemplazarpeso(_perro) {
    const ip_peso = document.createElement("div");
    ip_peso.classList.add("input-group-sub", "suffix")
    ip_peso.innerHTML = `
        <input class="input-sub" type="text" name="input" id="ip_peso">
        <span class="input-group-addon ">Kg</span>

    `

    //const ip_peso = document.createElement("input");
    //ip_peso.classList.add("_form-input", "_label-form", "_font");
    //ip_peso.setAttribute("id", "ip_peso");
    //ip_peso.setAttribute("type", "text");
    //ip_peso.setAttribute("placeholder", `${_perro.getPeso()}`);


    //const ip_peso_content = document.createTextNode("20kg");

    //ip_peso.appendChild(ip_peso_content);

    const sp_peso = document.getElementById("sp_peso");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_peso, sp_peso);
}

export function reemplazarpelo(_perro) {
    const ip_pelo = document.createElement("input");
    ip_pelo.classList.add("_form-input", "_label-form", "_font");
    ip_pelo.setAttribute("id", "ip_pelo");
    ip_pelo.setAttribute("type", "text");
    ip_pelo.setAttribute("placeholder", `${_perro.getPelo()}`);


    const ip_pelo_content = document.createTextNode("Lacio");

    ip_pelo.appendChild(ip_pelo_content);

    const sp_pelo = document.getElementById("sp_pelo");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_pelo, sp_pelo);
}

export function reemplazaraltura(_perro) {
    const ip_altura = document.createElement("div");
    ip_altura.classList.add("input-group-sub", "suffix")
    ip_altura.innerHTML = `
        <input class="input-sub" type="text" name="input" id="ip_altura">
        <span class="input-group-addon ">cm</span>

    `


    //const ip_altura = document.createElement("input");
    //ip_altura.classList.add("_form-input", "_label-form", "_font");
    //ip_altura.setAttribute("id", "ip_altura");
    //ip_altura.setAttribute("type", "text");
    //ip_altura.setAttribute("placeholder", `${_perro.getAltura()}`);


    //const ip_altura_content = document.createTextNode(".5m");

    //ip_altura.appendChild(ip_altura_content);

    const sp_altura = document.getElementById("sp_altura");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_altura, sp_altura);
}

export function reemplazarcriador(_perro) {
    const ip_criador = document.createElement("input");
    ip_criador.classList.add("_form-input", "_label-form", "_font");
    ip_criador.setAttribute("id", "ip_criador");
    ip_criador.setAttribute("type", "text");
    ip_criador.setAttribute("placeholder", `${_perro.getCriador()}`);


    const ip_criador_content = document.createTextNode("Criador");

    ip_criador.appendChild(ip_criador_content);

    const sp_criador = document.getElementById("sp_criador");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_criador, sp_criador);
}

export function reemplazarconsanguinidad(_perro) {
    const ip_consanguinidad = document.createElement("input");
    ip_consanguinidad.classList.add("_form-input", "_label-form", "_font");
    ip_consanguinidad.setAttribute("id", "ip_consanguinidad");
    ip_consanguinidad.setAttribute("type", "text");
    ip_consanguinidad.setAttribute("placeholder", `${_perro.getConsanguinidad()}`);


    const ip_consanguinidad_content = document.createTextNode("Consanguinidad");

    ip_consanguinidad.appendChild(ip_consanguinidad_content);

    const sp_consanguinidad = document.getElementById("sp_consanguinidad");
    const perro = document.getElementById("perro");
    perro.replaceChild(ip_consanguinidad, sp_consanguinidad);
}