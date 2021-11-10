export default class Criadero {
    constructor(id, idusuario, idrol, tipopublicacion, categoria, principal, secundario,
        titulonegocio, descripcion, estado, municipio, correo, direccion, telefono,
        facebook, instagram, youtube, twitter, imagen) {
        this.id = id
        this.idusuario = idusuario
        this.idrol = idrol
        this.tipopublicacion = tipopublicacion
        this.categoria = categoria
        this.principal = principal
        this.secundario = secundario
        this.titulonegocio = titulonegocio
        this.descripcion = descripcion
        this.estado = estado
        this.municipio = municipio
        this.correo = correo
        this.direccion = direccion
        this.telefono = telefono
        this.facebook = facebook
        this.instagram = instagram
        this.youtube = youtube
        this.twitter = twitter
        this.imagen = imagen
    }

    getId() {
        return this.id
    }

    getIdUsuario() {
        return this.idusuario
    }

    getIdRol() {
        return this.idrol
    }

    getTipoPublicacion() {
        return this.tipopublicacion
    }

    getCategoria() {
        return this.categoria
    }

    getPrincipal() {
        return this.principal
    }

    getSecundario() {
        return this.secundario
    }

    getTituloNegocio() {
        return this.titulonegocio
    }

    getDescripcion() {
        return this.descripcion
    }

    getEstado() {
        return this.estado
    }

    getMunicipio() {
        return this.municipio
    }

    getCorreo() {
        return this.correo
    }

    getDireccion() {
        return this.direccion
    }

    getTelefono() {
        return this.telefono
    }

    getFacebook() {
        return this.facebook
    }

    getInstagram() {
        return this.instagram
    }

    getYoutube() {
        return this.youtube
    }

    getTwitter() {
        return this.twitter
    }

    getImagen() {
        return this.imagen
    }


    setId(id) {
        this.id = id
    }

    setIdUsuario(idusuario) {
        this.idusuario = idusuario
    }

    setIdRol(idrol) {
        this.idrol = idrol
    }

    setTipoPublicacion(tipopublicacion) {
        this.tipopublicacion = tipopublicacion
    }

    setCategoria(categoria) {
        this.categoria = categoria
    }

    setPrincipal(principal) {
        this.principal = principal
    }

    setSecundario(secundario) {
        this.secundario = secundario
    }

    setTituloNegocio(titulonegocio) {
        this.titulonegocio = titulonegocio
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion
    }

    setEstado(estado) {
        this.estado = estado
    }

    setMunicipio(municipio) {
        this.municipio = municipio
    }

    setCorreo(correo) {
        this.correo = correo
    }

    setDireccion(direccion) {
        this.direccion = direccion
    }

    setTelefono(telefono) {
        this.telefono = telefono
    }

    setFacebook(facebook) {
        this.facebook = facebook
    }

    setInstagram(instagram) {
        this.instagram = instagram
    }

    setYoutube(youtube) {
        this.youtube = youtube
    }

    setTwitter(twitter) {
        this.twitter = twitter
    }

    setImagen(imagen) {
        this.imagen = imagen
    }
}
