//MENU DESPLEGABLE

document.getElementById('menuTrigger').addEventListener('click',
    () => {
        document.getElementById('menu').classList.toggle('_menu-list-in')
    })

document.getElementById('closemenu').addEventListener('click',
    () => {
        document.getElementById('menu').classList.toggle('_menu-list-in')
    })

//MODAL PARA REGISTO DE PERROS
$('#myModalLoader').on('shown.bs.modal', function (e) {
    $("#myModalLoader").modal('hide');
})

//CLASE DE ESTADOS Y MUNICIPIOS
class Municipios {
    constructor(claveestado, nombreestado, clavemunicipio, nombremunicipio) {
        this.claveestado = claveestado
        this.nombreestado = nombreestado
        this.clavemunicipio = clavemunicipio
        this.nombremunicipio = nombremunicipio
    }

    getClaveEstado() {
        return this.claveestado
    }

    getNombreEstado() {
        return this.nombreestado
    }

    getClaveMunicipio() {
        return this.clavemunicipio
    }

    getNombreMunicipio() {
        return this.nombremunicipio
    }



    setClaveEstado(claveestado) {
        this.claveestado = claveestado
    }

    setNombreEstado(nombreestado) {
        this.nombreestado = nombreestado
    }

    setClaveMunicipio(clavemunicipio) {
        this.clavemunicipio = clavemunicipio
    }

    setNombreMunicipio(nombremunicipio) {
        this.nombremunicipio = nombremunicipio
    }

}

let Municipio = new Municipios

//FUNCION PARA CREAR LAS OPCIONES DEL SELECT

function mostrarOpcion(municipio) {
    const selectMun = document.getElementById("_typeMunicipios")
    const opcion = document.createElement("option")

    opcion.innerHTML = `
                        <option value="${municipio.getClaveMunicipio()}">${municipio.getNombreMunicipio()}</option>
                    `
    selectMun.appendChild(opcion)
}


//OPTIMIZAR DESPUÉS ESTA SECCIÓN...
document.getElementById('btn-ingresar').addEventListener('click',
    () => {

        document.getElementById("Rabia_date_l").classList.remove('mostrar-label');
        document.getElementById("Rabia_date_l").classList.add('ocultar-label');
        document.getElementById("Rabia_date").classList.add('mostrar-input');
        document.getElementById("Rabia_date").classList.remove('ocultar-input');

        document.getElementById("Rabia_prox_l").classList.remove('mostrar-label');
        document.getElementById("Rabia_prox_l").classList.add('ocultar-label');
        document.getElementById("Rabia_prox").classList.add('mostrar-input');
        document.getElementById("Rabia_prox").classList.remove('ocultar-input');

        document.getElementById("Rabia_form_l").classList.remove('mostrar-label');
        document.getElementById("Rabia_form_l").classList.add('ocultar-label');
        document.getElementById("Rabia_form").classList.add('mostrar-input');
        document.getElementById("Rabia_form").classList.remove('ocultar-input');

        document.getElementById("Rabia_vet_l").classList.remove('mostrar-label');
        document.getElementById("Rabia_vet_l").classList.add('ocultar-label');
        document.getElementById("Rabia_vet").classList.add('mostrar-input');
        document.getElementById("Rabia_vet").classList.remove('ocultar-input');

        document.getElementById("Parvo_date_l").classList.remove('mostrar-label');
        document.getElementById("Parvo_date_l").classList.add('ocultar-label');
        document.getElementById("Parvo_date").classList.add('mostrar-input');
        document.getElementById("Parvo_date").classList.remove('ocultar-input');

        document.getElementById("Parvo_prox_l").classList.remove('mostrar-label');
        document.getElementById("Parvo_prox_l").classList.add('ocultar-label');
        document.getElementById("Parvo_prox").classList.add('mostrar-input');
        document.getElementById("Parvo_prox").classList.remove('ocultar-input');

        document.getElementById("Parvo_form_l").classList.remove('mostrar-label');
        document.getElementById("Parvo_form_l").classList.add('ocultar-label');
        document.getElementById("Parvo_form").classList.add('mostrar-input');
        document.getElementById("Parvo_form").classList.remove('ocultar-input');

        document.getElementById("Parvo_vet_l").classList.remove('mostrar-label');
        document.getElementById("Parvo_vet_l").classList.add('ocultar-label');
        document.getElementById("Parvo_vet").classList.add('mostrar-input');
        document.getElementById("Parvo_vet").classList.remove('ocultar-input');

        document.getElementById("Diste_date_l").classList.remove('mostrar-label');
        document.getElementById("Diste_date_l").classList.add('ocultar-label');
        document.getElementById("Diste_date").classList.add('mostrar-input');
        document.getElementById("Diste_date").classList.remove('ocultar-input');

        document.getElementById("Diste_prox_l").classList.remove('mostrar-label');
        document.getElementById("Diste_prox_l").classList.add('ocultar-label');
        document.getElementById("Diste_prox").classList.add('mostrar-input');
        document.getElementById("Diste_prox").classList.remove('ocultar-input');

        document.getElementById("Diste_form_l").classList.remove('mostrar-label');
        document.getElementById("Diste_form_l").classList.add('ocultar-label');
        document.getElementById("Diste_form").classList.add('mostrar-input');
        document.getElementById("Diste_form").classList.remove('ocultar-input');

        document.getElementById("Diste_vet_l").classList.remove('mostrar-label');
        document.getElementById("Diste_vet_l").classList.add('ocultar-label');
        document.getElementById("Diste_vet").classList.add('mostrar-input');
        document.getElementById("Diste_vet").classList.remove('ocultar-input');

        document.getElementById("Adeno_date_l").classList.remove('mostrar-label');
        document.getElementById("Adeno_date_l").classList.add('ocultar-label');
        document.getElementById("Adeno_date").classList.add('mostrar-input');
        document.getElementById("Adeno_date").classList.remove('ocultar-input');

        document.getElementById("Adeno_prox_l").classList.remove('mostrar-label');
        document.getElementById("Adeno_prox_l").classList.add('ocultar-label');
        document.getElementById("Adeno_prox").classList.add('mostrar-input');
        document.getElementById("Adeno_prox").classList.remove('ocultar-input');

        document.getElementById("Adeno_form_l").classList.remove('mostrar-label');
        document.getElementById("Adeno_form_l").classList.add('ocultar-label');
        document.getElementById("Adeno_form").classList.add('mostrar-input');
        document.getElementById("Adeno_form").classList.remove('ocultar-input');

        document.getElementById("Adeno_vet_l").classList.remove('mostrar-label');
        document.getElementById("Adeno_vet_l").classList.add('ocultar-label');
        document.getElementById("Adeno_vet").classList.add('mostrar-input');
        document.getElementById("Adeno_vet").classList.remove('ocultar-input');

        document.getElementById("Influ_date_l").classList.remove('mostrar-label');
        document.getElementById("Influ_date_l").classList.add('ocultar-label');
        document.getElementById("Influ_date").classList.add('mostrar-input');
        document.getElementById("Influ_date").classList.remove('ocultar-input');

        document.getElementById("Influ_prox_l").classList.remove('mostrar-label');
        document.getElementById("Influ_prox_l").classList.add('ocultar-label');
        document.getElementById("Influ_prox").classList.add('mostrar-input');
        document.getElementById("Influ_prox").classList.remove('ocultar-input');

        document.getElementById("Influ_form_l").classList.remove('mostrar-label');
        document.getElementById("Influ_form_l").classList.add('ocultar-label');
        document.getElementById("Influ_form").classList.add('mostrar-input');
        document.getElementById("Influ_form").classList.remove('ocultar-input');

        document.getElementById("Influ_vet_l").classList.remove('mostrar-label');
        document.getElementById("Influ_vet_l").classList.add('ocultar-label');
        document.getElementById("Influ_vet").classList.add('mostrar-input');
        document.getElementById("Influ_vet").classList.remove('ocultar-input');

        document.getElementById("Lepto_date_l").classList.remove('mostrar-label');
        document.getElementById("Lepto_date_l").classList.add('ocultar-label');
        document.getElementById("Lepto_date").classList.add('mostrar-input');
        document.getElementById("Lepto_date").classList.remove('ocultar-input');

        document.getElementById("Lepto_prox_l").classList.remove('mostrar-label');
        document.getElementById("Lepto_prox_l").classList.add('ocultar-label');
        document.getElementById("Lepto_prox").classList.add('mostrar-input');
        document.getElementById("Lepto_prox").classList.remove('ocultar-input');

        document.getElementById("Lepto_form_l").classList.remove('mostrar-label');
        document.getElementById("Lepto_form_l").classList.add('ocultar-label');
        document.getElementById("Lepto_form").classList.add('mostrar-input');
        document.getElementById("Lepto_form").classList.remove('ocultar-input');

        document.getElementById("Lepto_vet_l").classList.remove('mostrar-label');
        document.getElementById("Lepto_vet_l").classList.add('ocultar-label');
        document.getElementById("Lepto_vet").classList.add('mostrar-input');
        document.getElementById("Lepto_vet").classList.remove('ocultar-input');

        document.getElementById("Borde_date_l").classList.remove('mostrar-label');
        document.getElementById("Borde_date_l").classList.add('ocultar-label');
        document.getElementById("Borde_date").classList.add('mostrar-input');
        document.getElementById("Borde_date").classList.remove('ocultar-input');

        document.getElementById("Borde_prox_l").classList.remove('mostrar-label');
        document.getElementById("Borde_prox_l").classList.add('ocultar-label');
        document.getElementById("Borde_prox").classList.add('mostrar-input');
        document.getElementById("Borde_prox").classList.remove('ocultar-input');

        document.getElementById("Borde_form_l").classList.remove('mostrar-label');
        document.getElementById("Borde_form_l").classList.add('ocultar-label');
        document.getElementById("Borde_form").classList.add('mostrar-input');
        document.getElementById("Borde_form").classList.remove('ocultar-input');

        document.getElementById("Borde_vet_l").classList.remove('mostrar-label');
        document.getElementById("Borde_vet_l").classList.add('ocultar-label');
        document.getElementById("Borde_vet").classList.add('mostrar-input');
        document.getElementById("Borde_vet").classList.remove('ocultar-input');

        document.getElementById("Lyme_date_l").classList.remove('mostrar-label');
        document.getElementById("Lyme_date_l").classList.add('ocultar-label');
        document.getElementById("Lyme_date").classList.add('mostrar-input');
        document.getElementById("Lyme_date").classList.remove('ocultar-input');

        document.getElementById("Lyme_prox_l").classList.remove('mostrar-label');
        document.getElementById("Lyme_prox_l").classList.add('ocultar-label');
        document.getElementById("Lyme_prox").classList.add('mostrar-input');
        document.getElementById("Lyme_prox").classList.remove('ocultar-input');

        document.getElementById("Lyme_form_l").classList.remove('mostrar-label');
        document.getElementById("Lyme_form_l").classList.add('ocultar-label');
        document.getElementById("Lyme_form").classList.add('mostrar-input');
        document.getElementById("Lyme_form").classList.remove('ocultar-input');

        document.getElementById("Lyme_vet_l").classList.remove('mostrar-label');
        document.getElementById("Lyme_vet_l").classList.add('ocultar-label');
        document.getElementById("Lyme_vet").classList.add('mostrar-input');
        document.getElementById("Lyme_vet").classList.remove('ocultar-input');

        document.getElementById("Otr1_name_l").classList.remove('mostrar-label');
        document.getElementById("Otr1_name_l").classList.add('ocultar-label');
        document.getElementById("Otr1_name").classList.add('mostrar-input');
        document.getElementById("Otr1_name").classList.remove('ocultar-input');

        document.getElementById("Otr1_date_l").classList.remove('mostrar-label');
        document.getElementById("Otr1_date_l").classList.add('ocultar-label');
        document.getElementById("Otr1_date").classList.add('mostrar-input');
        document.getElementById("Otr1_date").classList.remove('ocultar-input');

        document.getElementById("Otr1_prox_l").classList.remove('mostrar-label');
        document.getElementById("Otr1_prox_l").classList.add('ocultar-label');
        document.getElementById("Otr1_prox").classList.add('mostrar-input');
        document.getElementById("Otr1_prox").classList.remove('ocultar-input');

        document.getElementById("Otr1_form_l").classList.remove('mostrar-label');
        document.getElementById("Otr1_form_l").classList.add('ocultar-label');
        document.getElementById("Otr1_form").classList.add('mostrar-input');
        document.getElementById("Otr1_form").classList.remove('ocultar-input');

        document.getElementById("Otr1_vet_l").classList.remove('mostrar-label');
        document.getElementById("Otr1_vet_l").classList.add('ocultar-label');
        document.getElementById("Otr1_vet").classList.add('mostrar-input');
        document.getElementById("Otr1_vet").classList.remove('ocultar-input');

        document.getElementById("Otr2_name_l").classList.remove('mostrar-label');
        document.getElementById("Otr2_name_l").classList.add('ocultar-label');
        document.getElementById("Otr2_name").classList.add('mostrar-input');
        document.getElementById("Otr2_name").classList.remove('ocultar-input');

        document.getElementById("Otr2_date_l").classList.remove('mostrar-label');
        document.getElementById("Otr2_date_l").classList.add('ocultar-label');
        document.getElementById("Otr2_date").classList.add('mostrar-input');
        document.getElementById("Otr2_date").classList.remove('ocultar-input');

        document.getElementById("Otr2_prox_l").classList.remove('mostrar-label');
        document.getElementById("Otr2_prox_l").classList.add('ocultar-label');
        document.getElementById("Otr2_prox").classList.add('mostrar-input');
        document.getElementById("Otr2_prox").classList.remove('ocultar-input');

        document.getElementById("Otr2_form_l").classList.remove('mostrar-label');
        document.getElementById("Otr2_form_l").classList.add('ocultar-label');
        document.getElementById("Otr2_form").classList.add('mostrar-input');
        document.getElementById("Otr2_form").classList.remove('ocultar-input');

        document.getElementById("Otr2_vet_l").classList.remove('mostrar-label');
        document.getElementById("Otr2_vet_l").classList.add('ocultar-label');
        document.getElementById("Otr2_vet").classList.add('mostrar-input');
        document.getElementById("Otr2_vet").classList.remove('ocultar-input');

        document.getElementById("Otr3_name_l").classList.remove('mostrar-label');
        document.getElementById("Otr3_name_l").classList.add('ocultar-label');
        document.getElementById("Otr3_name").classList.add('mostrar-input');
        document.getElementById("Otr3_name").classList.remove('ocultar-input');

        document.getElementById("Otr3_date_l").classList.remove('mostrar-label');
        document.getElementById("Otr3_date_l").classList.add('ocultar-label');
        document.getElementById("Otr3_date").classList.add('mostrar-input');
        document.getElementById("Otr3_date").classList.remove('ocultar-input');

        document.getElementById("Otr3_prox_l").classList.remove('mostrar-label');
        document.getElementById("Otr3_prox_l").classList.add('ocultar-label');
        document.getElementById("Otr3_prox").classList.add('mostrar-input');
        document.getElementById("Otr3_prox").classList.remove('ocultar-input');

        document.getElementById("Otr3_form_l").classList.remove('mostrar-label');
        document.getElementById("Otr3_form_l").classList.add('ocultar-label');
        document.getElementById("Otr3_form").classList.add('mostrar-input');
        document.getElementById("Otr3_form").classList.remove('ocultar-input');

        document.getElementById("Otr3_vet_l").classList.remove('mostrar-label');
        document.getElementById("Otr3_vet_l").classList.add('ocultar-label');
        document.getElementById("Otr3_vet").classList.add('mostrar-input');
        document.getElementById("Otr3_vet").classList.remove('ocultar-input');

        document.getElementById("Otr4_name_l").classList.remove('mostrar-label');
        document.getElementById("Otr4_name_l").classList.add('ocultar-label');
        document.getElementById("Otr4_name").classList.add('mostrar-input');
        document.getElementById("Otr4_name").classList.remove('ocultar-input');

        document.getElementById("Otr4_date_l").classList.remove('mostrar-label');
        document.getElementById("Otr4_date_l").classList.add('ocultar-label');
        document.getElementById("Otr4_date").classList.add('mostrar-input');
        document.getElementById("Otr4_date").classList.remove('ocultar-input');

        document.getElementById("Otr4_prox_l").classList.remove('mostrar-label');
        document.getElementById("Otr4_prox_l").classList.add('ocultar-label');
        document.getElementById("Otr4_prox").classList.add('mostrar-input');
        document.getElementById("Otr4_prox").classList.remove('ocultar-input');

        document.getElementById("Otr4_form_l").classList.remove('mostrar-label');
        document.getElementById("Otr4_form_l").classList.add('ocultar-label');
        document.getElementById("Otr4_form").classList.add('mostrar-input');
        document.getElementById("Otr4_form").classList.remove('ocultar-input');

        document.getElementById("Otr4_vet_l").classList.remove('mostrar-label');
        document.getElementById("Otr4_vet_l").classList.add('ocultar-label');
        document.getElementById("Otr4_vet").classList.add('mostrar-input');
        document.getElementById("Otr4_vet").classList.remove('ocultar-input');

        document.getElementById("Otr5_name_l").classList.remove('mostrar-label');
        document.getElementById("Otr5_name_l").classList.add('ocultar-label');
        document.getElementById("Otr5_name").classList.add('mostrar-input');
        document.getElementById("Otr5_name").classList.remove('ocultar-input');

        document.getElementById("Otr5_date_l").classList.remove('mostrar-label');
        document.getElementById("Otr5_date_l").classList.add('ocultar-label');
        document.getElementById("Otr5_date").classList.add('mostrar-input');
        document.getElementById("Otr5_date").classList.remove('ocultar-input');

        document.getElementById("Otr5_prox_l").classList.remove('mostrar-label');
        document.getElementById("Otr5_prox_l").classList.add('ocultar-label');
        document.getElementById("Otr5_prox").classList.add('mostrar-input');
        document.getElementById("Otr5_prox").classList.remove('ocultar-input');

        document.getElementById("Otr5_form_l").classList.remove('mostrar-label');
        document.getElementById("Otr5_form_l").classList.add('ocultar-label');
        document.getElementById("Otr5_form").classList.add('mostrar-input');
        document.getElementById("Otr5_form").classList.remove('ocultar-input');

        document.getElementById("Otr5_vet_l").classList.remove('mostrar-label');
        document.getElementById("Otr5_vet_l").classList.add('ocultar-label');
        document.getElementById("Otr5_vet").classList.add('mostrar-input');
        document.getElementById("Otr5_vet").classList.remove('ocultar-input');

    })

document.getElementById('cancelar-ingreso').addEventListener('click',
    () => {

        document.getElementById("Rabia_date_l").classList.remove('ocultar-label');
        document.getElementById("Rabia_date_l").classList.add('mostrar-label');
        document.getElementById("Rabia_date").classList.add('ocultar-input');
        document.getElementById("Rabia_date").classList.remove('mostrar-input');

        document.getElementById("Rabia_prox_l").classList.remove('ocultar-label');
        document.getElementById("Rabia_prox_l").classList.add('mostrar-label');
        document.getElementById("Rabia_prox").classList.add('ocultar-input');
        document.getElementById("Rabia_prox").classList.remove('mostrar-input');

        document.getElementById("Rabia_form_l").classList.remove('ocultar-label');
        document.getElementById("Rabia_form_l").classList.add('mostrar-label');
        document.getElementById("Rabia_form").classList.add('ocultar-input');
        document.getElementById("Rabia_form").classList.remove('mostrar-input');

        document.getElementById("Rabia_vet_l").classList.remove('ocultar-label');
        document.getElementById("Rabia_vet_l").classList.add('mostrar-label');
        document.getElementById("Rabia_vet").classList.add('ocultar-input');
        document.getElementById("Rabia_vet").classList.remove('mostrar-input');

        document.getElementById("Parvo_date_l").classList.remove('ocultar-label');
        document.getElementById("Parvo_date_l").classList.add('mostrar-label');
        document.getElementById("Parvo_date").classList.add('ocultar-input');
        document.getElementById("Parvo_date").classList.remove('mostrar-input');

        document.getElementById("Parvo_prox_l").classList.remove('ocultar-label');
        document.getElementById("Parvo_prox_l").classList.add('mostrar-label');
        document.getElementById("Parvo_prox").classList.add('ocultar-input');
        document.getElementById("Parvo_prox").classList.remove('mostrar-input');

        document.getElementById("Parvo_form_l").classList.remove('ocultar-label');
        document.getElementById("Parvo_form_l").classList.add('mostrar-label');
        document.getElementById("Parvo_form").classList.add('ocultar-input');
        document.getElementById("Parvo_form").classList.remove('mostrar-input');

        document.getElementById("Parvo_vet_l").classList.remove('ocultar-label');
        document.getElementById("Parvo_vet_l").classList.add('mostrar-label');
        document.getElementById("Parvo_vet").classList.add('ocultar-input');
        document.getElementById("Parvo_vet").classList.remove('mostrar-input');

        document.getElementById("Diste_date_l").classList.remove('ocultar-label');
        document.getElementById("Diste_date_l").classList.add('mostrar-label');
        document.getElementById("Diste_date").classList.add('ocultar-input');
        document.getElementById("Diste_date").classList.remove('mostrar-input');

        document.getElementById("Diste_prox_l").classList.remove('ocultar-label');
        document.getElementById("Diste_prox_l").classList.add('mostrar-label');
        document.getElementById("Diste_prox").classList.add('ocultar-input');
        document.getElementById("Diste_prox").classList.remove('mostrar-input');

        document.getElementById("Diste_form_l").classList.remove('ocultar-label');
        document.getElementById("Diste_form_l").classList.add('mostrar-label');
        document.getElementById("Diste_form").classList.add('ocultar-input');
        document.getElementById("Diste_form").classList.remove('mostrar-input');

        document.getElementById("Diste_vet_l").classList.remove('ocultar-label');
        document.getElementById("Diste_vet_l").classList.add('mostrar-label');
        document.getElementById("Diste_vet").classList.add('ocultar-input');
        document.getElementById("Diste_vet").classList.remove('mostrar-input');

        document.getElementById("Adeno_date_l").classList.remove('ocultar-label');
        document.getElementById("Adeno_date_l").classList.add('mostrar-label');
        document.getElementById("Adeno_date").classList.add('ocultar-input');
        document.getElementById("Adeno_date").classList.remove('mostrar-input');

        document.getElementById("Adeno_prox_l").classList.remove('ocultar-label');
        document.getElementById("Adeno_prox_l").classList.add('mostrar-label');
        document.getElementById("Adeno_prox").classList.add('ocultar-input');
        document.getElementById("Adeno_prox").classList.remove('mostrar-input');

        document.getElementById("Adeno_form_l").classList.remove('ocultar-label');
        document.getElementById("Adeno_form_l").classList.add('mostrar-label');
        document.getElementById("Adeno_form").classList.add('ocultar-input');
        document.getElementById("Adeno_form").classList.remove('mostrar-input');

        document.getElementById("Adeno_vet_l").classList.remove('ocultar-label');
        document.getElementById("Adeno_vet_l").classList.add('mostrar-label');
        document.getElementById("Adeno_vet").classList.add('ocultar-input');
        document.getElementById("Adeno_vet").classList.remove('mostrar-input');

        document.getElementById("Influ_date_l").classList.remove('ocultar-label');
        document.getElementById("Influ_date_l").classList.add('mostrar-label');
        document.getElementById("Influ_date").classList.add('ocultar-input');
        document.getElementById("Influ_date").classList.remove('mostrar-input');

        document.getElementById("Influ_prox_l").classList.remove('ocultar-label');
        document.getElementById("Influ_prox_l").classList.add('mostrar-label');
        document.getElementById("Influ_prox").classList.add('ocultar-input');
        document.getElementById("Influ_prox").classList.remove('mostrar-input');

        document.getElementById("Influ_form_l").classList.remove('ocultar-label');
        document.getElementById("Influ_form_l").classList.add('mostrar-label');
        document.getElementById("Influ_form").classList.add('ocultar-input');
        document.getElementById("Influ_form").classList.remove('mostrar-input');

        document.getElementById("Influ_vet_l").classList.remove('ocultar-label');
        document.getElementById("Influ_vet_l").classList.add('mostrar-label');
        document.getElementById("Influ_vet").classList.add('ocultar-input');
        document.getElementById("Influ_vet").classList.remove('mostrar-input');

        document.getElementById("Lepto_date_l").classList.remove('ocultar-label');
        document.getElementById("Lepto_date_l").classList.add('mostrar-label');
        document.getElementById("Lepto_date").classList.add('ocultar-input');
        document.getElementById("Lepto_date").classList.remove('mostrar-input');

        document.getElementById("Lepto_prox_l").classList.remove('ocultar-label');
        document.getElementById("Lepto_prox_l").classList.add('mostrar-label');
        document.getElementById("Lepto_prox").classList.add('ocultar-input');
        document.getElementById("Lepto_prox").classList.remove('mostrar-input');

        document.getElementById("Lepto_form_l").classList.remove('ocultar-label');
        document.getElementById("Lepto_form_l").classList.add('mostrar-label');
        document.getElementById("Lepto_form").classList.add('ocultar-input');
        document.getElementById("Lepto_form").classList.remove('mostrar-input');

        document.getElementById("Lepto_vet_l").classList.remove('ocultar-label');
        document.getElementById("Lepto_vet_l").classList.add('mostrar-label');
        document.getElementById("Lepto_vet").classList.add('ocultar-input');
        document.getElementById("Lepto_vet").classList.remove('mostrar-input');

        document.getElementById("Borde_date_l").classList.remove('ocultar-label');
        document.getElementById("Borde_date_l").classList.add('mostrar-label');
        document.getElementById("Borde_date").classList.add('ocultar-input');
        document.getElementById("Borde_date").classList.remove('mostrar-input');

        document.getElementById("Borde_prox_l").classList.remove('ocultar-label');
        document.getElementById("Borde_prox_l").classList.add('mostrar-label');
        document.getElementById("Borde_prox").classList.add('ocultar-input');
        document.getElementById("Borde_prox").classList.remove('mostrar-input');

        document.getElementById("Borde_form_l").classList.remove('ocultar-label');
        document.getElementById("Borde_form_l").classList.add('mostrar-label');
        document.getElementById("Borde_form").classList.add('ocultar-input');
        document.getElementById("Borde_form").classList.remove('mostrar-input');

        document.getElementById("Borde_vet_l").classList.remove('ocultar-label');
        document.getElementById("Borde_vet_l").classList.add('mostrar-label');
        document.getElementById("Borde_vet").classList.add('ocultar-input');
        document.getElementById("Borde_vet").classList.remove('mostrar-input');

        document.getElementById("Lyme_date_l").classList.remove('ocultar-label');
        document.getElementById("Lyme_date_l").classList.add('mostrar-label');
        document.getElementById("Lyme_date").classList.add('ocultar-input');
        document.getElementById("Lyme_date").classList.remove('mostrar-input');

        document.getElementById("Lyme_prox_l").classList.remove('ocultar-label');
        document.getElementById("Lyme_prox_l").classList.add('mostrar-label');
        document.getElementById("Lyme_prox").classList.add('ocultar-input');
        document.getElementById("Lyme_prox").classList.remove('mostrar-input');

        document.getElementById("Lyme_form_l").classList.remove('ocultar-label');
        document.getElementById("Lyme_form_l").classList.add('mostrar-label');
        document.getElementById("Lyme_form").classList.add('ocultar-input');
        document.getElementById("Lyme_form").classList.remove('mostrar-input');

        document.getElementById("Lyme_vet_l").classList.remove('ocultar-label');
        document.getElementById("Lyme_vet_l").classList.add('mostrar-label');
        document.getElementById("Lyme_vet").classList.add('ocultar-input');
        document.getElementById("Lyme_vet").classList.remove('mostrar-input');

        document.getElementById("Otr1_name_l").classList.remove('ocultar-label');
        document.getElementById("Otr1_name_l").classList.add('mostrar-label');
        document.getElementById("Otr1_name").classList.add('ocultar-input');
        document.getElementById("Otr1_name").classList.remove('mostrar-input');

        document.getElementById("Otr1_date_l").classList.remove('ocultar-label');
        document.getElementById("Otr1_date_l").classList.add('mostrar-label');
        document.getElementById("Otr1_date").classList.add('ocultar-input');
        document.getElementById("Otr1_date").classList.remove('mostrar-input');

        document.getElementById("Otr1_prox_l").classList.remove('ocultar-label');
        document.getElementById("Otr1_prox_l").classList.add('mostrar-label');
        document.getElementById("Otr1_prox").classList.add('ocultar-input');
        document.getElementById("Otr1_prox").classList.remove('mostrar-input');

        document.getElementById("Otr1_form_l").classList.remove('ocultar-label');
        document.getElementById("Otr1_form_l").classList.add('mostrar-label');
        document.getElementById("Otr1_form").classList.add('ocultar-input');
        document.getElementById("Otr1_form").classList.remove('mostrar-input');

        document.getElementById("Otr1_vet_l").classList.remove('ocultar-label');
        document.getElementById("Otr1_vet_l").classList.add('mostrar-label');
        document.getElementById("Otr1_vet").classList.add('ocultar-input');
        document.getElementById("Otr1_vet").classList.remove('mostrar-input');

        document.getElementById("Otr2_name_l").classList.remove('ocultar-label');
        document.getElementById("Otr2_name_l").classList.add('mostrar-label');
        document.getElementById("Otr2_name").classList.add('ocultar-input');
        document.getElementById("Otr2_name").classList.remove('mostrar-input');

        document.getElementById("Otr2_date_l").classList.remove('ocultar-label');
        document.getElementById("Otr2_date_l").classList.add('mostrar-label');
        document.getElementById("Otr2_date").classList.add('ocultar-input');
        document.getElementById("Otr2_date").classList.remove('mostrar-input');

        document.getElementById("Otr2_prox_l").classList.remove('ocultar-label');
        document.getElementById("Otr2_prox_l").classList.add('mostrar-label');
        document.getElementById("Otr2_prox").classList.add('ocultar-input');
        document.getElementById("Otr2_prox").classList.remove('mostrar-input');

        document.getElementById("Otr2_form_l").classList.remove('ocultar-label');
        document.getElementById("Otr2_form_l").classList.add('mostrar-label');
        document.getElementById("Otr2_form").classList.add('ocultar-input');
        document.getElementById("Otr2_form").classList.remove('mostrar-input');

        document.getElementById("Otr2_vet_l").classList.remove('ocultar-label');
        document.getElementById("Otr2_vet_l").classList.add('mostrar-label');
        document.getElementById("Otr2_vet").classList.add('ocultar-input');
        document.getElementById("Otr2_vet").classList.remove('mostrar-input');

        document.getElementById("Otr3_name_l").classList.remove('ocultar-label');
        document.getElementById("Otr3_name_l").classList.add('mostrar-label');
        document.getElementById("Otr3_name").classList.add('ocultar-input');
        document.getElementById("Otr3_name").classList.remove('mostrar-input');

        document.getElementById("Otr3_date_l").classList.remove('ocultar-label');
        document.getElementById("Otr3_date_l").classList.add('mostrar-label');
        document.getElementById("Otr3_date").classList.add('ocultar-input');
        document.getElementById("Otr3_date").classList.remove('mostrar-input');

        document.getElementById("Otr3_prox_l").classList.remove('ocultar-label');
        document.getElementById("Otr3_prox_l").classList.add('mostrar-label');
        document.getElementById("Otr3_prox").classList.add('ocultar-input');
        document.getElementById("Otr3_prox").classList.remove('mostrar-input');

        document.getElementById("Otr3_form_l").classList.remove('ocultar-label');
        document.getElementById("Otr3_form_l").classList.add('mostrar-label');
        document.getElementById("Otr3_form").classList.add('ocultar-input');
        document.getElementById("Otr3_form").classList.remove('mostrar-input');

        document.getElementById("Otr3_vet_l").classList.remove('ocultar-label');
        document.getElementById("Otr3_vet_l").classList.add('mostrar-label');
        document.getElementById("Otr3_vet").classList.add('ocultar-input');
        document.getElementById("Otr3_vet").classList.remove('mostrar-input');

        document.getElementById("Otr4_name_l").classList.remove('ocultar-label');
        document.getElementById("Otr4_name_l").classList.add('mostrar-label');
        document.getElementById("Otr4_name").classList.add('ocultar-input');
        document.getElementById("Otr4_name").classList.remove('mostrar-input');

        document.getElementById("Otr4_date_l").classList.remove('ocultar-label');
        document.getElementById("Otr4_date_l").classList.add('mostrar-label');
        document.getElementById("Otr4_date").classList.add('ocultar-input');
        document.getElementById("Otr4_date").classList.remove('mostrar-input');

        document.getElementById("Otr4_prox_l").classList.remove('ocultar-label');
        document.getElementById("Otr4_prox_l").classList.add('mostrar-label');
        document.getElementById("Otr4_prox").classList.add('ocultar-input');
        document.getElementById("Otr4_prox").classList.remove('mostrar-input');

        document.getElementById("Otr4_form_l").classList.remove('ocultar-label');
        document.getElementById("Otr4_form_l").classList.add('mostrar-label');
        document.getElementById("Otr4_form").classList.add('ocultar-input');
        document.getElementById("Otr4_form").classList.remove('mostrar-input');

        document.getElementById("Otr4_vet_l").classList.remove('ocultar-label');
        document.getElementById("Otr4_vet_l").classList.add('mostrar-label');
        document.getElementById("Otr4_vet").classList.add('ocultar-input');
        document.getElementById("Otr4_vet").classList.remove('mostrar-input');

        document.getElementById("Otr5_name_l").classList.remove('ocultar-label');
        document.getElementById("Otr5_name_l").classList.add('mostrar-label');
        document.getElementById("Otr5_name").classList.add('ocultar-input');
        document.getElementById("Otr5_name").classList.remove('mostrar-input');

        document.getElementById("Otr5_date_l").classList.remove('ocultar-label');
        document.getElementById("Otr5_date_l").classList.add('mostrar-label');
        document.getElementById("Otr5_date").classList.add('ocultar-input');
        document.getElementById("Otr5_date").classList.remove('mostrar-input');

        document.getElementById("Otr5_prox_l").classList.remove('ocultar-label');
        document.getElementById("Otr5_prox_l").classList.add('mostrar-label');
        document.getElementById("Otr5_prox").classList.add('ocultar-input');
        document.getElementById("Otr5_prox").classList.remove('mostrar-input');

        document.getElementById("Otr5_form_l").classList.remove('ocultar-label');
        document.getElementById("Otr5_form_l").classList.add('mostrar-label');
        document.getElementById("Otr5_form").classList.add('ocultar-input');
        document.getElementById("Otr5_form").classList.remove('mostrar-input');

        document.getElementById("Otr5_vet_l").classList.remove('ocultar-label');
        document.getElementById("Otr5_vet_l").classList.add('mostrar-label');
        document.getElementById("Otr5_vet").classList.add('ocultar-input');
        document.getElementById("Otr5_vet").classList.remove('mostrar-input');

    })


//SE IMPORTAN LAS CLASES

import Humano from "./Clases/Humanos.js"
import Perro from "./Clases/Perros.js"
import Medico from "./Clases/Medicos.js"
import Usuario from "./Clases/Usuarios.js"
import Vacunas from "./Clases/Vacunas.js"

//SE IMPORTAN LAS FUNCIONES
import mostrartabla from "./Funciones/HumanosFun.js"
import mostrartabla2 from "./Funciones/PerrosFun.js"
import mostrartabla3 from "./Funciones/MedicosFun.js"
import mostrartabla6 from "./Funciones/VacunasFun.js"

import eliminartablahumano from "./Funciones/EliminarHumanoFun.js"
import eliminartablamedicos from "./Funciones/EliminarMedicosFun.js"
import eliminartablaperro from "./Funciones/EliminarPerrosFun.js"

import contenerbotonvacunas from "./Funciones/OcultarBtnVacunas.js"

import { reemplazar } from "./Funciones/HumanosFun.js"
import { reemplazar1 } from "./Funciones/HumanosFun.js"
import { reemplazar2 } from "./Funciones/HumanosFun.js"
import { reemplazar3 } from "./Funciones/HumanosFun.js"
import { reemplazar4 } from "./Funciones/HumanosFun.js"
import { reemplazar5 } from "./Funciones/HumanosFun.js"
import { reemplazar6 } from "./Funciones/HumanosFun.js"

import { reemplazarnombre } from "./Funciones/PerrosFun.js"
import { reemplazarchip } from "./Funciones/PerrosFun.js"
import { reemplazarraza } from "./Funciones/PerrosFun.js"
import { reemplazartatuaje } from "./Funciones/PerrosFun.js"
import { reemplazarnacimiento } from "./Funciones/PerrosFun.js"
import { reemplazarpedigree } from "./Funciones/PerrosFun.js"
import { reemplazarsexo } from "./Funciones/PerrosFun.js"
import { reemplazarparticulares } from "./Funciones/PerrosFun.js"
import { reemplazarcolor } from "./Funciones/PerrosFun.js"
import { reemplazarpeso } from "./Funciones/PerrosFun.js"
import { reemplazarpelo } from "./Funciones/PerrosFun.js"
import { reemplazaraltura } from "./Funciones/PerrosFun.js"
import { reemplazarcriador } from "./Funciones/PerrosFun.js"
import { reemplazarconsanguinidad } from "./Funciones/PerrosFun.js"


//import { reemplazarvacunas } from "./Funciones/MedicosFun.js"
import { reemplazardesparacitacioninterna } from "./Funciones/MedicosFun.js"
import { reemplazardesparacitacionexterna } from "./Funciones/MedicosFun.js"
import { reemplazarmedicamentos } from "./Funciones/MedicosFun.js"
import { reemplazartratamientos } from "./Funciones/MedicosFun.js"
import { reemplazardieta } from "./Funciones/MedicosFun.js"
import { reemplazarcirujia } from "./Funciones/MedicosFun.js"
import { reemplazaralergia } from "./Funciones/MedicosFun.js"
//import { reemplazarcelo } from "./Funciones/MedicosFun.js"
import { reemplazaresterilizacion } from "./Funciones/MedicosFun.js"




var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope, $http, $window) {

    $scope.RegistroInicialPerro = function (Perro) {

        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Usuario/RegistroInicialPerro",

            data: JSON.stringify(
                {
                    'perro': Perro,


                }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                $('.toastExitoRegistroPrimerPerro').toast('show')

                $scope.$apply();

            },
            error: function (error) {

                $('.toastFracasoRegistroPrimerPerro').toast('show')

                $scope.$apply();

            }
        })
    }

    var urlPathSystem = "";

    // Trae las variables de la BD
    var Humano1 =new Humano
    var Perro1 = new Perro
    var Usuario1 = new Usuario
    var Medico1 = new Medico
    var Vacunas1 = new Vacunas

    let oPerro = new Perro;
    let ooPerro = new Perro;

    $('#modalCargando').modal('show');

    $.ajax({
        type: "POST",
        url: "/Membresias/ObtenerInformacionUsuario",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (datos) {

            const selectMascota = document.getElementById("Mascotas")

            function CrearOpciones(opcion) {
                const op = document.createElement("option")

                op.setAttribute("value", `${opcion.getId()}`)
                op.setAttribute("label", `${opcion.getNombrePerro()}`)

                selectMascota.appendChild(op)
            }

            if (datos.listaPerro == null) {

            }
            else {
                for (let i = 0; i < datos.listaPerro.length; i++) {

                                oPerro.id = i;
                                oPerro.nombreperro = datos.listaPerro[i].nombreperro;

                    CrearOpciones(oPerro)
                }
            }

            if (datos.humano == null) {
                Humano1.id = datos.usuario.Id;
                Humano1.propietario = datos.usuario.Nombre;
            }
            else {
                $scope.bienvenido = datos.usuario.Nombre;

                Humano1.id = datos.humano.id;
                Humano1.propietario = datos.usuario.Nombre;
                Humano1.estado = datos.humano.estado;
                Humano1.municipio = datos.humano.municipio;
                Humano1.colonia = datos.humano.colonia;
                Humano1.telefono = datos.humano.telefono;
                Humano1.direccion = datos.humano.direccion;
            }


            alert("La información de tu usuario se ha cargado correctamente");
          

            $scope.$apply();

            $('#modalCargando').on('shown.bs.modal', function () {
                $('#modalCargando').modal('hide');
            })

        },
        error: function (error) {

            $('#modalCargando').modal('hide');
        }
        
    });


    $scope.Humano = Humano1;

    //-----Funciones generadoras
    document.getElementById("animatehumano").addEventListener("click", e => {

        const idmedico = document.getElementById("salud");
        const idperro = document.getElementById("perro");
        const idhumano = document.getElementById("humano");

        if (idmedico !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }
        else if (idhumano !== null) {
            eliminartablahumano();
        }

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.add("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.remove("_z-frente")

        mostrartabla(Humano1);

        document.getElementById("update_humano").addEventListener("click", e => {
            reemplazar(Humano1);
            reemplazar1(Humano1);
            reemplazar2(Humano1);
            reemplazar3(Humano1);
            reemplazar4(Humano1);
            reemplazar5(Humano1);
            //reemplazar6(Humano1)

            const obutton = document.getElementById("_buttons")
            const actualizar = document.createElement("button")
            actualizar.classList.add("_btn")
            actualizar.innerText = "Actualizar"
            actualizar.setAttribute("id", "actualizar_humano")
            actualizar.setAttribute("type", "button")

            actualizar.onclick = function () {

                var select = document.getElementById("ih_estado");
                var oestado = select.options[select.selectedIndex].text;
                if (Object.keys(oestado).length === 0)
                    Humano1.estado = Humano1.estado;
                else
                    Humano1.estado = oestado;

                var omunicipio_ = document.getElementById("_typeMunicipios");
                var omunicipio = omunicipio_.options[omunicipio_.selectedIndex].text;
                if (Object.keys(omunicipio).length === 0)
                    Humano1.municipio = Humano1.municipio;
                else
                    Humano1.municipio = omunicipio;


                var ocolonia = $('#ih_colonia').val();
                if (Object.keys(ocolonia).length === 0)
                    Humano1.colonia = Humano1.colonia;
                else
                    Humano1.colonia = ocolonia;

                var odireccion = $('#ih_direccion').val();
                if (Object.keys(odireccion).length === 0)
                    Humano1.direccion = Humano1.direccion;
                else
                    Humano1.direccion = odireccion;

                var otelefono = $('#ih_telefono').val();
                if (Object.keys(otelefono).length === 0)
                    Humano1.telefono = Humano1.telefono;
                else
                    Humano1.telefono = otelefono;

                

                $.ajax({
                    type: "POST",
                    url: "/Usuario/ActualizarHumano",
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify(
                        {
                            'humano': Humano1

                        }),
                    success: function (datos) {

                        $('.toastExitoActualizacion').toast('show')

                        $scope.$apply();

                        eliminartablahumano();

                    },
                    error: function (error) {

                        $('.toastErrorActualizacion').toast('show')

                        $scope.$apply();

                        eliminartablahumano();
                    }
                });
            };


            const cancelar = document.createElement("button")
            cancelar.classList.add("_btn")
            cancelar.innerText = "Cancelar"
            cancelar.setAttribute("id", "cancelar_humano")


            obutton.appendChild(actualizar)
            obutton.appendChild(cancelar)

        })

    })

    document.getElementById("animateperro").addEventListener("click", e => {

        const idhumano = document.getElementById("humano");
        const idmedico = document.getElementById("salud");
        const idperro = document.getElementById("perro");

        if (idhumano !== null) {
            eliminartablahumano();
        }
        else if (idmedico !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.remove("_z-frente")

        
        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.add("_z-frente")

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos.listaPerro !== null) {

                    var j = document.getElementById("Mascotas").value;

                    Perro1.id = datos.listaPerro[j].id;
                    Perro1.idusuario = datos.listaPerro[j].idUsuario;
                    Perro1.nombreperro = datos.listaPerro[j].nombreperro;
                    Perro1.chip = datos.listaPerro[j].chip;
                    Perro1.raza = datos.listaPerro[j].raza;
                    Perro1.tatuaje = datos.listaPerro[j].tatuaje;
                    Perro1.nacimiento = datos.listaPerro[j].nacimiento;
                    Perro1.pedigree = datos.listaPerro[j].pedigree;
                    Perro1.sexo = datos.listaPerro[j].sexo;
                    Perro1.particulares = datos.listaPerro[j].particulares;
                    Perro1.color = datos.listaPerro[j].color;
                    Perro1.peso = datos.listaPerro[j].peso;
                    Perro1.pelo = datos.listaPerro[j].pelo;
                    Perro1.altura = datos.listaPerro[j].altura;

                    mostrartabla2(Perro1)

                    document.getElementById("update_perro").addEventListener("click", e => {
                        reemplazarnombre(Perro1);
                        reemplazarchip(Perro1);
                        reemplazarraza(Perro1);
                        reemplazartatuaje(Perro1);
                        reemplazarnacimiento(Perro1);
                        reemplazarsexo(Perro1);
                        reemplazarparticulares(Perro1);
                        reemplazarcolor(Perro1);
                        reemplazarpeso(Perro1);
                        reemplazarpedigree(Perro1);
                        reemplazarpelo(Perro1);
                        reemplazaraltura(Perro1);
                        reemplazarcriador(Perro1);
                        reemplazarconsanguinidad(Perro1);

                        const obutton = document.getElementById("_buttons")
                        const actualizar = document.createElement("button")
                        actualizar.classList.add("_btn")
                        actualizar.innerText = "Actualizar"
                        actualizar.setAttribute("id", "actualizar_perro")
                        actualizar.setAttribute("type", "button")

                        actualizar.onclick = function () {

                            var onombre = $('#ip_nombre').val()
                            if (Object.keys(onombre).length === 0)
                                Perro1.nombreperro = Perro1.nombreperro;
                            else
                                Perro1.nombreperro = onombre;

                            var ochip = $('#ip_chip').val()
                            if (Object.keys(ochip).length === 0)
                                Perro1.chip = Perro1.chip;
                            else
                                Perro1.chip = ochip;

                            var oraza = $('#ip_raza').val()
                            if (Object.keys(oraza).length === 0)
                                Perro1.raza = Perro1.raza;
                            else
                                Perro1.raza = oraza;

                            var otatuaje = $('#ip_tatuaje').val()
                            if (Object.keys(otatuaje).length === 0)
                                Perro1.tatuaje = Perro1.tatuaje;
                            else
                                Perro1.tatuaje = otatuaje;

                            var onacimiento = $('#ip_nacimiento').val()
                            if (Object.keys(onacimiento).length === 0)
                                Perro1.nombre = Perro1.nombre;
                            else
                                Perro1.nombre = onacimiento;

                            var opedigree = $('#ip_pedigree').val()
                            if (Object.keys(opedigree).length === 0)
                                Perro1.pedigree = Perro1.pedigree;
                            else
                                Perro1.pedigree = opedigree;

                            var osexo = $('#ip_sexo').val()
                            if (Object.keys(osexo).length === 0)
                                Perro1.sexo = Perro1.sexo;
                            else
                                Perro1.sexo = osexo;

                            var oparticulares = $('#ip_particulares').val()
                            if (Object.keys(oparticulares).length === 0)
                                Perro1.particulares = Perro1.particulares;
                            else
                                Perro1.particulares = oparticulares;

                            var ocolor = $('#ip_color').val()
                            if (Object.keys(ocolor).length === 0)
                                Perro1.color = Perro1.color;
                            else
                                Perro1.color = ocolor;

                            var opeso = $('#ip_peso').val()
                            if (Object.keys(opeso).length === 0)
                                Perro1.peso = Perro1.peso;
                            else
                                Perro1.peso = opeso;

                            var opelo = $('#ip_pelo').val()
                            if (Object.keys(opelo).length === 0)
                                Perro1.pelo = Perro1.pelo;
                            else
                                Perro1.pelo = opelo;

                            var oaltura = $('#ip_altura').val()
                            if (Object.keys(oaltura).length === 0)
                                Perro1.altura = Perro1.altura;
                            else
                                Perro1.altura = oaltura;

                            Perro1.idusuario = Perro1.idusuario;

                            $.ajax({
                                type: "POST",
                                url: "/Usuario/ActualizarPerro",
                                contentType: 'application/json; charset=utf-8',
                                dataType: 'json',
                                data: JSON.stringify(
                                    {
                                        'perro': Perro1
                                    }),
                                success: function (datos) {

                                    $('.toastExitoActualizacion').toast('show')

                                    $scope.$apply();

                                    eliminartablaperro();

                                },
                                error: function (error) {

                                    $('.toastErrorActualizacion').toast('show')

                                    $scope.$apply();

                                    eliminartablaperro();
                                }
                            });
                        };


                        const cancelar = document.createElement("button")
                        cancelar.classList.add("_btn")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_humano")


                        obutton.appendChild(actualizar)
                        obutton.appendChild(cancelar)
                    })

                }
                else {

                    $('.toastError').toast('show')

                    $scope.$apply();

                }

                
            },
        }); 
    })

    document.getElementById("animatesalud").addEventListener("click", e => {

        const idhumano = document.getElementById("humano");
        const idperro = document.getElementById("perro");
        const idmedico = document.getElementById("salud");

        if (idhumano !== null) {
            eliminartablahumano();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }
        else if (idmedico !== null) {
            eliminartablamedicos();
        }

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.add("_z-frente")

        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.remove("_z-frente")

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos.listaMedicos !== null) {

                    var j = document.getElementById("Mascotas").value;

                    Medico1.idperro = datos.listaMedicos[j].idperro;
                    Medico1.idusuario = datos.listaMedicos[j].idUsuario;
                    Medico1.vacunas = datos.listaMedicos[j].vacunas;
                    Medico1.desparasitacion = datos.listaMedicos[j].desparasitacion;
                    Medico1.medicamentos = datos.listaMedicos[j].medicamentos;
                    Medico1.tratamientos = datos.listaMedicos[j].tratamientos;
                    Medico1.dieta = datos.listaMedicos[j].dieta;
                    Medico1.cirujias = datos.listaMedicos[j].cirugias;
                    Medico1.alergias = datos.listaMedicos[j].alergias;
                    Medico1.celo = datos.listaMedicos[j].celo;
                    Medico1.esterilizacion = datos.listaMedicos[j].esterilizacion;

                    Perro1.sexo = datos.listaPerro[j].sexo;

                    mostrartabla3(Medico1, Perro1);

                    document.getElementById("update_salud").addEventListener("click", e => {
                        //reemplazarvacunas(Medico1);
                        reemplazardesparacitacioninterna(Medico1);
                        reemplazardesparacitacionexterna(Medico1);
                        reemplazarmedicamentos(Medico1);
                        reemplazartratamientos(Medico1);
                        reemplazardieta(Medico1);
                        reemplazarcirujia(Medico1);
                        reemplazaralergia(Medico1);
                        reemplazarcelo(Medico1, Perro1);
                        reemplazaresterilizacion(Medico1);

                        const obutton = document.getElementById("_buttons")
                        const actualizar = document.createElement("button")
                        actualizar.classList.add("_btn")
                        actualizar.innerText = "Actualizar"
                        actualizar.setAttribute("id", "actualizar_salud")
                        actualizar.setAttribute("type", "button")

                        actualizar.onclick = function () {

                            var ovacunas = $('#im_vacunas').val()
                            if (Object.keys(ovacunas).length === 0)
                                Medico1.vacunas = Medico1.vacunas;
                            else
                                Medico1.vacunas = ovacunas;

                            var odesparasitacion = $('#im_desparacitacion').val()
                            if (Object.keys(odesparasitacion).length === 0)
                                Medico1.desparasitacion = Medico1.desparasitacion;
                            else
                                Medico1.desparasitacion = odesparasitacion;

                            var omedicamentos = $('#im_medicamentos').val()
                            if (Object.keys(omedicamentos).length === 0)
                                Medico1.medicamentos = Medico1.medicamentos;
                            else
                                Medico1.medicamentos = omedicamentos;

                            var otratamientos = $('#im_tratamientos').val()
                            if (Object.keys(otratamientos).length === 0)
                                Medico1.tratamientos = Medico1.tratamientos;
                            else
                                Medico1.tratamientos = otratamientos;

                            var odieta = $('#im_dieta').val()
                            if (Object.keys(odieta).length === 0)
                                Medico1.dieta = Medico1.dieta;
                            else
                                Medico1.dieta = odieta;

                            var ocirugia = $('#im_cirujia').val()
                            if (Object.keys(ocirugia).length === 0)
                                Medico1.cirugias = Medico1.cirugias;
                            else
                                Medico1.cirugias = ocirugia;

                            var oalergia = $('#im_alergia').val()
                            if (Object.keys(oalergia).length === 0)
                                Medico1.alergias = Medico1.alergias;
                            else
                                Medico1.alergias = oalergia;

                            var ocelo = $('#im_celo').val()
                            if (Object.keys(ocelo).length === 0)
                                Medico1.celo = Medico1.celo;
                            else
                                Medico1.celo = ocelo;

                            var oesterilizacion = $('#im_esterilizacion').val()
                            if (Object.keys(oesterilizacion).length === 0)
                                Medico1.esterilizacion = Medico1.esterilizacion;
                            else
                                Medico1.esterilizacion = oesterilizacion;

                            Medico1.idperro = Medico1.idperro;
                            Medico1.idusuario = Medico1.idusuario;


                            $.ajax({
                                type: "POST",
                                url: "/Usuario/ActualizarMedico",
                                contentType: 'application/json; charset=utf-8',
                                dataType: 'json',
                                data: JSON.stringify(
                                    {
                                        'medico': Medico1
                                    }),
                                success: function (datos) {

                                    $('.toastExitoActualizacion').toast('show')

                                    $scope.$apply();

                                    eliminartablamedicos();

                                },
                                error: function (error) {

                                    $('.toastErrorActualizacion').toast('show')

                                    $scope.$apply();

                                    eliminartablamedicos();
                                }
                            });
                        };


                        const cancelar = document.createElement("button")
                        cancelar.classList.add("_btn")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_humano")


                        obutton.appendChild(actualizar)
                        obutton.appendChild(cancelar)
                    })

                }
                else {
                    

                    var j = document.getElementById("Mascotas").value;

                    if (j !== null) {

                        mostrartabla3(Medico1);

                        document.getElementById("update_salud").addEventListener("click", e => {
                            //reemplazarvacunas(Medico1);
                            reemplazardesparacitacioninterna(Medico1);
                            reemplazardesparacitacionexterna(Medico1);
                            reemplazarmedicamentos(Medico1);
                            reemplazartratamientos(Medico1);
                            reemplazardieta(Medico1);
                            reemplazarcirujia(Medico1);
                            reemplazaralergia(Medico1);
                            reemplazarcelo(Medico1, Perro1);
                            reemplazaresterilizacion(Medico1);

                            const obutton = document.getElementById("_buttons")
                            const actualizar = document.createElement("button")
                            actualizar.classList.add("_btn")
                            actualizar.innerText = "Actualizar"
                            actualizar.setAttribute("id", "actualizar_salud")
                            actualizar.setAttribute("type", "button")

                            actualizar.onclick = function () {

                                var ovacunas = $('#im_vacunas').val()
                                if (Object.keys(ovacunas).length === 0)
                                    Medico1.vacunas = Medico1.vacunas;
                                else
                                    Medico1.vacunas = ovacunas;

                                var odesparasitacion = $('#im_desparacitacion').val()
                                if (Object.keys(odesparasitacion).length === 0)
                                    Medico1.desparasitacion = Medico1.desparasitacion;
                                else
                                    Medico1.desparasitacion = odesparasitacion;

                                var omedicamentos = $('#im_medicamentos').val()
                                if (Object.keys(omedicamentos).length === 0)
                                    Medico1.medicamentos = Medico1.medicamentos;
                                else
                                    Medico1.medicamentos = omedicamentos;

                                var otratamientos = $('#im_tratamientos').val()
                                if (Object.keys(otratamientos).length === 0)
                                    Medico1.tratamientos = Medico1.tratamientos;
                                else
                                    Medico1.tratamientos = otratamientos;

                                var odieta = $('#im_dieta').val()
                                if (Object.keys(odieta).length === 0)
                                    Medico1.dieta = Medico1.dieta;
                                else
                                    Medico1.dieta = odieta;

                                var ocirugia = $('#im_cirujia').val()
                                if (Object.keys(ocirugia).length === 0)
                                    Medico1.cirugias = Medico1.cirugias;
                                else
                                    Medico1.cirugias = ocirugia;

                                var oalergia = $('#im_alergia').val()
                                if (Object.keys(oalergia).length === 0)
                                    Medico1.alergias = Medico1.alergias;
                                else
                                    Medico1.alergias = oalergia;

                                var ocelo = $('#im_celo').val()
                                if (Object.keys(ocelo).length === 0)
                                    Medico1.celo = Medico1.celo;
                                else
                                    Medico1.celo = ocelo;

                                var oesterilizacion = $('#im_esterilizacion').val()
                                if (Object.keys(oesterilizacion).length === 0)
                                    Medico1.esterilizacion = Medico1.esterilizacion;
                                else
                                    Medico1.esterilizacion = oesterilizacion;

                                var j = document.getElementById("Mascotas").value;

                                Medico1.idperro = datos.listaPerro[j].id;
                                Medico1.idusuario = datos.listaPerro[j].idUsuario;

                                
                                $.ajax({
                                    type: "POST",
                                    url: "/Usuario/ActualizarMedico",
                                    contentType: 'application/json; charset=utf-8',
                                    dataType: 'json',
                                    data: JSON.stringify(
                                        {
                                            'medico': Medico1
                                        }),
                                    success: function (datos) {

                                        $('.toastExitoActualizacion').toast('show')

                                        $scope.$apply();

                                        eliminartablaentrenamientos();

                                    },
                                    error: function (error) {

                                        $('.toastErrorActualizacion').toast('show')

                                        $scope.$apply();

                                        eliminartablaentrenamientos();
                                    }
                                });
                            };


                            const cancelar = document.createElement("button")
                            cancelar.classList.add("_btn")
                            cancelar.innerText = "Cancelar"
                            cancelar.setAttribute("id", "cancelar_humano")


                            obutton.appendChild(actualizar)
                            obutton.appendChild(cancelar)
                        })

                    }
                    else {
                        $('.toastError').toast('show')

                        $scope.$apply();
                    }
                    

                }

                
            },
        });

    })

    document.getElementById("listaPago").addEventListener("click", e => {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                var listaperrospagar = datos.listaPerro;

                const elem = document.getElementById("listaPagoPerros")
                elem.innerHTML = ""

                for (let i = 1; i < listaperrospagar.length; i++) {

                    if (listaperrospagar[i].estatusmembresia !== "Active") {

                        const item = document.createElement("div")
                        const radioitem = document.createElement("input")

                        radioitem.setAttribute("type", "radio")
                        radioitem.setAttribute("id", `${listaperrospagar[i].id}`)
                        radioitem.setAttribute("name", "perro")
                        radioitem.setAttribute("value", `${listaperrospagar[i].id}`)

                        item.appendChild(radioitem)

                        const labelitem = document.createElement("label")

                        labelitem.innerHTML =
                            `
                        <label>${listaperrospagar[i].nombreperro}</label>
                        `
                        item.appendChild(labelitem)


                        elem.appendChild(item)
                    }
                    else {

                    }
                    

                }

            },
        });
    })

    $('#btnCerrarSesion').on('click', function () {

        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Inicio/CerrarSesion",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos == "OK") {
                    $('.toastExitoCierre').toast('show')

                    $scope.$apply();

                    window.location.href = urlPathSystem + "/Inicio/Inicio";
                }
                else {
                    $('.toastFracasoCierre').toast('show')

                    $scope.$apply();
                }

                $('#myModalLoader').on('shown.bs.modal', function (e) {
                    $("#myModalLoader").modal('hide');
                })

            },
            error: function (error) {

                $('#myModalLoader').on('shown.bs.modal', function (e) {
                    $("#myModalLoader").modal('hide');
                })
            }
        });
    });

    $scope.ActualizarFoto = function () {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                var file = fileInput.files[0];
                var data = new FormData();
                data.append("myFile", file);

                var j = document.getElementById("Mascotas").value;

                var Id = datos.listaPerro[j].id;

                var jsonFormulario = JSON.stringify(
                    {
                        'Id': Id,
                    });

                data.append("datos", jsonFormulario);

                $.ajax({
                    type: "POST",
                    url: urlPathSystem + "/Inicio/ActualizarFotoPerro",
                    data: data,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    contentType: false,
                    processData: false,
                    success: function (datos) {

                        if (datos.Mensaje == "OK") {

                            

                        }
                        else {


                        }

                        $scope.$apply();


                    },
                    error: function (error) {


                    }
                });

            }

        })

        
    }
    $("#fileInput").change(function () {

        var file = fileInput.files[0];
        var data = new FormData();
        data.append("myFile", file);

    });

    document.getElementById("Mascotas").addEventListener("change",cambiarFoto);

    function cambiarFoto() {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                var j = document.getElementById("Mascotas").value;

                var Id = datos.listaPerro[j].id;

                const imgcontainer = document.getElementById("petImage");
                const img = (datos.listaPerro[j].imagen);
                //const imgcorregida = img.replaceAll('\\', '\\\\')

                imgcontainer.innerHTML = `
                <img class="_pet-image _border-shadow" src ="${img}"/>
                `
            }

        })

        
    }

    var urlPathSystem_ = "";

    //OBTENER MUNICIPIOS DE LA BASE DE DATOS Y CREAR LAS OPCIONES 

    $scope.BuscarMunicipios = function (estado) {

        $.ajax({
            type: "POST",
            url: urlPathSystem_ + "/Anuncios/ObtenerMunicipios",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(
                {
                    'estado': estado
                }),
            success: function (datosmun) {

                const selectMun = document.getElementById("_typeMunicipios")

                selectMun.innerHTML = "";

                for (let i = 0; i < datosmun.length; i++) {

                    Municipio.claveestado = datosmun[i].ClaveEntidad;
                    Municipio.nombreestado = datosmun[i].NombreEntidad;
                    Municipio.clavemunicipio = datosmun[i].ClaveMunicipio;
                    Municipio.nombremunicipio = datosmun[i].NombreMunicipio;

                    mostrarOpcion(Municipio)
                }


            },
            error: function (error) {

            }
        });

    }

    //ACTUALIZAR LOS DATOS DE LA TABLA DE VACUNAS

    document.getElementById("Actualizar_vacunas").addEventListener("click", e => {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                function Dating(fecha) {
                    var date = fecha;
                    if (!date)
                        return "";
                    var f = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10)),
                        dia = f.getDate(), mes = (parseInt(f.getMonth()) + 1), anio = f.getFullYear();
                    return ((dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio);
                }

                if (datos.listaVacunas !== null) {

                    var j = document.getElementById("Mascotas").value;

                    Vacunas1.id = datos.listaVacunas[j].idperro;
                    Vacunas1.idusuario = datos.listaVacunas[j].idUsuario;
                    Vacunas1.rabia_date = Dating(datos.listaVacunas[j].rabia_date);
                    Vacunas1.rabia_prox = Dating(datos.listaVacunas[j].rabia_prox);
                    Vacunas1.rabia_form = datos.listaVacunas[j].rabia_form;
                    Vacunas1.rabia_vet = datos.listaVacunas[j].rabia_vet;
                    Vacunas1.parvo_date = Dating(datos.listaVacunas[j].parvo_date);
                    Vacunas1.parvo_prox = Dating(datos.listaVacunas[j].parvo_prox);
                    Vacunas1.parvo_form = datos.listaVacunas[j].parvo_form;
                    Vacunas1.parvo_vet = datos.listaVacunas[j].parvo_vet;
                    Vacunas1.diste_date = Dating(datos.listaVacunas[j].diste_date);
                    Vacunas1.diste_prox = Dating(datos.listaVacunas[j].diste_prox);
                    Vacunas1.diste_form = datos.listaVacunas[j].diste_form;
                    Vacunas1.diste_vet = datos.listaVacunas[j].diste_vet;
                    Vacunas1.adeno_date = Dating(datos.listaVacunas[j].adeno_date);
                    Vacunas1.adeno_prox = Dating(datos.listaVacunas[j].adeno_prox);
                    Vacunas1.adeno_form = datos.listaVacunas[j].adeno_form;
                    Vacunas1.adeno_vet = datos.listaVacunas[j].adeno_vet;
                    Vacunas1.influ_date = Dating(datos.listaVacunas[j].influ_date);
                    Vacunas1.influ_prox = Dating(datos.listaVacunas[j].influ_prox);
                    Vacunas1.influ_form = datos.listaVacunas[j].influ_form;
                    Vacunas1.influ_vet = datos.listaVacunas[j].influ_vet;
                    Vacunas1.lepto_date = Dating(datos.listaVacunas[j].lepto_date);
                    Vacunas1.lepto_prox = Dating(datos.listaVacunas[j].lepto_prox);
                    Vacunas1.lepto_form = datos.listaVacunas[j].lepto_form;
                    Vacunas1.lepto_vet = datos.listaVacunas[j].lepto_vet;
                    Vacunas1.borde_date = Dating(datos.listaVacunas[j].borde_date);
                    Vacunas1.borde_prox = Dating(datos.listaVacunas[j].borde_prox);
                    Vacunas1.borde_form = datos.listaVacunas[j].borde_form;
                    Vacunas1.borde_vet = datos.listaVacunas[j].borde_vet;
                    Vacunas1.disea_date = Dating(datos.listaVacunas[j].disea_date);
                    Vacunas1.disea_prox = Dating(datos.listaVacunas[j].disea_prox);
                    Vacunas1.disea_form = datos.listaVacunas[j].disea_form;
                    Vacunas1.disea_vet = datos.listaVacunas[j].disea_vet;
                    Vacunas1.otr1_date = Dating(datos.listaVacunas[j].otr1_date);
                    Vacunas1.otr1_prox = Dating(datos.listaVacunas[j].otr1_prox);
                    Vacunas1.otr1_form = datos.listaVacunas[j].otr1_form;
                    Vacunas1.otr1_vet = datos.listaVacunas[j].otr1_vet;
                    Vacunas1.otr2_date = Dating(datos.listaVacunas[j].otr2_date);
                    Vacunas1.otr2_prox = Dating(datos.listaVacunas[j].otr2_prox);
                    Vacunas1.otr2_form = datos.listaVacunas[j].otr2_form;
                    Vacunas1.otr2_vet = datos.listaVacunas[j].otr2_vet;
                    Vacunas1.otr3_date = Dating(datos.listaVacunas[j].otr3_date);
                    Vacunas1.otr3_prox = Dating(datos.listaVacunas[j].otr3_prox);
                    Vacunas1.otr3_form = datos.listaVacunas[j].otr3_form;
                    Vacunas1.otr3_vet = datos.listaVacunas[j].otr3_vet;
                    Vacunas1.otr4_date = Dating(datos.listaVacunas[j].otr4_date);
                    Vacunas1.otr4_prox = Dating(datos.listaVacunas[j].otr4_prox);
                    Vacunas1.otr4_form = datos.listaVacunas[j].otr4_form;
                    Vacunas1.otr4_vet = datos.listaVacunas[j].otr4_vet;
                    Vacunas1.otr5_date = Dating(datos.listaVacunas[j].otr5_date);
                    Vacunas1.otr5_prox = Dating(datos.listaVacunas[j].otr5_prox);
                    Vacunas1.otr5_form = datos.listaVacunas[j].otr5_form;
                    Vacunas1.otr5_vet = datos.listaVacunas[j].otr5_vet;

                    mostrartabla6(Vacunas1);

                    const agregarvacunas = document.getElementById("actualizar_tablaVacunas");
                    agregarvacunas.onclick = function () {

                        var orabiadate = $('#Rabia_date').val()
                        if (Object.keys(orabiadate).length === 0)
                            Vacunas1.rabia_date = Vacunas1.rabia_date;
                        else
                            Vacunas1.rabia_date = orabiadate;

                        var orabiaprox = $('#Rabia_prox').val()
                        if (Object.keys(orabiaprox).length === 0)
                            Vacunas1.rabia_prox = Vacunas1.rabia_prox;
                        else
                            Vacunas1.rabia_prox = orabiaprox;

                        var orabiaform = $('#Rabia_form').val()
                        if (Object.keys(orabiaform).length === 0)
                            Vacunas1.rabia_form = Vacunas1.rabia_form;
                        else
                            Vacunas1.rabia_form = orabiaform;

                        var orabiavet = $('#Rabia_vet').val()
                        if (Object.keys(orabiavet).length === 0)
                            Vacunas1.rabia_vet = Vacunas1.rabia_vet;
                        else
                            Vacunas1.rabia_vet = orabiavet;

                        var oParvodate = $('#Parvo_date').val()
                        if (Object.keys(oParvodate).length === 0)
                            Vacunas1.parvo_date = Vacunas1.parvo_date;
                        else
                            Vacunas1.parvo_date = oParvodate;

                        var oParvoprox = $('#Parvo_prox').val()
                        if (Object.keys(oParvoprox).length === 0)
                            Vacunas1.parvo_prox = Vacunas1.parvo_prox;
                        else
                            Vacunas1.parvo_prox = oParvoprox;

                        var oParvoform = $('#Parvo_form').val()
                        if (Object.keys(oParvoform).length === 0)
                            Vacunas1.parvo_form = Vacunas1.parvo_form;
                        else
                            Vacunas1.parvo_form = oParvoform;

                        var oParvovet = $('#Parvo_vet').val()
                        if (Object.keys(oParvovet).length === 0)
                            Vacunas1.parvo_vet = Vacunas1.parvo_vet;
                        else
                            Vacunas1.parvo_vet = oParvovet;

                        var oDistedate = $('#Diste_date').val()
                        if (Object.keys(oDistedate).length === 0)
                            Vacunas1.diste_date = Vacunas1.diste_date;
                        else
                            Vacunas1.diste_date = oDistedate;

                        var oDisteprox = $('#Diste_prox').val()
                        if (Object.keys(oDisteprox).length === 0)
                            Vacunas1.diste_prox = Vacunas1.diste_prox;
                        else
                            Vacunas1.diste_prox = oDisteprox;

                        var oDisteform = $('#Diste_form').val()
                        if (Object.keys(oDisteform).length === 0)
                            Vacunas1.diste_form = Vacunas1.diste_form;
                        else
                            Vacunas1.diste_form = oDisteform;

                        var oDistevet = $('#Diste_vet').val()
                        if (Object.keys(oDistevet).length === 0)
                            Vacunas1.diste_vet = Vacunas1.diste_vet;
                        else
                            Vacunas1.diste_vet = oDistevet;

                        var oAdenodate = $('#Adeno_date').val()
                        if (Object.keys(oAdenodate).length === 0)
                            Vacunas1.adeno_date = Vacunas1.adeno_date;
                        else
                            Vacunas1.adeno_date = oAdenodate;

                        var oAdenoprox = $('#Adeno_prox').val()
                        if (Object.keys(oAdenoprox).length === 0)
                            Vacunas1.adeno_prox = Vacunas1.adeno_prox;
                        else
                            Vacunas1.adeno_prox = oAdenoprox;

                        var oAdenoform = $('#Adeno_form').val()
                        if (Object.keys(oAdenoform).length === 0)
                            Vacunas1.adeno_form = Vacunas1.adeno_form;
                        else
                            Vacunas1.adeno_form = oAdenoform;

                        var oAdenovet = $('#Adeno_vet').val()
                        if (Object.keys(oAdenovet).length === 0)
                            Vacunas1.adeno_vet = Vacunas1.adeno_vet;
                        else
                            Vacunas1.adeno_vet = oAdenovet;

                        var oInfludate = $('#Influ_date').val()
                        if (Object.keys(oInfludate).length === 0)
                            Vacunas1.influ_date = Vacunas1.influ_date;
                        else
                            Vacunas1.influ_date = oInfludate;

                        var oInfluprox = $('#Influ_prox').val()
                        if (Object.keys(oInfluprox).length === 0)
                            Vacunas1.influ_prox = Vacunas1.influ_prox;
                        else
                            Vacunas1.influ_prox = oInfluprox;

                        var oInfluform = $('#Influ_form').val()
                        if (Object.keys(oInfluform).length === 0)
                            Vacunas1.influ_form = Vacunas1.influ_form;
                        else
                            Vacunas1.influ_form = oInfluform;

                        var oInfluvet = $('#Influ_vet').val()
                        if (Object.keys(oInfluvet).length === 0)
                            Vacunas1.influ_vet = Vacunas1.influ_vet;
                        else
                            Vacunas1.influ_vet = oInfluvet;

                        var oLeptodate = $('#Lepto_date').val()
                        if (Object.keys(oLeptodate).length === 0)
                            Vacunas1.lepto_date = Vacunas1.lepto_date;
                        else
                            Vacunas1.lepto_date = oLeptodate;

                        var oLeptoprox = $('#Lepto_prox').val()
                        if (Object.keys(oLeptoprox).length === 0)
                            Vacunas1.lepto_prox = Vacunas1.lepto_prox;
                        else
                            Vacunas1.lepto_prox = oLeptoprox;

                        var oLeptoform = $('#Lepto_form').val()
                        if (Object.keys(oLeptoform).length === 0)
                            Vacunas1.lepto_form = Vacunas1.lepto_form;
                        else
                            Vacunas1.lepto_form = oLeptoform;

                        var oLeptovet = $('#Lepto_vet').val()
                        if (Object.keys(oLeptovet).length === 0)
                            Vacunas1.lepto_vet = Vacunas1.lepto_vet;
                        else
                            Vacunas1.lepto_vet = oLeptovet;

                        var oBordedate = $('#Borde_date').val()
                        if (Object.keys(oBordedate).length === 0)
                            Vacunas1.borde_date = Vacunas1.borde_date;
                        else
                            Vacunas1.borde_date = oBordedate;

                        var oBordeprox = $('#Borde_prox').val()
                        if (Object.keys(oBordeprox).length === 0)
                            Vacunas1.borde_prox = Vacunas1.borde_prox;
                        else
                            Vacunas1.borde_prox = oBordeprox;

                        var oBordeform = $('#Borde_form').val()
                        if (Object.keys(oBordeform).length === 0)
                            Vacunas1.borde_form = Vacunas1.borde_form;
                        else
                            Vacunas1.borde_form = oBordeform;

                        var oBordevet = $('#Borde_vet').val()
                        if (Object.keys(oBordevet).length === 0)
                            Vacunas1.borde_vet = Vacunas1.borde_vet;
                        else
                            Vacunas1.borde_vet = oBordevet;

                        var oDiseadate = $('#Lyme_date').val()
                        if (Object.keys(oDiseadate).length === 0)
                            Vacunas1.disea_date = Vacunas1.disea_date;
                        else
                            Vacunas1.disea_date = oDiseadate;

                        var oDiseaprox = $('#Lyme_prox').val()
                        if (Object.keys(oDiseaprox).length === 0)
                            Vacunas1.disea_prox = Vacunas1.disea_prox;
                        else
                            Vacunas1.disea_prox = oDiseaprox;

                        var oDiseaform = $('#Lyme_form').val()
                        if (Object.keys(oDiseaform).length === 0)
                            Vacunas1.disea_form = Vacunas1.disea_form;
                        else
                            Vacunas1.disea_form = oDiseaform;

                        var oDiseavet = $('#Lyme_vet').val()
                        if (Object.keys(oDiseavet).length === 0)
                            Vacunas1.disea_vet = Vacunas1.disea_vet;
                        else
                            Vacunas1.disea_vet = oDiseavet;

                        var oOtr1name = $('#Otr1_name').val()
                        if (Object.keys(oOtr1name).length === 0)
                            Vacunas1.otr1_name = Vacunas1.otr1_name;
                        else
                            Vacunas1.otr1_name = oOtr1name;

                        var oOtr1date = $('#Otr1_date').val()
                        if (Object.keys(oOtr1date).length === 0)
                            Vacunas1.otr1_date = Vacunas1.otr1_date;
                        else
                            Vacunas1.otr1_date = oOtr1date;

                        var oOtr1prox = $('#Otr1_prox').val()
                        if (Object.keys(oOtr1prox).length === 0)
                            Vacunas1.otr1_prox = Vacunas1.otr1_prox;
                        else
                            Vacunas1.otr1_prox = oOtr1prox;

                        var oOtr1form = $('#Otr1_form').val()
                        if (Object.keys(oOtr1form).length === 0)
                            Vacunas1.otr1_form = Vacunas1.otr1_form;
                        else
                            Vacunas1.otr1_form = oOtr1form;

                        var oOtr1vet = $('#Otr1_vet').val()
                        if (Object.keys(oOtr1vet).length === 0)
                            Vacunas1.otr1_vet = Vacunas1.otr1_vet;
                        else
                            Vacunas1.otr1_vet = oOtr1vet;

                        var oOtr2name = $('#Otr2_name').val()
                        if (Object.keys(oOtr2name).length === 0)
                            Vacunas1.otr2_name = Vacunas1.otr2_name;
                        else
                            Vacunas1.otr2_name = oOtr2name;

                        var oOtr2date = $('#Otr2_date').val()
                        if (Object.keys(oOtr2date).length === 0)
                            Vacunas1.otr2_date = Vacunas1.otr2_date;
                        else
                            Vacunas1.otr2_date = oOtr2date;

                        var oOtr2prox = $('#Otr2_prox').val()
                        if (Object.keys(oOtr2prox).length === 0)
                            Vacunas1.otr2_prox = Vacunas1.otr2_prox;
                        else
                            Vacunas1.otr2_prox = oOtr2prox;

                        var oOtr2form = $('#Otr2_form').val()
                        if (Object.keys(oOtr2form).length === 0)
                            Vacunas1.otr2_form = Vacunas1.otr2_form;
                        else
                            Vacunas1.otr2_form = oOtr2form;

                        var oOtr2vet = $('#Otr2_vet').val()
                        if (Object.keys(oOtr2vet).length === 0)
                            Vacunas1.otr2_vet = Vacunas1.otr2_vet;
                        else
                            Vacunas1.otr2_vet = oOtr2vet;

                        var oOtr3name = $('#Otr3_name').val()
                        if (Object.keys(oOtr3name).length === 0)
                            Vacunas1.otr3_name = Vacunas1.otr3_name;
                        else
                            Vacunas1.otr3_name = oOtr3name;

                        var oOtr3date = $('#Otr3_date').val()
                        if (Object.keys(oOtr3date).length === 0)
                            Vacunas1.otr3_date = Vacunas1.otr3_date;
                        else
                            Vacunas1.otr3_date = oOtr3date;

                        var oOtr3prox = $('#Otr3_prox').val()
                        if (Object.keys(oOtr3prox).length === 0)
                            Vacunas1.otr3_prox = Vacunas1.otr3_prox;
                        else
                            Vacunas1.otr3_prox = oOtr3prox;

                        var oOtr3form = $('#Otr3_form').val()
                        if (Object.keys(oOtr3form).length === 0)
                            Vacunas1.otr3_form = Vacunas1.otr3_form;
                        else
                            Vacunas1.otr3_form = oOtr3form;

                        var oOtr3vet = $('#Otr3_vet').val()
                        if (Object.keys(oOtr3vet).length === 0)
                            Vacunas1.otr3_vet = Vacunas1.otr3_vet;
                        else
                            Vacunas1.otr3_vet = oOtr3vet;

                        var oOtr4name = $('#Otr4_name').val()
                        if (Object.keys(oOtr4name).length === 0)
                            Vacunas1.otr4_name = Vacunas1.otr4_name;
                        else
                            Vacunas1.otr4_name = oOtr4name;

                        var oOtr4date = $('#Otr4_date').val()
                        if (Object.keys(oOtr4date).length === 0)
                            Vacunas1.otr4_date = Vacunas1.otr4_date;
                        else
                            Vacunas1.otr4_date = oOtr4date;

                        var oOtr4prox = $('#Otr4_prox').val()
                        if (Object.keys(oOtr4prox).length === 0)
                            Vacunas1.otr4_prox = Vacunas1.otr4_prox;
                        else
                            Vacunas1.otr4_prox = oOtr4prox;

                        var oOtr4form = $('#Otr4_form').val()
                        if (Object.keys(oOtr4form).length === 0)
                            Vacunas1.otr4_form = Vacunas1.otr4_form;
                        else
                            Vacunas1.otr4_form = oOtr4form;

                        var oOtr4vet = $('#Otr4_vet').val()
                        if (Object.keys(oOtr4vet).length === 0)
                            Vacunas1.otr4_vet = Vacunas1.otr4_vet;
                        else
                            Vacunas1.otr4_vet = oOtr4vet;

                        var oOtr5name = $('#Otr5_name').val()
                        if (Object.keys(oOtr5name).length === 0)
                            Vacunas1.otr5_name = Vacunas1.otr5_name;
                        else
                            Vacunas1.otr5_name = oOtr5name;

                        var oOtr5date = $('#Otr5_date').val()
                        if (Object.keys(oOtr5date).length === 0)
                            Vacunas1.otr5_date = Vacunas1.otr5_date;
                        else
                            Vacunas1.otr5_date = oOtr5date;

                        var oOtr5prox = $('#Otr5_prox').val()
                        if (Object.keys(oOtr5prox).length === 0)
                            Vacunas1.otr5_prox = Vacunas1.otr5_prox;
                        else
                            Vacunas1.otr5_prox = oOtr5prox;

                        var oOtr5form = $('#Otr5_form').val()
                        if (Object.keys(oOtr5form).length === 0)
                            Vacunas1.otr5_form = Vacunas1.otr5_form;
                        else
                            Vacunas1.otr5_form = oOtr5form;

                        var oOtr5vet = $('#Otr5_vet').val()
                        if (Object.keys(oOtr5vet).length === 0)
                            Vacunas1.otr5_vet = Vacunas1.otr5_vet;
                        else
                            Vacunas1.otr5_vet = oOtr5vet;

                        Vacunas1.idperro = Vacunas1.id;
                        Vacunas1.idusuario = Vacunas1.idusuario;

                        $.ajax({
                            type: "POST",
                            url: "/Usuario/ActualizarVacunas",
                            data: JSON.stringify(
                                {
                                    'vacunas': Vacunas1,
                                }),
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            success: function (datos) {

                                $('.toastExitoRegistroPrimerPerro').toast('show')

                                $scope.$apply();

                            },
                            error: function (error) {

                                $('.toastFracasoRegistroPrimerPerro').toast('show')

                                $scope.$apply();

                            }
                        })


                    }

                }
                else{

                    var j = document.getElementById("Mascotas").value;

                    Vacunas1.id = datos.listaPerro[j].id;
                    Vacunas1.idusuario = datos.listaPerro[j].idUsuario;
                    Vacunas1.rabia_date = "";
                    Vacunas1.rabia_prox = "";
                    Vacunas1.rabia_form = "";
                    Vacunas1.rabia_vet = "";
                    Vacunas1.parvo_date = "";
                    Vacunas1.parvo_prox = "";
                    Vacunas1.parvo_form = "";
                    Vacunas1.parvo_vet = "";
                    Vacunas1.diste_date = "";
                    Vacunas1.diste_prox = "";
                    Vacunas1.diste_form = "";
                    Vacunas1.diste_vet = "";
                    Vacunas1.adeno_date = "";
                    Vacunas1.adeno_prox = "";
                    Vacunas1.adeno_form = "";
                    Vacunas1.adeno_vet = "";
                    Vacunas1.influ_date = "";
                    Vacunas1.influ_prox = "";
                    Vacunas1.influ_form = "";
                    Vacunas1.influ_vet = "";
                    Vacunas1.lepto_date = "";
                    Vacunas1.lepto_prox = "";
                    Vacunas1.lepto_form = "";
                    Vacunas1.lepto_vet = "";
                    Vacunas1.borde_date = "";
                    Vacunas1.borde_prox = "";
                    Vacunas1.borde_form = "";
                    Vacunas1.borde_vet = "";
                    Vacunas1.disea_date = "";
                    Vacunas1.disea_prox = "";
                    Vacunas1.disea_form = "";
                    Vacunas1.disea_vet = "";
                    Vacunas1.otr1_date = "";
                    Vacunas1.otr1_prox = "";
                    Vacunas1.otr1_form = "";
                    Vacunas1.otr1_vet = "";
                    Vacunas1.otr2_date = "";
                    Vacunas1.otr2_prox = "";
                    Vacunas1.otr2_form = "";
                    Vacunas1.otr2_vet = "";
                    Vacunas1.otr3_date = "";
                    Vacunas1.otr3_prox = "";
                    Vacunas1.otr3_form = "";
                    Vacunas1.otr3_vet = "";
                    Vacunas1.otr4_date = "";
                    Vacunas1.otr4_prox = "";
                    Vacunas1.otr4_form = "";
                    Vacunas1.otr4_vet = "";
                    Vacunas1.otr5_date = "";
                    Vacunas1.otr5_prox = "";
                    Vacunas1.otr5_form = "";
                    Vacunas1.otr5_vet = "";

                    mostrartabla6(Vacunas1);

                    const agregarvacunas = document.getElementById("actualizar_tablaVacunas");
                    agregarvacunas.onclick = function () {

                        var orabiadate = $('#Rabia_date').val()
                        if (Object.keys(orabiadate).length === 0)
                            Vacunas1.rabia_date = Vacunas1.rabia_date;
                        else
                            Vacunas1.rabia_date = orabiadate;

                        var orabiaprox = $('#Rabia_prox').val()
                        if (Object.keys(orabiaprox).length === 0)
                            Vacunas1.rabia_prox = Vacunas1.rabia_prox;
                        else
                            Vacunas1.rabia_prox = orabiaprox;

                        var orabiaform = $('#Rabia_form').val()
                        if (Object.keys(orabiaform).length === 0)
                            Vacunas1.rabia_form = Vacunas1.rabia_form;
                        else
                            Vacunas1.rabia_form = orabiaform;

                        var orabiavet = $('#Rabia_vet').val()
                        if (Object.keys(orabiavet).length === 0)
                            Vacunas1.rabia_vet = Vacunas1.rabia_vet;
                        else
                            Vacunas1.rabia_vet = orabiavet;

                        var oParvodate = $('#Parvo_date').val()
                        if (Object.keys(oParvodate).length === 0)
                            Vacunas1.parvo_date = Vacunas1.parvo_date;
                        else
                            Vacunas1.parvo_date = oParvodate;

                        var oParvoprox = $('#Parvo_prox').val()
                        if (Object.keys(oParvoprox).length === 0)
                            Vacunas1.parvo_prox = Vacunas1.parvo_prox;
                        else
                            Vacunas1.parvo_prox = oParvoprox;

                        var oParvoform = $('#Parvo_form').val()
                        if (Object.keys(oParvoform).length === 0)
                            Vacunas1.parvo_form = Vacunas1.parvo_form;
                        else
                            Vacunas1.parvo_form = oParvoform;

                        var oParvovet = $('#Parvo_vet').val()
                        if (Object.keys(oParvovet).length === 0)
                            Vacunas1.parvo_vet = Vacunas1.parvo_vet;
                        else
                            Vacunas1.parvo_vet = oParvovet;

                        var oDistedate = $('#Diste_date').val()
                        if (Object.keys(oDistedate).length === 0)
                            Vacunas1.diste_date = Vacunas1.diste_date;
                        else
                            Vacunas1.diste_date = oDistedate;

                        var oDisteprox = $('#Diste_prox').val()
                        if (Object.keys(oDisteprox).length === 0)
                            Vacunas1.diste_prox = Vacunas1.diste_prox;
                        else
                            Vacunas1.diste_prox = oDisteprox;

                        var oDisteform = $('#Diste_form').val()
                        if (Object.keys(oDisteform).length === 0)
                            Vacunas1.diste_form = Vacunas1.diste_form;
                        else
                            Vacunas1.diste_form = oDisteform;

                        var oDistevet = $('#Diste_vet').val()
                        if (Object.keys(oDistevet).length === 0)
                            Vacunas1.diste_vet = Vacunas1.diste_vet;
                        else
                            Vacunas1.diste_vet = oDistevet;

                        var oAdenodate = $('#Adeno_date').val()
                        if (Object.keys(oAdenodate).length === 0)
                            Vacunas1.adeno_date = Vacunas1.adeno_date;
                        else
                            Vacunas1.adeno_date = oAdenodate;

                        var oAdenoprox = $('#Adeno_prox').val()
                        if (Object.keys(oAdenoprox).length === 0)
                            Vacunas1.adeno_prox = Vacunas1.adeno_prox;
                        else
                            Vacunas1.adeno_prox = oAdenoprox;

                        var oAdenoform = $('#Adeno_form').val()
                        if (Object.keys(oAdenoform).length === 0)
                            Vacunas1.adeno_form = Vacunas1.adeno_form;
                        else
                            Vacunas1.adeno_form = oAdenoform;

                        var oAdenovet = $('#Adeno_vet').val()
                        if (Object.keys(oAdenovet).length === 0)
                            Vacunas1.adeno_vet = Vacunas1.adeno_vet;
                        else
                            Vacunas1.adeno_vet = oAdenovet;

                        var oInfludate = $('#Influ_date').val()
                        if (Object.keys(oInfludate).length === 0)
                            Vacunas1.influ_date = Vacunas1.influ_date;
                        else
                            Vacunas1.influ_date = oInfludate;

                        var oInfluprox = $('#Influ_prox').val()
                        if (Object.keys(oInfluprox).length === 0)
                            Vacunas1.influ_prox = Vacunas1.influ_prox;
                        else
                            Vacunas1.influ_prox = oInfluprox;

                        var oInfluform = $('#Influ_form').val()
                        if (Object.keys(oInfluform).length === 0)
                            Vacunas1.influ_form = Vacunas1.influ_form;
                        else
                            Vacunas1.influ_form = oInfluform;

                        var oInfluvet = $('#Influ_vet').val()
                        if (Object.keys(oInfluvet).length === 0)
                            Vacunas1.influ_vet = Vacunas1.influ_vet;
                        else
                            Vacunas1.influ_vet = oInfluvet;

                        var oLeptodate = $('#Lepto_date').val()
                        if (Object.keys(oLeptodate).length === 0)
                            Vacunas1.lepto_date = Vacunas1.lepto_date;
                        else
                            Vacunas1.lepto_date = oLeptodate;

                        var oLeptoprox = $('#Lepto_prox').val()
                        if (Object.keys(oLeptoprox).length === 0)
                            Vacunas1.lepto_prox = Vacunas1.lepto_prox;
                        else
                            Vacunas1.lepto_prox = oLeptoprox;

                        var oLeptoform = $('#Lepto_form').val()
                        if (Object.keys(oLeptoform).length === 0)
                            Vacunas1.lepto_form = Vacunas1.lepto_form;
                        else
                            Vacunas1.lepto_form = oLeptoform;

                        var oLeptovet = $('#Lepto_vet').val()
                        if (Object.keys(oLeptovet).length === 0)
                            Vacunas1.lepto_vet = Vacunas1.lepto_vet;
                        else
                            Vacunas1.lepto_vet = oLeptovet;

                        var oBordedate = $('#Borde_date').val()
                        if (Object.keys(oBordedate).length === 0)
                            Vacunas1.borde_date = Vacunas1.borde_date;
                        else
                            Vacunas1.borde_date = oBordedate;

                        var oBordeprox = $('#Borde_prox').val()
                        if (Object.keys(oBordeprox).length === 0)
                            Vacunas1.borde_prox = Vacunas1.borde_prox;
                        else
                            Vacunas1.borde_prox = oBordeprox;

                        var oBordeform = $('#Borde_form').val()
                        if (Object.keys(oBordeform).length === 0)
                            Vacunas1.borde_form = Vacunas1.borde_form;
                        else
                            Vacunas1.borde_form = oBordeform;

                        var oBordevet = $('#Borde_vet').val()
                        if (Object.keys(oBordevet).length === 0)
                            Vacunas1.borde_vet = Vacunas1.borde_vet;
                        else
                            Vacunas1.borde_vet = oBordevet;

                        var oDiseadate = $('#Lyme_date').val()
                        if (Object.keys(oDiseadate).length === 0)
                            Vacunas1.disea_date = Vacunas1.disea_date;
                        else
                            Vacunas1.disea_date = oDiseadate;

                        var oDiseaprox = $('#Lyme_prox').val()
                        if (Object.keys(oDiseaprox).length === 0)
                            Vacunas1.disea_prox = Vacunas1.disea_prox;
                        else
                            Vacunas1.disea_prox = oDiseaprox;

                        var oDiseaform = $('#Lyme_form').val()
                        if (Object.keys(oDiseaform).length === 0)
                            Vacunas1.disea_form = Vacunas1.disea_form;
                        else
                            Vacunas1.disea_form = oDiseaform;

                        var oDiseavet = $('#Lyme_vet').val()
                        if (Object.keys(oDiseavet).length === 0)
                            Vacunas1.disea_vet = Vacunas1.disea_vet;
                        else
                            Vacunas1.disea_vet = oDiseavet;

                        var oOtr1name = $('#Otr1_name').val()
                        if (Object.keys(oOtr1name).length === 0)
                            Vacunas1.otr1_name = Vacunas1.otr1_name;
                        else
                            Vacunas1.otr1_name = oOtr1name;

                        var oOtr1date = $('#Otr1_date').val()
                        if (Object.keys(oOtr1date).length === 0)
                            Vacunas1.otr1_date = Vacunas1.otr1_date;
                        else
                            Vacunas1.otr1_date = oOtr1date;

                        var oOtr1prox = $('#Otr1_prox').val()
                        if (Object.keys(oOtr1prox).length === 0)
                            Vacunas1.otr1_prox = Vacunas1.otr1_prox;
                        else
                            Vacunas1.otr1_prox = oOtr1prox;

                        var oOtr1form = $('#Otr1_form').val()
                        if (Object.keys(oOtr1form).length === 0)
                            Vacunas1.otr1_form = Vacunas1.otr1_form;
                        else
                            Vacunas1.otr1_form = oOtr1form;

                        var oOtr1vet = $('#Otr1_vet').val()
                        if (Object.keys(oOtr1vet).length === 0)
                            Vacunas1.otr1_vet = Vacunas1.otr1_vet;
                        else
                            Vacunas1.otr1_vet = oOtr1vet;

                        var oOtr2name = $('#Otr2_name').val()
                        if (Object.keys(oOtr2name).length === 0)
                            Vacunas1.otr2_name = Vacunas1.otr2_name;
                        else
                            Vacunas1.otr2_name = oOtr2name;

                        var oOtr2date = $('#Otr2_date').val()
                        if (Object.keys(oOtr2date).length === 0)
                            Vacunas1.otr2_date = Vacunas1.otr2_date;
                        else
                            Vacunas1.otr2_date = oOtr2date;

                        var oOtr2prox = $('#Otr2_prox').val()
                        if (Object.keys(oOtr2prox).length === 0)
                            Vacunas1.otr2_prox = Vacunas1.otr2_prox;
                        else
                            Vacunas1.otr2_prox = oOtr2prox;

                        var oOtr2form = $('#Otr2_form').val()
                        if (Object.keys(oOtr2form).length === 0)
                            Vacunas1.otr2_form = Vacunas1.otr2_form;
                        else
                            Vacunas1.otr2_form = oOtr2form;

                        var oOtr2vet = $('#Otr2_vet').val()
                        if (Object.keys(oOtr2vet).length === 0)
                            Vacunas1.otr2_vet = Vacunas1.otr2_vet;
                        else
                            Vacunas1.otr2_vet = oOtr2vet;

                        var oOtr3name = $('#Otr3_name').val()
                        if (Object.keys(oOtr3name).length === 0)
                            Vacunas1.otr3_name = Vacunas1.otr3_name;
                        else
                            Vacunas1.otr3_name = oOtr3name;

                        var oOtr3date = $('#Otr3_date').val()
                        if (Object.keys(oOtr3date).length === 0)
                            Vacunas1.otr3_date = Vacunas1.otr3_date;
                        else
                            Vacunas1.otr3_date = oOtr3date;

                        var oOtr3prox = $('#Otr3_prox').val()
                        if (Object.keys(oOtr3prox).length === 0)
                            Vacunas1.otr3_prox = Vacunas1.otr3_prox;
                        else
                            Vacunas1.otr3_prox = oOtr3prox;

                        var oOtr3form = $('#Otr3_form').val()
                        if (Object.keys(oOtr3form).length === 0)
                            Vacunas1.otr3_form = Vacunas1.otr3_form;
                        else
                            Vacunas1.otr3_form = oOtr3form;

                        var oOtr3vet = $('#Otr3_vet').val()
                        if (Object.keys(oOtr3vet).length === 0)
                            Vacunas1.otr3_vet = Vacunas1.otr3_vet;
                        else
                            Vacunas1.otr3_vet = oOtr3vet;

                        var oOtr4name = $('#Otr4_name').val()
                        if (Object.keys(oOtr4name).length === 0)
                            Vacunas1.otr4_name = Vacunas1.otr4_name;
                        else
                            Vacunas1.otr4_name = oOtr4name;

                        var oOtr4date = $('#Otr4_date').val()
                        if (Object.keys(oOtr4date).length === 0)
                            Vacunas1.otr4_date = Vacunas1.otr4_date;
                        else
                            Vacunas1.otr4_date = oOtr4date;

                        var oOtr4prox = $('#Otr4_prox').val()
                        if (Object.keys(oOtr4prox).length === 0)
                            Vacunas1.otr4_prox = Vacunas1.otr4_prox;
                        else
                            Vacunas1.otr4_prox = oOtr4prox;

                        var oOtr4form = $('#Otr4_form').val()
                        if (Object.keys(oOtr4form).length === 0)
                            Vacunas1.otr4_form = Vacunas1.otr4_form;
                        else
                            Vacunas1.otr4_form = oOtr4form;

                        var oOtr4vet = $('#Otr4_vet').val()
                        if (Object.keys(oOtr4vet).length === 0)
                            Vacunas1.otr4_vet = Vacunas1.otr4_vet;
                        else
                            Vacunas1.otr4_vet = oOtr4vet;

                        var oOtr5name = $('#Otr5_name').val()
                        if (Object.keys(oOtr5name).length === 0)
                            Vacunas1.otr5_name = Vacunas1.otr5_name;
                        else
                            Vacunas1.otr5_name = oOtr5name;

                        var oOtr5date = $('#Otr5_date').val()
                        if (Object.keys(oOtr5date).length === 0)
                            Vacunas1.otr5_date = Vacunas1.otr5_date;
                        else
                            Vacunas1.otr5_date = oOtr5date;

                        var oOtr5prox = $('#Otr5_prox').val()
                        if (Object.keys(oOtr5prox).length === 0)
                            Vacunas1.otr5_prox = Vacunas1.otr5_prox;
                        else
                            Vacunas1.otr5_prox = oOtr5prox;

                        var oOtr5form = $('#Otr5_form').val()
                        if (Object.keys(oOtr5form).length === 0)
                            Vacunas1.otr5_form = Vacunas1.otr5_form;
                        else
                            Vacunas1.otr5_form = oOtr5form;

                        var oOtr5vet = $('#Otr5_vet').val()
                        if (Object.keys(oOtr5vet).length === 0)
                            Vacunas1.otr5_vet = Vacunas1.otr5_vet;
                        else
                            Vacunas1.otr5_vet = oOtr5vet;

                        Vacunas1.idperro = Vacunas1.id;
                        Vacunas1.idusuario = Vacunas1.idusuario;

                        $.ajax({
                            type: "POST",
                            url: "/Usuario/ActualizarVacunas",
                            data: JSON.stringify(
                                {
                                    'vacunas': Vacunas1,
                                }),
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            success: function (datos) {

                                $('.toastExitoRegistroPrimerPerro').toast('show')

                                $scope.$apply();

                            },
                            error: function (error) {

                                $('.toastFracasoRegistroPrimerPerro').toast('show')

                                $scope.$apply();

                            }
                        })


                    }

                }

                

            }
        })


    })

    



})




