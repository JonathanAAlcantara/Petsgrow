using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Entidades;
using Felipe_Arcos___sitio_web.Models.Usuario;
using Negocio.Anuncio;


namespace Felipe_Arcos___sitio_web.Controllers
{
    public class AnunciosController : Controller
    {
        // GET: Anuncios
        public ActionResult FormularioAnuncio()
        {
            //if(Session["Usuario"] == null)
            //{
            //    return RedirectToAction("Login", "Inicio");
            //}
            //else
            //{
            //    Entidades.Usuario usuario = (Entidades.Usuario)Session["Usuario"];

            //    if (usuario.IdRol != 7 || usuario.IdRol != 8 )
            //    {
            //        return RedirectToAction("Login", "Inicio");
            //    }
            //}

            return View();
        }

        [HttpPost]
        public JsonResult ObtenerInformacionAnuncios()
        {
            List<Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            Negocio.Anuncio.Anuncio Anuncio = new Negocio.Anuncio.Anuncio();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            ResultadoAnuncios resultadoAnuncios = new Models.Usuario.ResultadoAnuncios();

            Entidades.Anuncio anuncio = new Entidades.Anuncio();
            bool esSistema = false;

            string mensaje = string.Empty;

            const int idRolSistema = 1;
            const string key = "Atena";

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idRol";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TipoPublicacion";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Categoria";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Principal";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Secundario";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TituloNegocio";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Descripcion";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Estado";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Municipio";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Correo";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Direccion";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Telefono";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Facebook";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Instagram";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Youtube";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Twitter";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Imagen";
                parametro.Valor = 0;
                ListParametro.Add(parametro);


                ListAnuncio = Anuncio.ObtenerAnuncios(ListParametro);

                List<EstadoMunicipio> ListEstadoMunicipio = (from c in ListAnuncio
                                                             group c by new
                                                             {
                                                                 c.Estado,
                                                                 c.Municipio,
                                                                 c.Principal,
                                                                 c.Categoria,
                                                                 c.Vistas
                                                             } into gcs
                                                             select new EstadoMunicipio()
                                                             {
                                                                 Estado = gcs.Key.Estado,
                                                                 Municipio = gcs.Key.Municipio,
                                                                 Principal = gcs.Key.Principal,
                                                                 Categoria = gcs.Key.Categoria,
                                                                 Vistas = gcs.Key.Vistas
                                                             }).ToList();

                List<string> ListEstado = ListEstadoMunicipio.Select(n => n.Estado).Distinct().ToList();

                resultadoAnuncios.ListAnuncio = ListAnuncio.OrderBy(n => n.Id).ToList();
                resultadoAnuncios.Anuncios = new Entidades.Anuncio();
                resultadoAnuncios.ListEstadoMunicipio = ListEstadoMunicipio.OrderBy(n => n.Estado).
                                                OrderBy(m => m.Municipio).OrderBy(x => x.Categoria).ToList();
                resultadoAnuncios.ListEstado = ListEstado.OrderBy(n => n).ToList();

                Session["ListAnuncio"] = ListAnuncio;
                Session["ListEstadoMunicipio"] = ListEstadoMunicipio;
                Session["ListEstado"] = ListEstado;

                resultadoAnuncios.Mensaje = "OK";
            }
            catch (Exception ex)
            {
                mensaje = "ERROR: Metodo: ObtenerAnuncios, Source: " + ex.Source + ", Mensaje: " + ex.Message;
                //ArchivoLog.EscribirLog(null, mensaje);

                resultadoAnuncios.Mensaje = mensaje;
            }

            return Json(resultadoAnuncios, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerMunicipio(string estado)
        {
            Session["estado"] = estado;

            List<EstadoMunicipio> ListEstadoMunicipio = (List<EstadoMunicipio>)Session["ListEstadoMunicipio"];

            List<EstadoMunicipio> ListEstadoMunicipioTemp = ListEstadoMunicipio.Where(n => n.Estado.ToUpper() == estado.ToUpper()).ToList();

            var listDistinct = ListEstadoMunicipioTemp.Select(n => n.Municipio).Distinct();

            return Json(listDistinct, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerRaza(List<string> ListMunicipio)
        {
            Session["ListMunicipio"] = ListMunicipio;

            string estado = Session["estado"].ToString();

            List<EstadoMunicipio> ListEstadoMunicipio = (List<EstadoMunicipio>)Session["ListEstadoMunicipio"];

            List<EstadoMunicipio> ListEstadoMunicipioTemp = (from a in ListEstadoMunicipio
                                                             from b in ListMunicipio
                                                             where a.Estado.ToUpper() == estado.ToUpper()
                                                                 && a.Municipio.ToUpper() == b.ToUpper()
                                                             select a).ToList();

            var listDistinct = ListEstadoMunicipioTemp.Select(n => n.Categoria).Distinct();

            return Json(listDistinct, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerInformacionRaza(List<string> ListRaza)
        {
            ResultadoAnuncios resultadoAnuncios = new Models.Usuario.ResultadoAnuncios();

            string estado = Session["estado"].ToString();
            List<string> ListMunicipio = (List<string>)Session["ListMunicipio"];
            List<Entidades.Anuncio> ListAnuncio = (List<Entidades.Anuncio>)Session["ListAnuncio"];

            List<EstadoMunicipio> ListEstadoMunicipio = (List<EstadoMunicipio>)Session["ListEstadoMunicipio"];

            List<EstadoMunicipio> ListEstadoMunicipioTemp = (from a in ListEstadoMunicipio
                                                             from b in ListMunicipio
                                                             from c in ListRaza
                                                             where a.Estado.ToUpper() == estado.ToUpper()
                                                                 && a.Municipio.ToUpper() == b.ToUpper()
                                                                 && a.Categoria.ToUpper() == c.ToUpper()
                                                             select a).ToList();

            List<Entidades.Anuncio> listDistinct = (from a in ListAnuncio
                                                    from b in ListEstadoMunicipioTemp
                                                    where a.Estado.ToUpper() == b.Estado.ToUpper()
                                                     && a.Municipio.ToUpper() == b.Municipio.ToUpper()
                                                     && a.Categoria.ToUpper() == b.Categoria.ToUpper()
                                                     && a.Vistas ==b.Vistas
                                                    select a).OrderByDescending(x => x.Vistas).ToList();

            resultadoAnuncios.ListAnuncio = listDistinct;

            Session["ListAnuncioCriadTemp"] = resultadoAnuncios.ListAnuncio;

            return Json(resultadoAnuncios, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ObtenerInformacionAnunciosServicios()
        {
            List<Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            Negocio.Anuncio.Anuncio Anuncio = new Negocio.Anuncio.Anuncio();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            ResultadoAnuncios resultadoAnunciosServ = new Models.Usuario.ResultadoAnuncios();

            Entidades.Anuncio anuncio = new Entidades.Anuncio();
            bool esSistema = false;

            string mensaje = string.Empty;

            const int idRolSistema = 1;
            const string key = "Atena";

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idUsuario";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "idRol";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TipoPublicacion";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Categoria";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Principal";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Secundario";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "TituloNegocio";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Descripcion";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Estado";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Municipio";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Correo";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Direccion";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Telefono";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Facebook";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Instagram";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Youtube";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Twitter";
                parametro.Valor = 0;
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Imagen";
                parametro.Valor = 0;
                ListParametro.Add(parametro);


                ListAnuncio = Anuncio.ObtenerAnunciosServicios(ListParametro);

                List<EstadoMunicipio> ListEstadoMunicipio = (from c in ListAnuncio
                                                             group c by new
                                                             {
                                                                 c.Estado,
                                                                 c.Municipio,
                                                                 c.Principal,
                                                                 c.Categoria,
                                                                 c.Vistas
                                                             } into gcs
                                                             select new EstadoMunicipio()
                                                             {
                                                                 Estado = gcs.Key.Estado,
                                                                 Municipio = gcs.Key.Municipio,
                                                                 Principal = gcs.Key.Principal,
                                                                 Categoria = gcs.Key.Categoria,
                                                                 Vistas = gcs.Key.Vistas
                                                             }).ToList();

                List<string> ListEstado = ListEstadoMunicipio.Select(n => n.Estado).Distinct().ToList();

                resultadoAnunciosServ.ListAnuncio = ListAnuncio.OrderBy(n => n.Id).ToList();
                resultadoAnunciosServ.Anuncios = new Entidades.Anuncio();
                resultadoAnunciosServ.ListEstadoMunicipio = ListEstadoMunicipio.OrderBy(n => n.Estado).
                                                OrderBy(m => m.Municipio).OrderBy(x => x.Categoria).ToList();
                resultadoAnunciosServ.ListEstado = ListEstado.OrderBy(n => n).ToList();

                ListAnuncio = ListAnuncio.OrderByDescending(n => n.Vistas).ToList();

                Session["ListAnuncioServ"] = ListAnuncio;
                Session["ListAnuncioServTemp"] = ListAnuncio;
                Session["ListEstadoMunicipioServ"] = ListEstadoMunicipio;
                Session["ListEstadoServ"] = ListEstado;

                resultadoAnunciosServ.Mensaje = "OK";
            }
            catch (Exception ex)
            {
                mensaje = "ERROR: Metodo: ObtenerAnuncios, Source: " + ex.Source + ", Mensaje: " + ex.Message;
                //ArchivoLog.EscribirLog(null, mensaje);

                resultadoAnunciosServ.Mensaje = mensaje;
            }

            return Json(resultadoAnunciosServ, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerMunicipioServicios(string estado)
        {
            Session["estado"] = estado;

            List<EstadoMunicipio> ListEstadoMunicipio = (List<EstadoMunicipio>)Session["ListEstadoMunicipioServ"];

            List<EstadoMunicipio> ListEstadoMunicipioTemp = ListEstadoMunicipio.Where(n => n.Estado.ToUpper() == estado.ToUpper()).ToList();

            var listDistinct = ListEstadoMunicipioTemp.Select(n => n.Municipio).Distinct();

            return Json(listDistinct, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerServicio(List<string> ListMunicipio)
        {
            Session["ListMunicipio"] = ListMunicipio;

            string estado = Session["estado"].ToString();

            List<EstadoMunicipio> ListEstadoMunicipio = (List<EstadoMunicipio>)Session["ListEstadoMunicipioServ"];

            List<EstadoMunicipio> ListEstadoMunicipioTemp = (from a in ListEstadoMunicipio
                                                             from b in ListMunicipio
                                                             where a.Estado.ToUpper() == estado.ToUpper()
                                                                 && a.Municipio.ToUpper() == b.ToUpper()
                                                             select a).ToList();

            var listDistinct = ListEstadoMunicipioTemp.Select(n => n.Categoria).Distinct();

            return Json(listDistinct, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerInformacionServicios(List<string> ListRaza)
        {
            ResultadoAnuncios resultadoAnuncios = new Models.Usuario.ResultadoAnuncios();

            string estado = Session["estado"].ToString();
            List<string> ListMunicipio = (List<string>)Session["ListMunicipio"];
            List<Entidades.Anuncio> ListAnuncio = (List<Entidades.Anuncio>)Session["ListAnuncioServ"];

            List<EstadoMunicipio> ListEstadoMunicipio = (List<EstadoMunicipio>)Session["ListEstadoMunicipioServ"];

            List<EstadoMunicipio> ListEstadoMunicipioTemp = (from a in ListEstadoMunicipio
                                                             from b in ListMunicipio
                                                             from c in ListRaza
                                                             where a.Estado.ToUpper() == estado.ToUpper()
                                                                 && a.Municipio.ToUpper() == b.ToUpper()
                                                                 && a.Categoria.ToUpper() == c.ToUpper()
                                                             select a).ToList();

            List<Entidades.Anuncio> listDistinct = (from a in ListAnuncio
                                                    from b in ListEstadoMunicipioTemp
                                                    where a.Estado.ToUpper() == b.Estado.ToUpper()
                                                     && a.Municipio.ToUpper() == b.Municipio.ToUpper()
                                                     && a.Categoria.ToUpper() == b.Categoria.ToUpper()
                                                     && a.Vistas == b.Vistas
                                                    select a).OrderByDescending(x => x.Vistas).ToList();

            resultadoAnuncios.ListAnuncio = listDistinct;

            Session["ListAnuncioServTemp"] = resultadoAnuncios.ListAnuncio;

            return Json(resultadoAnuncios, JsonRequestBehavior.AllowGet);
        }

        public JsonResult OrdenarPopularidad()
        {
            List<Entidades.Anuncio> ListaAnuncios = (List<Entidades.Anuncio>)Session["ListAnuncioServTemp"];

            ListaAnuncios = ListaAnuncios.OrderByDescending(n => n.Vistas).ToList();

            return Json(ListaAnuncios, JsonRequestBehavior.AllowGet);
        }

        public JsonResult OrdenarNombreAZ()
        {
            List<Entidades.Anuncio> ListaAnuncios = (List<Entidades.Anuncio>)Session["ListAnuncioServTemp"];

            ListaAnuncios = ListaAnuncios.OrderBy(n => n.TituloNegocio).ToList();

            return Json(ListaAnuncios, JsonRequestBehavior.AllowGet);
        }

        public JsonResult OrdenarPopularidadCriad()
        {
            List<Entidades.Anuncio> ListaAnuncios = (List<Entidades.Anuncio>)Session["ListAnuncioCriadTemp"];

            ListaAnuncios = ListaAnuncios.OrderByDescending(n => n.Vistas).ToList();

            return Json(ListaAnuncios, JsonRequestBehavior.AllowGet);
        }

        public JsonResult OrdenarNombreAZCriad()
        {
            List<Entidades.Anuncio> ListaAnuncios = (List<Entidades.Anuncio>)Session["ListAnuncioCriadTemp"];

            ListaAnuncios = ListaAnuncios.OrderBy(n => n.TituloNegocio).ToList();

            return Json(ListaAnuncios, JsonRequestBehavior.AllowGet);
        }


        public JsonResult ObtenerMunicipios(int estado)
        {
            List<Entidades.Municipios> ListMunicipios = new List<Municipios>();
            Entidades.Municipios Municipio = new Municipios();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "ClaveEstado";
                parametro.Valor = estado;
                ListParametro.Add(parametro);

                ListMunicipios = Usuario.BuscarMunicipios(ListParametro);

            }
            catch (Exception ex)
            {

            }
            return Json(ListMunicipios, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerRazas(Entidades.Razas raza)
        {
            List<Entidades.Razas> ListRazas = new List<Razas>();
            List<Entidades.Razas> ListRazasOrdenada = new List<Razas>();
            Entidades.Razas Municipio = new Razas();
            Negocio.Usuario.Usuario Usuario = new Negocio.Usuario.Usuario();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "IdRaza";
                parametro.Valor = "1";
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Grupo";
                parametro.Valor = "1";
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Seccion";
                parametro.Valor = "1";
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Raza";
                parametro.Valor = "NA";
                ListParametro.Add(parametro);

                parametro = new Parametro();
                parametro.Nombre = "Pais";
                parametro.Valor = "NA";
                ListParametro.Add(parametro);

                ListRazas = Usuario.BuscarRazas(ListParametro);

                ListRazasOrdenada = ListRazas.OrderBy(n => n.Raza).ToList();

            }
            catch (Exception ex)
            {

            }
            return Json(ListRazasOrdenada, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AgregarVista(int idAnuncio)
        {
            //AGREGAR FUNCIONALIDAD PARA LA BASE DE DATOS
            Negocio.Anuncio.Anuncio Anuncio = new Negocio.Anuncio.Anuncio();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = idAnuncio;
                ListParametro.Add(parametro);

                Anuncio.AgregarVista(ListParametro);
            }
            catch (Exception ex)
            {

            }

            return Json("OK", JsonRequestBehavior.AllowGet);
        }

        public JsonResult AgregarVistaCriaderos(int idAnuncio)
        {
            //AGREGAR FUNCIONALIDAD PARA LA BASE DE DATOS
            Negocio.Anuncio.Anuncio Anuncio = new Negocio.Anuncio.Anuncio();
            List<Parametro> ListParametro = new List<Parametro>();
            Parametro parametro = new Parametro();

            try
            {
                parametro = new Parametro();
                parametro.Nombre = "id";
                parametro.Valor = idAnuncio;
                ListParametro.Add(parametro);

                Anuncio.AgregarVistaCriaderos(ListParametro);
            }
            catch (Exception ex)
            {

            }

            return Json("OK", JsonRequestBehavior.AllowGet);
        }
    }
}