export default function mostrartabla6(_vacuna) {

    const e1 = document.getElementById("Rabia_date_l");
    e1.innerText = `${_vacuna.getRabia_date()}`; 

    const e12 = document.getElementById("Rabia_prox_l");
    e12.innerText = `${_vacuna.getRabia_prox()}`;

    const e13 = document.getElementById("Rabia_form_l");
    e13.innerText = `${_vacuna.getRabia_form()}`;

    const e14 = document.getElementById("Rabia_vet_l");
    e14.innerText = `${_vacuna.getRabia_vet()}`;

    const e21 = document.getElementById("Parvo_date_l");
    e21.innerText = `${_vacuna.getParvo_date()}`;

    const e22 = document.getElementById("Parvo_prox_l");
    e22.innerText = `${_vacuna.getParvo_prox()}`;

    const e23 = document.getElementById("Parvo_form_l");
    e23.innerText = `${_vacuna.getParvo_form()}`;

    const e24 = document.getElementById("Parvo_vet_l");
    e24.innerText = `${_vacuna.getParvo_vet()}`;

    const e31 = document.getElementById("Diste_date_l");
    e31.innerText = `${_vacuna.getDiste_date()}`;

    const e32 = document.getElementById("Diste_prox_l");
    e32.innerText = `${_vacuna.getDiste_prox()}`;

    const e33 = document.getElementById("Diste_form_l");
    e33.innerText = `${_vacuna.getDiste_form()}`;

    const e34 = document.getElementById("Diste_vet_l");
    e34.innerText = `${_vacuna.getDiste_vet()}`;

    const e41 = document.getElementById("Adeno_date_l");
    e41.innerText = `${_vacuna.getAdeno_date()}`;

    const e42 = document.getElementById("Adeno_prox_l");
    e42.innerText = `${_vacuna.getAdeno_prox()}`;

    const e43 = document.getElementById("Adeno_form_l");
    e43.innerText = `${_vacuna.getAdeno_form()}`;

    const e44 = document.getElementById("Adeno_vet_l");
    e44.innerText = `${_vacuna.getAdeno_vet()}`;

    const e51 = document.getElementById("Influ_date_l");
    e51.innerText = `${_vacuna.getInflu_date()}`;

    const e52 = document.getElementById("Influ_prox_l");
    e52.innerText = `${_vacuna.getInflu_prox()}`;

    const e53 = document.getElementById("Influ_form_l");
    e53.innerText = `${_vacuna.getInflu_form()}`;

    const e54 = document.getElementById("Influ_vet_l");
    e54.innerText = `${_vacuna.getInflu_vet()}`;

    const e61 = document.getElementById("Lepto_date_l");
    e61.innerText = `${_vacuna.getLepto_date()}`;

    const e62 = document.getElementById("Lepto_prox_l");
    e62.innerText = `${_vacuna.getLepto_prox()}`;

    const e63 = document.getElementById("Lepto_form_l");
    e63.innerText = `${_vacuna.getLepto_form()}`;

    const e64 = document.getElementById("Lepto_vet_l");
    e64.innerText = `${_vacuna.getLepto_vet()}`;

    const e71 = document.getElementById("Borde_date_l");
    e71.innerText = `${_vacuna.getBorde_date()}`;

    const e72 = document.getElementById("Borde_prox_l");
    e72.innerText = `${_vacuna.getBorde_prox()}`;

    const e73 = document.getElementById("Borde_form_l");
    e73.innerText = `${_vacuna.getBorde_form()}`;

    const e74 = document.getElementById("Borde_vet_l");
    e74.innerText = `${_vacuna.getBorde_vet()}`;

    const e81 = document.getElementById("Lyme_date_l");
    e81.innerText = `${_vacuna.getDisea_date()}`;

    const e82 = document.getElementById("Lyme_prox_l");
    e82.innerText = `${_vacuna.getDisea_prox()}`;

    const e83 = document.getElementById("Lyme_form_l");
    e83.innerText = `${_vacuna.getDisea_form()}`;

    const e84 = document.getElementById("Lyme_vet_l");
    e84.innerText = `${_vacuna.getDisea_vet()}`;

    const e91 = document.getElementById("Otr1_name_l");
    e91.innerText = `${_vacuna.getOtr1_nombre()}`;

    const e92 = document.getElementById("Otr1_date_l");
    e92.innerText = `${_vacuna.getOtr1_date()}`;

    const e93 = document.getElementById("Otr1_prox_l");
    e93.innerText = `${_vacuna.getOtr1_prox()}`;

    const e94 = document.getElementById("Otr1_form_l");
    e94.innerText = `${_vacuna.getOtr1_form()}`;

    const e95 = document.getElementById("Otr1_vet_l");
    e95.innerText = `${_vacuna.getOtr1_vet()}`;

    const e101 = document.getElementById("Otr2_name_l");
    e101.innerText = `${_vacuna.getOtr2_nombre()}`;

    const e102 = document.getElementById("Otr2_date_l");
    e102.innerText = `${_vacuna.getOtr2_date()}`;

    const e103 = document.getElementById("Otr2_prox_l");
    e103.innerText = `${_vacuna.getOtr2_prox()}`;

    const e104 = document.getElementById("Otr2_form_l");
    e104.innerText = `${_vacuna.getOtr2_form()}`;

    const e105 = document.getElementById("Otr2_vet_l");
    e105.innerText = `${_vacuna.getOtr2_vet()}`;

    const e111 = document.getElementById("Otr3_name_l");
    e111.innerText = `${_vacuna.getOtr3_nombre()}`;

    const e112 = document.getElementById("Otr3_date_l");
    e112.innerText = `${_vacuna.getOtr3_date()}`;

    const e113 = document.getElementById("Otr3_prox_l");
    e113.innerText = `${_vacuna.getOtr3_prox()}`;

    const e114 = document.getElementById("Otr3_form_l");
    e114.innerText = `${_vacuna.getOtr3_form()}`;

    const e115 = document.getElementById("Otr3_vet_l");
    e115.innerText = `${_vacuna.getOtr3_vet()}`;

    const e121 = document.getElementById("Otr4_name_l");
    e121.innerText = `${_vacuna.getOtr4_nombre()}`;

    const e122 = document.getElementById("Otr4_date_l");
    e122.innerText = `${_vacuna.getOtr4_date()}`;

    const e123 = document.getElementById("Otr4_prox_l");
    e123.innerText = `${_vacuna.getOtr4_prox()}`;

    const e124 = document.getElementById("Otr4_form_l");
    e124.innerText = `${_vacuna.getOtr4_form()}`;

    const e125 = document.getElementById("Otr4_vet_l");
    e125.innerText = `${_vacuna.getOtr4_vet()}`;

    const e131 = document.getElementById("Otr5_name_l");
    e131.innerText = `${_vacuna.getOtr5_nombre()}`;

    const e132 = document.getElementById("Otr5_date_l");
    e132.innerText = `${_vacuna.getOtr5_date()}`;

    const e133 = document.getElementById("Otr5_prox_l");
    e133.innerText = `${_vacuna.getOtr5_prox()}`;

    const e134 = document.getElementById("Otr5_form_l");
    e134.innerText = `${_vacuna.getOtr5_form()}`;

    const e135 = document.getElementById("Otr5_vet_l");
    e135.innerText = `${_vacuna.getOtr5_vet()}`;
    
}