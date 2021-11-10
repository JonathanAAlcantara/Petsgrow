using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class Finanzas
    {
        public int idperro { get; set; }
        public int idusuario { get; set; }
        public string nombreperro { get; set; }
        public string tipoingreso { get; set; }
        public DateTime fechaingreso { get; set; }
        public string detalleingreso { get; set; }
        public double montoingreso { get; set; }
        public string tipoegreso { get; set; }
        public DateTime fechaegreso { get; set; }
        public string detalleegreso { get; set; }
        public double montoegreso { get; set; }
        public double totalingresos { get; set; }
        public double totalegresos { get; set; }
        public double resultado { get; set; }
        public DateTime fechainicio { get; set; }
        public DateTime fechafin { get; set; }

    }
}
