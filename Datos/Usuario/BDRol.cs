using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Entidades;
using System.Data.SqlClient;

namespace Datos.Usuario
{
    public class BDRol : BD
    {
        public object ObtenerCatRol(string spName, List<Parametro> listParametro)
        {
            object Resultado = new object();
            List<SqlParameter> listParametrosSQL = new List<SqlParameter>();

            try
            {
                listParametrosSQL = listParametro.Select(n => new SqlParameter
                {
                    ParameterName = "@" + n.Nombre,
                    Value = n.Valor
                }).ToList();

                Resultado = ExecuteScalar(spName, listParametrosSQL);
            }
            catch (Exception ex)
            {
            }

            return Resultado;
        }
    }
}
