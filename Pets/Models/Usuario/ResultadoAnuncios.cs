using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Felipe_Arcos___sitio_web.Models.Usuario
{
    public class ResultadoAnuncios
    {
        public List<Entidades.Anuncio> ListAnuncio { get; set; }
        public Entidades.Anuncio Anuncios { get; set; }
        public List<EstadoMunicipio> ListEstadoMunicipio { get; set; }
        public List<string> ListEstado { get; set; }
        public List<string> ListMunicipio { get; set; }
        public List<string> ListPrincipal { get; set; }
        public string Mensaje { get; set; }
    }
}