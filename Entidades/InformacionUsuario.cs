using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class InformacionUsuario
    {
        public Usuario usuario { get; set; }
        public Humano humano { get; set; }
        public List<Perro> listaPerro { get; set; }
        public List<Medicos> listaMedicos { get; set; }
        public List<Entrenamiento> listaEntrenamiento { get; set; }
        public List<Anuncio> listaAnuncios { get; set; }
        public List<Anuncio> listaAnunciosAlianzas { get; set; }
        public List<Vacunas> listaVacunas { get; set; }
        public List<Camadas> listaCamadas { get; set; }
        public List<Competencias> listaCompetencias { get; set; }
        public double totalIngresos { get; set; }
        public double totalEgresos { get; set; }
    }
}
