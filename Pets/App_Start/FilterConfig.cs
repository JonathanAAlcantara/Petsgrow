using System.Web;
using System.Web.Mvc;

namespace Felipe_Arcos___sitio_web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
