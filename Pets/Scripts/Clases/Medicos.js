export default class Medico {
    constructor(idperro, idusuario, vacunas, desparasitacioninterna, desparasitacionexterna, medicamentos, tratamientos, dieta, cirugias, alergias, celo, esterilizacion) {
        this.idperro = idperro
        this.idusuario = idusuario
        this.vacunas = vacunas
        this.desparasitacioninterna = desparasitacioninterna
        this.desparasitacionexterna = desparasitacionexterna
        this.medicamentos = medicamentos
        this.tratamientos = tratamientos
        this.dieta = dieta
        this.cirugias = cirugias
        this.alergias = alergias
        this.celo = celo
        this.esterilizacion = esterilizacion
    }

    getIdPerro() {
        return this.idperro
    }

    getIdUsuario() {
        return this.idusuario
    }

    getVacunas() {
        return this.vacunas
    }

    getDesparasitacionInterna() {
        return this.desparasitacioninterna
    }

    getDesparasitacionExterna() {
        return this.desparasitacionexterna
    }

    getMedicamentos() {
        return this.medicamentos
    }

    getTratamientos() {
        return this.tratamientos
    }

    getDieta() {
        return this.dieta
    }

    getCirugias() {
        return this.cirugias
    }

    getAlergias() {
        return this.alergias
    }

    getCelo() {
        return this.celo
    }

    getEsterilizacion() {
        return this.esterilizacion
    }

    setIdPerro(idperro) {
        this.idperro = idperro
    }

    setIdUsuario(idusuario) {
        this.idusuario = idusuario
    }

    setVacunas(vacunas) {
        this.vacunas = vacunas
    }

    setDesparasitacionInterna(desparacitacioninterna) {
        this.desparasitacioninterna = desparacitacioninterna
    }

    setDesparasitacionExterna(desparacitacionexterna) {
        this.desparasitacionexterna = desparacitacionexterna
    }

    setMedicamentos(medicamentos) {
        this.medicamentos = medicamentos
    }

    setTratamientos(tratamientos) {
        this.tratamientos = tratamientos
    }

    setDieta(dieta) {
        this.dieta = dieta
    }

    setCirugias(cirugias) {
        this.cirugias = cirugias
    }

    setAlergias(alergias) {
        this.alergias = alergias
    }

    setCelo(celo) {
        this.celo = celo
    }

    setEsterilizacion(esterilizacion) {
        this.esterilizacion = esterilizacion
    }
}