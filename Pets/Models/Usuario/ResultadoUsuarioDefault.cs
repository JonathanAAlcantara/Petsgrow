using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Felipe_Arcos___sitio_web.Models.Usuario
{
    public class ResultadoUsuarioDefault
    {
        public Entidades.Usuario Usuario { get; set; }
        public Entidades.CatRol CatRol { get; set; }
        public string Mensaje { get; set; }
    }
}