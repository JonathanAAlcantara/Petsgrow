export default class Perro {
    constructor(id, idusuario, nombreperro, chip, raza, tatuaje, nacimiento, pedigree, sexo, particulares, color, peso, pelo, altura, criador, consanguinidad) {
        this.id = id
        this.idusuario = idusuario
        this.nombreperro = nombreperro
        this.chip = chip
        this.raza = raza
        this.tatuaje = tatuaje
        this.nacimiento = nacimiento
        this.pedigree = pedigree
        this.sexo = sexo
        this.particulares = particulares
        this.color = color
        this.peso = peso
        this.pelo = pelo
        this.altura = altura
        this.criador = criador
        this.consanguinidad = consanguinidad
    }

    getId() {
        return this.id
    }

    getIdUsuario() {
        return this.idusuario
    }

    getNombrePerro() {
        return this.nombreperro
    }

    getChip() {
        return this.chip
    }

    getRaza() {
        return this.raza
    }

    getTatuaje() {
        return this.tatuaje
    }

    getNacimiento() {
        return this.nacimiento
    }

    getPedigree() {
        return this.pedigree
    }

    getSexo() {
        return this.sexo
    }

    getParticulares() {
        return this.particulares
    }

    getColor() {
        return this.color
    }

    getPeso() {
        return this.peso
    }

    getPelo() {
        return this.pelo
    }

    getAltura() {
        return this.altura
    }

    getCriador() {
        return this.criador
    }

    getConsanguinidad() {
        return this.consanguinidad
    }

    setId(id) {
        this.id = id
    }

    setIdUsuario(idusuario) {
        this.idusuario = idusuario
    }

    setNombrePerro(nombreperro) {
        this.nombreperro = nombreperro
    }

    setChip(chip) {
        this.chip = chip
    }

    setRaza(raza) {
        this.raza = raza
    }

    setTatuaje(tatuaje) {
        this.tatuaje = tatuaje
    }

    setNacimiento(nacimiento) {
        this.nacimiento = nacimiento
    }

    setPedigree(pedigree) {
        this.pedigree = pedigree
    }

    setSexo(sexo) {
        this.sexo = sexo
    }

    setParticulares(particulares) {
        this.particulares = particulares
    }

    setColor(color) {
        this.color = color
    }

    setPeso(peso) {
        this.peso = peso
    }

    setPelo(pelo) {
        this.pelo = pelo
    }

    setAltura(altura) {
        this.altura = altura
    }

    setCriador(criador) {
        this.criador = criador
    }

    setConsanguinidad(consanguinidad) {
        this.consanguinidad = consanguinidad
    }
}