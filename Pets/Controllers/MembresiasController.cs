using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Felipe_Arcos___sitio_web.Controllers
{
    public class MembresiasController : Controller
    {
        // GET: Membresias
        public ActionResult Mimascota()
        {
            if (Session["Usuario"] == null)
            {
                return RedirectToAction("Login", "Inicio");
            }
            else
            {
                Entidades.Usuario usuario = (Entidades.Usuario)Session["Usuario"];

                if (usuario.IdRol != 4)
                {
                    return RedirectToAction("Login", "Inicio");
                }
            }
            return View();
        }

        public ActionResult Micriadero()
        {
            if (Session["Usuario"] == null)
            {
                return RedirectToAction("Login", "Inicio");
            }
            else
            {
                Entidades.Usuario usuario = (Entidades.Usuario)Session["Usuario"];

                if (usuario.IdRol == 4)
                {
                    return RedirectToAction("Login", "Inicio");
                }
            }
            return View();
        }

        public ActionResult MicriaderoPro()
        {
            return View();
        }

        public ActionResult Criaderos()
        {
            return View();
        }

        public ActionResult Alianzas()
        {
            return View();
        }

        public JsonResult ObtenerInformacionUsuario()
        {
            Entidades.InformacionUsuario informacionUsuario = new Entidades.InformacionUsuario();

            List<Entidades.Finanzas> olistafin = new List<Entidades.Finanzas>();

            informacionUsuario.usuario = (Entidades.Usuario)Session["Usuario"];

            informacionUsuario.humano = (Entidades.Humano)Session["Humano"];

            informacionUsuario.listaPerro = (List<Entidades.Perro>)Session["ListaPerro"];

            informacionUsuario.listaMedicos = (List<Entidades.Medicos>)Session["ListaMedicos"];

            informacionUsuario.listaEntrenamiento = (List<Entidades.Entrenamiento>)Session["ListaEntrenamiento"];

            informacionUsuario.listaVacunas = (List<Entidades.Vacunas>)Session["ListaVacunas"];

            informacionUsuario.listaCamadas = (List<Entidades.Camadas>)Session["ListaCamadas"];

            informacionUsuario.listaCompetencias = (List<Entidades.Competencias>)Session["ListaCompetencias"];

            try
            {
                

                olistafin = (List<Entidades.Finanzas>)Session["ListFinanzas"];
                if (olistafin == null)
                {

                }
                else
                {
                    double totalingresos = olistafin.Sum(n => n.montoingreso);
                    double totalegresos = olistafin.Sum(n => n.montoegreso);

                    informacionUsuario.totalIngresos = totalingresos;

                    informacionUsuario.totalEgresos = totalegresos;
                }
            }
            catch (Exception es)
            {

            }
            
            return Json(informacionUsuario, JsonRequestBehavior.AllowGet);
        }

        //public JsonResult ActualizarFotoPerro(HttpPostedFileWrapper myfile, Object datos)
    }
}