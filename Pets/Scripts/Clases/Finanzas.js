export default class Finanzas {
    constructor(idperro, idusuario, nombreperro, tipoingreso, fechaingreso, detalleingreso, montoingreso, tipoegreso, fechaegreso, detalleegreso, montoegreso, totalingresos, totalegresos, resultado) {
        this.idperro = idperro
        this.idusuario = idusuario
        this.nombreperro = nombreperro
        this.tipoingreso = tipoingreso
        this.fechaingreso = fechaingreso
        this.detalleingreso = detalleingreso
        this.montoingreso = montoingreso
        this.tipoegreso = tipoegreso
        this.fechaegreso = fechaegreso
        this.detalleegreso = detalleegreso
        this.montoegreso = montoegreso
        this.totalingresos = totalingresos
        this.totalegresos = totalegresos
        this.resultado = resultado
    }

    getIdPerro() {
        return this.idperro
    }

    getIdUsuario() {
        return this.idusuario
    }

    getNombrePerro() {
        return this.nombreperro
    }

    getTipoIngreso() {
        return this.tipoingreso
    }

    getFechaIngreso() {
        return this.fechaingreso
    }

    getDetalleIngreso() {
        return this.detalleingreso
    }

    getMontoIngreso() {
        return this.montoingreso
    }

    getTipoEgreso() {
        return this.tipoegreso
    }

    getFechaEgreso() {
        return this.fechaegreso
    }

    getDetalleEgreso() {
        return this.detalleegreso
    }

    getMontEgreso() {
        return this.montoegreso
    }

    getTotalIngresos() {
        return this.totalingresos
    }

    getTotalEgresos() {
        return this.totalegresos
    }

    getResultado() {
        return this.resultado
    }

    //Set

    setIdPerro(idperro) {
        this.idperro = idperro
    }

    setIdUsuario(idusuario) {
        this.idusuario = idusuario
    }

    setNombrePerro(nombreperro) {
        this.nombreperro = nombreperro
    }

    setTipoIngreso(tipoingreso) {
        this.tipoingreso = tipoingreso
    }

    setFechaIngreso(fechaingreso) {
        this.fechaingreso = fechaingreso
    }

    setDetalleIngreso(detalleingreso) {
        this.detalleingreso = detalleingreso
    }

    setMontoIngreso(montoingreso) {
        this.montoingreso = montoingreso
    }

    setTipoEgreso(tipoegreso) {
        this.tipoegreso = tipoegreso
    }

    setFechaEgreso(fechaegreso) {
        this.fechaegreso = fechaegreso
    }

    setDetalleEgreso(detalleegreso) {
        this.detalleegreso = detalleegreso
    }

    setMontoEgreso(montoegreso) {
        this.montoegreso = montoegreso
    }

    setTotalIngresos(totalingresos) {
        this.totalingresos = totalingresos
    }

    setTotalEgresos(pelo) {
        this.totalegresos = this.totalegresos
    }

    setResultado(resultado) {
        this.resultado = resultado
    }
}