using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Entidades;
using Negocio.Login;
using Seguridad;
using Felipe_Arcos___sitio_web.Models.Usuario;
using Negocio.Anuncio;
using System.IO;
using PayPal.Api;
using Datos.Usuario;

namespace Felipe_Arcos___sitio_web.Controllers
{
    public class InicioController : Controller
    {
        string ClientId = "AS_M54Npvyf12oyF0mzgOA8g_TkhsWR0rKlEBDJOwNPykj5IXKhBf870nOSn0vsNS0KmyxkDvOuX8_cM";
        string ClientSecret = "EPJZ4l3AnSsLtX8w0KNZnglqiZpVhSi_KfxGmZaESWhhM0u9Sac9nZxo1vs_fxP17oAk1rzzofShVz7S";

        // GET: Inicio
        public ActionResult Inicio()
        {
            return View();
        }

        public ActionResult Login()
        {
            //ENTTTY FRAMEWORK

            //AGREGAR
            //1.- LISTA USUARIO
            //2.- ADD LISTA 
            //3.- SAVE CHANGES

            //ACTUALIZAR
            //1.- LISTA USUARIO
            //2.- BUSCAR USUARIO POR ID MEDIAN UN WHERE LISTAUSUARIO.WHERE()
            //3.- OBTIENES EL OBJETO CON UN VAR LISTAUSUARIO.WHERE().FIRSTORDEFAULT()
            //4.- UNA VEZ OBTENIDO EL OBJETO CON UN VAR MODIFICAS SUS PROPIEDADES
            //5.- SAVE CHANGES

            //ELIMINAR
            //1.- LISTA USUARIO
            //2.- BUSCAR USUARIO POR ID MEDIAN UN WHERE LISTAUSUARIO.WHERE()
            //3.- OBTIENES EL OBJETO CON UN VAR LISTAUSUARIO.WHERE().FIRSTORDEFAULT()
            //4.- UNA VEZ OBTENIDO EL OBJETO CON UN VAR MODIFICAS SUS PROPIEDADES
            //5.- LISTAUSUARIO.REMOVE(VAR) PARA ELIMINAR EL ELEMENTO
            //6.- SAVE CHANGES

            return View();
        }

        [HttpPost]
        public JsonResult ValidarLogin(string usuario, string password)
        {
            ResLogin resLogin = new ResLogin();
            InformacionUsuario informacionUsuario = new InformacionUsuario();

            string mensejeError = string.Empty;
            string userDefault = string.Empty;
            string passwordDefault = string.Empty;
            List<Parametro> listParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            string passwordEncrip = string.Empty;
            string passwordDecrip = string.Empty;
            string key = ConfigurationManager.AppSettings["key"].ToString(); //"Atena";
            List<CatPantalla> listaPantalla = new List<CatPantalla>();
            ResLogin rolUsuario = new ResLogin();

            if (string.IsNullOrEmpty(usuario) || string.IsNullOrEmpty(password))
            {
                mensejeError = "Agregue el usuario y el password correctamente.";
            }
            else
            {
                Entidades.Usuario Usuario = new Usuario();
                ResLogin _rolusuario = new ResLogin();

                parametro.Nombre = "Usuario";
                parametro.Valor = usuario;

                listParametro.Add(parametro);

                Login login = new Login();

                informacionUsuario = login.ObtenerUsuario(listParametro);
                Usuario = informacionUsuario.usuario;

                if (Usuario == null || !Usuario.Estatus)
                {
                    mensejeError = "El usuario y password son incorrectos.";

                    return Json(mensejeError, JsonRequestBehavior.AllowGet);
                }

                passwordEncrip = EncripDecrip.Encriptar(password, key);

                //passwordDecrip = EncripDecrip.Desencriptar(passwordEncrip, key);

                userDefault = Usuario.Login;
                passwordDefault = Usuario.Password;

                if (usuario == userDefault && passwordEncrip == passwordDefault && Usuario.IdRol != 4)
                {
                    Session["Usuario"] = Usuario;
                    Session["Humano"] = informacionUsuario.humano;
                    Session["ListaPerro"] = informacionUsuario.listaPerro;
                    Session["ListaMedicos"] = informacionUsuario.listaMedicos;
                    Session["ListaEntrenamiento"] = informacionUsuario.listaEntrenamiento;
                    Session["ListaAnuncios"] = informacionUsuario.listaAnuncios;
                    Session["ListaAnunciosAlianzas"] = informacionUsuario.listaAnunciosAlianzas;
                    Session["ListaCompetencias"] = informacionUsuario.listaCompetencias;



                    Session["ListaVacunas"] = informacionUsuario.listaVacunas;
                    Session["ListaCamadas"] = informacionUsuario.listaCamadas;
                    mensejeError = "OK";

                    //////////////////////////////
                    /////////////////////////////
                    //ESTATUS DE LA MEMBRESIA

                    APIContext apiContext = GetAPIContext();

                    Agreement membresia = Agreement.Get(apiContext, informacionUsuario.usuario.IdMembresia);

                    if (membresia != null && membresia.state.ToUpper() == "ACTIVE")
                    {
                        ///////////
                        //ACTUALIZAR EN LA BASE DE DATOS EL ESTATUS DE LA CUENTA


                        /////////
                        //ASIGNAR A LA VARIABLE DE SESION QUE SI ESTA ACTIVA LA CUENTA
                        Session["IdRol"] = informacionUsuario.usuario.IdRol;

                    }
                    else
                    {
                        ///////////
                        //ACTUALIZAR EN LA BASE DE DATOS EL ESTATUS DE LA CUENTA


                        /////////
                        //ASIGNAR A LA VARIABLE DE SESION QUE SI ESTA ACTIVA LA CUENTA
                        Session["IdRol"] = 4;
                    }
                }
                else if (usuario == userDefault && passwordEncrip == passwordDefault)
                {
                    Session["Usuario"] = Usuario;
                    Session["Humano"] = informacionUsuario.humano;
                    Session["ListaPerro"] = informacionUsuario.listaPerro;
                    Session["ListaMedicos"] = informacionUsuario.listaMedicos;
                    Session["ListaEntrenamiento"] = informacionUsuario.listaEntrenamiento;
                    Session["ListaAnuncios"] = informacionUsuario.listaAnuncios;
                    Session["ListaAnunciosAlianzas"] = informacionUsuario.listaAnunciosAlianzas;
                    Session["ListaVacunas"] = informacionUsuario.listaVacunas;
                    Session["ListaCamadas"] = informacionUsuario.listaCamadas;
                    Session["ListaCompetencias"] = informacionUsuario.listaCompetencias;
                    mensejeError = "OK";

                }
                else
                {
                    mensejeError = "El usuario y password son incorrectos.";
                }
                _rolusuario.IdRol = Convert.ToInt32(Usuario.IdRol);
                _rolusuario.Resultado = mensejeError;

                rolUsuario = _rolusuario;
            }

            return Json(rolUsuario, JsonRequestBehavior.AllowGet);
        }

        public APIContext GetAPIContext()
        {
            var apiContext = new APIContext(GetAccessToken());
            apiContext.Config = GetConfig();

            return apiContext;
        }

        private string GetAccessToken()
        {
            string accessToken = new OAuthTokenCredential(ClientId, ClientSecret, GetConfig()).GetAccessToken();
            return accessToken;
        }

        public Dictionary<string, string> GetConfig()
        {
            return PayPal.Api.ConfigManager.Instance.GetProperties();
        }

        public ActionResult Registro()
        {
            return View();
        }

        public ActionResult Registro2()
        {
            return View();
        }

        public JsonResult AgregarAnuncio(HttpPostedFileWrapper myfile, Object datos) //Entidades.Anuncio formulario)
        {
            string json = ((string[])datos)[0].Replace("{\"formulario\":", "").Replace("}}", "}").ToString();
            var formulario = Newtonsoft.Json.JsonConvert.DeserializeObject<Entidades.Anuncio>(json);
            List <Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            Negocio.Anuncio.Anuncio Anuncio = new Negocio.Anuncio.Anuncio();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            //Entidades.Usuario usuario = new Entidades.Usuario();
            ResultadoAnuncios resultadoAnuncio = new Models.Usuario.ResultadoAnuncios();
            const string key = "Atena";

            Entidades.Usuario Usuario = (Entidades.Usuario)Session["Usuario"];

            try
            {
                string rootPath = HttpRuntime.AppDomainAppPath + "Imagenes\\";

                //string rootPath = "\\Imagenes\\";

                string ext = Path.GetExtension(myfile.FileName);

                string uniqueName = Guid.NewGuid().ToString() + ext;
                string uniqueNameImg = "\\Imagenes\\" + uniqueName;

                string fileSavePath = Path.Combine(rootPath, uniqueName);

                myfile.SaveAs(fileSavePath);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = Usuario.Id;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idRol";
                parametro.Valor = Usuario.IdRol;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TipoPublicacion";
                parametro.Valor = formulario.TipoPublicacion;
                ListParametro.Add(parametro);

                if(formulario.TipoPublicacion == "Servicios")
                {
                    parametro = new Parametro();
                    parametro.Nombre = "Categoria";
                    parametro.Valor = formulario.Categoria;
                    ListParametro.Add(parametro);
                }
                else
                {
                    parametro = new Parametro();
                    parametro.Nombre = "Categoria";
                    parametro.Valor = formulario.Raza;
                    ListParametro.Add(parametro);
                }

                parametro = new Parametro();
                parametro.Nombre = "Principal";
                parametro.Valor = formulario.Principal;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Secundario";
                parametro.Valor = formulario.Secundario;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TituloNegocio";
                parametro.Valor = formulario.TituloNegocio;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Descripcion";
                parametro.Valor = formulario.Descripcion;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Estado";
                parametro.Valor = formulario.Estado;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Municipio";
                parametro.Valor = formulario.Municipio;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Correo";
                parametro.Valor = formulario.Correo;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Direccion";
                parametro.Valor = formulario.Direccion;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Telefono";
                parametro.Valor = formulario.Telefono;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Facebook";
                parametro.Valor = formulario.Facebook;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Instagram";
                parametro.Valor = formulario.Instagram;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Youtube";
                parametro.Valor = formulario.Youtube;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Twitter";
                parametro.Valor = formulario.Twitter;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Imagen";
                parametro.Valor = uniqueNameImg;
                ListParametro.Add(parametro);

                formulario = Anuncio.AgregarAnuncio(ListParametro);

                //ListUsuario = (List<Entidades.Usuario>)Session["ListUsuario"];

                ListAnuncio.Add(formulario);

                Session["ListAnuncioagregado"] = ListAnuncio;

                resultadoAnuncio.ListAnuncio = ListAnuncio.OrderBy(n => n.Id).ToList();
                resultadoAnuncio.Mensaje = "OK";

            }
            catch (Exception ex)
            {
            }

            return Json(resultadoAnuncio, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AgregarArchivo(HttpPostedFileWrapper myfile, string titulo)
        {
            if (Request.Files["myfile"] != null)
            {
                var file = Request.Files["myfile"];
            }

            return Json("OK", JsonRequestBehavior.AllowGet);
        }

        public JsonResult RecuperarContrasena(string email)
        {
            Entidades.Usuario usuario = new Usuario();
            List<Entidades.Usuario> ListUsuario = new List<Entidades.Usuario>();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            ResultadoUsuario resultadoUsuario = new Models.Usuario.ResultadoUsuario();
            const string key = "Atena";

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "Correo";
                parametro.Valor = email;
                ListParametro.Add(parametro);

                usuario = Usuario.RecuperarContrasena(ListParametro);

                string resultadoCorreo = Negocio.Correo.EnvioCorreo.Recuperacion(usuario.Login);
            }
            catch (Exception ex)
            {
            }

            return Json(email, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CerrarSesion()
        {
            string mensaje = string.Empty;
            List<Parametro> listParametro = new List<Parametro>();
            Parametro parametro = new Parametro();
            string usuario = string.Empty;

            try
            {
                usuario = ((Usuario)Session["Usuario"]).Login;

                
                Session.Abandon();
                Session.Clear();

                mensaje = "OK";
            }
            catch (Exception ex)
            {

            }

            return Json(mensaje, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActualizarFotoPerro(HttpPostedFileWrapper myfile, Object datos)
        {
            string json = ((string[])datos)[0].Replace("{\"formulario\":", "").Replace("}}", "}").ToString();
            var formulario = Newtonsoft.Json.JsonConvert.DeserializeObject<Entidades.Perro>(json);
            ResultadoAnuncios resultadoAnuncio = new Models.Usuario.ResultadoAnuncios();
            BDUsuario bdUsuario = new BDUsuario();
            Entidades.Usuario Usuario = (Entidades.Usuario)Session["Usuario"];
            Negocio.Anuncio.Anuncio Anuncio = new Negocio.Anuncio.Anuncio();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            try
            {
                string rootPath = HttpRuntime.AppDomainAppPath + "Imagenes\\";

                //string pathDefault = System.AppDomain.CurrentDomain.BaseDirectory;

                //string rootPath = "\\Imagenes\\";

                string ext = Path.GetExtension(myfile.FileName);

                string uniqueName = Guid.NewGuid().ToString() + ext;

                string uniqueNameImg = "\\Imagenes\\" + uniqueName;

                string fileSavePath = Path.Combine(rootPath, uniqueName);

                myfile.SaveAs(fileSavePath);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = Usuario.Id;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idPerro";
                parametro.Valor = formulario.id;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Imagen";
                parametro.Valor = uniqueNameImg;
                ListParametro.Add(parametro);

                formulario = Anuncio.ActualizarForoPerro(ListParametro);

            }
            catch (Exception ex)
            {
            }

            return Json(resultadoAnuncio, JsonRequestBehavior.AllowGet);
        }
    }
}

