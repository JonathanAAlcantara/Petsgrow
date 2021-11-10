using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    [Serializable]
    public class Anuncio
    {
        public long Id { get; set; }
        public long IdUsuario { get; set; }
        public string IdRol { get; set; }
        public string TipoPublicacion { get; set; }
        public string Categoria { get; set; }
        public string Raza { get; set; }
        public string Principal { get; set; }
        public string Secundario { get; set; }
        public string TituloNegocio { get; set; }
        public string Descripcion { get; set; }
        public string Estado { get; set; }
        public string Municipio { get; set; }
        public string Correo { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string Youtube { get; set; }
        public string Twitter { get; set; }
        public string Imagen { get; set; }
        public int Vistas { get; set; }

    }
}
