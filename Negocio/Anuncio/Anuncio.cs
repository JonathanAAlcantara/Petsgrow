using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Entidades;
using System.Data;
using Datos.Usuario;
using Datos.Anuncio;

namespace Negocio.Anuncio
{
    public class Anuncio
    {
        public Entidades.Anuncio AgregarAnuncio(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Anuncio anuncio = new Entidades.Anuncio();
            const string spName = "InsertAnuncio";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertAnuncio(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Anuncio>(dtResultado.Rows[0][0].ToString());
                    anuncio = jsonListUsuario;

                }

            }
            catch (Exception ex)
            {
            }

            return anuncio;
        }

        public List<Entidades.Anuncio> ObtenerAnuncios(List<Parametro> listParametro)
        {
            object Resultado = new object();
            List<Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            const string spName = "ObtenerAnuncios";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();

            try
            {
                Resultado = bdUsuario.ObtenerAnuncio(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    sbResultado.Append("[");

                    dtResultado.Rows.Cast<DataRow>().ToList().ForEach(n =>
                    {
                        sbResultado.Append(n[0].ToString());
                    });

                    sbResultado.Append("]");
                }

                var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Anuncio[]>(sbResultado.ToString());
                ListAnuncio = jsonListUsuario.ToList();
            }
            catch (Exception ex)
            {
            }

            return ListAnuncio;
        }

        public List<Entidades.Anuncio> ObtenerAnunciosServicios(List<Parametro> listParametro)
        {
            object Resultado = new object();
            List<Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            const string spName = "ObtenerAnunciosAlianzas";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();

            try
            {
                Resultado = bdUsuario.ObtenerAnuncio(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    sbResultado.Append("[");

                    dtResultado.Rows.Cast<DataRow>().ToList().ForEach(n =>
                    {
                        sbResultado.Append(n[0].ToString());
                    });

                    sbResultado.Append("]");
                }

                var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Anuncio[]>(sbResultado.ToString());
                ListAnuncio = jsonListUsuario.ToList();
            }
            catch (Exception ex)
            {
            }

            return ListAnuncio;
        }

        public void AgregarVista(List<Parametro> listParametro)
        {
            object Resultado = new object();
            List<Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            const string spName = "AgregarVista";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();

            try
            {
                Resultado = bdUsuario.AgregarVista(spName, listParametro);
            }
            catch (Exception ex)
            {
            }
        }

        public void AgregarVistaCriaderos(List<Parametro> listParametro)
        {
            object Resultado = new object();
            List<Entidades.Anuncio> ListAnuncio = new List<Entidades.Anuncio>();
            const string spName = "AgregarVistaCriaderos";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();

            try
            {
                Resultado = bdUsuario.AgregarVista(spName, listParametro);
            }
            catch (Exception ex)
            {
            }
        }

        public Entidades.Perro ActualizarForoPerro(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Perro perroact = new Entidades.Perro();
            const string spName = "ActualizarFotoPerro";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Perro>(dtResultado.Rows[0][0].ToString());
                    perroact = jsonListUsuario;

                }

            }
            catch (Exception ex)
            {
            }

            return perroact;
        }

    }
}
