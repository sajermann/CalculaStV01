using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculaStV1
{
    public partial class DashboardFaturamento : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string paginaCompleta = Request.Url.AbsoluteUri;
            String[] separador = { "/" };
            String[] urlDividida = paginaCompleta.Split(separador, 20, StringSplitOptions.None);
            int tamanhoElementosUrlDividida = urlDividida.Length;
            string paginaAtual = urlDividida[tamanhoElementosUrlDividida - 1];

            try
            {
                Page pagina = HttpContext.Current.Handler as Page;
                imagemUsuario.ImageUrl = "https://freesvg.org/img/person2.png";
                LabelUsuario.Text = "Visitante";
                LabelTipo.Text = "Administrator";
            }
            catch { };

        }

        [System.Web.Services.WebMethod]
        public static string Message()
        {
            return "Hello from the server-side World!";
        }

    }
}