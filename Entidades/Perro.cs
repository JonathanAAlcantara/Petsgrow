using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class Perro
    {
        public int id { get; set; }
        public int idUsuario { get; set; }
        public string nombreperro { get; set; }
        public string chip { get; set; }
        public string raza { get; set; }
        public string tatuaje { get; set; }
        public string nacimiento { get; set; }
        public string pedigree { get; set; }
        public string sexo { get; set; }
        public string particulares { get; set; }
        public string color { get; set; }
        public string peso { get; set; }
        public string pelo { get; set; }
        public string altura { get; set; }
        public string estatuspago { get; set; }
        public string estatusmembresia { get; set; }
        public string idmembresia { get; set; }
        public DateTime fechaultimopago { get; set; }
        public string imagen { get; set; }
        public string criador { get; set; }
        public string consanguinidad { get; set; }


        public string AlturaPro { get; set; }
        public string ChipNo { get; set; }
        public string PedigreeNo { get; set; }
        public string PesoPro { get; set; }
        public string SenasParticulares { get; set; }
        public string TatuajeNo { get; set; }
    }
}
