export default class Entrenamiento {
    constructor(idperro, idusuario, certificados, competencias, hcelos, hcruzas, camadas, celocruceactual, camadaactual, proxcelo, cuidados, proxeventos, entrenamientos, titulos) {
        this.idperro = idperro
        this.idusuario = idusuario
        this.certificados = certificados
        this.competencias = competencias
        this.hcelos = hcelos
        this.hcruzas = hcruzas
        this.camadas = camadas
        this.celocruceactual = celocruceactual
        this.camadaactual = camadaactual
        this.proxcelo = proxcelo
        this.cuidados = cuidados
        this.proxeventos = proxeventos
        this.entrenamientos = entrenamientos
        this.titulos = titulos 
    }

    getIdPerro() {
        return this.idperro
    }

    getIdUsuario() {
        return this.idusuario
    }

    getCertificados() {
        return this.certificados
    }

    getCompetencias() {
        return this.competencias
    }

    getHcelos() {
        return this.hcelos
    }

    getHcruzas() {
        return this.hcruzas
    }

    getCamadas() {
        return this.camadas
    }

    getCeloCruceActual() {
        return this.celocruceactual
    }

    getCamadaActual() {
        return this.camadaactual
    }

    getProxCelo() {
        return this.proxcelo
    }

    getCuidados() {
        return this.cuidados
    }

    getProxEventos() {
        return this.proxeventos
    }

    getEntrenamientos() {
        return this.entrenamientos
    }

    getTitulos() {
        return this.titulos
    }

    setIdPerro(idperro) {
        this.idperro = idperro
    }

    setIdUsuario(idusuario) {
        this.idusuario = idusuario
    }

    setCertificados(certificados) {
        this.certificados = certificados
    }

    setCompetencias(competencias) {
        this.competencias = competencias
    }

    setHcelos(hcelos) {
        this.hcelos = hcelos
    }

    setHcruzas(hcruzas) {
        this.hcruzas = hcruzas
    }

    setCamadas(camadas) {
        this.camadas = camadas
    }

    setCeloCruceActual(celocruceactual) {
        this.celocruceactual = celocruceactual
    }

    setCamadaActual(camadaactual) {
        this.camadaactual = camadaactual
    }

    setProxCelo(proxcelo) {
        this.proxcelo = proxcelo
    }

    setCuidados(cuidados) {
        this.cuidados = cuidados
    }

    setProxEventos(proxeventos) {
        this.proxeventos = proxeventos
    }

    setEntrenamientos(entrenamientos) {
        this.entrenamientos = entrenamientos
    }

    setTitulos(titulos) {
        this.titulos = titulos
    }
}