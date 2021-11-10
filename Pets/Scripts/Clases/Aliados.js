export default class Aliado {
    constructor(id, nombre, poster, contacto, estado, municipio, producto, servicio) {
        this.id = id
        this.nombre = nombre
        this.poster = poster
        this.contacto = contacto
        this.estado = estado
        this.municipio = municipio
        this.producto = producto
        this.servicio = servicio
    }

    getId() {
        return this.id
    }

    getNombre() {
        return this.nombre
    }

    getPoster() {
        return this.poster
    }

    getContacto() {
        return this.contacto
    }

    getEstado() {
        return this.estado
    }

    getMunicipio() {
        return this.municipio
    }

    getProducto() {
        return this.producto
    }

    getServicio() {
        return this.servicio
    }

    setId(id) {
        this.id = id
    }

    setNombre(nombre) {
        this.nombre = nombre
    }

    setPoster(poster) {
        this.poster = poster
    }

    setContacto(contacto) {
        this.contacto = contacto
    }

    setEstado(estado) {
        this.estado = estado
    }

    setMunicipio(municipio) {
        this.municipio = municipio
    }

    setProducto(producto) {
        this.producto = producto
    }

    setServicio(servicio) {
        this.servicio = servicio
    }
}
