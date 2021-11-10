//MENU DESPLEGABLE

document.getElementById('menuTrigger').addEventListener('click',
    () => {
        document.getElementById('menu').classList.toggle('_menu-list-in')

        const idmedico = document.getElementById("salud");
        const idperro = document.getElementById("perro");
        const identremaniento = document.getElementById("entrenamiento");
        const idfinanzas = document.getElementById("FormIngresos");
        const idhumano = document.getElementById("humano");

        if (idmedico !== null) {
            eliminartablamedicos();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }
        else if (identremaniento !== null) {
            eliminartablaentrenamientos();
        }
        else if (idfinanzas !== null) {
            eliminartablafinanzas();
        }
        else if (idhumano !== null) {
            eliminartablahumano();
        }


    })

document.getElementById('closemenu').addEventListener('click',
    () => {
        document.getElementById('menu').classList.toggle('_menu-list-in')
    })

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

document.getElementById('btn-ingresar-camada').addEventListener('click',
    () => {

        document.getElementById("Camada_l").classList.remove('mostrar-label');
        document.getElementById("Camada_l").classList.add('ocultar-label');
        document.getElementById("Camada").classList.add('mostrar-input');
        document.getElementById("Camada").classList.remove('ocultar-input');

        document.getElementById("Ultra1_l").classList.remove('mostrar-label');
        document.getElementById("Ultra1_l").classList.add('ocultar-label');
        document.getElementById("Ultra1").classList.add('mostrar-input');
        document.getElementById("Ultra1").classList.remove('ocultar-input');

        document.getElementById("Ultra2_l").classList.remove('mostrar-label');
        document.getElementById("Ultra2_l").classList.add('ocultar-label');
        document.getElementById("Ultra2").classList.add('mostrar-input');
        document.getElementById("Ultra2").classList.remove('ocultar-input');

        document.getElementById("Proge1_l").classList.remove('mostrar-label');
        document.getElementById("Proge1_l").classList.add('ocultar-label');
        document.getElementById("Proge1").classList.add('mostrar-input');
        document.getElementById("Proge1").classList.remove('ocultar-input');

        document.getElementById("Proge2_l").classList.remove('mostrar-label');
        document.getElementById("Proge2_l").classList.add('ocultar-label');
        document.getElementById("Proge2").classList.add('mostrar-input');
        document.getElementById("Proge2").classList.remove('ocultar-input');

        document.getElementById("Proge3_l").classList.remove('mostrar-label');
        document.getElementById("Proge3_l").classList.add('ocultar-label');
        document.getElementById("Proge3").classList.add('mostrar-input');
        document.getElementById("Proge3").classList.remove('ocultar-input');

        document.getElementById("Parto_l").classList.remove('mostrar-label');
        document.getElementById("Parto_l").classList.add('ocultar-label');
        document.getElementById("Parto").classList.add('mostrar-input');
        document.getElementById("Parto").classList.remove('ocultar-input');

        document.getElementById("Inicio_l").classList.remove('mostrar-label');
        document.getElementById("Inicio_l").classList.add('ocultar-label');
        document.getElementById("Inicio").classList.add('mostrar-input');
        document.getElementById("Inicio").classList.remove('ocultar-input');

        document.getElementById("Fin_l").classList.remove('mostrar-label');
        document.getElementById("Fin_l").classList.add('ocultar-label');
        document.getElementById("Fin").classList.add('mostrar-input');
        document.getElementById("Fin").classList.remove('ocultar-input');

        document.getElementById("Cruza_l").classList.remove('mostrar-label');
        document.getElementById("Cruza_l").classList.add('ocultar-label');
        document.getElementById("Cruza").classList.add('mostrar-input');
        document.getElementById("Cruza").classList.remove('ocultar-input');

        document.getElementById("Madre_l").classList.remove('mostrar-label');
        document.getElementById("Madre_l").classList.add('ocultar-label');
        document.getElementById("Madre").classList.add('mostrar-input');
        document.getElementById("Madre").classList.remove('ocultar-input');

        document.getElementById("Padre_l").classList.remove('mostrar-label');
        document.getElementById("Padre_l").classList.add('ocultar-label');
        document.getElementById("Padre").classList.add('mostrar-input');
        document.getElementById("Padre").classList.remove('ocultar-input');

        document.getElementById("Total_l").classList.remove('mostrar-label');
        document.getElementById("Total_l").classList.add('ocultar-label');
        document.getElementById("Total").classList.add('mostrar-input');
        document.getElementById("Total").classList.remove('ocultar-input');

        document.getElementById("Vivos_l").classList.remove('mostrar-label');
        document.getElementById("Vivos_l").classList.add('ocultar-label');
        document.getElementById("Vivos").classList.add('mostrar-input');
        document.getElementById("Vivos").classList.remove('ocultar-input');

        document.getElementById("Muertos_l").classList.remove('mostrar-label');
        document.getElementById("Muertos_l").classList.add('ocultar-label');
        document.getElementById("Muertos").classList.add('mostrar-input');
        document.getElementById("Muertos").classList.remove('ocultar-input');

        document.getElementById("Nombre_c1_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c1_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c1").classList.add('mostrar-input');
        document.getElementById("Nombre_c1").classList.remove('ocultar-input');

        document.getElementById("Hora_c1_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c1_l").classList.add('ocultar-label');
        document.getElementById("Hora_c1").classList.add('mostrar-input');
        document.getElementById("Hora_c1").classList.remove('ocultar-input');

        document.getElementById("Sexo_c1_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c1_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c1").classList.add('mostrar-input');
        document.getElementById("Sexo_c1").classList.remove('ocultar-input');

        document.getElementById("Color_c1_l").classList.remove('mostrar-label');
        document.getElementById("Color_c1_l").classList.add('ocultar-label');
        document.getElementById("Color_c1").classList.add('mostrar-input');
        document.getElementById("Color_c1").classList.remove('ocultar-input');

        document.getElementById("Posicion_c1_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c1_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c1").classList.add('mostrar-input');
        document.getElementById("Posicion_c1").classList.remove('ocultar-input');

        document.getElementById("Peso_c1_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c1_l").classList.add('ocultar-label');
        document.getElementById("Peso_c1").classList.add('mostrar-input');
        document.getElementById("Peso_c1").classList.remove('ocultar-input');

        document.getElementById("Notas_c1_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c1_l").classList.add('ocultar-label');
        document.getElementById("Notas_c1").classList.add('mostrar-input');
        document.getElementById("Notas_c1").classList.remove('ocultar-input');

        document.getElementById("Nombre_c2_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c2_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c2").classList.add('mostrar-input');
        document.getElementById("Nombre_c2").classList.remove('ocultar-input');

        document.getElementById("Hora_c2_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c2_l").classList.add('ocultar-label');
        document.getElementById("Hora_c2").classList.add('mostrar-input');
        document.getElementById("Hora_c2").classList.remove('ocultar-input');

        document.getElementById("Sexo_c2_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c2_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c2").classList.add('mostrar-input');
        document.getElementById("Sexo_c2").classList.remove('ocultar-input');

        document.getElementById("Color_c2_l").classList.remove('mostrar-label');
        document.getElementById("Color_c2_l").classList.add('ocultar-label');
        document.getElementById("Color_c2").classList.add('mostrar-input');
        document.getElementById("Color_c2").classList.remove('ocultar-input');

        document.getElementById("Posicion_c2_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c2_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c2").classList.add('mostrar-input');
        document.getElementById("Posicion_c2").classList.remove('ocultar-input');

        document.getElementById("Peso_c2_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c2_l").classList.add('ocultar-label');
        document.getElementById("Peso_c2").classList.add('mostrar-input');
        document.getElementById("Peso_c2").classList.remove('ocultar-input');

        document.getElementById("Notas_c2_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c2_l").classList.add('ocultar-label');
        document.getElementById("Notas_c2").classList.add('mostrar-input');
        document.getElementById("Notas_c2").classList.remove('ocultar-input');

        document.getElementById("Nombre_c3_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c3_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c3").classList.add('mostrar-input');
        document.getElementById("Nombre_c3").classList.remove('ocultar-input');

        document.getElementById("Hora_c3_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c3_l").classList.add('ocultar-label');
        document.getElementById("Hora_c3").classList.add('mostrar-input');
        document.getElementById("Hora_c3").classList.remove('ocultar-input');

        document.getElementById("Sexo_c3_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c3_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c3").classList.add('mostrar-input');
        document.getElementById("Sexo_c3").classList.remove('ocultar-input');

        document.getElementById("Color_c3_l").classList.remove('mostrar-label');
        document.getElementById("Color_c3_l").classList.add('ocultar-label');
        document.getElementById("Color_c3").classList.add('mostrar-input');
        document.getElementById("Color_c3").classList.remove('ocultar-input');

        document.getElementById("Posicion_c3_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c3_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c3").classList.add('mostrar-input');
        document.getElementById("Posicion_c3").classList.remove('ocultar-input');

        document.getElementById("Peso_c3_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c3_l").classList.add('ocultar-label');
        document.getElementById("Peso_c3").classList.add('mostrar-input');
        document.getElementById("Peso_c3").classList.remove('ocultar-input');

        document.getElementById("Notas_c3_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c3_l").classList.add('ocultar-label');
        document.getElementById("Notas_c3").classList.add('mostrar-input');
        document.getElementById("Notas_c3").classList.remove('ocultar-input');

        document.getElementById("Nombre_c4_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c4_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c4").classList.add('mostrar-input');
        document.getElementById("Nombre_c4").classList.remove('ocultar-input');

        document.getElementById("Hora_c4_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c4_l").classList.add('ocultar-label');
        document.getElementById("Hora_c4").classList.add('mostrar-input');
        document.getElementById("Hora_c4").classList.remove('ocultar-input');

        document.getElementById("Sexo_c4_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c4_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c4").classList.add('mostrar-input');
        document.getElementById("Sexo_c4").classList.remove('ocultar-input');

        document.getElementById("Color_c4_l").classList.remove('mostrar-label');
        document.getElementById("Color_c4_l").classList.add('ocultar-label');
        document.getElementById("Color_c4").classList.add('mostrar-input');
        document.getElementById("Color_c4").classList.remove('ocultar-input');

        document.getElementById("Posicion_c4_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c4_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c4").classList.add('mostrar-input');
        document.getElementById("Posicion_c4").classList.remove('ocultar-input');

        document.getElementById("Peso_c4_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c4_l").classList.add('ocultar-label');
        document.getElementById("Peso_c4").classList.add('mostrar-input');
        document.getElementById("Peso_c4").classList.remove('ocultar-input');

        document.getElementById("Notas_c4_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c4_l").classList.add('ocultar-label');
        document.getElementById("Notas_c4").classList.add('mostrar-input');
        document.getElementById("Notas_c4").classList.remove('ocultar-input');

        document.getElementById("Nombre_c5_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c5_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c5").classList.add('mostrar-input');
        document.getElementById("Nombre_c5").classList.remove('ocultar-input');

        document.getElementById("Hora_c5_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c5_l").classList.add('ocultar-label');
        document.getElementById("Hora_c5").classList.add('mostrar-input');
        document.getElementById("Hora_c5").classList.remove('ocultar-input');

        document.getElementById("Sexo_c5_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c5_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c5").classList.add('mostrar-input');
        document.getElementById("Sexo_c5").classList.remove('ocultar-input');

        document.getElementById("Color_c5_l").classList.remove('mostrar-label');
        document.getElementById("Color_c5_l").classList.add('ocultar-label');
        document.getElementById("Color_c5").classList.add('mostrar-input');
        document.getElementById("Color_c5").classList.remove('ocultar-input');

        document.getElementById("Posicion_c5_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c5_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c5").classList.add('mostrar-input');
        document.getElementById("Posicion_c5").classList.remove('ocultar-input');

        document.getElementById("Peso_c5_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c5_l").classList.add('ocultar-label');
        document.getElementById("Peso_c5").classList.add('mostrar-input');
        document.getElementById("Peso_c5").classList.remove('ocultar-input');

        document.getElementById("Notas_c5_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c5_l").classList.add('ocultar-label');
        document.getElementById("Notas_c5").classList.add('mostrar-input');
        document.getElementById("Notas_c5").classList.remove('ocultar-input');

        document.getElementById("Nombre_c6_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c6_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c6").classList.add('mostrar-input');
        document.getElementById("Nombre_c6").classList.remove('ocultar-input');

        document.getElementById("Hora_c6_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c6_l").classList.add('ocultar-label');
        document.getElementById("Hora_c6").classList.add('mostrar-input');
        document.getElementById("Hora_c6").classList.remove('ocultar-input');

        document.getElementById("Sexo_c6_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c6_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c6").classList.add('mostrar-input');
        document.getElementById("Sexo_c6").classList.remove('ocultar-input');

        document.getElementById("Color_c6_l").classList.remove('mostrar-label');
        document.getElementById("Color_c6_l").classList.add('ocultar-label');
        document.getElementById("Color_c6").classList.add('mostrar-input');
        document.getElementById("Color_c6").classList.remove('ocultar-input');

        document.getElementById("Posicion_c6_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c6_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c6").classList.add('mostrar-input');
        document.getElementById("Posicion_c6").classList.remove('ocultar-input');

        document.getElementById("Peso_c6_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c6_l").classList.add('ocultar-label');
        document.getElementById("Peso_c6").classList.add('mostrar-input');
        document.getElementById("Peso_c6").classList.remove('ocultar-input');

        document.getElementById("Notas_c6_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c6_l").classList.add('ocultar-label');
        document.getElementById("Notas_c6").classList.add('mostrar-input');
        document.getElementById("Notas_c6").classList.remove('ocultar-input');

        document.getElementById("Nombre_c7_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c7_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c7").classList.add('mostrar-input');
        document.getElementById("Nombre_c7").classList.remove('ocultar-input');

        document.getElementById("Hora_c7_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c7_l").classList.add('ocultar-label');
        document.getElementById("Hora_c7").classList.add('mostrar-input');
        document.getElementById("Hora_c7").classList.remove('ocultar-input');

        document.getElementById("Sexo_c7_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c7_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c7").classList.add('mostrar-input');
        document.getElementById("Sexo_c7").classList.remove('ocultar-input');

        document.getElementById("Color_c7_l").classList.remove('mostrar-label');
        document.getElementById("Color_c7_l").classList.add('ocultar-label');
        document.getElementById("Color_c7").classList.add('mostrar-input');
        document.getElementById("Color_c7").classList.remove('ocultar-input');

        document.getElementById("Posicion_c7_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c7_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c7").classList.add('mostrar-input');
        document.getElementById("Posicion_c7").classList.remove('ocultar-input');

        document.getElementById("Peso_c7_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c7_l").classList.add('ocultar-label');
        document.getElementById("Peso_c7").classList.add('mostrar-input');
        document.getElementById("Peso_c7").classList.remove('ocultar-input');

        document.getElementById("Notas_c7_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c7_l").classList.add('ocultar-label');
        document.getElementById("Notas_c7").classList.add('mostrar-input');
        document.getElementById("Notas_c7").classList.remove('ocultar-input');

        document.getElementById("Nombre_c8_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c8_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c8").classList.add('mostrar-input');
        document.getElementById("Nombre_c8").classList.remove('ocultar-input');

        document.getElementById("Hora_c8_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c8_l").classList.add('ocultar-label');
        document.getElementById("Hora_c8").classList.add('mostrar-input');
        document.getElementById("Hora_c8").classList.remove('ocultar-input');

        document.getElementById("Sexo_c8_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c8_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c8").classList.add('mostrar-input');
        document.getElementById("Sexo_c8").classList.remove('ocultar-input');

        document.getElementById("Color_c8_l").classList.remove('mostrar-label');
        document.getElementById("Color_c8_l").classList.add('ocultar-label');
        document.getElementById("Color_c8").classList.add('mostrar-input');
        document.getElementById("Color_c8").classList.remove('ocultar-input');

        document.getElementById("Posicion_c8_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c8_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c8").classList.add('mostrar-input');
        document.getElementById("Posicion_c8").classList.remove('ocultar-input');

        document.getElementById("Peso_c8_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c8_l").classList.add('ocultar-label');
        document.getElementById("Peso_c8").classList.add('mostrar-input');
        document.getElementById("Peso_c8").classList.remove('ocultar-input');

        document.getElementById("Notas_c8_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c8_l").classList.add('ocultar-label');
        document.getElementById("Notas_c8").classList.add('mostrar-input');
        document.getElementById("Notas_c8").classList.remove('ocultar-input');

        document.getElementById("Nombre_c9_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c9_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c9").classList.add('mostrar-input');
        document.getElementById("Nombre_c9").classList.remove('ocultar-input');

        document.getElementById("Hora_c9_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c9_l").classList.add('ocultar-label');
        document.getElementById("Hora_c9").classList.add('mostrar-input');
        document.getElementById("Hora_c9").classList.remove('ocultar-input');

        document.getElementById("Sexo_c9_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c9_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c9").classList.add('mostrar-input');
        document.getElementById("Sexo_c9").classList.remove('ocultar-input');

        document.getElementById("Color_c9_l").classList.remove('mostrar-label');
        document.getElementById("Color_c9_l").classList.add('ocultar-label');
        document.getElementById("Color_c9").classList.add('mostrar-input');
        document.getElementById("Color_c9").classList.remove('ocultar-input');

        document.getElementById("Posicion_c9_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c9_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c9").classList.add('mostrar-input');
        document.getElementById("Posicion_c9").classList.remove('ocultar-input');

        document.getElementById("Peso_c9_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c9_l").classList.add('ocultar-label');
        document.getElementById("Peso_c9").classList.add('mostrar-input');
        document.getElementById("Peso_c9").classList.remove('ocultar-input');

        document.getElementById("Notas_c9_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c9_l").classList.add('ocultar-label');
        document.getElementById("Notas_c9").classList.add('mostrar-input');
        document.getElementById("Notas_c9").classList.remove('ocultar-input');

        document.getElementById("Nombre_c10_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c10_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c10").classList.add('mostrar-input');
        document.getElementById("Nombre_c10").classList.remove('ocultar-input');

        document.getElementById("Hora_c10_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c10_l").classList.add('ocultar-label');
        document.getElementById("Hora_c10").classList.add('mostrar-input');
        document.getElementById("Hora_c10").classList.remove('ocultar-input');

        document.getElementById("Sexo_c10_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c10_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c10").classList.add('mostrar-input');
        document.getElementById("Sexo_c10").classList.remove('ocultar-input');

        document.getElementById("Color_c10_l").classList.remove('mostrar-label');
        document.getElementById("Color_c10_l").classList.add('ocultar-label');
        document.getElementById("Color_c10").classList.add('mostrar-input');
        document.getElementById("Color_c10").classList.remove('ocultar-input');

        document.getElementById("Posicion_c10_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c10_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c10").classList.add('mostrar-input');
        document.getElementById("Posicion_c10").classList.remove('ocultar-input');

        document.getElementById("Peso_c10_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c10_l").classList.add('ocultar-label');
        document.getElementById("Peso_c10").classList.add('mostrar-input');
        document.getElementById("Peso_c10").classList.remove('ocultar-input');

        document.getElementById("Notas_c10_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c10_l").classList.add('ocultar-label');
        document.getElementById("Notas_c10").classList.add('mostrar-input');
        document.getElementById("Notas_c10").classList.remove('ocultar-input');

        document.getElementById("Nombre_c11_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c11_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c11").classList.add('mostrar-input');
        document.getElementById("Nombre_c11").classList.remove('ocultar-input');

        document.getElementById("Hora_c11_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c11_l").classList.add('ocultar-label');
        document.getElementById("Hora_c11").classList.add('mostrar-input');
        document.getElementById("Hora_c11").classList.remove('ocultar-input');

        document.getElementById("Sexo_c11_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c11_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c11").classList.add('mostrar-input');
        document.getElementById("Sexo_c11").classList.remove('ocultar-input');

        document.getElementById("Color_c11_l").classList.remove('mostrar-label');
        document.getElementById("Color_c11_l").classList.add('ocultar-label');
        document.getElementById("Color_c11").classList.add('mostrar-input');
        document.getElementById("Color_c11").classList.remove('ocultar-input');

        document.getElementById("Posicion_c11_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c11_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c11").classList.add('mostrar-input');
        document.getElementById("Posicion_c11").classList.remove('ocultar-input');

        document.getElementById("Peso_c11_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c11_l").classList.add('ocultar-label');
        document.getElementById("Peso_c11").classList.add('mostrar-input');
        document.getElementById("Peso_c11").classList.remove('ocultar-input');

        document.getElementById("Notas_c11_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c11_l").classList.add('ocultar-label');
        document.getElementById("Notas_c11").classList.add('mostrar-input');
        document.getElementById("Notas_c11").classList.remove('ocultar-input');

        document.getElementById("Nombre_c12_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c12_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c12").classList.add('mostrar-input');
        document.getElementById("Nombre_c12").classList.remove('ocultar-input');

        document.getElementById("Hora_c12_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c12_l").classList.add('ocultar-label');
        document.getElementById("Hora_c12").classList.add('mostrar-input');
        document.getElementById("Hora_c12").classList.remove('ocultar-input');

        document.getElementById("Sexo_c12_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c12_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c12").classList.add('mostrar-input');
        document.getElementById("Sexo_c12").classList.remove('ocultar-input');

        document.getElementById("Color_c12_l").classList.remove('mostrar-label');
        document.getElementById("Color_c12_l").classList.add('ocultar-label');
        document.getElementById("Color_c12").classList.add('mostrar-input');
        document.getElementById("Color_c12").classList.remove('ocultar-input');

        document.getElementById("Posicion_c12_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c12_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c12").classList.add('mostrar-input');
        document.getElementById("Posicion_c12").classList.remove('ocultar-input');

        document.getElementById("Peso_c12_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c12_l").classList.add('ocultar-label');
        document.getElementById("Peso_c12").classList.add('mostrar-input');
        document.getElementById("Peso_c12").classList.remove('ocultar-input');

        document.getElementById("Notas_c12_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c12_l").classList.add('ocultar-label');
        document.getElementById("Notas_c12").classList.add('mostrar-input');
        document.getElementById("Notas_c12").classList.remove('ocultar-input');

        document.getElementById("Nombre_c13_l").classList.remove('mostrar-label');
        document.getElementById("Nombre_c13_l").classList.add('ocultar-label');
        document.getElementById("Nombre_c13").classList.add('mostrar-input');
        document.getElementById("Nombre_c13").classList.remove('ocultar-input');

        document.getElementById("Hora_c13_l").classList.remove('mostrar-label');
        document.getElementById("Hora_c13_l").classList.add('ocultar-label');
        document.getElementById("Hora_c13").classList.add('mostrar-input');
        document.getElementById("Hora_c13").classList.remove('ocultar-input');

        document.getElementById("Sexo_c13_l").classList.remove('mostrar-label');
        document.getElementById("Sexo_c13_l").classList.add('ocultar-label');
        document.getElementById("Sexo_c13").classList.add('mostrar-input');
        document.getElementById("Sexo_c13").classList.remove('ocultar-input');

        document.getElementById("Color_c13_l").classList.remove('mostrar-label');
        document.getElementById("Color_c13_l").classList.add('ocultar-label');
        document.getElementById("Color_c13").classList.add('mostrar-input');
        document.getElementById("Color_c13").classList.remove('ocultar-input');

        document.getElementById("Posicion_c13_l").classList.remove('mostrar-label');
        document.getElementById("Posicion_c13_l").classList.add('ocultar-label');
        document.getElementById("Posicion_c13").classList.add('mostrar-input');
        document.getElementById("Posicion_c13").classList.remove('ocultar-input');

        document.getElementById("Peso_c13_l").classList.remove('mostrar-label');
        document.getElementById("Peso_c13_l").classList.add('ocultar-label');
        document.getElementById("Peso_c13").classList.add('mostrar-input');
        document.getElementById("Peso_c13").classList.remove('ocultar-input');

        document.getElementById("Notas_c13_l").classList.remove('mostrar-label');
        document.getElementById("Notas_c13_l").classList.add('ocultar-label');
        document.getElementById("Notas_c13").classList.add('mostrar-input');
        document.getElementById("Notas_c13").classList.remove('ocultar-input');

    })

document.getElementById('cancelar-ingreso-camada').addEventListener('click',
    () => {

        document.getElementById("Camada_l").classList.remove('ocultar-label');
        document.getElementById("Camada_l").classList.add('mostrar-label');
        document.getElementById("Camada").classList.add('ocultar-input');
        document.getElementById("Camada").classList.remove('mostrar-input');

        document.getElementById("Ultra1_l").classList.remove('ocultar-label');
        document.getElementById("Ultra1_l").classList.add('mostrar-label');
        document.getElementById("Ultra1").classList.add('ocultar-input');
        document.getElementById("Ultra1").classList.remove('mostrar-input');

        document.getElementById("Ultra2_l").classList.remove('ocultar-label');
        document.getElementById("Ultra2_l").classList.add('mostrar-label');
        document.getElementById("Ultra2").classList.add('ocultar-input');
        document.getElementById("Ultra2").classList.remove('mostrar-input');

        document.getElementById("Proge1_l").classList.remove('ocultar-label');
        document.getElementById("Proge1_l").classList.add('mostrar-label');
        document.getElementById("Proge1").classList.add('ocultar-input');
        document.getElementById("Proge1").classList.remove('mostrar-input');

        document.getElementById("Proge2_l").classList.remove('ocultar-label');
        document.getElementById("Proge2_l").classList.add('mostrar-label');
        document.getElementById("Proge2").classList.add('ocultar-input');
        document.getElementById("Proge2").classList.remove('mostrar-input');

        document.getElementById("Proge3_l").classList.remove('ocultar-label');
        document.getElementById("Proge3_l").classList.add('mostrar-label');
        document.getElementById("Proge3").classList.add('ocultar-input');
        document.getElementById("Proge3").classList.remove('mostrar-input');

        document.getElementById("Parto_l").classList.remove('ocultar-label');
        document.getElementById("Parto_l").classList.add('mostrar-label');
        document.getElementById("Parto").classList.add('ocultar-input');
        document.getElementById("Parto").classList.remove('mostrar-input');

        document.getElementById("Inicio_l").classList.remove('ocultar-label');
        document.getElementById("Inicio_l").classList.add('mostrar-label');
        document.getElementById("Inicio").classList.add('ocultar-input');
        document.getElementById("Inicio").classList.remove('mostrar-input');

        document.getElementById("Fin_l").classList.remove('ocultar-label');
        document.getElementById("Fin_l").classList.add('mostrar-label');
        document.getElementById("Fin").classList.add('ocultar-input');
        document.getElementById("Fin").classList.remove('mostrar-input');

        document.getElementById("Cruza_l").classList.remove('ocultar-label');
        document.getElementById("Cruza_l").classList.add('mostrar-label');
        document.getElementById("Cruza").classList.add('ocultar-input');
        document.getElementById("Cruza").classList.remove('mostrar-input');

        document.getElementById("Madre_l").classList.remove('ocultar-label');
        document.getElementById("Madre_l").classList.add('mostrar-label');
        document.getElementById("Madre").classList.add('ocultar-input');
        document.getElementById("Madre").classList.remove('mostrar-input');

        document.getElementById("Padre_l").classList.remove('ocultar-label');
        document.getElementById("Padre_l").classList.add('mostrar-label');
        document.getElementById("Padre").classList.add('ocultar-input');
        document.getElementById("Padre").classList.remove('mostrar-input');

        document.getElementById("Total_l").classList.remove('ocultar-label');
        document.getElementById("Total_l").classList.add('mostrar-label');
        document.getElementById("Total").classList.add('ocultar-input');
        document.getElementById("Total").classList.remove('mostrar-input');

        document.getElementById("Vivos_l").classList.remove('ocultar-label');
        document.getElementById("Vivos_l").classList.add('mostrar-label');
        document.getElementById("Vivos").classList.add('ocultar-input');
        document.getElementById("Vivos").classList.remove('mostrar-input');

        document.getElementById("Muertos_l").classList.remove('ocultar-label');
        document.getElementById("Muertos_l").classList.add('mostrar-label');
        document.getElementById("Muertos").classList.add('ocultar-input');
        document.getElementById("Muertos").classList.remove('mostrar-input');

        document.getElementById("Nombre_c1_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c1_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c1").classList.add('ocultar-input');
        document.getElementById("Nombre_c1").classList.remove('mostrar-input');

        document.getElementById("Hora_c1_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c1_l").classList.add('mostrar-label');
        document.getElementById("Hora_c1").classList.add('ocultar-input');
        document.getElementById("Hora_c1").classList.remove('mostrar-input');

        document.getElementById("Sexo_c1_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c1_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c1").classList.add('ocultar-input');
        document.getElementById("Sexo_c1").classList.remove('mostrar-input');

        document.getElementById("Color_c1_l").classList.remove('ocultar-label');
        document.getElementById("Color_c1_l").classList.add('mostrar-label');
        document.getElementById("Color_c1").classList.add('ocultar-input');
        document.getElementById("Color_c1").classList.remove('mostrar-input');

        document.getElementById("Posicion_c1_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c1_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c1").classList.add('ocultar-input');
        document.getElementById("Posicion_c1").classList.remove('mostrar-input');

        document.getElementById("Peso_c1_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c1_l").classList.add('mostrar-label');
        document.getElementById("Peso_c1").classList.add('ocultar-input');
        document.getElementById("Peso_c1").classList.remove('mostrar-input');

        document.getElementById("Notas_c1_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c1_l").classList.add('mostrar-label');
        document.getElementById("Notas_c1").classList.add('ocultar-input');
        document.getElementById("Notas_c1").classList.remove('mostrar-input');

        document.getElementById("Nombre_c2_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c2_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c2").classList.add('ocultar-input');
        document.getElementById("Nombre_c2").classList.remove('mostrar-input');

        document.getElementById("Hora_c2_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c2_l").classList.add('mostrar-label');
        document.getElementById("Hora_c2").classList.add('ocultar-input');
        document.getElementById("Hora_c2").classList.remove('mostrar-input');

        document.getElementById("Sexo_c2_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c2_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c2").classList.add('ocultar-input');
        document.getElementById("Sexo_c2").classList.remove('mostrar-input');

        document.getElementById("Color_c2_l").classList.remove('ocultar-label');
        document.getElementById("Color_c2_l").classList.add('mostrar-label');
        document.getElementById("Color_c2").classList.add('ocultar-input');
        document.getElementById("Color_c2").classList.remove('mostrar-input');

        document.getElementById("Posicion_c2_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c2_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c2").classList.add('ocultar-input');
        document.getElementById("Posicion_c2").classList.remove('mostrar-input');

        document.getElementById("Peso_c2_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c2_l").classList.add('mostrar-label');
        document.getElementById("Peso_c2").classList.add('ocultar-input');
        document.getElementById("Peso_c2").classList.remove('mostrar-input');

        document.getElementById("Notas_c2_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c2_l").classList.add('mostrar-label');
        document.getElementById("Notas_c2").classList.add('ocultar-input');
        document.getElementById("Notas_c2").classList.remove('mostrar-input');

        document.getElementById("Nombre_c3_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c3_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c3").classList.add('ocultar-input');
        document.getElementById("Nombre_c3").classList.remove('mostrar-input');

        document.getElementById("Hora_c3_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c3_l").classList.add('mostrar-label');
        document.getElementById("Hora_c3").classList.add('ocultar-input');
        document.getElementById("Hora_c3").classList.remove('mostrar-input');

        document.getElementById("Sexo_c3_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c3_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c3").classList.add('ocultar-input');
        document.getElementById("Sexo_c3").classList.remove('mostrar-input');

        document.getElementById("Color_c3_l").classList.remove('ocultar-label');
        document.getElementById("Color_c3_l").classList.add('mostrar-label');
        document.getElementById("Color_c3").classList.add('ocultar-input');
        document.getElementById("Color_c3").classList.remove('mostrar-input');

        document.getElementById("Posicion_c3_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c3_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c3").classList.add('ocultar-input');
        document.getElementById("Posicion_c3").classList.remove('mostrar-input');

        document.getElementById("Peso_c3_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c3_l").classList.add('mostrar-label');
        document.getElementById("Peso_c3").classList.add('ocultar-input');
        document.getElementById("Peso_c3").classList.remove('mostrar-input');

        document.getElementById("Notas_c3_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c3_l").classList.add('mostrar-label');
        document.getElementById("Notas_c3").classList.add('ocultar-input');
        document.getElementById("Notas_c3").classList.remove('mostrar-input');

        document.getElementById("Nombre_c4_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c4_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c4").classList.add('ocultar-input');
        document.getElementById("Nombre_c4").classList.remove('mostrar-input');

        document.getElementById("Hora_c4_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c4_l").classList.add('mostrar-label');
        document.getElementById("Hora_c4").classList.add('ocultar-input');
        document.getElementById("Hora_c4").classList.remove('mostrar-input');

        document.getElementById("Sexo_c4_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c4_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c4").classList.add('ocultar-input');
        document.getElementById("Sexo_c4").classList.remove('mostrar-input');

        document.getElementById("Color_c4_l").classList.remove('ocultar-label');
        document.getElementById("Color_c4_l").classList.add('mostrar-label');
        document.getElementById("Color_c4").classList.add('ocultar-input');
        document.getElementById("Color_c4").classList.remove('mostrar-input');

        document.getElementById("Posicion_c4_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c4_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c4").classList.add('ocultar-input');
        document.getElementById("Posicion_c4").classList.remove('mostrar-input');

        document.getElementById("Peso_c4_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c4_l").classList.add('mostrar-label');
        document.getElementById("Peso_c4").classList.add('ocultar-input');
        document.getElementById("Peso_c4").classList.remove('mostrar-input');

        document.getElementById("Notas_c4_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c4_l").classList.add('mostrar-label');
        document.getElementById("Notas_c4").classList.add('ocultar-input');
        document.getElementById("Notas_c4").classList.remove('mostrar-input');

        document.getElementById("Nombre_c5_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c5_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c5").classList.add('ocultar-input');
        document.getElementById("Nombre_c5").classList.remove('mostrar-input');

        document.getElementById("Hora_c5_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c5_l").classList.add('mostrar-label');
        document.getElementById("Hora_c5").classList.add('ocultar-input');
        document.getElementById("Hora_c5").classList.remove('mostrar-input');

        document.getElementById("Sexo_c5_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c5_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c5").classList.add('ocultar-input');
        document.getElementById("Sexo_c5").classList.remove('mostrar-input');

        document.getElementById("Color_c5_l").classList.remove('ocultar-label');
        document.getElementById("Color_c5_l").classList.add('mostrar-label');
        document.getElementById("Color_c5").classList.add('ocultar-input');
        document.getElementById("Color_c5").classList.remove('mostrar-input');

        document.getElementById("Posicion_c5_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c5_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c5").classList.add('ocultar-input');
        document.getElementById("Posicion_c5").classList.remove('mostrar-input');

        document.getElementById("Peso_c5_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c5_l").classList.add('mostrar-label');
        document.getElementById("Peso_c5").classList.add('ocultar-input');
        document.getElementById("Peso_c5").classList.remove('mostrar-input');

        document.getElementById("Notas_c5_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c5_l").classList.add('mostrar-label');
        document.getElementById("Notas_c5").classList.add('ocultar-input');
        document.getElementById("Notas_c5").classList.remove('mostrar-input');

        document.getElementById("Nombre_c6_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c6_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c6").classList.add('ocultar-input');
        document.getElementById("Nombre_c6").classList.remove('mostrar-input');

        document.getElementById("Hora_c6_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c6_l").classList.add('mostrar-label');
        document.getElementById("Hora_c6").classList.add('ocultar-input');
        document.getElementById("Hora_c6").classList.remove('mostrar-input');

        document.getElementById("Sexo_c6_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c6_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c6").classList.add('ocultar-input');
        document.getElementById("Sexo_c6").classList.remove('mostrar-input');

        document.getElementById("Color_c6_l").classList.remove('ocultar-label');
        document.getElementById("Color_c6_l").classList.add('mostrar-label');
        document.getElementById("Color_c6").classList.add('ocultar-input');
        document.getElementById("Color_c6").classList.remove('mostrar-input');

        document.getElementById("Posicion_c6_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c6_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c6").classList.add('ocultar-input');
        document.getElementById("Posicion_c6").classList.remove('mostrar-input');

        document.getElementById("Peso_c6_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c6_l").classList.add('mostrar-label');
        document.getElementById("Peso_c6").classList.add('ocultar-input');
        document.getElementById("Peso_c6").classList.remove('mostrar-input');

        document.getElementById("Notas_c6_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c6_l").classList.add('mostrar-label');
        document.getElementById("Notas_c6").classList.add('ocultar-input');
        document.getElementById("Notas_c6").classList.remove('mostrar-input');

        document.getElementById("Nombre_c7_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c7_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c7").classList.add('ocultar-input');
        document.getElementById("Nombre_c7").classList.remove('mostrar-input');

        document.getElementById("Hora_c7_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c7_l").classList.add('mostrar-label');
        document.getElementById("Hora_c7").classList.add('ocultar-input');
        document.getElementById("Hora_c7").classList.remove('mostrar-input');

        document.getElementById("Sexo_c7_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c7_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c7").classList.add('ocultar-input');
        document.getElementById("Sexo_c7").classList.remove('mostrar-input');

        document.getElementById("Color_c7_l").classList.remove('ocultar-label');
        document.getElementById("Color_c7_l").classList.add('mostrar-label');
        document.getElementById("Color_c7").classList.add('ocultar-input');
        document.getElementById("Color_c7").classList.remove('mostrar-input');

        document.getElementById("Posicion_c7_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c7_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c7").classList.add('ocultar-input');
        document.getElementById("Posicion_c7").classList.remove('mostrar-input');

        document.getElementById("Peso_c7_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c7_l").classList.add('mostrar-label');
        document.getElementById("Peso_c7").classList.add('ocultar-input');
        document.getElementById("Peso_c7").classList.remove('mostrar-input');

        document.getElementById("Notas_c7_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c7_l").classList.add('mostrar-label');
        document.getElementById("Notas_c7").classList.add('ocultar-input');
        document.getElementById("Notas_c7").classList.remove('mostrar-input');

        document.getElementById("Nombre_c8_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c8_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c8").classList.add('ocultar-input');
        document.getElementById("Nombre_c8").classList.remove('mostrar-input');

        document.getElementById("Hora_c8_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c8_l").classList.add('mostrar-label');
        document.getElementById("Hora_c8").classList.add('ocultar-input');
        document.getElementById("Hora_c8").classList.remove('mostrar-input');

        document.getElementById("Sexo_c8_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c8_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c8").classList.add('ocultar-input');
        document.getElementById("Sexo_c8").classList.remove('mostrar-input');

        document.getElementById("Color_c8_l").classList.remove('ocultar-label');
        document.getElementById("Color_c8_l").classList.add('mostrar-label');
        document.getElementById("Color_c8").classList.add('ocultar-input');
        document.getElementById("Color_c8").classList.remove('mostrar-input');

        document.getElementById("Posicion_c8_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c8_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c8").classList.add('ocultar-input');
        document.getElementById("Posicion_c8").classList.remove('mostrar-input');

        document.getElementById("Peso_c8_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c8_l").classList.add('mostrar-label');
        document.getElementById("Peso_c8").classList.add('ocultar-input');
        document.getElementById("Peso_c8").classList.remove('mostrar-input');

        document.getElementById("Notas_c8_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c8_l").classList.add('mostrar-label');
        document.getElementById("Notas_c8").classList.add('ocultar-input');
        document.getElementById("Notas_c8").classList.remove('mostrar-input');

        document.getElementById("Nombre_c9_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c9_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c9").classList.add('ocultar-input');
        document.getElementById("Nombre_c9").classList.remove('mostrar-input');

        document.getElementById("Hora_c9_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c9_l").classList.add('mostrar-label');
        document.getElementById("Hora_c9").classList.add('ocultar-input');
        document.getElementById("Hora_c9").classList.remove('mostrar-input');

        document.getElementById("Sexo_c9_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c9_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c9").classList.add('ocultar-input');
        document.getElementById("Sexo_c9").classList.remove('mostrar-input');

        document.getElementById("Color_c9_l").classList.remove('ocultar-label');
        document.getElementById("Color_c9_l").classList.add('mostrar-label');
        document.getElementById("Color_c9").classList.add('ocultar-input');
        document.getElementById("Color_c9").classList.remove('mostrar-input');

        document.getElementById("Posicion_c9_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c9_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c9").classList.add('ocultar-input');
        document.getElementById("Posicion_c9").classList.remove('mostrar-input');

        document.getElementById("Peso_c9_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c9_l").classList.add('mostrar-label');
        document.getElementById("Peso_c9").classList.add('ocultar-input');
        document.getElementById("Peso_c9").classList.remove('mostrar-input');

        document.getElementById("Notas_c9_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c9_l").classList.add('mostrar-label');
        document.getElementById("Notas_c9").classList.add('ocultar-input');
        document.getElementById("Notas_c9").classList.remove('mostrar-input');

        document.getElementById("Nombre_c10_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c10_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c10").classList.add('ocultar-input');
        document.getElementById("Nombre_c10").classList.remove('mostrar-input');

        document.getElementById("Hora_c10_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c10_l").classList.add('mostrar-label');
        document.getElementById("Hora_c10").classList.add('ocultar-input');
        document.getElementById("Hora_c10").classList.remove('mostrar-input');

        document.getElementById("Sexo_c10_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c10_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c10").classList.add('ocultar-input');
        document.getElementById("Sexo_c10").classList.remove('mostrar-input');

        document.getElementById("Color_c10_l").classList.remove('ocultar-label');
        document.getElementById("Color_c10_l").classList.add('mostrar-label');
        document.getElementById("Color_c10").classList.add('ocultar-input');
        document.getElementById("Color_c10").classList.remove('mostrar-input');

        document.getElementById("Posicion_c10_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c10_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c10").classList.add('ocultar-input');
        document.getElementById("Posicion_c10").classList.remove('mostrar-input');

        document.getElementById("Peso_c10_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c10_l").classList.add('mostrar-label');
        document.getElementById("Peso_c10").classList.add('ocultar-input');
        document.getElementById("Peso_c10").classList.remove('mostrar-input');

        document.getElementById("Notas_c10_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c10_l").classList.add('mostrar-label');
        document.getElementById("Notas_c10").classList.add('ocultar-input');
        document.getElementById("Notas_c10").classList.remove('mostrar-input');

        document.getElementById("Nombre_c11_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c11_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c11").classList.add('ocultar-input');
        document.getElementById("Nombre_c11").classList.remove('mostrar-input');

        document.getElementById("Hora_c11_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c11_l").classList.add('mostrar-label');
        document.getElementById("Hora_c11").classList.add('ocultar-input');
        document.getElementById("Hora_c11").classList.remove('mostrar-input');

        document.getElementById("Sexo_c11_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c11_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c11").classList.add('ocultar-input');
        document.getElementById("Sexo_c11").classList.remove('mostrar-input');

        document.getElementById("Color_c11_l").classList.remove('ocultar-label');
        document.getElementById("Color_c11_l").classList.add('mostrar-label');
        document.getElementById("Color_c11").classList.add('ocultar-input');
        document.getElementById("Color_c11").classList.remove('mostrar-input');

        document.getElementById("Posicion_c11_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c11_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c11").classList.add('ocultar-input');
        document.getElementById("Posicion_c11").classList.remove('mostrar-input');

        document.getElementById("Peso_c11_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c11_l").classList.add('mostrar-label');
        document.getElementById("Peso_c11").classList.add('ocultar-input');
        document.getElementById("Peso_c11").classList.remove('mostrar-input');

        document.getElementById("Notas_c11_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c11_l").classList.add('mostrar-label');
        document.getElementById("Notas_c11").classList.add('ocultar-input');
        document.getElementById("Notas_c11").classList.remove('mostrar-input');

        document.getElementById("Nombre_c12_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c12_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c12").classList.add('ocultar-input');
        document.getElementById("Nombre_c12").classList.remove('mostrar-input');

        document.getElementById("Hora_c12_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c12_l").classList.add('mostrar-label');
        document.getElementById("Hora_c12").classList.add('ocultar-input');
        document.getElementById("Hora_c12").classList.remove('mostrar-input');

        document.getElementById("Sexo_c12_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c12_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c12").classList.add('ocultar-input');
        document.getElementById("Sexo_c12").classList.remove('mostrar-input');

        document.getElementById("Color_c12_l").classList.remove('ocultar-label');
        document.getElementById("Color_c12_l").classList.add('mostrar-label');
        document.getElementById("Color_c12").classList.add('ocultar-input');
        document.getElementById("Color_c12").classList.remove('mostrar-input');

        document.getElementById("Posicion_c12_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c12_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c12").classList.add('ocultar-input');
        document.getElementById("Posicion_c12").classList.remove('mostrar-input');

        document.getElementById("Peso_c12_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c12_l").classList.add('mostrar-label');
        document.getElementById("Peso_c12").classList.add('ocultar-input');
        document.getElementById("Peso_c12").classList.remove('mostrar-input');

        document.getElementById("Notas_c12_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c12_l").classList.add('mostrar-label');
        document.getElementById("Notas_c12").classList.add('ocultar-input');
        document.getElementById("Notas_c12").classList.remove('mostrar-input');

        document.getElementById("Nombre_c13_l").classList.remove('ocultar-label');
        document.getElementById("Nombre_c13_l").classList.add('mostrar-label');
        document.getElementById("Nombre_c13").classList.add('ocultar-input');
        document.getElementById("Nombre_c13").classList.remove('mostrar-input');

        document.getElementById("Hora_c13_l").classList.remove('ocultar-label');
        document.getElementById("Hora_c13_l").classList.add('mostrar-label');
        document.getElementById("Hora_c13").classList.add('ocultar-input');
        document.getElementById("Hora_c13").classList.remove('mostrar-input');

        document.getElementById("Sexo_c13_l").classList.remove('ocultar-label');
        document.getElementById("Sexo_c13_l").classList.add('mostrar-label');
        document.getElementById("Sexo_c13").classList.add('ocultar-input');
        document.getElementById("Sexo_c13").classList.remove('mostrar-input');

        document.getElementById("Color_c13_l").classList.remove('ocultar-label');
        document.getElementById("Color_c13_l").classList.add('mostrar-label');
        document.getElementById("Color_c13").classList.add('ocultar-input');
        document.getElementById("Color_c13").classList.remove('mostrar-input');

        document.getElementById("Posicion_c13_l").classList.remove('ocultar-label');
        document.getElementById("Posicion_c13_l").classList.add('mostrar-label');
        document.getElementById("Posicion_c13").classList.add('ocultar-input');
        document.getElementById("Posicion_c13").classList.remove('mostrar-input');

        document.getElementById("Peso_c13_l").classList.remove('ocultar-label');
        document.getElementById("Peso_c13_l").classList.add('mostrar-label');
        document.getElementById("Peso_c13").classList.add('ocultar-input');
        document.getElementById("Peso_c13").classList.remove('mostrar-input');

        document.getElementById("Notas_c13_l").classList.remove('ocultar-label');
        document.getElementById("Notas_c13_l").classList.add('mostrar-label');
        document.getElementById("Notas_c13").classList.add('ocultar-input');
        document.getElementById("Notas_c13").classList.remove('mostrar-input');

    })

document.getElementById('btn-ingresar-competencias').addEventListener('click',
    () => {

        document.getElementById("Obediencia_l").classList.remove('mostrar-label');
        document.getElementById("Obediencia_l").classList.add('ocultar-label');
        document.getElementById("Obediencia").classList.add('mostrar-input');
        document.getElementById("Obediencia").classList.remove('ocultar-input');

        document.getElementById("Caminata_l").classList.remove('mostrar-label');
        document.getElementById("Caminata_l").classList.add('ocultar-label');
        document.getElementById("Caminata").classList.add('mostrar-input');
        document.getElementById("Caminata").classList.remove('ocultar-input');

        document.getElementById("Juego_l").classList.remove('mostrar-label');
        document.getElementById("Juego_l").classList.add('ocultar-label');
        document.getElementById("Juego").classList.add('mostrar-input');
        document.getElementById("Juego").classList.remove('ocultar-input');

        document.getElementById("Terapia_l").classList.remove('mostrar-label');
        document.getElementById("Terapia_l").classList.add('ocultar-label');
        document.getElementById("Terapia").classList.add('mostrar-input');
        document.getElementById("Terapia").classList.remove('ocultar-input');

        document.getElementById("Titulo1_l").classList.remove('mostrar-label');
        document.getElementById("Titulo1_l").classList.add('ocultar-label');
        document.getElementById("Titulo1").classList.add('mostrar-input');
        document.getElementById("Titulo1").classList.remove('ocultar-input');

        document.getElementById("Fecha1_l").classList.remove('mostrar-label');
        document.getElementById("Fecha1_l").classList.add('ocultar-label');
        document.getElementById("Fecha1").classList.add('mostrar-input');
        document.getElementById("Fecha1").classList.remove('ocultar-input');

        document.getElementById("Lugar1_l").classList.remove('mostrar-label');
        document.getElementById("Lugar1_l").classList.add('ocultar-label');
        document.getElementById("Lugar1").classList.add('mostrar-input');
        document.getElementById("Lugar1").classList.remove('ocultar-input');

        document.getElementById("Juez1_l").classList.remove('mostrar-label');
        document.getElementById("Juez1_l").classList.add('ocultar-label');
        document.getElementById("Juez1").classList.add('mostrar-input');
        document.getElementById("Juez1").classList.remove('ocultar-input');

        document.getElementById("Posicion1_l").classList.remove('mostrar-label');
        document.getElementById("Posicion1_l").classList.add('ocultar-label');
        document.getElementById("Posicion1").classList.add('mostrar-input');
        document.getElementById("Posicion1").classList.remove('ocultar-input');

        document.getElementById("Clase1_l").classList.remove('mostrar-label');
        document.getElementById("Clase1_l").classList.add('ocultar-label');
        document.getElementById("Clase1").classList.add('mostrar-input');
        document.getElementById("Clase1").classList.remove('ocultar-input');

        document.getElementById("Calificacion1_l").classList.remove('mostrar-label');
        document.getElementById("Calificacion1_l").classList.add('ocultar-label');
        document.getElementById("Calificacion1").classList.add('mostrar-input');
        document.getElementById("Calificacion1").classList.remove('ocultar-input');

        document.getElementById("Titulo2_l").classList.remove('mostrar-label');
        document.getElementById("Titulo2_l").classList.add('ocultar-label');
        document.getElementById("Titulo2").classList.add('mostrar-input');
        document.getElementById("Titulo2").classList.remove('ocultar-input');

        document.getElementById("Fecha2_l").classList.remove('mostrar-label');
        document.getElementById("Fecha2_l").classList.add('ocultar-label');
        document.getElementById("Fecha2").classList.add('mostrar-input');
        document.getElementById("Fecha2").classList.remove('ocultar-input');

        document.getElementById("Lugar2_l").classList.remove('mostrar-label');
        document.getElementById("Lugar2_l").classList.add('ocultar-label');
        document.getElementById("Lugar2").classList.add('mostrar-input');
        document.getElementById("Lugar2").classList.remove('ocultar-input');

        document.getElementById("Juez2_l").classList.remove('mostrar-label');
        document.getElementById("Juez2_l").classList.add('ocultar-label');
        document.getElementById("Juez2").classList.add('mostrar-input');
        document.getElementById("Juez2").classList.remove('ocultar-input');

        document.getElementById("Posicion2_l").classList.remove('mostrar-label');
        document.getElementById("Posicion2_l").classList.add('ocultar-label');
        document.getElementById("Posicion2").classList.add('mostrar-input');
        document.getElementById("Posicion2").classList.remove('ocultar-input');

        document.getElementById("Clase2_l").classList.remove('mostrar-label');
        document.getElementById("Clase2_l").classList.add('ocultar-label');
        document.getElementById("Clase2").classList.add('mostrar-input');
        document.getElementById("Clase2").classList.remove('ocultar-input');

        document.getElementById("Calificacion2_l").classList.remove('mostrar-label');
        document.getElementById("Calificacion2_l").classList.add('ocultar-label');
        document.getElementById("Calificacion2").classList.add('mostrar-input');
        document.getElementById("Calificacion2").classList.remove('ocultar-input');

        document.getElementById("Titulo3_l").classList.remove('mostrar-label');
        document.getElementById("Titulo3_l").classList.add('ocultar-label');
        document.getElementById("Titulo3").classList.add('mostrar-input');
        document.getElementById("Titulo3").classList.remove('ocultar-input');

        document.getElementById("Fecha3_l").classList.remove('mostrar-label');
        document.getElementById("Fecha3_l").classList.add('ocultar-label');
        document.getElementById("Fecha3").classList.add('mostrar-input');
        document.getElementById("Fecha3").classList.remove('ocultar-input');

        document.getElementById("Lugar3_l").classList.remove('mostrar-label');
        document.getElementById("Lugar3_l").classList.add('ocultar-label');
        document.getElementById("Lugar3").classList.add('mostrar-input');
        document.getElementById("Lugar3").classList.remove('ocultar-input');

        document.getElementById("Juez3_l").classList.remove('mostrar-label');
        document.getElementById("Juez3_l").classList.add('ocultar-label');
        document.getElementById("Juez3").classList.add('mostrar-input');
        document.getElementById("Juez3").classList.remove('ocultar-input');

        document.getElementById("Posicion3_l").classList.remove('mostrar-label');
        document.getElementById("Posicion3_l").classList.add('ocultar-label');
        document.getElementById("Posicion3").classList.add('mostrar-input');
        document.getElementById("Posicion3").classList.remove('ocultar-input');

        document.getElementById("Clase3_l").classList.remove('mostrar-label');
        document.getElementById("Clase3_l").classList.add('ocultar-label');
        document.getElementById("Clase3").classList.add('mostrar-input');
        document.getElementById("Clase3").classList.remove('ocultar-input');

        document.getElementById("Calificacion3_l").classList.remove('mostrar-label');
        document.getElementById("Calificacion3_l").classList.add('ocultar-label');
        document.getElementById("Calificacion3").classList.add('mostrar-input');
        document.getElementById("Calificacion3").classList.remove('ocultar-input');

        document.getElementById("Titulo4_l").classList.remove('mostrar-label');
        document.getElementById("Titulo4_l").classList.add('ocultar-label');
        document.getElementById("Titulo4").classList.add('mostrar-input');
        document.getElementById("Titulo4").classList.remove('ocultar-input');

        document.getElementById("Fecha4_l").classList.remove('mostrar-label');
        document.getElementById("Fecha4_l").classList.add('ocultar-label');
        document.getElementById("Fecha4").classList.add('mostrar-input');
        document.getElementById("Fecha4").classList.remove('ocultar-input');

        document.getElementById("Lugar4_l").classList.remove('mostrar-label');
        document.getElementById("Lugar4_l").classList.add('ocultar-label');
        document.getElementById("Lugar4").classList.add('mostrar-input');
        document.getElementById("Lugar4").classList.remove('ocultar-input');

        document.getElementById("Juez4_l").classList.remove('mostrar-label');
        document.getElementById("Juez4_l").classList.add('ocultar-label');
        document.getElementById("Juez4").classList.add('mostrar-input');
        document.getElementById("Juez4").classList.remove('ocultar-input');

        document.getElementById("Posicion4_l").classList.remove('mostrar-label');
        document.getElementById("Posicion4_l").classList.add('ocultar-label');
        document.getElementById("Posicion4").classList.add('mostrar-input');
        document.getElementById("Posicion4").classList.remove('ocultar-input');

        document.getElementById("Clase4_l").classList.remove('mostrar-label');
        document.getElementById("Clase4_l").classList.add('ocultar-label');
        document.getElementById("Clase4").classList.add('mostrar-input');
        document.getElementById("Clase4").classList.remove('ocultar-input');

        document.getElementById("Calificacion4_l").classList.remove('mostrar-label');
        document.getElementById("Calificacion4_l").classList.add('ocultar-label');
        document.getElementById("Calificacion4").classList.add('mostrar-input');
        document.getElementById("Calificacion4").classList.remove('ocultar-input');

        document.getElementById("Titulo5_l").classList.remove('mostrar-label');
        document.getElementById("Titulo5_l").classList.add('ocultar-label');
        document.getElementById("Titulo5").classList.add('mostrar-input');
        document.getElementById("Titulo5").classList.remove('ocultar-input');

        document.getElementById("Fecha5_l").classList.remove('mostrar-label');
        document.getElementById("Fecha5_l").classList.add('ocultar-label');
        document.getElementById("Fecha5").classList.add('mostrar-input');
        document.getElementById("Fecha5").classList.remove('ocultar-input');

        document.getElementById("Lugar5_l").classList.remove('mostrar-label');
        document.getElementById("Lugar5_l").classList.add('ocultar-label');
        document.getElementById("Lugar5").classList.add('mostrar-input');
        document.getElementById("Lugar5").classList.remove('ocultar-input');

        document.getElementById("Juez5_l").classList.remove('mostrar-label');
        document.getElementById("Juez5_l").classList.add('ocultar-label');
        document.getElementById("Juez5").classList.add('mostrar-input');
        document.getElementById("Juez5").classList.remove('ocultar-input');

        document.getElementById("Posicion5_l").classList.remove('mostrar-label');
        document.getElementById("Posicion5_l").classList.add('ocultar-label');
        document.getElementById("Posicion5").classList.add('mostrar-input');
        document.getElementById("Posicion5").classList.remove('ocultar-input');

        document.getElementById("Clase5_l").classList.remove('mostrar-label');
        document.getElementById("Clase5_l").classList.add('ocultar-label');
        document.getElementById("Clase5").classList.add('mostrar-input');
        document.getElementById("Clase5").classList.remove('ocultar-input');

        document.getElementById("Calificacion5_l").classList.remove('mostrar-label');
        document.getElementById("Calificacion5_l").classList.add('ocultar-label');
        document.getElementById("Calificacion5").classList.add('mostrar-input');
        document.getElementById("Calificacion5").classList.remove('ocultar-input');

        document.getElementById("Titulo6_l").classList.remove('mostrar-label');
        document.getElementById("Titulo6_l").classList.add('ocultar-label');
        document.getElementById("Titulo6").classList.add('mostrar-input');
        document.getElementById("Titulo6").classList.remove('ocultar-input');

        document.getElementById("Fecha6_l").classList.remove('mostrar-label');
        document.getElementById("Fecha6_l").classList.add('ocultar-label');
        document.getElementById("Fecha6").classList.add('mostrar-input');
        document.getElementById("Fecha6").classList.remove('ocultar-input');

        document.getElementById("Lugar6_l").classList.remove('mostrar-label');
        document.getElementById("Lugar6_l").classList.add('ocultar-label');
        document.getElementById("Lugar6").classList.add('mostrar-input');
        document.getElementById("Lugar6").classList.remove('ocultar-input');

        document.getElementById("Juez6_l").classList.remove('mostrar-label');
        document.getElementById("Juez6_l").classList.add('ocultar-label');
        document.getElementById("Juez6").classList.add('mostrar-input');
        document.getElementById("Juez6").classList.remove('ocultar-input');

        document.getElementById("Posicion6_l").classList.remove('mostrar-label');
        document.getElementById("Posicion6_l").classList.add('ocultar-label');
        document.getElementById("Posicion6").classList.add('mostrar-input');
        document.getElementById("Posicion6").classList.remove('ocultar-input');

        document.getElementById("Clase6_l").classList.remove('mostrar-label');
        document.getElementById("Clase6_l").classList.add('ocultar-label');
        document.getElementById("Clase6").classList.add('mostrar-input');
        document.getElementById("Clase6").classList.remove('ocultar-input');

        document.getElementById("Calificacion6_l").classList.remove('mostrar-label');
        document.getElementById("Calificacion6_l").classList.add('ocultar-label');
        document.getElementById("Calificacion6").classList.add('mostrar-input');
        document.getElementById("Calificacion6").classList.remove('ocultar-input');

        document.getElementById("Nombre1_l").classList.remove('mostrar-label');
        document.getElementById("Nombre1_l").classList.add('ocultar-label');
        document.getElementById("Nombre1").classList.add('mostrar-input');
        document.getElementById("Nombre1").classList.remove('ocultar-input');

        document.getElementById("Cuando1_l").classList.remove('mostrar-label');
        document.getElementById("Cuando1_l").classList.add('ocultar-label');
        document.getElementById("Cuando1").classList.add('mostrar-input');
        document.getElementById("Cuando1").classList.remove('ocultar-input');

        document.getElementById("Donde1_l").classList.remove('mostrar-label');
        document.getElementById("Donde1_l").classList.add('ocultar-label');
        document.getElementById("Donde1").classList.add('mostrar-input');
        document.getElementById("Donde1").classList.remove('ocultar-input');

        document.getElementById("Que1_l").classList.remove('mostrar-label');
        document.getElementById("Que1_l").classList.add('ocultar-label');
        document.getElementById("Que1").classList.add('mostrar-input');
        document.getElementById("Que1").classList.remove('ocultar-input');

        document.getElementById("Nombre2_l").classList.remove('mostrar-label');
        document.getElementById("Nombre2_l").classList.add('ocultar-label');
        document.getElementById("Nombre2").classList.add('mostrar-input');
        document.getElementById("Nombre2").classList.remove('ocultar-input');

        document.getElementById("Cuando2_l").classList.remove('mostrar-label');
        document.getElementById("Cuando2_l").classList.add('ocultar-label');
        document.getElementById("Cuando2").classList.add('mostrar-input');
        document.getElementById("Cuando2").classList.remove('ocultar-input');

        document.getElementById("Donde2_l").classList.remove('mostrar-label');
        document.getElementById("Donde2_l").classList.add('ocultar-label');
        document.getElementById("Donde2").classList.add('mostrar-input');
        document.getElementById("Donde2").classList.remove('ocultar-input');

        document.getElementById("Que2_l").classList.remove('mostrar-label');
        document.getElementById("Que2_l").classList.add('ocultar-label');
        document.getElementById("Que2").classList.add('mostrar-input');
        document.getElementById("Que2").classList.remove('ocultar-input');

        document.getElementById("Nombre3_l").classList.remove('mostrar-label');
        document.getElementById("Nombre3_l").classList.add('ocultar-label');
        document.getElementById("Nombre3").classList.add('mostrar-input');
        document.getElementById("Nombre3").classList.remove('ocultar-input');

        document.getElementById("Cuando3_l").classList.remove('mostrar-label');
        document.getElementById("Cuando3_l").classList.add('ocultar-label');
        document.getElementById("Cuando3").classList.add('mostrar-input');
        document.getElementById("Cuando3").classList.remove('ocultar-input');

        document.getElementById("Donde3_l").classList.remove('mostrar-label');
        document.getElementById("Donde3_l").classList.add('ocultar-label');
        document.getElementById("Donde3").classList.add('mostrar-input');
        document.getElementById("Donde3").classList.remove('ocultar-input');

        document.getElementById("Que3_l").classList.remove('mostrar-label');
        document.getElementById("Que3_l").classList.add('ocultar-label');
        document.getElementById("Que3").classList.add('mostrar-input');
        document.getElementById("Que3").classList.remove('ocultar-input');

        document.getElementById("Nombre4_l").classList.remove('mostrar-label');
        document.getElementById("Nombre4_l").classList.add('ocultar-label');
        document.getElementById("Nombre4").classList.add('mostrar-input');
        document.getElementById("Nombre4").classList.remove('ocultar-input');

        document.getElementById("Cuando4_l").classList.remove('mostrar-label');
        document.getElementById("Cuando4_l").classList.add('ocultar-label');
        document.getElementById("Cuando4").classList.add('mostrar-input');
        document.getElementById("Cuando4").classList.remove('ocultar-input');

        document.getElementById("Donde4_l").classList.remove('mostrar-label');
        document.getElementById("Donde4_l").classList.add('ocultar-label');
        document.getElementById("Donde4").classList.add('mostrar-input');
        document.getElementById("Donde4").classList.remove('ocultar-input');

        document.getElementById("Que4_l").classList.remove('mostrar-label');
        document.getElementById("Que4_l").classList.add('ocultar-label');
        document.getElementById("Que4").classList.add('mostrar-input');
        document.getElementById("Que4").classList.remove('ocultar-input');

        document.getElementById("Nombre5_l").classList.remove('mostrar-label');
        document.getElementById("Nombre5_l").classList.add('ocultar-label');
        document.getElementById("Nombre5").classList.add('mostrar-input');
        document.getElementById("Nombre5").classList.remove('ocultar-input');

        document.getElementById("Cuando5_l").classList.remove('mostrar-label');
        document.getElementById("Cuando5_l").classList.add('ocultar-label');
        document.getElementById("Cuando5").classList.add('mostrar-input');
        document.getElementById("Cuando5").classList.remove('ocultar-input');

        document.getElementById("Donde5_l").classList.remove('mostrar-label');
        document.getElementById("Donde5_l").classList.add('ocultar-label');
        document.getElementById("Donde5").classList.add('mostrar-input');
        document.getElementById("Donde5").classList.remove('ocultar-input');

        document.getElementById("Que5_l").classList.remove('mostrar-label');
        document.getElementById("Que5_l").classList.add('ocultar-label');
        document.getElementById("Que5").classList.add('mostrar-input');
        document.getElementById("Que5").classList.remove('ocultar-input');

    })

document.getElementById('cancelar-ingreso-competencias').addEventListener('click',
    () => {

        document.getElementById("Obediencia_l").classList.remove('ocultar-label');
        document.getElementById("Obediencia_l").classList.add('mostrar-label');
        document.getElementById("Obediencia").classList.add('ocultar-input');
        document.getElementById("Obediencia").classList.remove('mostrar-input');

        document.getElementById("Caminata_l").classList.remove('ocultar-label');
        document.getElementById("Caminata_l").classList.add('mostrar-label');
        document.getElementById("Caminata").classList.add('ocultar-input');
        document.getElementById("Caminata").classList.remove('mostrar-input');

        document.getElementById("Juego_l").classList.remove('ocultar-label');
        document.getElementById("Juego_l").classList.add('mostrar-label');
        document.getElementById("Juego").classList.add('ocultar-input');
        document.getElementById("Juego").classList.remove('mostrar-input');

        document.getElementById("Terapia_l").classList.remove('ocultar-label');
        document.getElementById("Terapia_l").classList.add('mostrar-label');
        document.getElementById("Terapia").classList.add('ocultar-input');
        document.getElementById("Terapia").classList.remove('mostrar-input');

        document.getElementById("Titulo1_l").classList.remove('ocultar-label');
        document.getElementById("Titulo1_l").classList.add('mostrar-label');
        document.getElementById("Titulo1").classList.add('ocultar-input');
        document.getElementById("Titulo1").classList.remove('mostrar-input');

        document.getElementById("Fecha1_l").classList.remove('ocultar-label');
        document.getElementById("Fecha1_l").classList.add('mostrar-label');
        document.getElementById("Fecha1").classList.add('ocultar-input');
        document.getElementById("Fecha1").classList.remove('mostrar-input');

        document.getElementById("Lugar1_l").classList.remove('ocultar-label');
        document.getElementById("Lugar1_l").classList.add('mostrar-label');
        document.getElementById("Lugar1").classList.add('ocultar-input');
        document.getElementById("Lugar1").classList.remove('mostrar-input');

        document.getElementById("Juez1_l").classList.remove('ocultar-label');
        document.getElementById("Juez1_l").classList.add('mostrar-label');
        document.getElementById("Juez1").classList.add('ocultar-input');
        document.getElementById("Juez1").classList.remove('mostrar-input');

        document.getElementById("Posicion1_l").classList.remove('ocultar-label');
        document.getElementById("Posicion1_l").classList.add('mostrar-label');
        document.getElementById("Posicion1").classList.add('ocultar-input');
        document.getElementById("Posicion1").classList.remove('mostrar-input');

        document.getElementById("Clase1_l").classList.remove('ocultar-label');
        document.getElementById("Clase1_l").classList.add('mostrar-label');
        document.getElementById("Clase1").classList.add('ocultar-input');
        document.getElementById("Clase1").classList.remove('mostrar-input');

        document.getElementById("Calificacion1_l").classList.remove('ocultar-label');
        document.getElementById("Calificacion1_l").classList.add('mostrar-label');
        document.getElementById("Calificacion1").classList.add('ocultar-input');
        document.getElementById("Calificacion1").classList.remove('mostrar-input');

        document.getElementById("Titulo2_l").classList.remove('ocultar-label');
        document.getElementById("Titulo2_l").classList.add('mostrar-label');
        document.getElementById("Titulo2").classList.add('ocultar-input');
        document.getElementById("Titulo2").classList.remove('mostrar-input');

        document.getElementById("Fecha2_l").classList.remove('ocultar-label');
        document.getElementById("Fecha2_l").classList.add('mostrar-label');
        document.getElementById("Fecha2").classList.add('ocultar-input');
        document.getElementById("Fecha2").classList.remove('mostrar-input');

        document.getElementById("Lugar2_l").classList.remove('ocultar-label');
        document.getElementById("Lugar2_l").classList.add('mostrar-label');
        document.getElementById("Lugar2").classList.add('ocultar-input');
        document.getElementById("Lugar2").classList.remove('mostrar-input');

        document.getElementById("Juez2_l").classList.remove('ocultar-label');
        document.getElementById("Juez2_l").classList.add('mostrar-label');
        document.getElementById("Juez2").classList.add('ocultar-input');
        document.getElementById("Juez2").classList.remove('mostrar-input');

        document.getElementById("Posicion2_l").classList.remove('ocultar-label');
        document.getElementById("Posicion2_l").classList.add('mostrar-label');
        document.getElementById("Posicion2").classList.add('ocultar-input');
        document.getElementById("Posicion2").classList.remove('mostrar-input');

        document.getElementById("Clase2_l").classList.remove('ocultar-label');
        document.getElementById("Clase2_l").classList.add('mostrar-label');
        document.getElementById("Clase2").classList.add('ocultar-input');
        document.getElementById("Clase2").classList.remove('mostrar-input');

        document.getElementById("Calificacion2_l").classList.remove('ocultar-label');
        document.getElementById("Calificacion2_l").classList.add('mostrar-label');
        document.getElementById("Calificacion2").classList.add('ocultar-input');
        document.getElementById("Calificacion2").classList.remove('mostrar-input');

        document.getElementById("Titulo3_l").classList.remove('ocultar-label');
        document.getElementById("Titulo3_l").classList.add('mostrar-label');
        document.getElementById("Titulo3").classList.add('ocultar-input');
        document.getElementById("Titulo3").classList.remove('mostrar-input');

        document.getElementById("Fecha3_l").classList.remove('ocultar-label');
        document.getElementById("Fecha3_l").classList.add('mostrar-label');
        document.getElementById("Fecha3").classList.add('ocultar-input');
        document.getElementById("Fecha3").classList.remove('mostrar-input');

        document.getElementById("Lugar3_l").classList.remove('ocultar-label');
        document.getElementById("Lugar3_l").classList.add('mostrar-label');
        document.getElementById("Lugar3").classList.add('ocultar-input');
        document.getElementById("Lugar3").classList.remove('mostrar-input');

        document.getElementById("Juez3_l").classList.remove('ocultar-label');
        document.getElementById("Juez3_l").classList.add('mostrar-label');
        document.getElementById("Juez3").classList.add('ocultar-input');
        document.getElementById("Juez3").classList.remove('mostrar-input');

        document.getElementById("Posicion3_l").classList.remove('ocultar-label');
        document.getElementById("Posicion3_l").classList.add('mostrar-label');
        document.getElementById("Posicion3").classList.add('ocultar-input');
        document.getElementById("Posicion3").classList.remove('mostrar-input');

        document.getElementById("Clase3_l").classList.remove('ocultar-label');
        document.getElementById("Clase3_l").classList.add('mostrar-label');
        document.getElementById("Clase3").classList.add('ocultar-input');
        document.getElementById("Clase3").classList.remove('mostrar-input');

        document.getElementById("Calificacion3_l").classList.remove('ocultar-label');
        document.getElementById("Calificacion3_l").classList.add('mostrar-label');
        document.getElementById("Calificacion3").classList.add('ocultar-input');
        document.getElementById("Calificacion3").classList.remove('mostrar-input');

        document.getElementById("Titulo4_l").classList.remove('ocultar-label');
        document.getElementById("Titulo4_l").classList.add('mostrar-label');
        document.getElementById("Titulo4").classList.add('ocultar-input');
        document.getElementById("Titulo4").classList.remove('mostrar-input');

        document.getElementById("Fecha4_l").classList.remove('ocultar-label');
        document.getElementById("Fecha4_l").classList.add('mostrar-label');
        document.getElementById("Fecha4").classList.add('ocultar-input');
        document.getElementById("Fecha4").classList.remove('mostrar-input');

        document.getElementById("Lugar4_l").classList.remove('ocultar-label');
        document.getElementById("Lugar4_l").classList.add('mostrar-label');
        document.getElementById("Lugar4").classList.add('ocultar-input');
        document.getElementById("Lugar4").classList.remove('mostrar-input');

        document.getElementById("Juez4_l").classList.remove('ocultar-label');
        document.getElementById("Juez4_l").classList.add('mostrar-label');
        document.getElementById("Juez4").classList.add('ocultar-input');
        document.getElementById("Juez4").classList.remove('mostrar-input');

        document.getElementById("Posicion4_l").classList.remove('ocultar-label');
        document.getElementById("Posicion4_l").classList.add('mostrar-label');
        document.getElementById("Posicion4").classList.add('ocultar-input');
        document.getElementById("Posicion4").classList.remove('mostrar-input');

        document.getElementById("Clase4_l").classList.remove('ocultar-label');
        document.getElementById("Clase4_l").classList.add('mostrar-label');
        document.getElementById("Clase4").classList.add('ocultar-input');
        document.getElementById("Clase4").classList.remove('mostrar-input');

        document.getElementById("Calificacion4_l").classList.remove('ocultar-label');
        document.getElementById("Calificacion4_l").classList.add('mostrar-label');
        document.getElementById("Calificacion4").classList.add('ocultar-input');
        document.getElementById("Calificacion4").classList.remove('mostrar-input');

        document.getElementById("Titulo5_l").classList.remove('ocultar-label');
        document.getElementById("Titulo5_l").classList.add('mostrar-label');
        document.getElementById("Titulo5").classList.add('ocultar-input');
        document.getElementById("Titulo5").classList.remove('mostrar-input');

        document.getElementById("Fecha5_l").classList.remove('ocultar-label');
        document.getElementById("Fecha5_l").classList.add('mostrar-label');
        document.getElementById("Fecha5").classList.add('ocultar-input');
        document.getElementById("Fecha5").classList.remove('mostrar-input');

        document.getElementById("Lugar5_l").classList.remove('ocultar-label');
        document.getElementById("Lugar5_l").classList.add('mostrar-label');
        document.getElementById("Lugar5").classList.add('ocultar-input');
        document.getElementById("Lugar5").classList.remove('mostrar-input');

        document.getElementById("Juez5_l").classList.remove('ocultar-label');
        document.getElementById("Juez5_l").classList.add('mostrar-label');
        document.getElementById("Juez5").classList.add('ocultar-input');
        document.getElementById("Juez5").classList.remove('mostrar-input');

        document.getElementById("Posicion5_l").classList.remove('ocultar-label');
        document.getElementById("Posicion5_l").classList.add('mostrar-label');
        document.getElementById("Posicion5").classList.add('ocultar-input');
        document.getElementById("Posicion5").classList.remove('mostrar-input');

        document.getElementById("Clase5_l").classList.remove('ocultar-label');
        document.getElementById("Clase5_l").classList.add('mostrar-label');
        document.getElementById("Clase5").classList.add('ocultar-input');
        document.getElementById("Clase5").classList.remove('mostrar-input');

        document.getElementById("Calificacion5_l").classList.remove('ocultar-label');
        document.getElementById("Calificacion5_l").classList.add('mostrar-label');
        document.getElementById("Calificacion5").classList.add('ocultar-input');
        document.getElementById("Calificacion5").classList.remove('mostrar-input');

        document.getElementById("Titulo6_l").classList.remove('ocultar-label');
        document.getElementById("Titulo6_l").classList.add('mostrar-label');
        document.getElementById("Titulo6").classList.add('ocultar-input');
        document.getElementById("Titulo6").classList.remove('mostrar-input');

        document.getElementById("Fecha6_l").classList.remove('ocultar-label');
        document.getElementById("Fecha6_l").classList.add('mostrar-label');
        document.getElementById("Fecha6").classList.add('ocultar-input');
        document.getElementById("Fecha6").classList.remove('mostrar-input');

        document.getElementById("Lugar6_l").classList.remove('ocultar-label');
        document.getElementById("Lugar6_l").classList.add('mostrar-label');
        document.getElementById("Lugar6").classList.add('ocultar-input');
        document.getElementById("Lugar6").classList.remove('mostrar-input');

        document.getElementById("Juez6_l").classList.remove('ocultar-label');
        document.getElementById("Juez6_l").classList.add('mostrar-label');
        document.getElementById("Juez6").classList.add('ocultar-input');
        document.getElementById("Juez6").classList.remove('mostrar-input');

        document.getElementById("Posicion6_l").classList.remove('ocultar-label');
        document.getElementById("Posicion6_l").classList.add('mostrar-label');
        document.getElementById("Posicion6").classList.add('ocultar-input');
        document.getElementById("Posicion6").classList.remove('mostrar-input');

        document.getElementById("Clase6_l").classList.remove('ocultar-label');
        document.getElementById("Clase6_l").classList.add('mostrar-label');
        document.getElementById("Clase6").classList.add('ocultar-input');
        document.getElementById("Clase6").classList.remove('mostrar-input');

        document.getElementById("Calificacion6_l").classList.remove('ocultar-label');
        document.getElementById("Calificacion6_l").classList.add('mostrar-label');
        document.getElementById("Calificacion6").classList.add('ocultar-input');
        document.getElementById("Calificacion6").classList.remove('mostrar-input');

        document.getElementById("Nombre1_l").classList.remove('ocultar-label');
        document.getElementById("Nombre1_l").classList.add('mostrar-label');
        document.getElementById("Nombre1").classList.add('ocultar-input');
        document.getElementById("Nombre1").classList.remove('mostrar-input');

        document.getElementById("Cuando1_l").classList.remove('ocultar-label');
        document.getElementById("Cuando1_l").classList.add('mostrar-label');
        document.getElementById("Cuando1").classList.add('ocultar-input');
        document.getElementById("Cuando1").classList.remove('mostrar-input');

        document.getElementById("Donde1_l").classList.remove('ocultar-label');
        document.getElementById("Donde1_l").classList.add('mostrar-label');
        document.getElementById("Donde1").classList.add('ocultar-input');
        document.getElementById("Donde1").classList.remove('mostrar-input');

        document.getElementById("Que1_l").classList.remove('ocultar-label');
        document.getElementById("Que1_l").classList.add('mostrar-label');
        document.getElementById("Que1").classList.add('ocultar-input');
        document.getElementById("Que1").classList.remove('mostrar-input');

        document.getElementById("Nombre2_l").classList.remove('ocultar-label');
        document.getElementById("Nombre2_l").classList.add('mostrar-label');
        document.getElementById("Nombre2").classList.add('ocultar-input');
        document.getElementById("Nombre2").classList.remove('mostrar-input');

        document.getElementById("Cuando2_l").classList.remove('ocultar-label');
        document.getElementById("Cuando2_l").classList.add('mostrar-label');
        document.getElementById("Cuando2").classList.add('ocultar-input');
        document.getElementById("Cuando2").classList.remove('mostrar-input');

        document.getElementById("Donde2_l").classList.remove('ocultar-label');
        document.getElementById("Donde2_l").classList.add('mostrar-label');
        document.getElementById("Donde2").classList.add('ocultar-input');
        document.getElementById("Donde2").classList.remove('mostrar-input');

        document.getElementById("Que2_l").classList.remove('ocultar-label');
        document.getElementById("Que2_l").classList.add('mostrar-label');
        document.getElementById("Que2").classList.add('ocultar-input');
        document.getElementById("Que2").classList.remove('mostrar-input');

        document.getElementById("Nombre3_l").classList.remove('ocultar-label');
        document.getElementById("Nombre3_l").classList.add('mostrar-label');
        document.getElementById("Nombre3").classList.add('ocultar-input');
        document.getElementById("Nombre3").classList.remove('mostrar-input');

        document.getElementById("Cuando3_l").classList.remove('ocultar-label');
        document.getElementById("Cuando3_l").classList.add('mostrar-label');
        document.getElementById("Cuando3").classList.add('ocultar-input');
        document.getElementById("Cuando3").classList.remove('mostrar-input');

        document.getElementById("Donde3_l").classList.remove('ocultar-label');
        document.getElementById("Donde3_l").classList.add('mostrar-label');
        document.getElementById("Donde3").classList.add('ocultar-input');
        document.getElementById("Donde3").classList.remove('mostrar-input');

        document.getElementById("Que3_l").classList.remove('ocultar-label');
        document.getElementById("Que3_l").classList.add('mostrar-label');
        document.getElementById("Que3").classList.add('ocultar-input');
        document.getElementById("Que3").classList.remove('mostrar-input');

        document.getElementById("Nombre4_l").classList.remove('ocultar-label');
        document.getElementById("Nombre4_l").classList.add('mostrar-label');
        document.getElementById("Nombre4").classList.add('ocultar-input');
        document.getElementById("Nombre4").classList.remove('mostrar-input');

        document.getElementById("Cuando4_l").classList.remove('ocultar-label');
        document.getElementById("Cuando4_l").classList.add('mostrar-label');
        document.getElementById("Cuando4").classList.add('ocultar-input');
        document.getElementById("Cuando4").classList.remove('mostrar-input');

        document.getElementById("Donde4_l").classList.remove('ocultar-label');
        document.getElementById("Donde4_l").classList.add('mostrar-label');
        document.getElementById("Donde4").classList.add('ocultar-input');
        document.getElementById("Donde4").classList.remove('mostrar-input');

        document.getElementById("Que4_l").classList.remove('ocultar-label');
        document.getElementById("Que4_l").classList.add('mostrar-label');
        document.getElementById("Que4").classList.add('ocultar-input');
        document.getElementById("Que4").classList.remove('mostrar-input');

        document.getElementById("Nombre5_l").classList.remove('ocultar-label');
        document.getElementById("Nombre5_l").classList.add('mostrar-label');
        document.getElementById("Nombre5").classList.add('ocultar-input');
        document.getElementById("Nombre5").classList.remove('mostrar-input');

        document.getElementById("Cuando5_l").classList.remove('ocultar-label');
        document.getElementById("Cuando5_l").classList.add('mostrar-label');
        document.getElementById("Cuando5").classList.add('ocultar-input');
        document.getElementById("Cuando5").classList.remove('mostrar-input');

        document.getElementById("Donde5_l").classList.remove('ocultar-label');
        document.getElementById("Donde5_l").classList.add('mostrar-label');
        document.getElementById("Donde5").classList.add('ocultar-input');
        document.getElementById("Donde5").classList.remove('mostrar-input');

        document.getElementById("Que5_l").classList.remove('ocultar-label');
        document.getElementById("Que5_l").classList.add('mostrar-label');
        document.getElementById("Que5").classList.add('ocultar-input');
        document.getElementById("Que5").classList.remove('mostrar-input');

    })
//OPTIMIZAR DESPUÉS ESTA SECCIÓN...

//SE IMPORTAN LAS CLASES

import Humano from "./Clases/Humanos.js"
import Perro from "./Clases/Perros.js"
import Medico from "./Clases/Medicos.js"
import Usuario from "./Clases/Usuarios.js"
import Entrenamiento from "./Clases/Entrenamientos.js"
import Finanzas from "./Clases/Finanzas.js"
import Vacunas from "./Clases/Vacunas.js"
import Camadas from "./Clases/Camadas.js"
import Competencias from "./Clases/Competencias.js"

//SE IMPORTAN LAS FUNCIONES
import mostrartabla from "./Funciones/HumanosFun.js"
import mostrartabla2 from "./Funciones/PerrosFun.js"
import mostrartabla3 from "./Funciones/MedicosFun.js"
import mostrartabla4 from "./Funciones/EntenamientosFun.js"
import mostrartabla5 from "./Funciones/FinanzasFun.js"
import mostrartabla6 from "./Funciones/VacunasFun.js"
import mostrartabla7 from "./Funciones/CamadasFun.js"
import mostrartabla8 from "./Funciones/CompetenciasFun.js"

import eliminartablahumano from "./Funciones/EliminarHumanoFun.js"
import eliminartablamedicos from "./Funciones/EliminarMedicosFun.js"
import eliminartablaperro from "./Funciones/EliminarPerrosFun.js"
import eliminartablaentrenamientos from "./Funciones/EliminarEntrenaFun.js"
import eliminartablafinanzas from "./Funciones/EliminarFinanzasFun.js"

import contenerbotonvacunas from "./Funciones/OcultarBtnVacunas.js"
import contenerbotoncamadas from "./Funciones/OcultarBtnCamadas.js"
import contenerbotoncompetencias from "./Funciones/OcultarBtnCompetencias.js"
import contenerbotoningresos from "./Funciones/OcultarBtnIngresos.js"

import { reemplazar } from "./Funciones/HumanosFun.js"
import { reemplazar1 } from "./Funciones/HumanosFun.js"
import { reemplazar2 } from "./Funciones/HumanosFun.js"
import { reemplazar3 } from "./Funciones/HumanosFun.js"
import { reemplazar4 } from "./Funciones/HumanosFun.js"
import { reemplazar5 } from "./Funciones/HumanosFun.js"

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

import { reemplazarcertificados } from "./Funciones/EntenamientosFun.js"
//import { reemplazarcompetencias } from "./Funciones/EntenamientosFun.js"
//import { reemplazhcelos } from "./Funciones/EntenamientosFun.js"
//import { reemplazarhcruzas } from "./Funciones/EntenamientosFun.js"
//import { reemplazarcamadas } from "./Funciones/EntenamientosFun.js"
//import { reemplazarcelocruceactual } from "./Funciones/EntenamientosFun.js"
//import { reemplazarcamadaactual } from "./Funciones/EntenamientosFun.js"
//import { reemplazarproxcelo } from "./Funciones/EntenamientosFun.js"
import { reemplazarcuidados } from "./Funciones/EntenamientosFun.js"
import { reemplazarproxeventos } from "./Funciones/EntenamientosFun.js"
import { reemplazarentrenamientos } from "./Funciones/EntenamientosFun.js"
import { reemplazartitulos } from "./Funciones/EntenamientosFun.js"



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
    var Humano1 = new Humano
    var Perro1 = new Perro
    var Medico1 = new Medico
    var Usuario1 = new Usuario
    var Entrenamiento1 = new Entrenamiento
    var Finanzas1 = new Finanzas
    var Finanzas2 = new Finanzas
    var Vacunas1 = new Vacunas
    var Camadas1 = new Camadas
    var Competencias1 = new Competencias

    let oPerro = new Perro;
    let ooPerro = new Perro;

    $.ajax({
        type: "POST",
        url: "/Membresias/ObtenerInformacionUsuario",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (datos) {

            //var a = new Date(Date.parse("2020/07/01"));

            //const x = document.getElementById("Rabia_date");
            //x.setAttribute("value", `${a}`)


            const selectMascota = document.getElementById("Mascotas");
            
            function CrearOpciones(opcion) {
                const op = document.createElement("option")

                op.setAttribute("value", `${opcion.getId()}`)
                op.setAttribute("label", `${opcion.getNombrePerro()}`)

                selectMascota.appendChild(op)
            }

            for (let i = 0; i < datos.listaPerro.length; i++) {

                oPerro.id = i;
                oPerro.nombreperro = datos.listaPerro[i].nombreperro;

                CrearOpciones(oPerro)
            }

            //variables scope para imprimir datos del cliente en html
            $scope.bienvenido = datos.usuario.Nombre;
            $scope.nombre = datos.usuario.Nombre;
            $scope.correo = datos.usuario.correo;
            $scope.telefono = datos.usuario.telefono;

            
            if (datos.humano !== null) {
                Humano1.id = datos.humano.id;
                Humano1.propietario = datos.usuario.Nombre;
                Humano1.estado = datos.humano.estado;
                Humano1.municipio = datos.humano.municipio;
                Humano1.colonia = datos.humano.colonia;
                Humano1.telefono = datos.humano.telefono;
                //variables scope para imprimir datos del cliente en html
            }
            else {

            }
            

            alert("La información de tu usuario se ha cargado correctamente");

            $scope.$apply();

            $('#myModalLoader').on('shown.bs.modal', function (e) {
                $("#myModalLoader").modal('hide');
            })

            
            //función para imprimir html en pdf
            function pruebaDivAPdf() {
                var pdf = new jsPDF('p', 'pt', 'letter');
                source = $('#imprimir')[0];

                specialElementHandlers = {
                    '#bypassme': function (element, renderer) {
                        return true
                    }
                };

                margins = {
                    top: 80,
                    bottom: 60,
                    left: 40,
                    width: 522
                };

                pdf.fromHTML(
                    source,
                    margins.left, // x coord
                    margins.top, { // y coord
                    'width': margins.width,
                    'elementHandlers': specialElementHandlers
                },

                    function (dispose) {
                        pdf.save('Prueba.pdf');
                    }, margins
                );

                
            }


        },
        error: function (error) {

            $('#myModalLoader').on('shown.bs.modal', function (e) {
                $("#myModalLoader").modal('hide');
            })
        }
    });

    //-----Funciones generadoras
    document.getElementById("animatehumano").addEventListener("click", e => {

        const newDog = document.getElementById("_new-dog");
        newDog.classList.add('_ocultar');

        

        const idmedico = document.getElementById("salud");
        const idperro = document.getElementById("perro");
        const identremaniento = document.getElementById("entrenamiento");
        const idfinanzas = document.getElementById("FormIngresos");
        const idhumano = document.getElementById("humano");

        if (idmedico !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }
        else if (identremaniento !== null) {
            contenerbotoncompetencias();
            contenerbotoncamadas();
            eliminartablaentrenamientos();
        }
        else if (idfinanzas !== null) {
            contenerbotoningresos();
            eliminartablafinanzas();
        }
        else if (idhumano !== null) {
            eliminartablahumano();
        }

        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-entrenamiento");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-finanzas");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.add("_z-frente")

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos.humano !== null) {
                    Humano1.id = datos.humano.id;
                    Humano1.propietario = datos.usuario.Nombre;
                    Humano1.estado = datos.humano.estado;
                    Humano1.municipio = datos.humano.municipio;
                    Humano1.colonia = datos.humano.colonia;
                    Humano1.telefono = datos.humano.telefono;
                    Humano1.direccion = datos.humano.direccion;

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
                        actualizar.classList.add("_btn-actualizar")
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

                            //Si no se selecciona un estado no aparece lista de opciones y no se encuentra el atributo text
                            var omunicipio__ = document.getElementById("_typeMunicipios");
                            var lenght_mun = omunicipio__.options.length;

                            if (lenght_mun == "0") {

                                Humano1.municipio = Humano1.municipio;
                            }
                            else {
                                var omunicipio_ = document.getElementById("_typeMunicipios");
                                var omunicipio = omunicipio_.options[omunicipio_.selectedIndex].text;
                                if (Object.keys(omunicipio).length === 0)
                                    Humano1.municipio = Humano1.municipio;
                                else
                                    Humano1.municipio = omunicipio;
                            }
                            
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

                                }
                            });
                        };

                        const cancelar = document.createElement("button")
                        cancelar.classList.add("_btn-cancelar")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_humano")


                        obutton.appendChild(actualizar)
                        obutton.appendChild(cancelar)
                    })
                }
                else {

                    Humano1.id = datos.usuario.Id;
                    Humano1.propietario = datos.usuario.Nombre;
                    

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
                        actualizar.classList.add("_btn-actualizar")
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

                            var omunicipio = $('#_typeMunicipios').val();
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

                                }
                            });
                        };

                        const cancelar = document.createElement("button")
                        cancelar.classList.add("_btn-cancelar")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_humano")


                        obutton.appendChild(actualizar)
                        obutton.appendChild(cancelar)
                    })

                }
                
                

            }

        })

        //mostrartabla(Humano1);

        //document.getElementById("update_humano").addEventListener("click", e => {
        //    reemplazar(Humano1);
        //    reemplazar1(Humano1);
        //    reemplazar2(Humano1);
        //    reemplazar3(Humano1);
        //    reemplazar4(Humano1);
        //    reemplazar5(Humano1);
        //    //reemplazar6(Humano1)

        //    const obutton = document.getElementById("_buttons")
        //    const actualizar = document.createElement("button")
        //    actualizar.classList.add("_btn")
        //    actualizar.innerText = "Actualizar"
        //    actualizar.setAttribute("id", "actualizar_humano")
        //    actualizar.setAttribute("type", "button")

        //    actualizar.onclick = function () {

        //        var oestado = $('#ih_estado').val()
        //        if (Object.keys(oestado).length === 0)
        //            Humano1.estado = Humano1.estado;
        //        else
        //            Humano1.estado = oestado;

        //        var omunicipio = $('#ih_municipio').val();
        //        if (Object.keys(omunicipio).length === 0)
        //            Humano1.municipio = Humano1.municipio;
        //        else
        //            Humano1.municipio = omunicipio;

        //        var ocolonia = $('#ih_colonia').val();
        //        if (Object.keys(ocolonia).length === 0)
        //            Humano1.colonia = Humano1.colonia;
        //        else
        //            Humano1.colonia = ocolonia;

        //        var odireccion = $('#ih_direccion').val();
        //        if (Object.keys(odireccion).length === 0)
        //            Humano1.direccion = Humano1.direccion;
        //        else
        //            Humano1.direccion = odireccion;

        //        var otelefono = $('#ih_telefono').val();
        //        if (Object.keys(otelefono).length === 0)
        //            Humano1.telefono = Humano1.telefono;
        //        else
        //            Humano1.telefono = otelefono;


        //        $.ajax({
        //            type: "POST",
        //            url: "/Usuario/ActualizarHumano",
        //            contentType: 'application/json; charset=utf-8',
        //            dataType: 'json',
        //            data: JSON.stringify(
        //                {
        //                    'humano': Humano1
        //                }),
        //            success: function (datos) {

        //                alert(datos.Nombre);

        //                $scope.$apply();

        //            },
        //            error: function (error) {

        //            }
        //        });
        //    };

        //    const cancelar = document.createElement("button")
        //    cancelar.classList.add("_btn")
        //    cancelar.innerText = "Cancelar"
        //    cancelar.setAttribute("id", "cancelar_humano")


        //    obutton.appendChild(actualizar)
        //    obutton.appendChild(cancelar)
        //})

    })

    document.getElementById("animateperro").addEventListener("click", e => {

        const newDog = document.getElementById("_new-dog");
        newDog.classList.add('_ocultar');

        const idhumano = document.getElementById("humano");
        const idmedico = document.getElementById("salud");
        const identremaniento = document.getElementById("entrenamiento");
        const idfinanzas = document.getElementById("FormIngresos");
        const idperro = document.getElementById("perro");

        if (idhumano !== null) {
            eliminartablahumano();
        }
        else if (idmedico !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }
        else if (identremaniento !== null) {
            contenerbotoncompetencias();
            contenerbotoncamadas();
            eliminartablaentrenamientos();
        }
        else if (idfinanzas !== null) {
            contenerbotoningresos();
            eliminartablafinanzas();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-entrenamiento");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-finanzas");
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
                    Perro1.criador = datos.listaPerro[j].criador;
                    Perro1.consanguinidad = datos.listaPerro[j].consanguinidad;

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
                        actualizar.classList.add("_btn-actualizar")
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

                            var select = document.getElementById("_typeRazas");
                            var oraza = select.options[select.selectedIndex].text;
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
                                Perro1.nacimiento = Perro1.nacimiento;
                            else
                                Perro1.nacimiento = onacimiento;

                            var opedigree = $('#ip_pedigree').val()
                            if (Object.keys(opedigree).length === 0)
                                Perro1.pedigree = Perro1.pedigree;
                            else
                                Perro1.pedigree = opedigree;

                            var selectsexo = document.getElementById("ip_sexo");
                            var osexo = selectsexo.options[selectsexo.selectedIndex].text;
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

                            var ocriador = $('#ip_criador').val()
                            if (Object.keys(ocriador).length === 0)
                                Perro1.criador = Perro1.criador;
                            else
                                Perro1.criador = ocriador;

                            var oconsanguinidad = $('#ip_consanguinidad').val()
                            if (Object.keys(oconsanguinidad).length === 0)
                                Perro1.consanguinidad = Perro1.consanguinidad;
                            else
                                Perro1.consanguinidad = oconsanguinidad;

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

                                    $('#myModalLoader').on('shown.bs.modal', function (e) {
                                        $("#myModalLoader").modal('hide');
                                    })
                                }
                            });
                        };

                        const cancelar = document.createElement("button")
                        cancelar.classList.add("_btn-cancelar")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_perro")


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

        const newDog = document.getElementById("_new-dog");
        newDog.classList.add('_ocultar');

        const idhumano = document.getElementById("humano");
        const idperro = document.getElementById("perro");
        const identremaniento = document.getElementById("entrenamiento");
        const idfinanzas = document.getElementById("FormIngresos");
        const idmedico = document.getElementById("salud");

        if (idhumano !== null) {
            eliminartablahumano();
        }
        else if (idperro !== null) {

            eliminartablaperro();
        }
        else if (identremaniento !== null) {
            contenerbotoncompetencias();
            contenerbotoncamadas();
            eliminartablaentrenamientos();
        }
        else if (idfinanzas !== null) {
            contenerbotoningresos();
            eliminartablafinanzas();
        }
        else if (idmedico !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-entrenamiento");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-finanzas");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.add("_z-frente")

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
                    Medico1.desparasitacioninterna = datos.listaMedicos[j].desparasitacionInterna;
                    Medico1.desparasitacionexterna = datos.listaMedicos[j].desparasitacionExterna;
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
                        //reemplazarcelo(Medico1, Perro1);
                        reemplazaresterilizacion(Medico1, Perro1);

                        const obutton = document.getElementById("_buttons")
                        const actualizar = document.createElement("button")
                        actualizar.classList.add("_btn-actualizar")
                        actualizar.innerText = "Actualizar"
                        actualizar.setAttribute("id", "actualizar_salud")
                        actualizar.setAttribute("type", "button")

                        actualizar.onclick = function () {

                            //var ovacunas = $('#im_vacunas').val()
                            //if (Object.keys(ovacunas).length === 0)
                            //    Medico1.vacunas = Medico1.vacunas;
                            //else
                            //    Medico1.vacunas = ovacunas;

                            var odesparasitacioninterna = $('#im_desparacitacion_interna').val()
                            if (Object.keys(odesparasitacioninterna).length === 0)
                                Medico1.desparasitacioninterna = Medico1.desparasitacioninterna;
                            else
                                Medico1.desparasitacioninterna = odesparasitacioninterna;

                            var odesparasitacionexterna = $('#im_desparacitacion_externa').val()
                            if (Object.keys(odesparasitacionexterna).length === 0)
                                Medico1.desparasitacionexterna = Medico1.desparasitacionexterna;
                            else
                                Medico1.desparasitacionexterna = odesparasitacionexterna;

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

                            if (Perro1.sexo == "Hembra") {

                                var ocelo = $('#im_celo').val()
                                if (Object.keys(ocelo).length === 0)
                                    Medico1.celo = Medico1.celo;
                                else
                                    Medico1.celo = ocelo;

                            }
                            else {

                            }


                            var oesterilizacion = $('#im_esterilizacion').val()
                            if (Object.keys(oesterilizacion).length === 0)
                                Medico1.esterilizacion = Medico1.esterilizacion;
                            else
                                Medico1.esterilizacion = oesterilizacion;

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

                                    eliminartablamedicos();

                                },
                                error: function (error) {

                                    $('#myModalLoader').on('shown.bs.modal', function (e) {
                                        $("#myModalLoader").modal('hide');
                                    })
                                }
                            });
                        };

                        const cancelar = document.createElement("button")
                        cancelar.classList.add("_btn-cancelar")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_salud")
                        actualizar.setAttribute("type", "button")


                        obutton.appendChild(actualizar)
                        obutton.appendChild(cancelar)
                    })

                }
                else {

                    var j = document.getElementById("Mascotas").value;

                    if (j !== null) {

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
                            reemplazaresterilizacion(Medico1, Perro1);
                            //reemplazarcelo(Medico1, Perro1);

                            const obutton = document.getElementById("_buttons")
                            const actualizar = document.createElement("button")
                            actualizar.classList.add("_btn-actualizar")
                            actualizar.innerText = "Actualizar"
                            actualizar.setAttribute("id", "actualizar_salud")
                            actualizar.setAttribute("type", "button")

                            actualizar.onclick = function () {

                                //var ovacunas = $('#im_vacunas').val()
                                //if (Object.keys(ovacunas).length === 0)
                                //    Medico1.vacunas = Medico1.vacunas;
                                //else
                                //    Medico1.vacunas = ovacunas;

                                var odesparasitacioninterna = $('#im_desparacitacion_interna').val()
                                if (Object.keys(odesparasitacioninterna).length === 0)
                                    Medico1.desparasitacioninterna = Medico1.desparasitacioninterna;
                                else
                                    Medico1.desparasitacioninterna = odesparasitacioninterna;

                                var odesparasitacionexterna = $('#im_desparacitacion_externa').val()
                                if (Object.keys(odesparasitacionexterna).length === 0)
                                    Medico1.desparasitacionexterna = Medico1.desparasitacionexterna;
                                else
                                    Medico1.desparasitacionexterna = odesparasitacionexterna;

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


                                //if (Perro1.sexo == "Hembra") {

                                //    var ocelo = $('#im_celo').val()
                                //    if (Object.keys(ocelo).length === 0)
                                //        Medico1.celo = Medico1.celo;
                                //    else
                                //        Medico1.celo = ocelo;

                                //}
                                //else {

                                //}

                                
                                var selectesterilizacion = document.getElementById("im_esterilizacion");
                                var oesterilizacion = selectesterilizacion.options[selectesterilizacion.selectedIndex].text;
                                if (Object.keys(oesterilizacion).length === 0)
                                    Medico1.esterilizacion = Medico1.esterilizacion
                                else
                                    Medico1.esterilizacion = oesterilizacion;

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

                                        alert("La información se ha cargado correctamente");

                                        $scope.$apply();

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
                            };

                            const cancelar = document.createElement("button")
                            cancelar.classList.add("_btn-cancelar")
                            cancelar.innerText = "Cancelar"
                            cancelar.setAttribute("id", "cancelar_salud")
                            actualizar.setAttribute("type", "button")


                            obutton.appendChild(actualizar)
                            obutton.appendChild(cancelar)
                        })

                    }

                }



            },
        });

    })

    document.getElementById("animateentrenamiento").addEventListener("click", e => {

        const newDog = document.getElementById("_new-dog");
        newDog.classList.add('_ocultar');

        const idhumano = document.getElementById("humano");
        const idperro = document.getElementById("perro");
        const idmedicos = document.getElementById("salud");
        const idfinanzas = document.getElementById("FormIngresos");
        const identremaniento = document.getElementById("entrenamiento");

        if (idhumano !== null) {
            eliminartablahumano();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }
        else if (idmedicos !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }
        else if (idfinanzas !== null) {
            contenerbotoningresos();
            eliminartablafinanzas();
        }
        else if (identremaniento !== null) {
            contenerbotoncompetencias();
            contenerbotoncamadas();
            eliminartablaentrenamientos();
        }

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-finanzas");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-entrenamiento");
        formulariocompleto.classList.add("_z-frente")


        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos.listaEntrenamiento !== null) {

                    var j = document.getElementById("Mascotas").value;

                    Entrenamiento1.idperro = datos.listaEntrenamiento[j].idperro;
                    Entrenamiento1.idusuario = datos.listaEntrenamiento[j].idusuario;
                    Entrenamiento1.certificados = datos.listaEntrenamiento[j].certificados;
                    Entrenamiento1.competencias = datos.listaEntrenamiento[j].competencias;
                    Entrenamiento1.hcelos = datos.listaEntrenamiento[j].hcelos;
                    Entrenamiento1.hcruzas = datos.listaEntrenamiento[j].hcruzas;
                    Entrenamiento1.camadas = datos.listaEntrenamiento[j].camadas;
                    Entrenamiento1.celocruceactual = datos.listaEntrenamiento[j].celocruceactual;
                    Entrenamiento1.camadaactual = datos.listaEntrenamiento[j].camadaactual;
                    Entrenamiento1.proxcelo = datos.listaEntrenamiento[j].proxcelo;
                    Entrenamiento1.cuidados = datos.listaEntrenamiento[j].cuidados;
                    Entrenamiento1.proxeventos = datos.listaEntrenamiento[j].proxeventos;
                    Entrenamiento1.entrenamientos = datos.listaEntrenamiento[j].entrenamientos;
                    Entrenamiento1.titulos = datos.listaEntrenamiento[j].titulos;

                    Perro1.sexo = datos.listaPerro[j].sexo;
                    Medico1.esterilizacion = datos.listaMedicos[j].esterilizacion;

                    mostrartabla4(Entrenamiento1, Perro1, Medico1)

                    document.getElementById("update_entrenamiento").addEventListener("click", e => {
                        reemplazarcertificados(Entrenamiento1);
                        //reemplazarcompetencias(Entrenamiento1);
                        //reemplazhcelos(Entrenamiento1);
                        //reemplazarhcruzas(Entrenamiento1);
                        //reemplazarcamadas(Entrenamiento1);
                        //reemplazarcelocruceactual(Entrenamiento1);
                        //reemplazarcamadaactual(Entrenamiento1);
                        //reemplazarproxcelo(Entrenamiento1);
                        reemplazarcuidados(Entrenamiento1);
                        reemplazarproxeventos(Entrenamiento1);
                        reemplazarentrenamientos(Entrenamiento1);
                        reemplazartitulos(Entrenamiento1);

                        const obutton = document.getElementById("_buttons")
                        const actualizar = document.createElement("button")
                        actualizar.classList.add("_btn-actualizar")
                        actualizar.innerText = "Actualizar"
                        actualizar.setAttribute("id", "actualizar_entrenamiento")
                        actualizar.setAttribute("type", "button")

                        actualizar.onclick = function () {

                            var ocertificados = $('#ie_certificados').val()
                            if (Object.keys(ocertificados).length === 0)
                                Entrenamiento1.certificados = Entrenamiento1.certificados;
                            else
                                Entrenamiento1.certificados = ocertificados;

                            //var ocompetencias = $('#ie_competencias').val()
                            //if (Object.keys(ocompetencias).length === 0)
                            //    Entrenamiento1.competencias = Entrenamiento1.competencias;
                            //else
                            //    Entrenamiento1.competencias = ocompetencias;

                            //var ohcelos = $('#ie_hcelos').val()
                            //if (Object.keys(ohcelos).length === 0)
                            //    Entrenamiento1.hcelos = Entrenamiento1.hcelos;
                            //else
                            //    Entrenamiento1.hcelos = ohcelos;

                            //var ohcruzas = $('#ie_hcruzas').val()
                            //if (Object.keys(ohcruzas).length === 0)
                            //    Entrenamiento1.hcruzas = Entrenamiento1.hcruzas;
                            //else
                            //    Entrenamiento1.hcruzas = ohcruzas;

                            //var ocamadas = $('#ie_camadas').val()
                            //if (Object.keys(ocamadas).length === 0)
                            //    Entrenamiento1.camadas = Entrenamiento1.camadas;
                            //else
                            //    Entrenamiento1.camadas = ocamadas;

                            //var ocelocruceactual = $('#ie_celocruceactual').val()
                            //if (Object.keys(ocelocruceactual).length === 0)
                            //    Entrenamiento1.celocruceactual = Entrenamiento1.celocruceactual;
                            //else
                            //    Entrenamiento1.celocruceactual = ocelocruceactual;

                            //var ocamadaactual = $('#ie_camadaactual').val()
                            //if (Object.keys(ocamadaactual).length === 0)
                            //    Entrenamiento1.camadaactual = Entrenamiento1.camadaactual;
                            //else
                            //    Entrenamiento1.camadaactual = ocamadaactual;

                            //var oproxcelo = $('#ie_proxcelo').val()
                            //if (Object.keys(oproxcelo).length === 0)
                            //    Entrenamiento1.proxcelo = Entrenamiento1.proxcelo;
                            //else
                            //    Entrenamiento1.proxcelo = oproxcelo;

                            var ocuidados = $('#ie_cuidados').val()
                            if (Object.keys(ocuidados).length === 0)
                                Entrenamiento1.cuidados = Entrenamiento1.cuidados;
                            else
                                Entrenamiento1.cuidados = ocuidados;

                            var oproxeventos = $('#ie_proxeventos').val()
                            if (Object.keys(oproxeventos).length === 0)
                                Entrenamiento1.proxeventos = Entrenamiento1.proxeventos;
                            else
                                Entrenamiento1.proxeventos = oproxeventos;

                            var oentrenamientos = $('#ie_entrenamientos').val()
                            if (Object.keys(oentrenamientos).length === 0)
                                Entrenamiento1.entrenamientos = Entrenamiento1.entrenamientos;
                            else
                                Entrenamiento1.entrenamientos = oentrenamientos;

                            var otitulos = $('#ie_titulos').val()
                            if (Object.keys(otitulos).length === 0)
                                Entrenamiento1.titulos = Entrenamiento1.titulos;
                            else
                                Entrenamiento1.titulos = otitulos;

                            Entrenamiento1.idusuario = datos.listaPerro[j].id;
                            Entrenamiento1.idperro = datos.listaPerro[j].idUsuario;

                            $.ajax({
                                type: "POST",
                                url: "/Usuario/ActualizarEntrenamiento",
                                contentType: 'application/json; charset=utf-8',
                                dataType: 'json',
                                data: JSON.stringify(
                                    {
                                        'entrenamiento': Entrenamiento1
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
                        cancelar.classList.add("_btn-cancelar")
                        cancelar.innerText = "Cancelar"
                        cancelar.setAttribute("id", "cancelar_entrenamiento")


                        obutton.appendChild(actualizar)
                        obutton.appendChild(cancelar)
                    })

                }

                else if (Medico1.esterilizacion == null) {

                    $('.toastErrorEntrenamiento').toast('show')

                    $scope.$apply();


                }

                else {
                    var j = document.getElementById("Mascotas").value;

                    if (j !== null) {

                        Perro1.sexo = datos.listaPerro[j].sexo;
                        Medico1.esterilizacion = datos.listaMedicos[j].esterilizacion;

                        mostrartabla4(Entrenamiento1, Perro1, Medico1)

                        document.getElementById("update_entrenamiento").addEventListener("click", e => {
                            reemplazarcertificados(Entrenamiento1);
                            //reemplazarcompetencias(Entrenamiento1);
                            //reemplazhcelos(Entrenamiento1);
                            //reemplazarhcruzas(Entrenamiento1);
                            //reemplazarcamadas(Entrenamiento1);
                            //reemplazarcelocruceactual(Entrenamiento1);
                            //reemplazarcamadaactual(Entrenamiento1);
                            //reemplazarproxcelo(Entrenamiento1);
                            reemplazarcuidados(Entrenamiento1);
                            reemplazarproxeventos(Entrenamiento1);
                            reemplazarentrenamientos(Entrenamiento1);
                            reemplazartitulos(Entrenamiento1);

                            const obutton = document.getElementById("_buttons")
                            const actualizar = document.createElement("button")
                            actualizar.classList.add("_btn-actualizar")
                            actualizar.innerText = "Actualizar"
                            actualizar.setAttribute("id", "actualizar_entrenamiento")
                            actualizar.setAttribute("type", "button")

                            actualizar.onclick = function () {

                                var ocertificados = $('#ie_certificados').val()
                                if (Object.keys(ocertificados).length === 0)
                                    Entrenamiento1.certificados = Entrenamiento1.certificados;
                                else
                                    Entrenamiento1.certificados = ocertificados;

                                //var ocompetencias = $('#ie_competencias').val()
                                //if (Object.keys(ocompetencias).length === 0)
                                //    Entrenamiento1.competencias = Entrenamiento1.competencias;
                                //else
                                //    Entrenamiento1.competencias = ocompetencias;

                                //var ohcelos = $('#ie_hcelos').val()
                                //if (Object.keys(ohcelos).length === 0)
                                //    Entrenamiento1.hcelos = Entrenamiento1.hcelos;
                                //else
                                //    Entrenamiento1.hcelos = ohcelos;

                                //var ohcruzas = $('#ie_hcruzas').val()
                                //if (Object.keys(ohcruzas).length === 0)
                                //    Entrenamiento1.hcruzas = Entrenamiento1.hcruzas;
                                //else
                                //    Entrenamiento1.hcruzas = ohcruzas;

                                //var ocamadas = $('#ie_camadas').val()
                                //if (Object.keys(ocamadas).length === 0)
                                //    Entrenamiento1.camadas = Entrenamiento1.camadas;
                                //else
                                //    Entrenamiento1.camadas = ocamadas;

                                //var ocelocruceactual = $('#ie_celocruceactual').val()
                                //if (Object.keys(ocelocruceactual).length === 0)
                                //    Entrenamiento1.celocruceactual = Entrenamiento1.celocruceactual;
                                //else
                                //    Entrenamiento1.celocruceactual = ocelocruceactual;

                                //var ocamadaactual = $('#ie_camadaactual').val()
                                //if (Object.keys(ocamadaactual).length === 0)
                                //    Entrenamiento1.camadaactual = Entrenamiento1.camadaactual;
                                //else
                                //    Entrenamiento1.camadaactual = ocamadaactual;

                                //var oproxcelo = $('#ie_proxcelo').val()
                                //if (Object.keys(oproxcelo).length === 0)
                                //    Entrenamiento1.proxcelo = Entrenamiento1.proxcelo;
                                //else
                                //    Entrenamiento1.proxcelo = oproxcelo;

                                var ocuidados = $('#ie_cuidados').val()
                                if (Object.keys(ocuidados).length === 0)
                                    Entrenamiento1.cuidados = Entrenamiento1.cuidados;
                                else
                                    Entrenamiento1.cuidados = ocuidados;

                                var oproxeventos = $('#ie_proxeventos').val()
                                if (Object.keys(oproxeventos).length === 0)
                                    Entrenamiento1.proxeventos = Entrenamiento1.proxeventos;
                                else
                                    Entrenamiento1.proxeventos = oproxeventos;

                                var oentrenamientos = $('#ie_entrenamientos').val()
                                if (Object.keys(oentrenamientos).length === 0)
                                    Entrenamiento1.entrenamientos = Entrenamiento1.entrenamientos;
                                else
                                    Entrenamiento1.entrenamientos = oentrenamientos;

                                var otitulos = $('#ie_titulos').val()
                                if (Object.keys(otitulos).length === 0)
                                    Entrenamiento1.titulos = Entrenamiento1.titulos;
                                else
                                    Entrenamiento1.titulos = otitulos;

                                Entrenamiento1.idusuario = datos.listaPerro[j].idUsuario;
                                Entrenamiento1.idperro = datos.listaPerro[j].id;

                                $.ajax({
                                    type: "POST",
                                    url: "/Usuario/ActualizarEntrenamiento",
                                    contentType: 'application/json; charset=utf-8',
                                    dataType: 'json',
                                    data: JSON.stringify(
                                        {
                                            'entrenamiento': Entrenamiento1
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
                            cancelar.classList.add("_btn-cancelar")
                            cancelar.innerText = "Cancelar"
                            cancelar.setAttribute("id", "cancelar_entrenamiento")


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

    document.getElementById("_erase-dog").addEventListener("click", e => {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                var listaperrosborrar = datos.listaPerro;

                const elem = document.getElementById("listaBorrarPerros")
                elem.innerHTML = ""

                for (let i = 1; i < listaperrosborrar.length; i++) {

                    if (listaperrosborrar[i].estatusmembresia !== "Active") {

                        const item = document.createElement("div")
                        const radioitem = document.createElement("input")

                        radioitem.setAttribute("type", "radio")
                        radioitem.setAttribute("id", `${listaperrosborrar[i].id}`)
                        radioitem.setAttribute("name", "perroBorrar")
                        radioitem.setAttribute("value", `${listaperrosborrar[i].id}`)

                        item.appendChild(radioitem)

                        const labelitem = document.createElement("label")

                        labelitem.innerHTML =
                            `
                        <label>${listaperrosborrar[i].nombreperro}</label>
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


    //MENU PARA USUARIOS B

    $.ajax({
        type: "POST",
        url: "/Membresias/ObtenerInformacionUsuario",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (datos) {

            if (datos.usuario.IdRol == 5) {

                var padreiconofinanzas = document.getElementById("petIcons");
                var hijoaeliminar = document.getElementById("animatefinanzas");

                padreiconofinanzas.removeChild(hijoaeliminar);

                var padreQr = document.getElementById("menu");
                var hijoaEliminar1 = document.getElementById("qrcode");

                padreQr.removeChild(hijoaEliminar1);

                var padreMembresia = document.getElementById("menu");
                var hijoEliminar2 = document.getElementById("menuUsuario");

                padreMembresia.removeChild(hijoEliminar2)
            }
            else if (datos.usuario.IdRol == 6) {
                var padreMembresia = document.getElementById("menu");
                var hijoEliminar3 = document.getElementById("menuUsuario");

                padreMembresia.removeChild(hijoEliminar3)

                var padreMembresia = document.getElementById("menu");
                var hijoEliminar4 = document.getElementById("menuUsuarioB");

                padreMembresia.removeChild(hijoEliminar4)
            }
            else if (datos.usuario.IdRol == 7 || datos.usuario.IdRol == 8) {
                
                var padreMembresia = document.getElementById("menu");
                var hijoEliminar4 = document.getElementById("menuUsuarioB");

                padreMembresia.removeChild(hijoEliminar4)
            }
            else {

                //MOSTRAR IMPRIMIR PDF
                const imprimir = document.getElementById("generarCodigo")
                imprimir.addEventListener("click", function (e) {

                    document.getElementById("imprimirPDF").classList.add('_pasarPDFvisible');
                    document.getElementById("imprimirPDF").classList.remove('_pasarPDF');

                })

                //MOSTRAR IMPRIMIR PDF

                
            }
            
        },
        error: function (error) {

        }
    });

    //MENU PARA CONTROL FINANCIERO

    var datosExt;
    var datosExt1;

    document.getElementById("animatefinanzas").addEventListener("click", e => {

        const idhumano = document.getElementById("humano");
        const idmedico = document.getElementById("salud");
        const identremaniento = document.getElementById("entrenamiento");
        const idperro = document.getElementById("perro");
        const idfinanzas = document.getElementById("FormIngresos");
        
        if (idhumano !== null) {
            eliminartablahumano();
        }
        else if (idmedico !== null) {
            contenerbotonvacunas();
            eliminartablamedicos();
        }
        else if (identremaniento !== null) {
            contenerbotoncompetencias();
            contenerbotoncamadas();
            eliminartablaentrenamientos();
        }
        else if (idperro !== null) {
            eliminartablaperro();
        }
        else if (idfinanzas !== null) {
            contenerbotoningresos();
            eliminartablafinanzas();
        }

        var formulariocompleto = document.getElementById("_form-perro");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-salud");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-entrenamiento");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-humano");
        formulariocompleto.classList.remove("_z-frente")

        var formulariocompleto = document.getElementById("_form-finanzas");
        formulariocompleto.classList.add("_z-frente")

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                datosExt = datos;

                var j = document.getElementById("Mascotas").value;

                
                Perro1.id = datos.listaPerro[j].id;
                Perro1.idusuario = datos.listaPerro[j].idUsuario;
                Perro1.nombreperro = datos.listaPerro[j].nombreperro;

                //var examDateClonedObj = $(".examDateTemplate").clone();
                //$(examDateClonedObj).removeClass("examDateTemplate");
                //$(examDateClonedObj).appendTo("#examDatesContainer");
                //$(examDateClonedObj).show();

                mostrartabla5(datosExt);
            }
        });

        

        const actualizarIng = document.getElementById("actualizar_ingresos")

        actualizarIng.onclick = function () {

            var otipoingreso = $('#tipoIngresos').val()
            Finanzas1.tipoingreso = otipoingreso;

            var ofechaingreso = $('#fechaingreso').val()
            Finanzas1.fechaingreso = ofechaingreso;

            var odetalleingreso = $('#detalleingreso').val()
            Finanzas1.detalleingreso = odetalleingreso;

            var omontoingreso = $('#montoingreso').val()
            Finanzas1.montoingreso = omontoingreso;

            var otipoegreso = $('#tipoEgresos').val()
            Finanzas1.tipoegreso = otipoegreso;

            var ofechaegreso = $('#fechaegreso').val()
            Finanzas1.fechaegreso = ofechaegreso;

            var odetalleegreso = $('#detalleegreso').val()
            Finanzas1.detalleegreso = odetalleegreso;

            var omontoegreso = $('#montoegreso').val()
            Finanzas1.montoegreso = omontoegreso;

            Finanzas1.idperro = Perro1.id;
            Finanzas1.idusuario = Perro1.idusuario;
            Finanzas1.nombreperro = Perro1.nombreperro;

            $.ajax({
                type: "POST",
                url: "/Usuario/ActualizarFinanzas",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(
                    {
                        'finanzas': Finanzas1
                    }),
                success: function (datos) {

                    //GOOGLE CHARTS

                    google.charts.load('current', { packages: ['corechart', 'bar'] });
                    google.charts.setOnLoadCallback(drawBarColors);

                    function drawBarColors() {
                        var data2 = google.visualization.arrayToDataTable([
                            ['Total', 'Ingresos', 'Egresos'],
                            ['Total', datos.totalIngresos, datos.totalEgresos],


                        ], false);

                        var options2 = {
                            width: '100%',
                            height: '230',
                            title: 'Balance financiero',
                            chartArea: { width: '40%' },
                            colors: ['#FFD345', '#F4AB43'],
                            hAxis: {
                                title: 'Unidad MXN',
                                minValue: 0,
                                format: 'currency'
                            },
                            vAxis: {
                                title: ''
                            }
                        };
                        var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
                        chart2.draw(data2, options2);
                    }

                    $('.toastExitoActualizacion').toast('show')

                    $scope.$apply();

                },
                error: function (error) {

                    $('.toastErrorActualizacion').toast('show')

                    $scope.$apply();
                }
            });


        }

        //funcion para filtrar ingresos y egresos por rango de fechas

        const filtrarFechas = document.getElementById("filtrar_fechas")

        filtrarFechas.onclick = function () {

            var ofechainicio = $('#fechaInicial').val()
            Finanzas2.fechainicio = ofechainicio;

            var ofechafin = $('#fechaFinal').val()
            Finanzas2.fechafin = ofechafin;

            Finanzas2.idperro = Perro1.id;
            Finanzas2.idusuario = Perro1.idusuario;

            $.ajax({
                type: "POST",
                url: "/Usuario/FiltrarFinanzas",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(
                    {
                        'finanzas': Finanzas2
                    }),
                success: function (datos) {

                    //GOOGLE CHARTS

                    google.charts.load('current', { packages: ['corechart', 'bar'] });
                    google.charts.setOnLoadCallback(drawBarColors);

                    function drawBarColors() {
                        var data2 = google.visualization.arrayToDataTable([
                            ['Total', 'Ingresos', 'Egresos'],
                            ['Total', datos.totalIngresos, datos.totalEgresos],


                        ], false);

                        var options2 = {
                            width: '100%',
                            height: '230',
                            title: 'Balance financiero',
                            chartArea: { width: '40%' },
                            colors: ['#FFD345', '#F4AB43'],
                            hAxis: {
                                title: 'Unidad MXN',
                                minValue: 0,
                                format: 'currency'
                            },
                            vAxis: {
                                title: ''
                            }
                        };
                        var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
                        chart2.draw(data2, options2);
                    }

                    $('.toastExitoActualizacion').toast('show')

                    $scope.$apply();

                },
                error: function (error) {

                    $('.toastErrorActualizacion').toast('show')

                    $scope.$apply();
                }
            });

        }



    })

    //FUNCIÓN PARA CANCELAR MEMBRESIA
    $scope.CancelarMembresia = function() {

        var IdMembresia = "I-JWFYA2375FP6";

        $.ajax({
            type: "POST",
            url: "/Pagos/CancelarMembresia",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(
                {
                    'IdMembresia': IdMembresia
                }),
            success: function (datos) {

                alert(datos);

            },
            error: function (error) {

            }
        });
    }

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

                            $('.toastExitoActualizacion').toast('show')

                            $scope.$apply();

                            alert("La foto de tu mascota se ha cargado correctamente la próxima vez que ingreses podrás ver los cambios");

                            $scope.$apply();

                        }
                        else {


                        }

                        $('.toastExitoActualizacion').toast('show')

                        $scope.$apply();

                        alert("La foto de tu mascota se ha cargado correctamente la próxima vez que ingreses podrás ver los cambios");

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

    document.getElementById("Mascotas").addEventListener("change", cambiarFoto);

    function cambiarFoto() {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                var j = document.getElementById("Mascotas").value;

                //var Id = datos.listaPerro[j].id;

                const imgcontainer = document.getElementById("petImage");
                const img = (datos.listaPerro[j].imagen);
                //const imgcorregida = img.replaceAll('\\', '\\\\')

                imgcontainer.innerHTML = `
                <img class="_pet-image _border-shadow" src ="${img}"/>
                `
            }

        })


    }

    window.onload = cambiarFoto;

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

                var j = document.getElementById("Mascotas").value;

                function Dating (fecha) {
                    var date = fecha;
                    if (!date)
                        return "";
                    var f = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10)),
                        dia = f.getDate(), mes = (parseInt(f.getMonth()) + 1), anio = f.getFullYear();
                    return ((dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio);
                }

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

            }
        })


    })

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

    
    //ACTUALIZAR LOS DATOS DE LA TABLA DE CAMADAS

    const agregarcamadas = document.getElementById("actualizar_tablaCamadas");
    agregarcamadas.onclick = function () {

        var ocamada = $('#Camada').val()
        if (Object.keys(ocamada).length === 0)
            Camadas1.nocamada = Camadas1.nocamada;
        else
            Camadas1.nocamada = ocamada;

        var oultra1 = $('#Ultra1').val()
        if (Object.keys(oultra1).length === 0)
            Camadas1.ultra1 = Camadas1.ultra1;
        else
            Camadas1.ultra1 = oultra1;

        var oultra2 = $('#Ultra2').val()
        if (Object.keys(oultra2).length === 0)
            Camadas1.ultra2 = Camadas1.ultra2;
        else
            Camadas1.ultra2 = oultra2;

        var oproge1 = $('#Proge1').val()
        if (Object.keys(oproge1).length === 0)
            Camadas1.proge1 = Camadas1.proge1;
        else
            Camadas1.proge1 = oproge1;

        var oproge2 = $('#Proge2').val()
        if (Object.keys(oproge2).length === 0)
            Camadas1.proge2 = Camadas1.proge2;
        else
            Camadas1.proge2 = oproge2;

        var oproge3 = $('#Proge3').val()
        if (Object.keys(oproge3).length === 0)
            Camadas1.proge3 = Camadas1.proge3;
        else
            Camadas1.proge3 = oproge3;

        var oparto = $('#Parto').val()
        if (Object.keys(oparto).length === 0)
            Camadas1.parto = Camadas1.parto;
        else
            Camadas1.parto = oparto;

        var oinicio = $('#Inicio').val()
        if (Object.keys(oinicio).length === 0)
            Camadas1.inicio = Camadas1.inicio;
        else
            Camadas1.inicio = oinicio;

        var oparto = $('#Parto').val()
        if (Object.keys(oparto).length === 0)
            Camadas1.parto = Camadas1.parto;
        else
            Camadas1.parto = oparto;

        var ofin = $('#Fin').val()
        if (Object.keys(ofin).length === 0)
            Camadas1.fin = Camadas1.fin;
        else
            Camadas1.fin = ofin;

        var ocruza = $('#Cruza').val()
        if (Object.keys(ocruza).length === 0)
            Camadas1.cruza = Camadas1.cruza;
        else
            Camadas1.cruza = ocruza;

        var omadre = $('#Madre').val()
        if (Object.keys(omadre).length === 0)
            Camadas1.madre = Camadas1.madre;
        else
            Camadas1.madre = omadre;

        var opadre = $('#Padre').val()
        if (Object.keys(opadre).length === 0)
            Camadas1.padre = Camadas1.padre;
        else
            Camadas1.padre = opadre;

        var ototal = $('#Total').val()
        if (Object.keys(ototal).length === 0)
            Camadas1.total = Camadas1.total;
        else
            Camadas1.total = ototal;

        var ovivos = $('#Vivos').val()
        if (Object.keys(ovivos).length === 0)
            Camadas1.vivos = Camadas1.vivos;
        else
            Camadas1.vivos = ovivos;

        var omuertos = $('#Muertos').val()
        if (Object.keys(omuertos).length === 0)
            Camadas1.muertos = Camadas1.muertos;
        else
            Camadas1.muertos = omuertos;

        var onombre_c1 = $('#Nombre_c1').val()
        if (Object.keys(onombre_c1).length === 0)
            Camadas1.nombre_c1 = Camadas1.nombre_c1;
        else
            Camadas1.nombre_c1 = onombre_c1;

        var ohora_c1 = $('#Hora_c1').val()
        if (Object.keys(ohora_c1).length === 0)
            Camadas1.hora_c1 = Camadas1.hora_c1;
        else
            Camadas1.hora_c1 = ohora_c1;

        var osexo_c1 = $('#Sexo_c1').val()
        if (Object.keys(osexo_c1).length === 0)
            Camadas1.sexo_c1 = Camadas1.sexo_c1;
        else
            Camadas1.sexo_c1 = osexo_c1;

        var ocolor_c1 = $('#Color_c1').val()
        if (Object.keys(ocolor_c1).length === 0)
            Camadas1.color_c1 = Camadas1.color_c1;
        else
            Camadas1.color_c1 = ocolor_c1;

        var oposicion_c1 = $('#Posicion_c1').val()
        if (Object.keys(oposicion_c1).length === 0)
            Camadas1.posicion_c1 = Camadas1.posicion_c1;
        else
            Camadas1.posicion_c1 = oposicion_c1;

        var opeso_c1 = $('#Peso_c1').val()
        if (Object.keys(opeso_c1).length === 0)
            Camadas1.peso_c1 = Camadas1.peso_c1;
        else
            Camadas1.peso_c1 = opeso_c1;

        var onotas_c1 = $('#Notas_c1').val()
        if (Object.keys(onotas_c1).length === 0)
            Camadas1.notas_c1 = Camadas1.notas_c1;
        else
            Camadas1.notas_c1 = onotas_c1;

        var onombre_c2 = $('#Nombre_c2').val()
        if (Object.keys(onombre_c2).length === 0)
            Camadas1.nombre_c2 = Camadas1.nombre_c2;
        else
            Camadas1.nombre_c2 = onombre_c2;

        var ohora_c2 = $('#Hora_c2').val()
        if (Object.keys(ohora_c2).length === 0)
            Camadas1.hora_c2 = Camadas1.hora_c2;
        else
            Camadas1.hora_c2 = ohora_c2;

        var osexo_c2 = $('#Sexo_c2').val()
        if (Object.keys(osexo_c2).length === 0)
            Camadas1.sexo_c2 = Camadas1.sexo_c2;
        else
            Camadas1.sexo_c2 = osexo_c2;

        var ocolor_c2 = $('#Color_c2').val()
        if (Object.keys(ocolor_c2).length === 0)
            Camadas1.color_c2 = Camadas1.color_c2;
        else
            Camadas1.color_c2 = ocolor_c2;

        var oposicion_c2 = $('#Posicion_c2').val()
        if (Object.keys(oposicion_c2).length === 0)
            Camadas1.posicion_c2 = Camadas1.posicion_c2;
        else
            Camadas1.posicion_c2 = oposicion_c2;

        var opeso_c2 = $('#Peso_c2').val()
        if (Object.keys(opeso_c2).length === 0)
            Camadas1.peso_c2 = Camadas1.peso_c2;
        else
            Camadas1.peso_c2 = opeso_c2;

        var onotas_c2 = $('#Notas_c2').val()
        if (Object.keys(onotas_c2).length === 0)
            Camadas1.notas_c2 = Camadas1.notas_c2;
        else
            Camadas1.notas_c2 = onotas_c2;

        var onombre_c3 = $('#Nombre_c3').val()
        if (Object.keys(onombre_c3).length === 0)
            Camadas1.nombre_c3 = Camadas1.nombre_c3;
        else
            Camadas1.nombre_c3 = onombre_c3;

        var ohora_c3 = $('#Hora_c3').val()
        if (Object.keys(ohora_c3).length === 0)
            Camadas1.hora_c3 = Camadas1.hora_c3;
        else
            Camadas1.hora_c3 = ohora_c3;

        var osexo_c3 = $('#Sexo_c3').val()
        if (Object.keys(osexo_c3).length === 0)
            Camadas1.sexo_c3 = Camadas1.sexo_c3;
        else
            Camadas1.sexo_c3 = osexo_c3;

        var ocolor_c3 = $('#Color_c3').val()
        if (Object.keys(ocolor_c3).length === 0)
            Camadas1.color_c3 = Camadas1.color_c3;
        else
            Camadas1.color_c3 = ocolor_c3;

        var oposicion_c3 = $('#Posicion_c3').val()
        if (Object.keys(oposicion_c3).length === 0)
            Camadas1.posicion_c3 = Camadas1.posicion_c3;
        else
            Camadas1.posicion_c3 = oposicion_c3;

        var opeso_c3 = $('#Peso_c3').val()
        if (Object.keys(opeso_c3).length === 0)
            Camadas1.peso_c3 = Camadas1.peso_c3;
        else
            Camadas1.peso_c3 = opeso_c3;

        var onotas_c3 = $('#Notas_c3').val()
        if (Object.keys(onotas_c3).length === 0)
            Camadas1.notas_c3 = Camadas1.notas_c3;
        else
            Camadas1.notas_c3 = onotas_c3;

        var onombre_c4 = $('#Nombre_c4').val()
        if (Object.keys(onombre_c4).length === 0)
            Camadas1.nombre_c4 = Camadas1.nombre_c4;
        else
            Camadas1.nombre_c4 = onombre_c4;

        var ohora_c4 = $('#Hora_c4').val()
        if (Object.keys(ohora_c4).length === 0)
            Camadas1.hora_c4 = Camadas1.hora_c4;
        else
            Camadas1.hora_c4 = ohora_c4;

        var osexo_c4 = $('#Sexo_c4').val()
        if (Object.keys(osexo_c4).length === 0)
            Camadas1.sexo_c4 = Camadas1.sexo_c4;
        else
            Camadas1.sexo_c4 = osexo_c4;

        var ocolor_c4 = $('#Color_c4').val()
        if (Object.keys(ocolor_c4).length === 0)
            Camadas1.color_c4 = Camadas1.color_c4;
        else
            Camadas1.color_c4 = ocolor_c4;

        var oposicion_c4 = $('#Posicion_c4').val()
        if (Object.keys(oposicion_c4).length === 0)
            Camadas1.posicion_c4 = Camadas1.posicion_c4;
        else
            Camadas1.posicion_c4 = oposicion_c4;

        var opeso_c4 = $('#Peso_c4').val()
        if (Object.keys(opeso_c4).length === 0)
            Camadas1.peso_c4 = Camadas1.peso_c4;
        else
            Camadas1.peso_c4 = opeso_c4;

        var onotas_c4 = $('#Notas_c4').val()
        if (Object.keys(onotas_c4).length === 0)
            Camadas1.notas_c4 = Camadas1.notas_c4;
        else
            Camadas1.notas_c4 = onotas_c4;

        var onombre_c5 = $('#Nombre_c5').val()
        if (Object.keys(onombre_c5).length === 0)
            Camadas1.nombre_c5 = Camadas1.nombre_c5;
        else
            Camadas1.nombre_c5 = onombre_c5;

        var ohora_c5 = $('#Hora_c5').val()
        if (Object.keys(ohora_c5).length === 0)
            Camadas1.hora_c5 = Camadas1.hora_c5;
        else
            Camadas1.hora_c5 = ohora_c5;

        var osexo_c5 = $('#Sexo_c5').val()
        if (Object.keys(osexo_c5).length === 0)
            Camadas1.sexo_c5 = Camadas1.sexo_c5;
        else
            Camadas1.sexo_c5 = osexo_c5;

        var ocolor_c5 = $('#Color_c5').val()
        if (Object.keys(ocolor_c5).length === 0)
            Camadas1.color_c5 = Camadas1.color_c5;
        else
            Camadas1.color_c5 = ocolor_c5;

        var oposicion_c5 = $('#Posicion_c5').val()
        if (Object.keys(oposicion_c5).length === 0)
            Camadas1.posicion_c5 = Camadas1.posicion_c5;
        else
            Camadas1.posicion_c5 = oposicion_c5;

        var opeso_c5 = $('#Peso_c5').val()
        if (Object.keys(opeso_c5).length === 0)
            Camadas1.peso_c5 = Camadas1.peso_c5;
        else
            Camadas1.peso_c5 = opeso_c5;

        var onotas_c5 = $('#Notas_c5').val()
        if (Object.keys(onotas_c5).length === 0)
            Camadas1.notas_c5 = Camadas1.notas_c5;
        else
            Camadas1.notas_c5 = onotas_c5;

        var onombre_c6 = $('#Nombre_c6').val()
        if (Object.keys(onombre_c6).length === 0)
            Camadas1.nombre_c6 = Camadas1.nombre_c6;
        else
            Camadas1.nombre_c6 = onombre_c6;

        var ohora_c6 = $('#Hora_c6').val()
        if (Object.keys(ohora_c6).length === 0)
            Camadas1.hora_c6 = Camadas1.hora_c6;
        else
            Camadas1.hora_c6 = ohora_c6;

        var osexo_c6 = $('#Sexo_c6').val()
        if (Object.keys(osexo_c6).length === 0)
            Camadas1.sexo_c6 = Camadas1.sexo_c6;
        else
            Camadas1.sexo_c6 = osexo_c6;

        var ocolor_c6 = $('#Color_c6').val()
        if (Object.keys(ocolor_c6).length === 0)
            Camadas1.color_c6 = Camadas1.color_c6;
        else
            Camadas1.color_c6 = ocolor_c6;

        var oposicion_c6 = $('#Posicion_c6').val()
        if (Object.keys(oposicion_c6).length === 0)
            Camadas1.posicion_c6 = Camadas1.posicion_c6;
        else
            Camadas1.posicion_c6 = oposicion_c6;

        var opeso_c6 = $('#Peso_c6').val()
        if (Object.keys(opeso_c6).length === 0)
            Camadas1.peso_c6 = Camadas1.peso_c6;
        else
            Camadas1.peso_c6 = opeso_c6;

        var onotas_c6 = $('#Notas_c6').val()
        if (Object.keys(onotas_c6).length === 0)
            Camadas1.notas_c6 = Camadas1.notas_c6;
        else
            Camadas1.notas_c6 = onotas_c6;

        var onombre_c7 = $('#Nombre_c7').val()
        if (Object.keys(onombre_c7).length === 0)
            Camadas1.nombre_c7 = Camadas1.nombre_c7;
        else
            Camadas1.nombre_c7 = onombre_c7;

        var ohora_c7 = $('#Hora_c7').val()
        if (Object.keys(ohora_c7).length === 0)
            Camadas1.hora_c7 = Camadas1.hora_c7;
        else
            Camadas1.hora_c7 = ohora_c7;

        var osexo_c7 = $('#Sexo_c7').val()
        if (Object.keys(osexo_c7).length === 0)
            Camadas1.sexo_c7 = Camadas1.sexo_c7;
        else
            Camadas1.sexo_c7 = osexo_c7;

        var ocolor_c7 = $('#Color_c7').val()
        if (Object.keys(ocolor_c7).length === 0)
            Camadas1.color_c7 = Camadas1.color_c7;
        else
            Camadas1.color_c7 = ocolor_c7;

        var oposicion_c7 = $('#Posicion_c7').val()
        if (Object.keys(oposicion_c7).length === 0)
            Camadas1.posicion_c7 = Camadas1.posicion_c7;
        else
            Camadas1.posicion_c7 = oposicion_c7;

        var opeso_c7 = $('#Peso_c7').val()
        if (Object.keys(opeso_c7).length === 0)
            Camadas1.peso_c7 = Camadas1.peso_c7;
        else
            Camadas1.peso_c7 = opeso_c7;

        var onotas_c7 = $('#Notas_c7').val()
        if (Object.keys(onotas_c7).length === 0)
            Camadas1.notas_c7 = Camadas1.notas_c7;
        else
            Camadas1.notas_c7 = onotas_c7;

        var onombre_c8 = $('#Nombre_c8').val()
        if (Object.keys(onombre_c8).length === 0)
            Camadas1.nombre_c8 = Camadas1.nombre_c8;
        else
            Camadas1.nombre_c8 = onombre_c8;

        var ohora_c8 = $('#Hora_c8').val()
        if (Object.keys(ohora_c8).length === 0)
            Camadas1.hora_c8 = Camadas1.hora_c8;
        else
            Camadas1.hora_c8 = ohora_c8;

        var osexo_c8 = $('#Sexo_c8').val()
        if (Object.keys(osexo_c8).length === 0)
            Camadas1.sexo_c8 = Camadas1.sexo_c8;
        else
            Camadas1.sexo_c8 = osexo_c8;

        var ocolor_c8 = $('#Color_c8').val()
        if (Object.keys(ocolor_c8).length === 0)
            Camadas1.color_c8 = Camadas1.color_c8;
        else
            Camadas1.color_c8 = ocolor_c8;

        var oposicion_c8 = $('#Posicion_c8').val()
        if (Object.keys(oposicion_c8).length === 0)
            Camadas1.posicion_c8 = Camadas1.posicion_c8;
        else
            Camadas1.posicion_c8 = oposicion_c8;

        var opeso_c8 = $('#Peso_c8').val()
        if (Object.keys(opeso_c8).length === 0)
            Camadas1.peso_c8 = Camadas1.peso_c8;
        else
            Camadas1.peso_c8 = opeso_c8;

        var onotas_c8 = $('#Notas_c8').val()
        if (Object.keys(onotas_c8).length === 0)
            Camadas1.notas_c8 = Camadas1.notas_c8;
        else
            Camadas1.notas_c8 = onotas_c8;

        var onombre_c9 = $('#Nombre_c9').val()
        if (Object.keys(onombre_c9).length === 0)
            Camadas1.nombre_c9 = Camadas1.nombre_c9;
        else
            Camadas1.nombre_c9 = onombre_c9;

        var ohora_c9 = $('#Hora_c9').val()
        if (Object.keys(ohora_c9).length === 0)
            Camadas1.hora_c9 = Camadas1.hora_c9;
        else
            Camadas1.hora_c9 = ohora_c9;

        var osexo_c9 = $('#Sexo_c9').val()
        if (Object.keys(osexo_c9).length === 0)
            Camadas1.sexo_c9 = Camadas1.sexo_c9;
        else
            Camadas1.sexo_c9 = osexo_c9;

        var ocolor_c9 = $('#Color_c9').val()
        if (Object.keys(ocolor_c9).length === 0)
            Camadas1.color_c9 = Camadas1.color_c9;
        else
            Camadas1.color_c9 = ocolor_c9;

        var oposicion_c9 = $('#Posicion_c9').val()
        if (Object.keys(oposicion_c9).length === 0)
            Camadas1.posicion_c9 = Camadas1.posicion_c9;
        else
            Camadas1.posicion_c9 = oposicion_c9;

        var opeso_c9 = $('#Peso_c9').val()
        if (Object.keys(opeso_c9).length === 0)
            Camadas1.peso_c9 = Camadas1.peso_c9;
        else
            Camadas1.peso_c9 = opeso_c9;

        var onotas_c9 = $('#Notas_c9').val()
        if (Object.keys(onotas_c9).length === 0)
            Camadas1.notas_c9 = Camadas1.notas_c9;
        else
            Camadas1.notas_c9 = onotas_c9;

        var onombre_c10 = $('#Nombre_c10').val()
        if (Object.keys(onombre_c10).length === 0)
            Camadas1.nombre_c10 = Camadas1.nombre_c10;
        else
            Camadas1.nombre_c10 = onombre_c10;

        var ohora_c10 = $('#Hora_c10').val()
        if (Object.keys(ohora_c10).length === 0)
            Camadas1.hora_c10 = Camadas1.hora_c10;
        else
            Camadas1.hora_c10 = ohora_c10;

        var osexo_c10 = $('#Sexo_c10').val()
        if (Object.keys(osexo_c10).length === 0)
            Camadas1.sexo_c10 = Camadas1.sexo_c10;
        else
            Camadas1.sexo_c10 = osexo_c10;

        var ocolor_c10 = $('#Color_c10').val()
        if (Object.keys(ocolor_c10).length === 0)
            Camadas1.color_c10 = Camadas1.color_c10;
        else
            Camadas1.color_c10 = ocolor_c10;

        var oposicion_c10 = $('#Posicion_c10').val()
        if (Object.keys(oposicion_c10).length === 0)
            Camadas1.posicion_c10 = Camadas1.posicion_c10;
        else
            Camadas1.posicion_c10 = oposicion_c10;

        var opeso_c10 = $('#Peso_c10').val()
        if (Object.keys(opeso_c10).length === 0)
            Camadas1.peso_c10 = Camadas1.peso_c10;
        else
            Camadas1.peso_c10 = opeso_c10;

        var onotas_c10 = $('#Notas_c10').val()
        if (Object.keys(onotas_c10).length === 0)
            Camadas1.notas_c10 = Camadas1.notas_c10;
        else
            Camadas1.notas_c10 = onotas_c10;

        var onombre_c11 = $('#Nombre_c11').val()
        if (Object.keys(onombre_c11).length === 0)
            Camadas1.nombre_c11 = Camadas1.nombre_c11;
        else
            Camadas1.nombre_c11 = onombre_c11;

        var ohora_c11 = $('#Hora_c11').val()
        if (Object.keys(ohora_c11).length === 0)
            Camadas1.hora_c11 = Camadas1.hora_c11;
        else
            Camadas1.hora_c11 = ohora_c11;

        var osexo_c11 = $('#Sexo_c11').val()
        if (Object.keys(osexo_c11).length === 0)
            Camadas1.sexo_c11 = Camadas1.sexo_c11;
        else
            Camadas1.sexo_c11 = osexo_c11;

        var ocolor_c11 = $('#Color_c11').val()
        if (Object.keys(ocolor_c11).length === 0)
            Camadas1.color_c11 = Camadas1.color_c11;
        else
            Camadas1.color_c11 = ocolor_c11;

        var oposicion_c11 = $('#Posicion_c11').val()
        if (Object.keys(oposicion_c11).length === 0)
            Camadas1.posicion_c11 = Camadas1.posicion_c11;
        else
            Camadas1.posicion_c11 = oposicion_c11;

        var opeso_c11 = $('#Peso_c11').val()
        if (Object.keys(opeso_c11).length === 0)
            Camadas1.peso_c11 = Camadas1.peso_c11;
        else
            Camadas1.peso_c11 = opeso_c11;

        var onotas_c11 = $('#Notas_c11').val()
        if (Object.keys(onotas_c11).length === 0)
            Camadas1.notas_c11 = Camadas1.notas_c11;
        else
            Camadas1.notas_c11 = onotas_c11;

        var onombre_c12 = $('#Nombre_c12').val()
        if (Object.keys(onombre_c12).length === 0)
            Camadas1.nombre_c12 = Camadas1.nombre_c12;
        else
            Camadas1.nombre_c12 = onombre_c12;

        var ohora_c12 = $('#Hora_c12').val()
        if (Object.keys(ohora_c12).length === 0)
            Camadas1.hora_c12 = Camadas1.hora_c12;
        else
            Camadas1.hora_c12 = ohora_c12;

        var osexo_c12 = $('#Sexo_c12').val()
        if (Object.keys(osexo_c12).length === 0)
            Camadas1.sexo_c12 = Camadas1.sexo_c12;
        else
            Camadas1.sexo_c12 = osexo_c12;

        var ocolor_c12 = $('#Color_c12').val()
        if (Object.keys(ocolor_c12).length === 0)
            Camadas1.color_c12 = Camadas1.color_c12;
        else
            Camadas1.color_c12 = ocolor_c12;

        var oposicion_c12 = $('#Posicion_c12').val()
        if (Object.keys(oposicion_c12).length === 0)
            Camadas1.posicion_c12 = Camadas1.posicion_c12;
        else
            Camadas1.posicion_c12 = oposicion_c12;

        var opeso_c12 = $('#Peso_c12').val()
        if (Object.keys(opeso_c12).length === 0)
            Camadas1.peso_c12 = Camadas1.peso_c12;
        else
            Camadas1.peso_c12 = opeso_c12;

        var onotas_c12 = $('#Notas_c12').val()
        if (Object.keys(onotas_c12).length === 0)
            Camadas1.notas_c12 = Camadas1.notas_c12;
        else
            Camadas1.notas_c12 = onotas_c12;

        var onombre_c13 = $('#Nombre_c13').val()
        if (Object.keys(onombre_c13).length === 0)
            Camadas1.nombre_c13 = Camadas1.nombre_c13;
        else
            Camadas1.nombre_c13 = onombre_c13;

        var ohora_c13 = $('#Hora_c13').val()
        if (Object.keys(ohora_c13).length === 0)
            Camadas1.hora_c13 = Camadas1.hora_c13;
        else
            Camadas1.hora_c13 = ohora_c13;

        var osexo_c13 = $('#Sexo_c13').val()
        if (Object.keys(osexo_c13).length === 0)
            Camadas1.sexo_c13 = Camadas1.sexo_c13;
        else
            Camadas1.sexo_c13 = osexo_c13;

        var ocolor_c13 = $('#Color_c13').val()
        if (Object.keys(ocolor_c13).length === 0)
            Camadas1.color_c13 = Camadas1.color_c13;
        else
            Camadas1.color_c13 = ocolor_c13;

        var oposicion_c13 = $('#Posicion_c13').val()
        if (Object.keys(oposicion_c13).length === 0)
            Camadas1.posicion_c13 = Camadas1.posicion_c13;
        else
            Camadas1.posicion_c13 = oposicion_c13;

        var opeso_c13 = $('#Peso_c13').val()
        if (Object.keys(opeso_c13).length === 0)
            Camadas1.peso_c13 = Camadas1.peso_c13;
        else
            Camadas1.peso_c13 = opeso_c13;

        var onotas_c13 = $('#Notas_c13').val()
        if (Object.keys(onotas_c13).length === 0)
            Camadas1.notas_c13 = Camadas1.notas_c13;
        else
            Camadas1.notas_c13 = onotas_c13;

        Camadas1.idperro = Camadas1.idperro;
        Camadas1.idusuario = Camadas1.idusuario;
        Camadas1.nocamada = Camadas1.nocamada;

        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Usuario/ActualizarCamadas",
            data: JSON.stringify(
                {
                    'camadas': Camadas1,

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

    document.getElementById("Actualizar_camadas").addEventListener("click", e => {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos.listaCamadas !== null) {

                    var j = document.getElementById("Mascotas").value;

                    function Dating(fecha) {
                        var date = fecha;
                        if (!date)
                            return "";
                        var f = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10)),
                            dia = f.getDate(), mes = (parseInt(f.getMonth()) + 1), anio = f.getFullYear();
                        return ((dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio);
                    }

                    function Timming(tiempo) {
                        var time = tiempo;
                        if (!time)
                            return "";
                        var g = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10));
                        var hour = g.getHours();
                        var minute = g.getMinutes();
                        var second = g.getSeconds();
                        var temp = '' + ((hour > 12) ? hour - 12 : hour);
                        if (hour == 0)
                            temp = '12';
                        temp += ((minute < 10) ? ':0' : ':') + minute;
                        temp += ((second < 10) ? ':0' : ':') + second;
                        temp += (hour >= 12) ? ' P.M.' : ' A.M.';
                        return temp;
                    }

                    Camadas1.idperro = datos.listaCamadas[j].idperro;
                    Camadas1.idusuario = datos.listaCamadas[j].idUsuario;
                    Camadas1.nocamada = datos.listaCamadas[j].noCamada;
                    Camadas1.ultra1 = Dating(datos.listaCamadas[j].ultra1);
                    Camadas1.ultra2 = Dating(datos.listaCamadas[j].ultra2);
                    Camadas1.proge1 = Dating(datos.listaCamadas[j].proge1);
                    Camadas1.proge2 = Dating(datos.listaCamadas[j].proge2);
                    Camadas1.proge3 = Dating(datos.listaCamadas[j].proge3);
                    Camadas1.parto = Dating(datos.listaCamadas[j].parto);
                    Camadas1.inicio = Timming(datos.listaCamadas[j].inicio);
                    Camadas1.fin = Timming(datos.listaCamadas[j].fin);
                    Camadas1.cruza = Dating(datos.listaCamadas[j].cruza);
                    Camadas1.madre = datos.listaCamadas[j].madre;
                    Camadas1.padre = datos.listaCamadas[j].padre;
                    Camadas1.total = datos.listaCamadas[j].total;
                    Camadas1.vivos = datos.listaCamadas[j].vivos;
                    Camadas1.muertos = datos.listaCamadas[j].muertos;
                    Camadas1.nombre_c1 = datos.listaCamadas[j].nombre_c1;
                    Camadas1.hora_c1 = Timming(datos.listaCamadas[j].hora_c1);
                    Camadas1.sexo_c1 = datos.listaCamadas[j].sexo_c1;
                    Camadas1.color_c1 = datos.listaCamadas[j].color_c1;
                    Camadas1.posicion_c1 = datos.listaCamadas[j].posicion_c1;
                    Camadas1.peso_c1 = datos.listaCamadas[j].peso_c1;
                    Camadas1.notas_c1 = datos.listaCamadas[j].notas_c1;
                    Camadas1.nombre_c2 = datos.listaCamadas[j].nombre_c2;
                    Camadas1.hora_c2 = Timming(datos.listaCamadas[j].hora_c2);
                    Camadas1.sexo_c2 = datos.listaCamadas[j].sexo_c2;
                    Camadas1.color_c2 = datos.listaCamadas[j].color_c2;
                    Camadas1.posicion_c2 = datos.listaCamadas[j].posicion_c2;
                    Camadas1.peso_c2 = datos.listaCamadas[j].peso_c2;
                    Camadas1.notas_c2 = datos.listaCamadas[j].notas_c2;
                    Camadas1.nombre_c3 = datos.listaCamadas[j].nombre_c3;
                    Camadas1.hora_c3 = Timming(datos.listaCamadas[j].hora_c3);
                    Camadas1.sexo_c3 = datos.listaCamadas[j].sexo_c3;
                    Camadas1.color_c3 = datos.listaCamadas[j].color_c3;
                    Camadas1.posicion_c3 = datos.listaCamadas[j].posicion_c3;
                    Camadas1.peso_c3 = datos.listaCamadas[j].peso_c3;
                    Camadas1.notas_c3 = datos.listaCamadas[j].notas_c3;
                    Camadas1.nombre_c4 = datos.listaCamadas[j].nombre_c4;
                    Camadas1.hora_c4 = Timming(datos.listaCamadas[j].hora_c4);
                    Camadas1.sexo_c4 = datos.listaCamadas[j].sexo_c4;
                    Camadas1.color_c4 = datos.listaCamadas[j].color_c4;
                    Camadas1.posicion_c4 = datos.listaCamadas[j].posicion_c4;
                    Camadas1.peso_c4 = datos.listaCamadas[j].peso_c4;
                    Camadas1.notas_c4 = datos.listaCamadas[j].notas_c4;
                    Camadas1.nombre_c5 = datos.listaCamadas[j].nombre_c5;
                    Camadas1.hora_c5 = Timming(datos.listaCamadas[j].hora_c5);
                    Camadas1.sexo_c5 = datos.listaCamadas[j].sexo_c5;
                    Camadas1.color_c5 = datos.listaCamadas[j].color_c5;
                    Camadas1.posicion_c5 = datos.listaCamadas[j].posicion_c5;
                    Camadas1.peso_c5 = datos.listaCamadas[j].peso_c5;
                    Camadas1.notas_c5 = datos.listaCamadas[j].notas_c5;
                    Camadas1.nombre_c6 = datos.listaCamadas[j].nombre_c6;
                    Camadas1.hora_c6 = Timming(datos.listaCamadas[j].hora_c6);
                    Camadas1.sexo_c6 = datos.listaCamadas[j].sexo_c6;
                    Camadas1.color_c6 = datos.listaCamadas[j].color_c6;
                    Camadas1.posicion_c6 = datos.listaCamadas[j].posicion_c6;
                    Camadas1.peso_c6 = datos.listaCamadas[j].peso_c6;
                    Camadas1.notas_c6 = datos.listaCamadas[j].notas_c6;
                    Camadas1.nombre_c7 = datos.listaCamadas[j].nombre_c7;
                    Camadas1.hora_c7 = Timming(datos.listaCamadas[j].hora_c7);
                    Camadas1.sexo_c7 = datos.listaCamadas[j].sexo_c7;
                    Camadas1.color_c7 = datos.listaCamadas[j].color_c7;
                    Camadas1.posicion_c7 = datos.listaCamadas[j].posicion_c7;
                    Camadas1.peso_c7 = datos.listaCamadas[j].peso_c7;
                    Camadas1.notas_c7 = datos.listaCamadas[j].notas_c7;
                    Camadas1.nombre_c8 = datos.listaCamadas[j].nombre_c8;
                    Camadas1.hora_c8 = Timming(datos.listaCamadas[j].hora_c8);
                    Camadas1.sexo_c8 = datos.listaCamadas[j].sexo_c8;
                    Camadas1.color_c8 = datos.listaCamadas[j].color_c8;
                    Camadas1.posicion_c8 = datos.listaCamadas[j].posicion_c8;
                    Camadas1.peso_c8 = datos.listaCamadas[j].peso_c8;
                    Camadas1.notas_c8 = datos.listaCamadas[j].notas_c8;
                    Camadas1.nombre_c9 = datos.listaCamadas[j].nombre_c9;
                    Camadas1.hora_c9 = Timming(datos.listaCamadas[j].hora_c9);
                    Camadas1.sexo_c9 = datos.listaCamadas[j].sexo_c9;
                    Camadas1.color_c9 = datos.listaCamadas[j].color_c9;
                    Camadas1.posicion_c9 = datos.listaCamadas[j].posicion_c9;
                    Camadas1.peso_c9 = datos.listaCamadas[j].peso_c9;
                    Camadas1.notas_c9 = datos.listaCamadas[j].notas_c9;
                    Camadas1.nombre_c10 = datos.listaCamadas[j].nombre_c10;
                    Camadas1.hora_c10 = Timming(datos.listaCamadas[j].hora_c10);
                    Camadas1.sexo_c10 = datos.listaCamadas[j].sexo_c10;
                    Camadas1.color_c10 = datos.listaCamadas[j].color_c10;
                    Camadas1.posicion_c10 = datos.listaCamadas[j].posicion_c10;
                    Camadas1.peso_c10 = datos.listaCamadas[j].peso_c10;
                    Camadas1.notas_c10 = datos.listaCamadas[j].notas_c10;
                    Camadas1.nombre_c11 = datos.listaCamadas[j].nombre_c11;
                    Camadas1.hora_c11 = Timming(datos.listaCamadas[j].hora_c11);
                    Camadas1.sexo_c11 = datos.listaCamadas[j].sexo_c11;
                    Camadas1.color_c11 = datos.listaCamadas[j].color_c11;
                    Camadas1.posicion_c11 = datos.listaCamadas[j].posicion_c11;
                    Camadas1.peso_c11 = datos.listaCamadas[j].peso_c11;
                    Camadas1.notas_c11 = datos.listaCamadas[j].notas_c11;
                    Camadas1.nombre_c12 = datos.listaCamadas[j].nombre_c12;
                    Camadas1.hora_c12 = Timming(datos.listaCamadas[j].hora_c12);
                    Camadas1.sexo_c12 = datos.listaCamadas[j].sexo_c12;
                    Camadas1.color_c12 = datos.listaCamadas[j].color_c12;
                    Camadas1.posicion_c12 = datos.listaCamadas[j].posicion_c12;
                    Camadas1.peso_c12 = datos.listaCamadas[j].peso_c12;
                    Camadas1.notas_c12 = datos.listaCamadas[j].notas_c12;
                    Camadas1.nombre_c13 = datos.listaCamadas[j].nombre_c13;
                    Camadas1.hora_c13 = Timming(datos.listaCamadas[j].hora_c13);
                    Camadas1.sexo_c13 = datos.listaCamadas[j].sexo_c13;
                    Camadas1.color_c13 = datos.listaCamadas[j].color_c13;
                    Camadas1.posicion_c13 = datos.listaCamadas[j].posicion_c13;
                    Camadas1.peso_c13 = datos.listaCamadas[j].peso_c13;
                    Camadas1.notas_c13 = datos.listaCamadas[j].notas_c13;


                    mostrartabla7(Camadas1);

                }
                else {

                    var j = document.getElementById("Mascotas").value;

                    if (j !== null) {

                        function Dating(fecha) {
                            var date = fecha;
                            if (!date)
                                return "";
                            var f = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10)),
                                dia = f.getDate(), mes = (parseInt(f.getMonth()) + 1), anio = f.getFullYear();
                            return ((dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio);
                        }

                        mostrartabla7(Camadas1);
                    }

                }
                
            }
        })

    })

    //ACTUALIZAR LOS DATOS DE LA TABLA DE COMPETENCIAS
    
    const agregarcompetencias = document.getElementById("actualizar_tablaCompetencias");
    agregarcompetencias.onclick = function () {

        var oobediencia = $('#Obediencia').val()
        if (Object.keys(oobediencia).length === 0)
            Competencias1.obediencia = Competencias1.obediencia;
        else
            Competencias1.obediencia = oobediencia;

        var ocaminata = $('#Caminata').val()
        if (Object.keys(ocaminata).length === 0)
            Competencias1.caminata = Competencias1.caminata;
        else
            Competencias1.caminata = ocaminata;

        var ojuego = $('#Juego').val()
        if (Object.keys(ojuego).length === 0)
            Competencias1.juego = Competencias1.juego;
        else
            Competencias1.juego = ojuego;

        var oterapia = $('#Terapia').val()
        if (Object.keys(oterapia).length === 0)
            Competencias1.terapia = Competencias1.terapia;
        else
            Competencias1.terapia = oterapia;

        var otitulo1 = $('#Titulo1').val()
        if (Object.keys(otitulo1).length === 0)
            Competencias1.titulo1 = Competencias1.titulo1;
        else
            Competencias1.titulo1 = otitulo1;

        var ofecha1 = $('#Fecha1').val()
        if (Object.keys(ofecha1).length === 0)
            Competencias1.fecha1 = Competencias1.fecha1;
        else
            Competencias1.fecha1 = ofecha1;

        var olugar1 = $('#Lugar1').val()
        if (Object.keys(olugar1).length === 0)
            Competencias1.lugar1 = Competencias1.lugar1;
        else
            Competencias1.lugar1 = olugar1;

        var ojuez1 = $('#Juez1').val()
        if (Object.keys(ojuez1).length === 0)
            Competencias1.juez1 = Competencias1.juez1;
        else
            Competencias1.juez1 = ojuez1;

        var oposicion1 = $('#Posicion1').val()
        if (Object.keys(oposicion1).length === 0)
            Competencias1.posicion1 = Competencias1.posicion1;
        else
            Competencias1.posicion1 = oposicion1;

        var oclase1 = $('#Clase1').val()
        if (Object.keys(oclase1).length === 0)
            Competencias1.clase1 = Competencias1.clase1;
        else
            Competencias1.clase1 = oclase1;

        var ocalificacion1 = $('#Calificacion1').val()
        if (Object.keys(ocalificacion1).length === 0)
            Competencias1.calificacion1 = Competencias1.calificacion1;
        else
            Competencias1.calificacion1 = ocalificacion1;

        var otitulo2 = $('#Titulo2').val()
        if (Object.keys(otitulo2).length === 0)
            Competencias1.titulo2 = Competencias1.titulo2;
        else
            Competencias1.titulo2 = otitulo2;

        var ofecha2 = $('#Fecha2').val()
        if (Object.keys(ofecha2).length === 0)
            Competencias1.fecha2 = Competencias1.fecha2;
        else
            Competencias1.fecha2 = ofecha2;

        var olugar2 = $('#Lugar2').val()
        if (Object.keys(olugar2).length === 0)
            Competencias1.lugar2 = Competencias1.lugar2;
        else
            Competencias1.lugar2 = olugar2;

        var ojuez2 = $('#Juez2').val()
        if (Object.keys(ojuez2).length === 0)
            Competencias1.juez2 = Competencias1.juez2;
        else
            Competencias1.juez2 = ojuez2;

        var oposicion2 = $('#Posicion2').val()
        if (Object.keys(oposicion2).length === 0)
            Competencias1.posicion2 = Competencias1.posicion2;
        else
            Competencias1.posicion2 = oposicion2;

        var oclase2 = $('#Clase2').val()
        if (Object.keys(oclase2).length === 0)
            Competencias1.clase2 = Competencias1.clase2;
        else
            Competencias1.clase2 = oclase2;

        var ocalificacion2 = $('#Calificacion2').val()
        if (Object.keys(ocalificacion2).length === 0)
            Competencias1.calificacion2 = Competencias1.calificacion2;
        else
            Competencias1.calificacion2 = ocalificacion2;

        var otitulo3 = $('#Titulo3').val()
        if (Object.keys(otitulo3).length === 0)
            Competencias1.titulo3 = Competencias1.titulo3;
        else
            Competencias1.titulo3 = otitulo3;

        var ofecha3 = $('#Fecha3').val()
        if (Object.keys(ofecha3).length === 0)
            Competencias1.fecha3 = Competencias1.fecha3;
        else
            Competencias1.fecha3 = ofecha3;

        var olugar3 = $('#Lugar3').val()
        if (Object.keys(olugar3).length === 0)
            Competencias1.lugar3 = Competencias1.lugar3;
        else
            Competencias1.lugar3 = olugar3;

        var ojuez3 = $('#Juez3').val()
        if (Object.keys(ojuez3).length === 0)
            Competencias1.juez3 = Competencias1.juez3;
        else
            Competencias1.juez3 = ojuez3;

        var oposicion3 = $('#Posicion3').val()
        if (Object.keys(oposicion3).length === 0)
            Competencias1.posicion3 = Competencias1.posicion3;
        else
            Competencias1.posicion3 = oposicion3;

        var oclase3 = $('#Clase3').val()
        if (Object.keys(oclase3).length === 0)
            Competencias1.clase3 = Competencias1.clase3;
        else
            Competencias1.clase3 = oclase3;

        var ocalificacion3 = $('#Calificacion3').val()
        if (Object.keys(ocalificacion3).length === 0)
            Competencias1.calificacion3 = Competencias1.calificacion3;
        else
            Competencias1.calificacion3 = ocalificacion3;

        var otitulo4 = $('#Titulo4').val()
        if (Object.keys(otitulo4).length === 0)
            Competencias1.titulo4 = Competencias1.titulo4;
        else
            Competencias1.titulo4 = otitulo4;

        var ofecha4 = $('#Fecha4').val()
        if (Object.keys(ofecha4).length === 0)
            Competencias1.fecha4 = Competencias1.fecha4;
        else
            Competencias1.fecha4 = ofecha4;

        var olugar4 = $('#Lugar4').val()
        if (Object.keys(olugar4).length === 0)
            Competencias1.lugar4 = Competencias1.lugar4;
        else
            Competencias1.lugar4 = olugar4;

        var ojuez4 = $('#Juez4').val()
        if (Object.keys(ojuez4).length === 0)
            Competencias1.juez4 = Competencias1.juez4;
        else
            Competencias1.juez4 = ojuez4;

        var oposicion4 = $('#Posicion4').val()
        if (Object.keys(oposicion4).length === 0)
            Competencias1.posicion4 = Competencias1.posicion4;
        else
            Competencias1.posicion4 = oposicion4;

        var oclase4 = $('#Clase4').val()
        if (Object.keys(oclase4).length === 0)
            Competencias1.clase4 = Competencias1.clase4;
        else
            Competencias1.clase4 = oclase4;

        var ocalificacion4 = $('#Calificacion4').val()
        if (Object.keys(ocalificacion4).length === 0)
            Competencias1.calificacion4 = Competencias1.calificacion4;
        else
            Competencias1.calificacion4 = ocalificacion4;

        var otitulo5 = $('#Titulo5').val()
        if (Object.keys(otitulo5).length === 0)
            Competencias1.titulo5 = Competencias1.titulo5;
        else
            Competencias1.titulo5 = otitulo5;

        var ofecha5 = $('#Fecha5').val()
        if (Object.keys(ofecha5).length === 0)
            Competencias1.fecha5 = Competencias1.fecha5;
        else
            Competencias1.fecha5 = ofecha5;

        var olugar5 = $('#Lugar5').val()
        if (Object.keys(olugar5).length === 0)
            Competencias1.lugar5 = Competencias1.lugar5;
        else
            Competencias1.lugar5 = olugar5;

        var ojuez5 = $('#Juez5').val()
        if (Object.keys(ojuez5).length === 0)
            Competencias1.juez5 = Competencias1.juez5;
        else
            Competencias1.juez5 = ojuez5;

        var oposicion5 = $('#Posicion5').val()
        if (Object.keys(oposicion5).length === 0)
            Competencias1.posicion5 = Competencias1.posicion5;
        else
            Competencias1.posicion5 = oposicion5;

        var oclase5 = $('#Clase5').val()
        if (Object.keys(oclase5).length === 0)
            Competencias1.clase5 = Competencias1.clase5;
        else
            Competencias1.clase5 = oclase5;

        var ocalificacion5 = $('#Calificacion5').val()
        if (Object.keys(ocalificacion5).length === 0)
            Competencias1.calificacion5 = Competencias1.calificacion5;
        else
            Competencias1.calificacion5 = ocalificacion5;

        var otitulo6 = $('#Titulo6').val()
        if (Object.keys(otitulo6).length === 0)
            Competencias1.titulo6 = Competencias1.titulo6;
        else
            Competencias1.titulo6 = otitulo6;

        var ofecha6 = $('#Fecha6').val()
        if (Object.keys(ofecha6).length === 0)
            Competencias1.fecha6 = Competencias1.fecha6;
        else
            Competencias1.fecha6 = ofecha6;

        var olugar6 = $('#Lugar6').val()
        if (Object.keys(olugar6).length === 0)
            Competencias1.lugar6 = Competencias1.lugar6;
        else
            Competencias1.lugar6 = olugar6;

        var ojuez6 = $('#Juez6').val()
        if (Object.keys(ojuez6).length === 0)
            Competencias1.juez6 = Competencias1.juez6;
        else
            Competencias1.juez6 = ojuez6;

        var oposicion6 = $('#Posicion6').val()
        if (Object.keys(oposicion6).length === 0)
            Competencias1.posicion6 = Competencias1.posicion6;
        else
            Competencias1.posicion6 = oposicion6;

        var oclase6 = $('#Clase6').val()
        if (Object.keys(oclase6).length === 0)
            Competencias1.clase6 = Competencias1.clase6;
        else
            Competencias1.clase6 = oclase6;

        var ocalificacion6 = $('#Calificacion6').val()
        if (Object.keys(ocalificacion6).length === 0)
            Competencias1.calificacion6 = Competencias1.calificacion6;
        else
            Competencias1.calificacion6 = ocalificacion6;


        var onombre1 = $('#Nombre1').val()
        if (Object.keys(onombre1).length === 0)
            Competencias1.nombre1 = Competencias1.nombre1;
        else
            Competencias1.nombre1 = onombre1;

        var ocuando1 = $('#Cuando1').val()
        if (Object.keys(ocuando1).length === 0)
            Competencias1.cuando1 = Competencias1.cuando1;
        else
            Competencias1.cuando1 = ocuando1;

        var odonde1 = $('#Donde1').val()
        if (Object.keys(odonde1).length === 0)
            Competencias1.donde1 = Competencias1.donde1;
        else
            Competencias1.donde1 = odonde1;

        var oque1 = $('#Que1').val()
        if (Object.keys(oque1).length === 0)
            Competencias1.que1 = Competencias1.que1;
        else
            Competencias1.que1 = oque1;

        var onombre2 = $('#Nombre2').val()
        if (Object.keys(onombre2).length === 0)
            Competencias1.nombre2 = Competencias1.nombre2;
        else
            Competencias1.nombre2 = onombre2;

        var ocuando2 = $('#Cuando2').val()
        if (Object.keys(ocuando2).length === 0)
            Competencias1.cuando2 = Competencias1.cuando2;
        else
            Competencias1.cuando2 = ocuando2;

        var odonde2 = $('#Donde2').val()
        if (Object.keys(odonde2).length === 0)
            Competencias1.donde2 = Competencias1.donde2;
        else
            Competencias1.donde2 = odonde2;

        var oque2 = $('#Que2').val()
        if (Object.keys(oque2).length === 0)
            Competencias1.que2 = Competencias1.que2;
        else
            Competencias1.que2 = oque2;

        var onombre3 = $('#Nombre3').val()
        if (Object.keys(onombre3).length === 0)
            Competencias1.nombre3 = Competencias1.nombre3;
        else
            Competencias1.nombre3 = onombre3;

        var ocuando3 = $('#Cuando3').val()
        if (Object.keys(ocuando3).length === 0)
            Competencias1.cuando3 = Competencias1.cuando3;
        else
            Competencias1.cuando3 = ocuando3;

        var odonde3 = $('#Donde3').val()
        if (Object.keys(odonde3).length === 0)
            Competencias1.donde3 = Competencias1.donde3;
        else
            Competencias1.donde3 = odonde3;

        var oque3 = $('#Que3').val()
        if (Object.keys(oque3).length === 0)
            Competencias1.que3 = Competencias1.que3;
        else
            Competencias1.que3 = oque3;

        var onombre4 = $('#Nombre4').val()
        if (Object.keys(onombre4).length === 0)
            Competencias1.nombre4 = Competencias1.nombre4;
        else
            Competencias1.nombre4 = onombre4;

        var ocuando4 = $('#Cuando4').val()
        if (Object.keys(ocuando4).length === 0)
            Competencias1.cuando4 = Competencias1.cuando4;
        else
            Competencias1.cuando4 = ocuando4;

        var odonde4 = $('#Donde4').val()
        if (Object.keys(odonde4).length === 0)
            Competencias1.donde4 = Competencias1.donde4;
        else
            Competencias1.donde4 = odonde4;

        var oque4 = $('#Que4').val()
        if (Object.keys(oque4).length === 0)
            Competencias1.que4 = Competencias1.que4;
        else
            Competencias1.que4 = oque4;

        var onombre5 = $('#Nombre5').val()
        if (Object.keys(onombre5).length === 0)
            Competencias1.nombre5 = Competencias1.nombre5;
        else
            Competencias1.nombre5 = onombre5;

        var ocuando5 = $('#Cuando5').val()
        if (Object.keys(ocuando5).length === 0)
            Competencias1.cuando5 = Competencias1.cuando5;
        else
            Competencias1.cuando5 = ocuando5;

        var odonde5 = $('#Donde5').val()
        if (Object.keys(odonde5).length === 0)
            Competencias1.donde5 = Competencias1.donde5;
        else
            Competencias1.donde5 = odonde5;

        var oque5 = $('#Que5').val()
        if (Object.keys(oque5).length === 0)
            Competencias1.que5 = Competencias1.que5;
        else
            Competencias1.que5 = oque5;

        Competencias1.idperro = Competencias1.idperro;
        Competencias1.idusuario = Competencias1.idusuario;

        
        $.ajax({
            type: "POST",
            url: urlPathSystem + "/Usuario/ActualizarCompetencias",
            data: JSON.stringify(
                {
                    'competencias': Competencias1,

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

    document.getElementById("Actualizar_competencias").addEventListener("click", e => {

        $.ajax({
            type: "POST",
            url: "/Membresias/ObtenerInformacionUsuario",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (datos) {

                if (datos.listaCompetencias !== null) {

                    var j = document.getElementById("Mascotas").value;

                    function Dating(fecha) {
                        var date = fecha;
                        if (!date)
                            return "";
                        var f = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10)),
                            dia = f.getDate(), mes = (parseInt(f.getMonth()) + 1), anio = f.getFullYear();
                        return ((dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio);
                    }

                    Competencias1.idperro = datos.listaCompetencias[j].idperro;
                    Competencias1.idusuario = datos.listaCompetencias[j].idUsuario;
                    Competencias1.obediencia = datos.listaCompetencias[j].obediencia;
                    Competencias1.caminata = datos.listaCompetencias[j].caminata;
                    Competencias1.juego = datos.listaCompetencias[j].juego;
                    Competencias1.terapia = datos.listaCompetencias[j].terapia;
                    Competencias1.titulo1 = datos.listaCompetencias[j].titulo1;
                    Competencias1.fecha1 = Dating(datos.listaCompetencias[j].fecha1);
                    Competencias1.lugar1 = datos.listaCompetencias[j].lugar1;
                    Competencias1.juez1 = datos.listaCompetencias[j].juez1;
                    Competencias1.posicion1 = datos.listaCompetencias[j].posicion1;
                    Competencias1.clase1 = datos.listaCompetencias[j].clase1;
                    Competencias1.calificacion1 = datos.listaCompetencias[j].calificacion1;
                    Competencias1.titulo2 = datos.listaCompetencias[j].titulo2;
                    Competencias1.fecha2 = Dating(datos.listaCompetencias[j].fecha2);
                    Competencias1.lugar2 = datos.listaCompetencias[j].lugar2;
                    Competencias1.juez2 = datos.listaCompetencias[j].juez2;
                    Competencias1.posicion2 = datos.listaCompetencias[j].posicion2;
                    Competencias1.clase2 = datos.listaCompetencias[j].clase2;
                    Competencias1.calificacion2 = datos.listaCompetencias[j].calificacion2;
                    Competencias1.titulo3 = datos.listaCompetencias[j].titulo3;
                    Competencias1.fecha3 = Dating(datos.listaCompetencias[j].fecha3);
                    Competencias1.lugar3 = datos.listaCompetencias[j].lugar3;
                    Competencias1.juez3 = datos.listaCompetencias[j].juez3;
                    Competencias1.posicion3 = datos.listaCompetencias[j].posicion3;
                    Competencias1.clase3 = datos.listaCompetencias[j].clase3;
                    Competencias1.calificacion3 = datos.listaCompetencias[j].calificacion3;
                    Competencias1.titulo4 = datos.listaCompetencias[j].titulo4;
                    Competencias1.fecha4 = Dating(datos.listaCompetencias[j].fecha4);
                    Competencias1.lugar4 = datos.listaCompetencias[j].lugar4;
                    Competencias1.juez4 = datos.listaCompetencias[j].juez4;
                    Competencias1.posicion4 = datos.listaCompetencias[j].posicion4;
                    Competencias1.clase4 = datos.listaCompetencias[j].clase4;
                    Competencias1.calificacion4 = datos.listaCompetencias[j].calificacion4;
                    Competencias1.titulo5 = datos.listaCompetencias[j].titulo5;
                    Competencias1.fecha5 = Dating(datos.listaCompetencias[j].fecha5);
                    Competencias1.lugar5 = datos.listaCompetencias[j].lugar5;
                    Competencias1.juez5 = datos.listaCompetencias[j].juez5;
                    Competencias1.posicion5 = datos.listaCompetencias[j].posicion5;
                    Competencias1.clase5 = datos.listaCompetencias[j].clase5;
                    Competencias1.calificacion5 = datos.listaCompetencias[j].calificacion5;
                    Competencias1.titulo6 = datos.listaCompetencias[j].titulo6;
                    Competencias1.fecha6 = Dating(datos.listaCompetencias[j].fecha6);
                    Competencias1.lugar6 = datos.listaCompetencias[j].lugar6;
                    Competencias1.juez6 = datos.listaCompetencias[j].juez6;
                    Competencias1.posicion6 = datos.listaCompetencias[j].posicion6;
                    Competencias1.clase6 = datos.listaCompetencias[j].clase6;
                    Competencias1.calificacion6 = datos.listaCompetencias[j].calificacion6;
                    Competencias1.nombre1 = datos.listaCompetencias[j].nombre1;
                    Competencias1.donde1 = datos.listaCompetencias[j].donde1;
                    Competencias1.cuando1 = datos.listaCompetencias[j].cuando1;
                    Competencias1.que1 = datos.listaCompetencias[j].que1;
                    Competencias1.nombre2 = datos.listaCompetencias[j].nombre2;
                    Competencias1.donde2 = datos.listaCompetencias[j].donde2;
                    Competencias1.cuando2 = datos.listaCompetencias[j].cuando2;
                    Competencias1.que2 = datos.listaCompetencias[j].que2;
                    Competencias1.nombre3 = datos.listaCompetencias[j].nombre3;
                    Competencias1.donde3 = datos.listaCompetencias[j].donde3;
                    Competencias1.cuando3 = datos.listaCompetencias[j].cuando3;
                    Competencias1.que3 = datos.listaCompetencias[j].que3;
                    Competencias1.nombre4 = datos.listaCompetencias[j].nombre4;
                    Competencias1.donde4 = datos.listaCompetencias[j].donde4;
                    Competencias1.cuando4 = datos.listaCompetencias[j].cuando4;
                    Competencias1.que4 = datos.listaCompetencias[j].que4;
                    Competencias1.nombre5 = datos.listaCompetencias[j].nombre5;
                    Competencias1.donde5 = datos.listaCompetencias[j].donde5;
                    Competencias1.cuando5 = datos.listaCompetencias[j].cuando5;
                    Competencias1.que5 = datos.listaCompetencias[j].que5;
                    
                    mostrartabla8(Competencias1);

                }
                else {

                    var j = document.getElementById("Mascotas").value;

                    if (j !== null) {

                        function Dating(fecha) {
                            var date = fecha;
                            if (!date)
                                return "";
                            var f = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10)),
                                dia = f.getDate(), mes = (parseInt(f.getMonth()) + 1), anio = f.getFullYear();
                            return ((dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio);
                        }

                        mostrartabla8(Competencias1);
                    }

                }

            }
        })

    })

})


