export default class Municipios {
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