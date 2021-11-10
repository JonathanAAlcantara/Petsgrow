using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Entidades;
using Newtonsoft.Json;
using Datos.Usuario;
using System.Data;

namespace Negocio.Login
{
    public class Login
    {
        public Entidades.InformacionUsuario ObtenerUsuario(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Usuario Usuario = new Entidades.Usuario();
            Entidades.Humano Humano = new Humano();
            List<Entidades.Perro> listaPerro = new List<Perro>();
            List<Entidades.Medicos> listaMedicos = new List<Medicos>();
            List<Entidades.Entrenamiento> listaEntrenamiento = new List<Entrenamiento>();
            List<Entidades.Anuncio> listaAnuncios = new List<Entidades.Anuncio>();
            List<Entidades.Anuncio> listaAnunciosAlianzas = new List<Entidades.Anuncio>();
            List<Entidades.Vacunas> listaVacunas = new List<Vacunas>();
            List<Entidades.Camadas> listaCamadas = new List<Camadas>();
            List<Entidades.Competencias> listaCompetencias = new List<Competencias>();
            InformacionUsuario informacionUsuario = new InformacionUsuario();
            

            const string spName = "ObtenerUsuario";
            BDUsuario bdUsuario = new BDUsuario();
            DataSet dsResultado = new DataSet();
            StringBuilder sbResultado = new StringBuilder();
            StringBuilder sbResultado2 = new StringBuilder();
            StringBuilder sbResultado3 = new StringBuilder();
            StringBuilder sbResultado4 = new StringBuilder();
            StringBuilder sbResultado5 = new StringBuilder();
            StringBuilder sbResultado6 = new StringBuilder();
            StringBuilder sbResultado7 = new StringBuilder();
            StringBuilder sbResultado8 = new StringBuilder();

            try
            {
                Resultado = bdUsuario.ObtenerUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {
                    if (dsResultado.Tables[0].Rows.Count > 0)
                    {
                        var jsonUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dsResultado.Tables[0].Rows[0][0].ToString());
                        Usuario = jsonUsuario;
                        informacionUsuario.usuario = Usuario;
                    }
                }
                if (dsResultado.Tables.Count > 1)
                {
                    if (dsResultado.Tables[1].Rows.Count > 0)
                    {
                        var jsonHumano = JsonConvert.DeserializeObject<Entidades.Humano>(dsResultado.Tables[1].Rows[0][0].ToString());
                        Humano = jsonHumano;
                        informacionUsuario.humano = Humano;
                    }
                }
                if (dsResultado.Tables.Count > 2)
                {
                    if (dsResultado.Tables[2].Rows.Count > 0)
                    {
                        sbResultado.Append("[");

                        dsResultado.Tables[2].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado.Append(n[0].ToString());
                        });

                        sbResultado.Append("]");

                        var jsonListaPerro = JsonConvert.DeserializeObject<Entidades.Perro[]>(sbResultado.ToString()).ToList();
                        listaPerro = jsonListaPerro;
                        informacionUsuario.listaPerro = listaPerro;
                    }
                }
                if (dsResultado.Tables.Count > 3)
                {
                    if (dsResultado.Tables[3].Rows.Count > 0)
                    {
                        sbResultado2.Append("[");

                        dsResultado.Tables[3].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado2.Append(n[0].ToString());
                        });

                        sbResultado2.Append("]");

                        var jsonListaMedicos = JsonConvert.DeserializeObject<Entidades.Medicos[]>(sbResultado2.ToString()).ToList();
                        listaMedicos = jsonListaMedicos;
                        informacionUsuario.listaMedicos = listaMedicos;
                    }
                }
                if (dsResultado.Tables.Count > 4)
                {
                    if (dsResultado.Tables[4].Rows.Count > 0)
                    {
                        sbResultado3.Append("[");

                        dsResultado.Tables[4].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado3.Append(n[0].ToString());
                        });

                        sbResultado3.Append("]");

                        var jsonListaEntrenamiento = JsonConvert.DeserializeObject<Entidades.Entrenamiento[]>(sbResultado3.ToString()).ToList();
                        listaEntrenamiento = jsonListaEntrenamiento;
                        informacionUsuario.listaEntrenamiento = listaEntrenamiento;
                    }
                }
                if (dsResultado.Tables.Count > 5)
                {
                    if (dsResultado.Tables[5].Rows.Count > 0)
                    {
                        sbResultado4.Append("[");

                        dsResultado.Tables[5].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado4.Append(n[0].ToString());
                        });

                        sbResultado4.Append("]");

                        var jsonListaAnuncios = JsonConvert.DeserializeObject<Entidades.Anuncio[]>(sbResultado4.ToString()).ToList();
                        listaAnuncios = jsonListaAnuncios;
                        informacionUsuario.listaAnuncios = listaAnuncios;
                    }
                }
                if (dsResultado.Tables.Count > 6)
                {
                    if (dsResultado.Tables[6].Rows.Count > 0)
                    {
                        sbResultado5.Append("[");

                        dsResultado.Tables[6].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado5.Append(n[0].ToString());
                        });

                        sbResultado5.Append("]");

                        var jsonListaAnunciosAlianzas = JsonConvert.DeserializeObject<Entidades.Anuncio[]>(sbResultado5.ToString()).ToList();
                        listaAnunciosAlianzas = jsonListaAnunciosAlianzas;
                        informacionUsuario.listaAnunciosAlianzas = listaAnunciosAlianzas;
                    }
                }
                if (dsResultado.Tables.Count > 7)
                {
                    if (dsResultado.Tables[7].Rows.Count > 0)
                    {
                        sbResultado6.Append("[");

                        dsResultado.Tables[7].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado6.Append(n[0].ToString());
                        });

                        sbResultado6.Append("]");

                        var jsonListaVacunas = JsonConvert.DeserializeObject<Entidades.Vacunas[]>(sbResultado6.ToString()).ToList();
                        listaVacunas = jsonListaVacunas;
                        informacionUsuario.listaVacunas = listaVacunas;
                    }
                }
                if (dsResultado.Tables.Count > 8)
                {
                    if (dsResultado.Tables[8].Rows.Count > 0)
                    {
                        sbResultado7.Append("[");

                        dsResultado.Tables[8].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado7.Append(n[0].ToString());
                        });

                        sbResultado7.Append("]");

                        var jsonListaCamadas = JsonConvert.DeserializeObject<Entidades.Camadas[]>(sbResultado7.ToString()).ToList();
                        listaCamadas = jsonListaCamadas;
                        informacionUsuario.listaCamadas = listaCamadas;
                    }
                }
                if (dsResultado.Tables.Count > 9)
                {
                    if (dsResultado.Tables[9].Rows.Count > 0)
                    {
                        sbResultado8.Append("[");

                        dsResultado.Tables[9].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado8.Append(n[0].ToString());
                        });

                        sbResultado8.Append("]");

                        var jsonListaCompetencias = JsonConvert.DeserializeObject<Entidades.Competencias[]>(sbResultado8.ToString()).ToList();
                        listaCompetencias = jsonListaCompetencias;
                        informacionUsuario.listaCompetencias = listaCompetencias;
                    }
                }

            }
            catch (Exception ex)
            {
            }

            return informacionUsuario;
        }
        public List<Entidades.CatPantalla> ObtenerPantalla(List<Parametro> listParametro)
        {
            List<Entidades.CatPantalla> listaPantalla = new List<CatPantalla>();
            object Resultado = new object();
            const string spName = "ObtenerCatPantalla";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();

            try
            {
                Resultado = bdUsuario.ObtenerUsuario(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    sbResultado.Append("[");

                    dtResultado.Rows.Cast<DataRow>().ToList().ForEach(n =>
                    {
                        sbResultado.Append(n[0].ToString());
                    });

                    sbResultado.Append("]");

                    var jsonCatCapital = JsonConvert.DeserializeObject<CatPantalla[]>(sbResultado.ToString());
                    listaPantalla = jsonCatCapital.ToList();
                }
            }
            catch (Exception ex)
            {
            }

            return listaPantalla;
        }
    }
}
