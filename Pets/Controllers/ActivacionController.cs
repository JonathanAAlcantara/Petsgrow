using Seguridad;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Entidades;
using Datos.Usuario;
using System.Data;
using Newtonsoft.Json;

namespace Felipe_Arcos___sitio_web.Controllers
{
    public class ActivacionController : Controller
    {
        // GET: Activacion
        public ActionResult ActivacionCuenta(string id)
        {
            try
            {
                id = id.Replace("|", "/");

                string key = ConfigurationManager.AppSettings["key"].ToString();

                string parametro = EncripDecrip.Desencriptar(id, key);
                List<string> parametros = parametro.Split('|').ToList();

                if (parametros.Count > 0)
                {
                    string idBase = parametros[0];
                    string cuenta = parametros[1];
                }
                else
                {
                    ViewBag.Mensaje = "No se encontraron parametros";

                    return View();
                }

                //DESCIFRAR PARAMETRO
                Parametro oparametro = new Parametro();
                List<Parametro> ListParametro = new List<Parametro>();

                oparametro = new Parametro();
                oparametro.Nombre = "Id";
                oparametro.Valor = parametros[0];
                ListParametro.Add(oparametro);

                oparametro = new Parametro();
                oparametro.Nombre = "Correo";
                oparametro.Valor = parametros[1];
                ListParametro.Add(oparametro);

                oparametro = new Parametro();
                oparametro.Nombre = "Estatus";
                oparametro.Valor = "1";
                ListParametro.Add(oparametro);


                //CONEXION CON LA BASE DE DATOS
                object Resultado = new object();
                BDUsuario bdUsuario = new BDUsuario();
                const string spName = "ActivarUsuario";
                DataTable dtResultado = new DataTable();
                Entidades.Usuario usuarioactivado = new Entidades.Usuario();

                try
                {
                    Resultado = bdUsuario.InsertUsuario(spName, ListParametro);

                    dtResultado = (DataTable)Resultado;

                    if (dtResultado.Rows.Count > 0)
                    {
                        var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dtResultado.Rows[0][0].ToString());
                        usuarioactivado = jsonListUsuario;

                        if (usuarioactivado.Estatus)
                        {
                            usuarioactivado.StrEstatus = "Activo";
                        }
                        else
                        {
                            usuarioactivado.StrEstatus = "Inactivo";
                        }

                       
                    }

                }
                catch (Exception ex)
                {
                }

                //CONTRUIR MENSAJE PARA LA PAGINA
                ViewBag.Mensaje = "Tu cuenta se creo con exito";
            }
            catch(Exception ex)
            {
                ViewBag.Mensaje = "No se pudo activar tu cuenta.";
            }

            return View();
        }
    }
}