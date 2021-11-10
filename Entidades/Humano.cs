using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class Humano
    {
        public int id { get; set; }
        public string propietario { get; set; }
        public string estado { get; set; }
        public string municipio { get; set; }
        public string colonia { get; set; }
        public string direccion { get; set; }
        public string telefono { get; set; }
        public string email { get; set; }
    }
}
