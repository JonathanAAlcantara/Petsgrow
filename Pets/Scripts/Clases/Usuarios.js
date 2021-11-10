export default class Usuario {
    constructor(idusuario, idrol, rol, login, passwordvisible, password, confirmarpassword, nombre, estatus, strestatus) {
        this.idusuario = idusuario
        this.idrol = idrol
        this.rol = rol
        this.login = login
        this.passwordvisible = passwordvisible
        this.password = password
        this.confirmarpassword = confirmarpassword
        this.nombre = nombre
        this.estatus = estatus
        this.strestatus = strestatus
    }

    getIdUsuario() {
        return this.idusuario
    }

    getIdRol() {
        return this.idrol
    }

    getRol() {
        return this.rol
    }

    getLogin() {
        return this.login
    }

    getPasswordVisible() {
        return this.passwordvisible
    }

    getPassword() {
        return this.password
    }

    getConfirmarPassword() {
        return this.confirmarpassword
    }

    getNombre() {
        return this.nombre
    }

    getEstatus() {
        return this.estatus
    }

    getStrEstatus() {
        return this.strestatus
    }

  
    setIdUsuario(idusuario) {
        this.idusuario = idusuario
    }

    setIdRol(idrol) {
        this.idrol = idrol
    }

    setRol(rol) {
        this.rol = rol
    }

    setLogin(login) {
        this.login = login
    }

    setPasswordVisible(passwordvisible) {
        this.passwordvisible = passwordvisible
    }

    setPassword(password) {
        this.password = password
    }

    setConfirmarPassword(confirmarpassword) {
        this.confirmarpassword = confirmarpassword
    }

    setNombre(nombre) {
        this.nombre = nombre
    }

    setEstatus(estatus) {
        this.estatus = estatus
    }

    setStrEstatus(strestatus) {
        this.strestatus = strestatus
    }

}