using Seguridad;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Negocio.Correo
{
    public class EnvioCorreo
    {
        public static string Envio(string correoTo, long id)
        {
            string resultado = string.Empty;

            string correoFrom = "petsgwmx@petsgrowmx.com";//"petsgrowmx@gmail.com";"felizcumplejohny@gmail.com"
            string passwordCorreoFrom = "Pe1fCcLI4Oi28xLd";//"Proyectomascotas2020";"tequieroconlocura"
            //string pathArchivoHtml = @"C:\Users\jalva\Documents\EnvioCorreo\Html\LayoutCorreo.html";

            try
            {
                
                //DESARROLLO   
                //string pathArchivoHtml = System.Reflection.Assembly.GetExecutingAssembly().CodeBase.Replace("/Felipe Arcos - sitio web/bin/Negocio.DLL", "").Replace("file:///", "");
                //PROD
                string pathArchivoHtml = System.Reflection.Assembly.GetExecutingAssembly().CodeBase.Replace("/bin/Negocio.DLL", "").Replace("file:///", "");
                pathArchivoHtml = pathArchivoHtml + "\\Negocio\\Html\\LayoutCorreo.html";

                string key = ConfigurationManager.AppSettings["key"].ToString();

                string parametro = EncripDecrip.Encriptar(id + "|" + correoTo, key);

                StringBuilder archivoHtml = new StringBuilder();
                archivoHtml.Append(File.ReadAllText(pathArchivoHtml));

                archivoHtml.Replace("#TITULO", "Primer correo");
                archivoHtml.Replace("#MENSAJE", "Cuerpo del mensaje.");
                //DESARROLLO
                //archivoHtml.Replace("#URL", "https://localhost:44340/Activacion/ActivacionCuenta/" + parametro.Replace("/", "|"));
                //PRODUCCION
                archivoHtml.Replace("#URL", "https://petsgrowmx.com/Activacion/ActivacionCuenta/" + parametro.Replace("/", "|"));

                MailMessage message = new MailMessage();
                message.From = new MailAddress(correoFrom);
                message.To.Add(new MailAddress(correoTo));
                message.Subject = "Test";
                message.IsBodyHtml = true; //to make message body as html  
                message.Body = archivoHtml.ToString();

                SmtpClient smtp = new SmtpClient();
                smtp.Port = 587;
                smtp.Host = "192.185.11.98";//"smtp.gmail.com"; for gmail host
                smtp.EnableSsl = false;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential(correoFrom, passwordCorreoFrom);
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                try
                {
                    smtp.Send(message);
                    resultado = "OK";
                }
                catch(Exception ex) 
                {
                    resultado = "Error: No se encontro la cuenta de correo";
                }
            }
            catch(Exception ex)
            {
                resultado = "Error: ocurrio un problema con el envio de correo. " + ex.Message;
            }

            return resultado;
        }

        public static string Recuperacion(string correoTo)
        {
            string resultado = string.Empty;

            string correoFrom = "petsgwmx@petsgrowmx.com";//"petsgrowmx@gmail.com";"felizcumplejohny@gmail.com"
            string passwordCorreoFrom = "Pe1fCcLI4Oi28xLd";//"Proyectomascotas2020";"tequieroconlocura"
            //string pathArchivoHtml = @"C:\Users\jalva\Documents\EnvioCorreo\Html\LayoutCorreo.html";

            try
            {
                //DESARROLLO
                //string pathArchivoHtml = System.Reflection.Assembly.GetExecutingAssembly().CodeBase.Replace("/Felipe Arcos - sitio web/bin/Negocio.DLL", "").Replace("file:///", "");
                //PROD
                string pathArchivoHtml = System.Reflection.Assembly.GetExecutingAssembly().CodeBase.Replace("/bin/Negocio.DLL", "").Replace("file:///", "");
                pathArchivoHtml = pathArchivoHtml + "\\Negocio\\Html\\LayoutCorreo.html";

                string key = ConfigurationManager.AppSettings["key"].ToString();

                string parametro = EncripDecrip.Encriptar(correoTo, key);

                StringBuilder archivoHtml = new StringBuilder();
                archivoHtml.Append(File.ReadAllText(pathArchivoHtml));

                archivoHtml.Replace("#TITULO", "Primer correo");
                archivoHtml.Replace("#MENSAJE", "Cuerpo del mensaje.");
                //DESARROLLO
                //archivoHtml.Replace("#URL", "https://localhost:44340/Usuario/Reestablecer/" + parametro.Replace("/", "|"));
                //PRODUCCION
                archivoHtml.Replace("#URL", "https://petsgrowmx.com/Usuario/Reestablecer/" + parametro.Replace("/", "|"));

                MailMessage message = new MailMessage();
                message.From = new MailAddress(correoFrom);
                message.To.Add(new MailAddress(correoTo));
                message.Subject = "Test";
                message.IsBodyHtml = true; //to make message body as html  
                message.Body = archivoHtml.ToString();

                SmtpClient smtp = new SmtpClient();
                smtp.Port = 587;
                smtp.Host = "192.185.11.98"; //"smtp.gmail.com" for gmail host  
                smtp.EnableSsl = false;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential(correoFrom, passwordCorreoFrom);
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                try
                {
                    smtp.Send(message);
                }
                catch (Exception ex)
                {
                    resultado = "Error: No se encontro la cuenta de correo";
                }

                resultado = "OK";
            }
            catch (Exception ex)
            {
                resultado = "Error: ocurrio un problema con el envio de correo.";
            }

            return resultado;
        }
    }
}
