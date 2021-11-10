using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Entidades;
using System.Data;
using Datos.Usuario;

namespace Negocio.Usuario
{
    public class Usuario
    {
        public List<Entidades.Usuario> ObtenerUsuario(List<Parametro> listParametro)
        {
            object Resultado = new object();
            List<Entidades.Usuario> ListUsuario = new List<Entidades.Usuario>();
            const string spName = "ObtenerUsuario";
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
                }

                var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario[]>(sbResultado.ToString());
                ListUsuario = jsonListUsuario.ToList();

                ListUsuario.ForEach(n =>
                {
                    if (n.Estatus)
                    {
                        n.StrEstatus = "Activo";
                    }
                    else
                    {
                        n.StrEstatus = "Inactivo";
                    }
                });
            }
            catch (Exception ex)
            {
            }

            return ListUsuario;
        }

        public Entidades.Usuario AgregarUsuario(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Usuario usuario = new Entidades.Usuario();
            const string spName = "InsertUsuario";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {

                    dtResultado = dsResultado.Tables[0];

                    if (dtResultado.Rows.Count > 0)
                    {
                        var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dtResultado.Rows[0][0].ToString());
                        usuario = jsonListUsuario;

                        if (usuario.Estatus)
                        {
                            usuario.StrEstatus = "Activo";
                        }
                        else
                        {
                            usuario.StrEstatus = "Inactivo";
                        }

                        usuario.ConfirmarPassword = usuario.Password;
                    }
                }

            }
            catch (Exception ex)
            {
            }

            return usuario;
        }

        public Entidades.Humano ActualizarHumano(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Humano humano = new Entidades.Humano();
            const string spName = "ActualizarHumano";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonHumano = JsonConvert.DeserializeObject<Entidades.Humano>(dtResultado.Rows[0][0].ToString());
                    humano = jsonHumano;
                }
                
            }
            catch (Exception ex)
            {

            }

            return humano;

        }

        public Entidades.Perro RegistroPerroInicial(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Perro perro = new Entidades.Perro();
            const string spName = "RegistrarPerroInicial";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonPerro = JsonConvert.DeserializeObject<Entidades.Perro>(dtResultado.Rows[0][0].ToString());
                    perro = jsonPerro;
                }

            }
            catch (Exception ex)
            {

            }

            return perro;

        }

        public Entidades.Perro ActualizarPerro(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Perro perro = new Entidades.Perro();
            const string spName = "ActualizarPerro";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonPerro = JsonConvert.DeserializeObject<Entidades.Perro>(dtResultado.Rows[0][0].ToString());
                    perro = jsonPerro;
                }

            }
            catch (Exception ex)
            {

            }

            return perro;

        }

        public Entidades.Perro EliminarPerro(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Perro perro = new Entidades.Perro();
            const string spName = "EliminarPerro";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonPerro = JsonConvert.DeserializeObject<Entidades.Perro>(dtResultado.Rows[0][0].ToString());
                    perro = jsonPerro;
                }

            }
            catch (Exception ex)
            {

            }

            return perro;

        }

        public Entidades.Medicos ActualizarMedico(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Medicos medicos = new Entidades.Medicos();
            const string spName = "ActualizarMedicos";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonPerro = JsonConvert.DeserializeObject<Entidades.Medicos>(dtResultado.Rows[0][0].ToString());
                    medicos = jsonPerro;
                }

            }
            catch (Exception ex)
            {

            }

            return medicos;

        }

        public Entidades.Entrenamiento ActualizarEntrenamiento(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Entrenamiento entrenamiento = new Entidades.Entrenamiento();
            const string spName = "ActualizarEntrenamiento";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonPerro = JsonConvert.DeserializeObject<Entidades.Entrenamiento>(dtResultado.Rows[0][0].ToString());
                    entrenamiento = jsonPerro;
                }

            }
            catch (Exception ex)
            {

            }

            return entrenamiento;

        }

        public List<Entidades.Finanzas> ActualizarFinanzas(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Finanzas finanzas = new Entidades.Finanzas();
            List<Entidades.Finanzas> Listfinanzas = new List<Entidades.Finanzas>();
            const string spName = "ActualizarFinanzas";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();
            DataSet dsResultado = new DataSet();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {
                    if (dsResultado.Tables[0].Rows.Count > 0)
                    {
                        sbResultado.Append("[");

                        dsResultado.Tables[0].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado.Append(n[0].ToString());
                        });

                        sbResultado.Append("]");

                        var jsonListaFinanzas = JsonConvert.DeserializeObject<Entidades.Finanzas[]>(sbResultado.ToString()).ToList();
                        Listfinanzas = jsonListaFinanzas;
                        
                    }
                }
                
                
            }
            catch (Exception ex)
            {

            }

            return Listfinanzas;

        }

        public List<Entidades.Finanzas> FiltrarFinanzas(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Finanzas finanzas = new Entidades.Finanzas();
            List<Entidades.Finanzas> Listfinanzas = new List<Entidades.Finanzas>();
            const string spName = "FiltrarFinanzas";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();
            DataSet dsResultado = new DataSet();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {
                    if (dsResultado.Tables[0].Rows.Count > 0)
                    {
                        sbResultado.Append("[");

                        dsResultado.Tables[0].Rows.Cast<DataRow>().ToList().ForEach(n =>
                        {
                            sbResultado.Append(n[0].ToString());
                        });

                        sbResultado.Append("]");

                        var jsonListaFinanzas = JsonConvert.DeserializeObject<Entidades.Finanzas[]>(sbResultado.ToString()).ToList();
                        Listfinanzas = jsonListaFinanzas;

                    }
                }


            }
            catch (Exception ex)
            {

            }

            return Listfinanzas;

        }

        public Entidades.Usuario RecuperarContrasena(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Usuario usuario = new Entidades.Usuario();
            const string spName = "RecuperarContrasena";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {
                    dtResultado = dsResultado.Tables[0];

                    if (dtResultado.Rows.Count > 0)
                    {
                        var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dtResultado.Rows[0][0].ToString());
                        usuario = jsonListUsuario;

                        if (usuario.Estatus)
                        {
                            usuario.StrEstatus = "Activo";
                        }
                        else
                        {
                            usuario.StrEstatus = "Inactivo";
                        }

                        usuario.ConfirmarPassword = usuario.Password;
                    }
                }

            }
            catch (Exception ex)
            {
            }

            return usuario;
        }

        public Entidades.Usuario Reestablecer(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Usuario usuario = new Entidades.Usuario();
            const string spName = "Reestablecer";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {

                    dtResultado = dsResultado.Tables[0];

                    if (dtResultado.Rows.Count > 0)
                    {
                        var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dtResultado.Rows[0][0].ToString());
                        usuario = jsonListUsuario;

                        if (usuario.Estatus)
                        {
                            usuario.StrEstatus = "Activo";
                        }
                        else
                        {
                            usuario.StrEstatus = "Inactivo";
                        }

                        usuario.ConfirmarPassword = usuario.Password;
                    }
                }

            }
            catch (Exception ex)
            {
            }

            return usuario;
        }

        public List<Entidades.Municipios> BuscarMunicipios(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Municipios municipios = new Entidades.Municipios();
            List<Entidades.Municipios> ListMunicipios = new List<Municipios>();
            const string spName = "ObtenerMunicipios";
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

                var jsonListMunicipios = JsonConvert.DeserializeObject<Entidades.Municipios[]>(sbResultado.ToString());
                ListMunicipios = jsonListMunicipios.ToList();

            }
            catch (Exception ex)
            {
            }

            return ListMunicipios;
        }

        public List<Entidades.Razas> BuscarRazas(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Razas razas = new Entidades.Razas();
            List<Entidades.Razas> ListRazas = new List<Razas>();
            const string spName = "ObtenerRazas";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();
            StringBuilder sbResultado = new StringBuilder();

            try
            {
                Resultado = bdUsuario.ObtenerRaza(spName, listParametro);

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

                var jsonListRazas = JsonConvert.DeserializeObject<Entidades.Razas[]>(sbResultado.ToString());
                ListRazas = jsonListRazas.ToList();

            }
            catch (Exception ex)
            {
            }

            return ListRazas;
        }

        public Entidades.Usuario AgregarPagoUsuario(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Usuario usuario = new Entidades.Usuario();
            const string spName = "RegistrodePagoUsuario";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {

                    dtResultado = dsResultado.Tables[0];

                    if (dtResultado.Rows.Count > 0)
                    {
                        var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dtResultado.Rows[0][0].ToString());
                        usuario = jsonListUsuario;

                        if (usuario.Estatus)
                        {
                            usuario.StrEstatus = "Activo";
                        }
                        else
                        {
                            usuario.StrEstatus = "Inactivo";
                        }

                        usuario.ConfirmarPassword = usuario.Password;
                    }
                }

            }
            catch (Exception ex)
            {
            }

            return usuario;
        }

        public Entidades.Usuario AgregarPagoPerro(List<Parametro> listParametro)
        {
            object Resultado = new object();
            DataSet dsResultado = new DataSet();
            Entidades.Usuario usuario = new Entidades.Usuario();
            const string spName = "RegistrodePagoPerro";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuario(spName, listParametro);

                dsResultado = (DataSet)Resultado;

                if (dsResultado.Tables.Count > 0)
                {

                    dtResultado = dsResultado.Tables[0];

                    if (dtResultado.Rows.Count > 0)
                    {
                        var jsonListUsuario = JsonConvert.DeserializeObject<Entidades.Usuario>(dtResultado.Rows[0][0].ToString());
                        usuario = jsonListUsuario;

                        if (usuario.Estatus)
                        {
                            usuario.StrEstatus = "Activo";
                        }
                        else
                        {
                            usuario.StrEstatus = "Inactivo";
                        }

                        usuario.ConfirmarPassword = usuario.Password;
                    }
                }

            }
            catch (Exception ex)
            {
            }

            return usuario;
        }

        public Entidades.Vacunas ActualizarVacunas(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Vacunas vacunas = new Entidades.Vacunas();
            const string spName = "ActualizarVacunas";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonPerro = JsonConvert.DeserializeObject<Entidades.Vacunas>(dtResultado.Rows[0][0].ToString());
                    vacunas = jsonPerro;
                }

            }
            catch (Exception ex)
            {


            }

            return vacunas;

        }

        public Entidades.Camadas ActualizarCamadas(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Camadas camadas = new Entidades.Camadas();
            const string spName = "ActualizarCamadas";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonCamadas = JsonConvert.DeserializeObject<Entidades.Camadas>(dtResultado.Rows[0][0].ToString());
                    camadas = jsonCamadas;
                }

            }
            catch (Exception ex)
            {


            }

            return camadas;

        }

        public Entidades.Competencias ActualizarCompetencias(List<Parametro> listParametro)
        {
            object Resultado = new object();
            Entidades.Competencias competencias = new Entidades.Competencias();
            const string spName = "ActualizarCompetencias";
            BDUsuario bdUsuario = new BDUsuario();
            DataTable dtResultado = new DataTable();

            try
            {
                Resultado = bdUsuario.InsertUsuariodt(spName, listParametro);

                dtResultado = (DataTable)Resultado;

                if (dtResultado.Rows.Count > 0)
                {
                    var jsonCompetencias = JsonConvert.DeserializeObject<Entidades.Competencias>(dtResultado.Rows[0][0].ToString());
                    competencias = jsonCompetencias;
                }

            }
            catch (Exception ex)
            {


            }

            return competencias;

        }
    }
}
