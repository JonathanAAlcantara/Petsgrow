export default class Humano {
    constructor(id, propietario, estado, municipio, colonia, direccion, telefono, email) {
        this.id = id
        this.propietario = propietario
        this.estado = estado
        this.municipio = municipio
        this.colonia = colonia
        this.direccion = direccion
        this.telefono = telefono
        this.email = email
    }

    getId() {
        return this.id
    }

    getPropietario() {
        return this.propietario
    }

    getEstado() {
        return this.estado
    }

    getMunicipio() {
        return this.municipio
    }

    getColonia() {
        return this.colonia
    }

    getDireccion() {
        return this.direccion
    }

    getTelefono() {
        return this.telefono
    }

    getEmail() {
        return this.email
    }

    setId(id) {
        this.id = id
    }

    setPropietario(propietario) {
        this.propietario = propietario
    }

    setEstado(estado) {
        this.estado = estado
    }

    setMunicipio(municipio) {
        this.municipio = municipio
    }

    setColonia(colonia) {
        this.colonia = colonia
    }

    setDireccion(direccion) {
        this.direccion = direccion
    }

    setTelefono(telefono) {
        this.telefono = telefono
    }

    setEmail(email) {
        this.email = email
    }

}