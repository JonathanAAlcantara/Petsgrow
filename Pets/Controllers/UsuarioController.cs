using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


using Entidades;
using Felipe_Arcos___sitio_web.Models.Usuario;
using Seguridad;
using Negocio.Usuario;
using Herramientas;
using Datos;
using System.Configuration;
using System.Reflection;

namespace Felipe_Arcos___sitio_web.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario
        public ActionResult RegistroUsuario()
        {
            return View();
        }

        public ActionResult RecuperarContraseña()
        {
            return View();
        }

        public ActionResult Reestablecer(string id)
        {
            try
            {
                id = id.Replace("|", "/");

                string key = ConfigurationManager.AppSettings["key"].ToString();

                string parametro = EncripDecrip.Desencriptar(id, key);
                List<string> parametros = parametro.Split('|').ToList();

                if (parametros.Count > 0)
                {
                    string correo = parametros[0];
                    Session["Correo"] = correo;
                }
                else
                {
                    ViewBag.Mensaje = "No se encontraron parametros";

                    return View();
                }

                //DESCIFRAR PARAMETRO



                //CONEXION CON LA BASE DE DATOS



                //CONTRUIR MENSAJE PARA LA PAGINA
                ViewBag.Mensaje = "Tu cuenta se creo con exito";
            }
            catch (Exception ex)
            {
                ViewBag.Mensaje = "No se pudo actualizar tu cuenta.";
            }

            return View();
        }

        public JsonResult ReestablecerPassword(string password, string confirmacion)
        {
            Entidades.Usuario usuario = new Entidades.Usuario();
            List<Entidades.Usuario> ListUsuario = new List<Entidades.Usuario>();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            ResultadoUsuario resultadoUsuario = new Models.Usuario.ResultadoUsuario();
            const string key = "Atena";
            //Session["Correo"] = "alvarejo9@gmail.com";

            if (password == confirmacion)
            {
                try
                {
                    parametro = new Parametro();
                    parametro.Nombre = "Password";
                    parametro.Valor = EncripDecrip.Encriptar(password, key);
                    ListParametro.Add(parametro);

                    parametro = new Parametro();
                    parametro.Nombre = "Correo";
                    parametro.Valor = Session["Correo"];
                    ListParametro.Add(parametro);

                    usuario = Usuario.Reestablecer(ListParametro);

                }
                catch (Exception ex)
                {
                }
            }

            return Json(usuario, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ObtenerUsuario()
        {
            List<Entidades.Usuario> ListUsuario = new List<Entidades.Usuario>();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            Negocio.Usuario.Rol Rol = new Negocio.Usuario.Rol();
            List<Entidades.CatRol> ListCatRol = new List<CatRol>();

            ResultadoUsuario resultadoUsuario = new Models.Usuario.ResultadoUsuario();

            Entidades.Usuario usuario = new Entidades.Usuario();
            bool esSistema = false;

            string mensaje = string.Empty;

            const int idRolSistema = 1;
            const string key = "Atena";

            try
            {
                ListCatRol = Rol.ObtenerCatRol(ListParametro);

                usuario = (Entidades.Usuario)Session["Usuario"];

                ListParametro = new List<Parametro>();

                if (usuario.IdRol != idRolSistema)
                {
                    parametro = new Parametro();
                    parametro.Nombre = "Usuario";
                    parametro.Valor = usuario.Login;

                    ListParametro.Add(parametro);

                    esSistema = false;
                }
                else
                {
                    esSistema = true;
                }

                ListUsuario = Usuario.ObtenerUsuario(ListParametro);

                if (usuario.IdRol == 1)
                {
                    ListUsuario.ForEach(n =>
                    {
                        n.PasswordVisible = EncripDecrip.Desencriptar(n.Password, key);
                    });
                }

                resultadoUsuario.ListaUsuario = ListUsuario.OrderBy(n => n.Nombre).ToList();
                resultadoUsuario.ListaCatRol = ListCatRol.OrderBy(n => n.Id).ToList();
                resultadoUsuario.Usuario = new Entidades.Usuario();
                resultadoUsuario.EsSistema = esSistema;

                Session["ListCatRol"] = ListCatRol;
                Session["ListUsuario"] = ListUsuario;
                Session["EsSistema"] = esSistema;

                resultadoUsuario.Mensaje = "OK";
            }
            catch (Exception ex)
            {
                mensaje = "ERROR: Metodo: ObtenerEstadistico_Dinero, Source: " + ex.Source + ", Mensaje: " + ex.Message;
                //ArchivoLog.EscribirLog(null, mensaje);

                resultadoUsuario.Mensaje = mensaje;
            }

            return Json(resultadoUsuario, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult MostrarAgregarUsuario()
        {
            ResultadoUsuarioDefault resultadoUsuario = new Models.Usuario.ResultadoUsuarioDefault();
            List<CatRol> listaCatRol = new List<CatRol>();
            Entidades.Usuario usuario = new Entidades.Usuario();
            string mensaje = string.Empty;

            try
            {
                resultadoUsuario.Usuario = usuario;

                listaCatRol = (List<CatRol>)Session["ListCatRol"];

                if (listaCatRol.Count > 0)
                {
                    resultadoUsuario.CatRol = listaCatRol.FirstOrDefault();
                }

                resultadoUsuario.Mensaje = "OK";
            }
            catch (Exception ex)
            {
                //mensaje = "ERROR: Metodo: ObtenerEstadistico, Source: " + ex.Source + ", Mensaje: " + ex.Message;
                //ArchivoLog.EscribirLog(null, mensaje);

                //resultadoUsuario.Mensaje = mensaje;
            }

            return Json(resultadoUsuario, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AgregarUsuario(Entidades.Usuario usuario, Entidades.CatRol rol)
        {
            List<Entidades.Usuario> ListUsuario = new List<Entidades.Usuario>();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            //Entidades.Usuario usuario = new Entidades.Usuario();
            ResultadoUsuario resultadoUsuario = new Models.Usuario.ResultadoUsuario();
            const string key = "Atena";

            try
            {
                usuario.Password = EncripDecrip.Encriptar(usuario.Password, key);
                usuario.ConfirmarPassword = usuario.Password;
                //usuario.IdRol = rol.Id;
                //usuario.Rol = rol.Rol;

                parametro = new Parametro();
                parametro.Nombre = "Nombre";
                parametro.Valor = usuario.Nombre;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Usuario";
                parametro.Valor = usuario.Login;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Password";
                parametro.Valor = usuario.Password;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "IdRol";
                parametro.Valor = "4"; //se establece el IdRol 4 como base
                ListParametro.Add(parametro);

                usuario = Usuario.AgregarUsuario(ListParametro);

                //ListUsuario = (List<Entidades.Usuario>)Session["ListUsuario"];

                ListUsuario.Add(usuario);

                Session["ListUsuario"] = ListUsuario;

                resultadoUsuario.ListaUsuario = ListUsuario.OrderBy(n => n.Nombre).ToList();
                resultadoUsuario.Mensaje = "OK";

                string resultadoCorreo = "Inicio Envio";

                if (resultadoUsuario.ListaUsuario[0].Estatus)
                {

                }
                else
                {
                    resultadoCorreo = resultadoCorreo + ", " + Negocio.Correo.EnvioCorreo.Envio(usuario.Login, usuario.Id);
                }

                resultadoUsuario.MensajeEnvio = resultadoCorreo;

            }
            catch (Exception ex)
            {
            }

            return Json(resultadoUsuario, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarHumano(Humano humano)
         {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = humano.id;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Estado";
                parametro.Valor = humano.estado;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Municipio";
                parametro.Valor = humano.municipio;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Colonia";
                parametro.Valor = humano.colonia;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Direccion";
                parametro.Valor = humano.direccion;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Telefono";
                parametro.Valor = humano.telefono;
                ListParametro.Add(parametro);

                humano = Usuario.ActualizarHumano(ListParametro);

                //BDUsuario bdUsuario = new BDUsuario();
                //uno = bdUsuario.ActualizarHumano("SPActualizar", new List<Parametro>());
            }
            catch(Exception ex)
            {
            }

            return Json(humano, JsonRequestBehavior.AllowGet);
        }

        public JsonResult RegistroInicialPerro(Perro perro)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            Entidades.Usuario UsuarioActual = new Entidades.Usuario();
            UsuarioActual = (Entidades.Usuario)Session["Usuario"];

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                
                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = UsuarioActual.Id;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "NombrePerro";
                parametro.Valor = perro.nombreperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Chip";
                parametro.Valor = perro.chip;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Raza";
                parametro.Valor = perro.raza;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Tatuaje";
                parametro.Valor = perro.tatuaje;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nacimiento";
                parametro.Valor = perro.nacimiento;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Pedigree";
                parametro.Valor = perro.pedigree;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo";
                parametro.Valor = perro.sexo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Particulares";
                parametro.Valor = perro.particulares;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color";
                parametro.Valor = perro.color;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso";
                parametro.Valor = perro.peso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Pelo";
                parametro.Valor = perro.pelo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Altura";
                parametro.Valor = perro.altura;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Criador";
                parametro.Valor = perro.criador;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Consanguinidad";
                parametro.Valor = perro.consanguinidad;
                ListParametro.Add(parametro);

                perro = Usuario.RegistroPerroInicial(ListParametro);

                //BDUsuario bdUsuario = new BDUsuario();
                //uno = bdUsuario.ActualizarHumano("SPActualizar", new List<Parametro>());
            }
            catch (Exception ex)
            {
            }

            return Json(perro, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarPerro(Perro perro)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = perro.id;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = perro.idUsuario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "NombrePerro";
                parametro.Valor = perro.nombreperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Chip";
                parametro.Valor = perro.chip;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Raza";
                parametro.Valor = perro.raza;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Tatuaje";
                parametro.Valor = perro.tatuaje;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nacimiento";
                parametro.Valor = perro.nacimiento;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Pedigree";
                parametro.Valor = perro.pedigree;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo";
                parametro.Valor = perro.sexo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Particulares";
                parametro.Valor = perro.particulares;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color";
                parametro.Valor = perro.color;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso";
                parametro.Valor = perro.peso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Pelo";
                parametro.Valor = perro.pelo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Altura";
                parametro.Valor = perro.altura;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Criador";
                parametro.Valor = perro.criador;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Consanguinidad";
                parametro.Valor = perro.consanguinidad;
                ListParametro.Add(parametro);

                perro = Usuario.ActualizarPerro(ListParametro);

                //BDUsuario bdUsuario = new BDUsuario();
                //uno = bdUsuario.ActualizarHumano("SPActualizar", new List<Parametro>());
            }
            catch (Exception ex)
            {
            }

            return Json(perro, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EliminarPerro(int idPerro)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            Entidades.Perro perroO = new Perro();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            Entidades.Usuario usuario = new Entidades.Usuario();

            usuario = (Entidades.Usuario)Session["Usuario"];

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = idPerro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = usuario.Id;
                ListParametro.Add(parametro);

                perroO = Usuario.EliminarPerro(ListParametro);

                //BDUsuario bdUsuario = new BDUsuario();
                //uno = bdUsuario.ActualizarHumano("SPActualizar", new List<Parametro>());
            }
            catch (Exception ex)
            {
            }

            return Json(idPerro, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarMedico(Medicos medico)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "idPerro";
                parametro.Valor = medico.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = medico.idUsuario;
                ListParametro.Add(parametro);

                //parametro = new Parametro();
                //parametro.Nombre = "Vacunas";
                //parametro.Valor = medico.vacunas;
                //ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "DesparasitacionInterna";
                parametro.Valor = medico.desparasitacionInterna;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "DesparasitacionExterna";
                parametro.Valor = medico.desparasitacionExterna;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Medicamentos";
                parametro.Valor = medico.medicamentos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Tratamientos";
                parametro.Valor = medico.tratamientos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Dieta";
                parametro.Valor = medico.dieta;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cirugias";
                parametro.Valor = medico.cirugias;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Alergias";
                parametro.Valor = medico.alergias;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Celo";
                parametro.Valor = medico.celo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Esterilizacion";
                parametro.Valor = medico.esterilizacion;
                ListParametro.Add(parametro);

                medico = Usuario.ActualizarMedico(ListParametro);

                //BDUsuario bdUsuario = new BDUsuario();
                //uno = bdUsuario.ActualizarHumano("SPActualizar", new List<Parametro>());
            }
            catch (Exception ex)
            {
            }

            return Json(medico, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarEntrenamiento(Entrenamiento entrenamiento)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "idPerro";
                parametro.Valor = entrenamiento.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = entrenamiento.idusuario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Certificados";
                parametro.Valor = entrenamiento.certificados;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Competencias";
                parametro.Valor = entrenamiento.competencias;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "HistorialCelos";
                parametro.Valor = entrenamiento.hcelos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "HistorialCruzas";
                parametro.Valor = entrenamiento.hcruzas;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Camadas";
                parametro.Valor = entrenamiento.camadas;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "CeloyCruceActual";
                parametro.Valor = entrenamiento.celocruceactual;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "CamadaActual";
                parametro.Valor = entrenamiento.camadaactual;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "ProximoCelo";
                parametro.Valor = entrenamiento.proxcelo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "CuidadosEspeciales";
                parametro.Valor = entrenamiento.cuidados;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "ProximosEventos";
                parametro.Valor = entrenamiento.proxeventos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Entrenamientos";
                parametro.Valor = entrenamiento.entrenamientos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TitulosObtenidos";
                parametro.Valor = entrenamiento.titulos;
                ListParametro.Add(parametro);

                entrenamiento = Usuario.ActualizarEntrenamiento(ListParametro);

                //BDUsuario bdUsuario = new BDUsuario();
                //uno = bdUsuario.ActualizarHumano("SPActualizar", new List<Parametro>());
            }
            catch (Exception ex)
            {
            }

            return Json(entrenamiento, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarFinanzas (Finanzas finanzas)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            List<Entidades.Finanzas> Listfinanzas = new List<Entidades.Finanzas>();

            Entidades.InformacionUsuario informacionUsuario = new Entidades.InformacionUsuario();

            //Conexión a la BD
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "idperro";
                parametro.Valor = finanzas.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = finanzas.idusuario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "nombrePerro";
                parametro.Valor = finanzas.nombreperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "tipoIngreso";
                parametro.Valor = finanzas.tipoingreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "fechaIngreso";
                parametro.Valor = finanzas.fechaingreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "detalleIngreso";
                parametro.Valor = finanzas.detalleingreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "montoIngreso";
                parametro.Valor = finanzas.montoingreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "tipoEgreso";
                parametro.Valor = finanzas.tipoegreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "fechaEgreso";
                parametro.Valor = finanzas.fechaegreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "detalleEgreso";
                parametro.Valor = finanzas.detalleegreso;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "montoEgreso";
                parametro.Valor = finanzas.montoegreso;
                ListParametro.Add(parametro);

                Listfinanzas = Usuario.ActualizarFinanzas(ListParametro);

                double totalingresos = Listfinanzas.Sum(n => n.montoingreso);
                double totalegresos = Listfinanzas.Sum(n => n.montoegreso);
                double balance = totalingresos - totalegresos;

                informacionUsuario.totalIngresos = totalingresos;
                informacionUsuario.totalEgresos = totalegresos;

                Session["ListFinanzas"] = informacionUsuario;


            }
            catch (Exception ex)
            {
            }

            return Json(informacionUsuario, JsonRequestBehavior.AllowGet);
        }

        public JsonResult FiltrarFinanzas(Finanzas finanzas)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            List<Entidades.Finanzas> Listfinanzas = new List<Entidades.Finanzas>();
            List<Entidades.Finanzas> ListfinanzasIng_filtradas = new List<Entidades.Finanzas>();
            List<Entidades.Finanzas> ListfinanzasEg_filtradas = new List<Entidades.Finanzas>();

            Entidades.InformacionUsuario informacionUsuario = new Entidades.InformacionUsuario();

            //Conexión a la BD
            try
            {
                parametro = new Parametro();
                parametro.Nombre = "idperro";
                parametro.Valor = finanzas.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = finanzas.idusuario;
                ListParametro.Add(parametro);

                //parametro = new Parametro();
                //parametro.Nombre = "fechaInicio";
                //parametro.Valor = finanzas.fechainicio;
                //ListParametro.Add(parametro);

                //parametro = new Parametro();
                //parametro.Nombre = "fechaFin";
                //parametro.Valor = finanzas.fechafin;
                //ListParametro.Add(parametro);

                Listfinanzas = Usuario.FiltrarFinanzas(ListParametro);

                ListfinanzasIng_filtradas = (from c in Listfinanzas
                                         where c.fechaingreso >= finanzas.fechainicio && c.fechaingreso <= finanzas.fechafin
                                         select c).ToList();

                ListfinanzasEg_filtradas = (from c in Listfinanzas
                                             where c.fechaegreso >= finanzas.fechainicio && c.fechaegreso <= finanzas.fechafin
                                             select c).ToList();

                double totalingresos = ListfinanzasIng_filtradas.Sum(n => n.montoingreso);
                double totalegresos = ListfinanzasEg_filtradas.Sum(n => n.montoegreso);
                double balance = totalingresos - totalegresos;

                informacionUsuario.totalIngresos = totalingresos;
                informacionUsuario.totalEgresos = totalegresos;

                Session["ListFinanzas"] = informacionUsuario;

            }
            catch (Exception ex)
            {
            }

            return Json(informacionUsuario, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarVacunas(Vacunas vacunas)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            //List<Entidades.Vacunas> vacunas_ = new List<Vacunas>();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                ////////////////////////////////////////////////////////////////
                ///PROCESO PARA AGREGAR EL NOMBRE Y VALOR DEL PARÁMETRO Y CASI LO LOGRO...PERO NO!
                //Type Atributos = typeof(Vacunas);
                //foreach(PropertyInfo F in Atributos.GetProperties(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance))
                //{

                //    parametro = new Parametro();
                //    parametro.Nombre = F.Name.ToString();

                //    for (int i = 0; i == vacunas_.Count; i++)
                //    {
                //        var valor = vacunas_[0];
                //        parametro.Valor = valor;
                //        ListParametro.Add(parametro);
                //    }

                //    ListParametro.Add(parametro);
                //}

                //CICLO PARA CREAR LOS PARÁMETROS 
                parametro = new Parametro();
                parametro.Nombre = "idPerro";
                parametro.Valor = vacunas.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = vacunas.idUsuario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Rabia_date";
                parametro.Valor = vacunas.rabia_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Rabia_prox";
                parametro.Valor = vacunas.rabia_prox;
                ListParametro.Add(parametro);


                parametro = new Parametro();
                parametro.Nombre = "Rabia_form";
                parametro.Valor = vacunas.rabia_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Rabia_vet";
                parametro.Valor = vacunas.rabia_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Parvo_date";
                parametro.Valor = vacunas.parvo_date;
                ListParametro.Add(parametro);


                parametro = new Parametro();
                parametro.Nombre = "Parvo_prox";
                parametro.Valor = vacunas.otr1_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Parvo_form";
                parametro.Valor = vacunas.parvo_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Parvo_vet";
                parametro.Valor = vacunas.parvo_vet;
                ListParametro.Add(parametro);


                parametro = new Parametro();
                parametro.Nombre = "Diste_date";
                parametro.Valor = vacunas.diste_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Diste_prox";
                parametro.Valor = vacunas.diste_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Diste_form";
                parametro.Valor = vacunas.diste_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Diste_vet";
                parametro.Valor = vacunas.diste_vet;
                ListParametro.Add(parametro);


                parametro = new Parametro();
                parametro.Nombre = "Adeno_date";
                parametro.Valor = vacunas.adeno_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Adeno_prox";
                parametro.Valor = vacunas.adeno_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Adeno_form";
                parametro.Valor = vacunas.adeno_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Adeno_vet";
                parametro.Valor = vacunas.adeno_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Influ_date";
                parametro.Valor = vacunas.influ_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Influ_prox";
                parametro.Valor = vacunas.influ_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Influ_form";
                parametro.Valor = vacunas.influ_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Influ_vet";
                parametro.Valor = vacunas.influ_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lepto_date";
                parametro.Valor = vacunas.lepto_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lepto_prox";
                parametro.Valor = vacunas.lepto_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lepto_form";
                parametro.Valor = vacunas.lepto_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lepto_vet";
                parametro.Valor = vacunas.lepto_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Borde_date";
                parametro.Valor = vacunas.borde_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Borde_prox";
                parametro.Valor = vacunas.borde_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Borde_form";
                parametro.Valor = vacunas.borde_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Borde_vet";
                parametro.Valor = vacunas.borde_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Disea_date";
                parametro.Valor = vacunas.disea_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Disea_prox";
                parametro.Valor = vacunas.disea_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Disea_form";
                parametro.Valor = vacunas.disea_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Disea_vet";
                parametro.Valor = vacunas.disea_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr1_nombre";
                parametro.Valor = vacunas.otr1_name;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr1_date";
                parametro.Valor = vacunas.otr1_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr1_prox";
                parametro.Valor = vacunas.otr1_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr1_form";
                parametro.Valor = vacunas.otr1_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr1_vet";
                parametro.Valor = vacunas.otr1_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr2_nombre";
                parametro.Valor = vacunas.otr2_name;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr2_date";
                parametro.Valor = vacunas.otr2_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr2_prox";
                parametro.Valor = vacunas.otr2_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr2_form";
                parametro.Valor = vacunas.otr2_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr2_vet";
                parametro.Valor = vacunas.otr2_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr3_nombre";
                parametro.Valor = vacunas.otr3_name;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr3_date";
                parametro.Valor = vacunas.otr3_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr3_prox";
                parametro.Valor = vacunas.otr3_prox;
                ListParametro.Add(parametro);


                parametro = new Parametro();
                parametro.Nombre = "Otr3_form";
                parametro.Valor = vacunas.otr3_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr3_vet";
                parametro.Valor = vacunas.otr3_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr4_nombre";
                parametro.Valor = vacunas.otr4_name;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr4_date";
                parametro.Valor = vacunas.otr4_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr4_prox";
                parametro.Valor = vacunas.otr4_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr4_form";
                parametro.Valor = vacunas.otr4_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr4_vet";
                parametro.Valor = vacunas.otr4_vet;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr5_nombre";
                parametro.Valor = vacunas.otr5_name;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr5_date";
                parametro.Valor = vacunas.otr5_date;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr5_prox";
                parametro.Valor = vacunas.otr5_prox;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr5_form";
                parametro.Valor = vacunas.otr5_form;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Otr5_vet";
                parametro.Valor = vacunas.otr5_vet;
                ListParametro.Add(parametro);

                vacunas = Usuario.ActualizarVacunas(ListParametro);

                vacunas.rabia_date_s = (vacunas.rabia_date).Value.ToString("yyyy-MM-dd");
                vacunas.rabia_prox_s = (vacunas.rabia_prox).Value.ToString("yyyy-MM-dd");
                vacunas.parvo_date_s = (vacunas.parvo_date).Value.ToString("yyyy-MM-dd");
                vacunas.parvo_prox_s = (vacunas.parvo_prox).Value.ToString("yyyy-MM-dd");
                vacunas.diste_date_s = (vacunas.diste_date).Value.ToString("yyyy-MM-dd");
                vacunas.diste_prox_s = (vacunas.diste_prox).Value.ToString("yyyy-MM-dd");
                vacunas.adeno_date_s = (vacunas.adeno_date).Value.ToString("yyyy-MM-dd");
                vacunas.adeno_prox_s = (vacunas.adeno_prox).Value.ToString("yyyy-MM-dd");
                vacunas.influ_date_s = (vacunas.influ_date).Value.ToString("yyyy-MM-dd");
                vacunas.influ_prox_s = (vacunas.influ_prox).Value.ToString("yyyy-MM-dd");
                vacunas.lepto_date_s = (vacunas.lepto_date).Value.ToString("yyyy-MM-dd");
                vacunas.lepto_prox_s = (vacunas.lepto_prox).Value.ToString("yyyy-MM-dd");
                vacunas.borde_date_s = (vacunas.borde_date).Value.ToString("yyyy-MM-dd");
                vacunas.borde_prox_s = (vacunas.borde_prox).Value.ToString("yyyy-MM-dd");
                vacunas.disea_date_s = (vacunas.disea_date).Value.ToString("yyyy-MM-dd");
                vacunas.disea_prox_s = (vacunas.disea_prox).Value.ToString("yyyy-MM-dd");
                vacunas.otr1_date_s = (vacunas.otr1_date).Value.ToString("yyyy-MM-dd");
                vacunas.otr1_prox_s = (vacunas.otr1_prox).Value.ToString("yyyy-MM-dd");
                vacunas.otr2_date_s = (vacunas.otr2_date).Value.ToString("yyyy-MM-dd");
                vacunas.otr2_prox_s = (vacunas.otr2_prox).Value.ToString("yyyy-MM-dd");
                vacunas.otr3_date_s = (vacunas.otr3_date).Value.ToString("yyyy-MM-dd");
                vacunas.otr3_prox_s = (vacunas.otr3_prox).Value.ToString("yyyy-MM-dd");
                vacunas.otr4_date_s = (vacunas.otr4_date).Value.ToString("yyyy-MM-dd");
                vacunas.otr4_prox_s = (vacunas.otr4_prox).Value.ToString("yyyy-MM-dd");
                vacunas.otr5_date_s = (vacunas.otr5_date).Value.ToString("yyyy-MM-dd");
                vacunas.otr5_prox_s = (vacunas.otr5_prox).Value.ToString("yyyy-MM-dd");

            }
            catch (Exception ex)
            {
            }

            return Json(vacunas, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarCamadas(Camadas camadas)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            //List<Entidades.Vacunas> vacunas_ = new List<Vacunas>();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {
                
                //CICLO PARA CREAR LOS PARÁMETROS 
                parametro = new Parametro();
                parametro.Nombre = "idPerro";
                parametro.Valor = camadas.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = camadas.idUsuario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "noCamada";
                parametro.Valor = camadas.noCamada;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Ultra1";
                parametro.Valor = camadas.ultra1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Ultra2";
                parametro.Valor = camadas.ultra2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Proge1";
                parametro.Valor = camadas.proge1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Proge2";
                parametro.Valor = camadas.proge2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Proge3";
                parametro.Valor = camadas.proge3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Parto";
                parametro.Valor = camadas.parto;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Inicio";
                parametro.Valor = camadas.inicio;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fin";
                parametro.Valor = camadas.fin;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cruza";
                parametro.Valor = camadas.cruza;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Madre";
                parametro.Valor = camadas.madre;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Padre";
                parametro.Valor = camadas.padre;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Total";
                parametro.Valor = camadas.total;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Vivos";
                parametro.Valor = camadas.vivos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Muertos";
                parametro.Valor = camadas.muertos;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c1";
                parametro.Valor = camadas.nombre_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c1";
                parametro.Valor = camadas.hora_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c1";
                parametro.Valor = camadas.sexo_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c1";
                parametro.Valor = camadas.color_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c1";
                parametro.Valor = camadas.posicion_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c1";
                parametro.Valor = camadas.peso_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c1";
                parametro.Valor = camadas.notas_c1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c2";
                parametro.Valor = camadas.nombre_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c2";
                parametro.Valor = camadas.hora_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c2";
                parametro.Valor = camadas.sexo_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c2";
                parametro.Valor = camadas.color_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c2";
                parametro.Valor = camadas.posicion_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c2";
                parametro.Valor = camadas.peso_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c2";
                parametro.Valor = camadas.notas_c2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c3";
                parametro.Valor = camadas.nombre_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c3";
                parametro.Valor = camadas.hora_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c3";
                parametro.Valor = camadas.sexo_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c3";
                parametro.Valor = camadas.color_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c3";
                parametro.Valor = camadas.posicion_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c3";
                parametro.Valor = camadas.peso_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c3";
                parametro.Valor = camadas.notas_c3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c4";
                parametro.Valor = camadas.nombre_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c4";
                parametro.Valor = camadas.hora_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c4";
                parametro.Valor = camadas.sexo_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c4";
                parametro.Valor = camadas.color_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c4";
                parametro.Valor = camadas.posicion_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c4";
                parametro.Valor = camadas.peso_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c4";
                parametro.Valor = camadas.notas_c4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c5";
                parametro.Valor = camadas.nombre_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c5";
                parametro.Valor = camadas.hora_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c5";
                parametro.Valor = camadas.sexo_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c5";
                parametro.Valor = camadas.color_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c5";
                parametro.Valor = camadas.posicion_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c5";
                parametro.Valor = camadas.peso_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c5";
                parametro.Valor = camadas.notas_c5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c6";
                parametro.Valor = camadas.nombre_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c6";
                parametro.Valor = camadas.hora_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c6";
                parametro.Valor = camadas.sexo_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c6";
                parametro.Valor = camadas.color_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c6";
                parametro.Valor = camadas.posicion_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c6";
                parametro.Valor = camadas.peso_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c6";
                parametro.Valor = camadas.notas_c6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c7";
                parametro.Valor = camadas.nombre_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c7";
                parametro.Valor = camadas.hora_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c7";
                parametro.Valor = camadas.sexo_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c7";
                parametro.Valor = camadas.color_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c7";
                parametro.Valor = camadas.posicion_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c7";
                parametro.Valor = camadas.peso_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c7";
                parametro.Valor = camadas.notas_c7;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c8";
                parametro.Valor = camadas.nombre_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c8";
                parametro.Valor = camadas.hora_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c8";
                parametro.Valor = camadas.sexo_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c8";
                parametro.Valor = camadas.color_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c8";
                parametro.Valor = camadas.posicion_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c8";
                parametro.Valor = camadas.peso_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c8";
                parametro.Valor = camadas.notas_c8;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c9";
                parametro.Valor = camadas.nombre_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c9";
                parametro.Valor = camadas.hora_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c9";
                parametro.Valor = camadas.sexo_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c9";
                parametro.Valor = camadas.color_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c9";
                parametro.Valor = camadas.posicion_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c9";
                parametro.Valor = camadas.peso_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c9";
                parametro.Valor = camadas.notas_c9;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c10";
                parametro.Valor = camadas.nombre_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c10";
                parametro.Valor = camadas.hora_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c10";
                parametro.Valor = camadas.sexo_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c10";
                parametro.Valor = camadas.color_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c10";
                parametro.Valor = camadas.posicion_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c10";
                parametro.Valor = camadas.peso_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c10";
                parametro.Valor = camadas.notas_c10;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c11";
                parametro.Valor = camadas.nombre_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c11";
                parametro.Valor = camadas.hora_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c11";
                parametro.Valor = camadas.sexo_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c11";
                parametro.Valor = camadas.color_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c11";
                parametro.Valor = camadas.posicion_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c11";
                parametro.Valor = camadas.peso_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c11";
                parametro.Valor = camadas.notas_c11;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c12";
                parametro.Valor = camadas.nombre_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c12";
                parametro.Valor = camadas.hora_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c12";
                parametro.Valor = camadas.sexo_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c12";
                parametro.Valor = camadas.color_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c12";
                parametro.Valor = camadas.posicion_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c12";
                parametro.Valor = camadas.peso_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c12";
                parametro.Valor = camadas.notas_c12;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre_c13";
                parametro.Valor = camadas.nombre_c13;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Hora_c13";
                parametro.Valor = camadas.hora_c13;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Sexo_c13";
                parametro.Valor = camadas.sexo_c13;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Color_c13";
                parametro.Valor = camadas.color_c13;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion_c13";
                parametro.Valor = camadas.posicion_c13;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Peso_c13";
                parametro.Valor = camadas.peso_c13;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Notas_c13";
                parametro.Valor = camadas.notas_c13;
                ListParametro.Add(parametro);

                camadas = Usuario.ActualizarCamadas(ListParametro);

                camadas.ultra1_s = (camadas.ultra1).Value.ToString("yyyy-MM-dd");
                camadas.ultra2_s = (camadas.ultra2).Value.ToString("yyyy-MM-dd");
                camadas.proge1_s = (camadas.proge1).Value.ToString("yyyy-MM-dd");
                camadas.proge2_s = (camadas.proge2).Value.ToString("yyyy-MM-dd");
                camadas.proge3_s = (camadas.proge3).Value.ToString("yyyy-MM-dd");
                camadas.parto_s = (camadas.parto).Value.ToString("yyyy-MM-dd");
                camadas.inicio_s = (camadas.inicio).Value.ToString("hh-mm");
                camadas.fin_s = (camadas.fin).Value.ToString("hh-mm");
                camadas.cruza_s = (camadas.cruza).Value.ToString("hh-mm");
                camadas.hora_c1_s = (camadas.hora_c1).Value.ToString("hh-mm");
                camadas.hora_c2_s = (camadas.hora_c2).Value.ToString("hh-mm");
                camadas.hora_c3_s = (camadas.hora_c3).Value.ToString("hh-mm");
                camadas.hora_c4_s = (camadas.hora_c4).Value.ToString("hh-mm");
                camadas.hora_c5_s = (camadas.hora_c5).Value.ToString("hh-mm");
                camadas.hora_c6_s = (camadas.hora_c6).Value.ToString("hh-mm");
                camadas.hora_c7_s = (camadas.hora_c7).Value.ToString("hh-mm");
                camadas.hora_c8_s = (camadas.hora_c8).Value.ToString("hh-mm");
                camadas.hora_c9_s = (camadas.hora_c9).Value.ToString("hh-mm");
                camadas.hora_c10_s = (camadas.hora_c10).Value.ToString("hh-mm");
                camadas.hora_c11_s = (camadas.hora_c11).Value.ToString("hh-mm");
                camadas.hora_c12_s = (camadas.hora_c12).Value.ToString("hh-mm");
                camadas.hora_c13_s = (camadas.hora_c13).Value.ToString("hh-mm");

            }
            catch (Exception ex)
            {
            }

            return Json(camadas, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarCompetencias(Competencias competencias)
        {
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            //List<Entidades.Vacunas> vacunas_ = new List<Vacunas>();

            object uno = new object();

            //CONEXION DE LA BASE DE DATOS
            try
            {

                //CICLO PARA CREAR LOS PARÁMETROS 
                parametro = new Parametro();
                parametro.Nombre = "idPerro";
                parametro.Valor = competencias.idperro;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = competencias.idUsuario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Obediencia";
                parametro.Valor = competencias.obediencia;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Caminata";
                parametro.Valor = competencias.caminata;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juego";
                parametro.Valor = competencias.juego;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Terapia";
                parametro.Valor = competencias.terapia;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Titulo1";
                parametro.Valor = competencias.titulo1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fecha1";
                parametro.Valor = competencias.fecha1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lugar1";
                parametro.Valor = competencias.lugar1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juez1";
                parametro.Valor = competencias.juez1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion1";
                parametro.Valor = competencias.posicion1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Clase1";
                parametro.Valor = competencias.clase1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Calificacion1";
                parametro.Valor = competencias.calificacion1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Titulo2";
                parametro.Valor = competencias.titulo2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fecha2";
                parametro.Valor = competencias.fecha2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lugar2";
                parametro.Valor = competencias.lugar2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juez2";
                parametro.Valor = competencias.juez2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion2";
                parametro.Valor = competencias.posicion2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Clase2";
                parametro.Valor = competencias.clase2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Calificacion2";
                parametro.Valor = competencias.calificacion2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Titulo3";
                parametro.Valor = competencias.titulo3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fecha3";
                parametro.Valor = competencias.fecha3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lugar3";
                parametro.Valor = competencias.lugar3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juez3";
                parametro.Valor = competencias.juez3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion3";
                parametro.Valor = competencias.posicion3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Clase3";
                parametro.Valor = competencias.clase3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Calificacion3";
                parametro.Valor = competencias.calificacion3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Titulo4";
                parametro.Valor = competencias.titulo4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fecha4";
                parametro.Valor = competencias.fecha4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lugar4";
                parametro.Valor = competencias.lugar4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juez4";
                parametro.Valor = competencias.juez4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion4";
                parametro.Valor = competencias.posicion4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Clase4";
                parametro.Valor = competencias.clase4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Calificacion4";
                parametro.Valor = competencias.calificacion4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Titulo5";
                parametro.Valor = competencias.titulo5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fecha5";
                parametro.Valor = competencias.fecha5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lugar5";
                parametro.Valor = competencias.lugar5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juez5";
                parametro.Valor = competencias.juez5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion5";
                parametro.Valor = competencias.posicion5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Clase5";
                parametro.Valor = competencias.clase5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Calificacion5";
                parametro.Valor = competencias.calificacion5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Titulo6";
                parametro.Valor = competencias.titulo6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Fecha6";
                parametro.Valor = competencias.fecha6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Lugar6";
                parametro.Valor = competencias.lugar6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Juez6";
                parametro.Valor = competencias.juez6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Posicion6";
                parametro.Valor = competencias.posicion6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Clase6";
                parametro.Valor = competencias.clase6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Calificacion6";
                parametro.Valor = competencias.calificacion6;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre1";
                parametro.Valor = competencias.nombre1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cuando1";
                parametro.Valor = competencias.cuando1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Donde1";
                parametro.Valor = competencias.donde1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Que1";
                parametro.Valor = competencias.que1;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre2";
                parametro.Valor = competencias.nombre2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cuando2";
                parametro.Valor = competencias.cuando2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Donde2";
                parametro.Valor = competencias.donde2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Que2";
                parametro.Valor = competencias.que2;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre3";
                parametro.Valor = competencias.nombre3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cuando3";
                parametro.Valor = competencias.cuando3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Donde3";
                parametro.Valor = competencias.donde3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Que3";
                parametro.Valor = competencias.que3;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre4";
                parametro.Valor = competencias.nombre4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cuando4";
                parametro.Valor = competencias.cuando4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Donde4";
                parametro.Valor = competencias.donde4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Que4";
                parametro.Valor = competencias.que4;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Nombre5";
                parametro.Valor = competencias.nombre5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Cuando5";
                parametro.Valor = competencias.cuando5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Donde5";
                parametro.Valor = competencias.donde5;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Que5";
                parametro.Valor = competencias.que5;
                ListParametro.Add(parametro);


                competencias = Usuario.ActualizarCompetencias(ListParametro);

                competencias.fecha1_s = (competencias.fecha1).Value.ToString("yyyy-MM-dd");
                competencias.fecha2_s = (competencias.fecha2).Value.ToString("yyyy-MM-dd");
                competencias.fecha3_s = (competencias.fecha3).Value.ToString("yyyy-MM-dd");
                competencias.fecha4_s = (competencias.fecha4).Value.ToString("yyyy-MM-dd");
                competencias.fecha5_s = (competencias.fecha5).Value.ToString("yyyy-MM-dd");
                competencias.fecha6_s = (competencias.fecha6).Value.ToString("yyyy-MM-dd");
                competencias.cuando1_s = (competencias.cuando1).Value.ToString("yyyy-MM-dd");
                competencias.cuando2_s = (competencias.cuando2).Value.ToString("yyyy-MM-dd");
                competencias.cuando3_s = (competencias.cuando3).Value.ToString("yyyy-MM-dd");
                competencias.cuando4_s = (competencias.cuando4).Value.ToString("yyyy-MM-dd");
                competencias.cuando5_s = (competencias.cuando5).Value.ToString("yyyy-MM-dd");

            }
            catch (Exception ex)
            {
            }

            return Json(competencias, JsonRequestBehavior.AllowGet);
        }

    }
}