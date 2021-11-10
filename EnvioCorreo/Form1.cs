using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EnvioCorreo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string correoFrom = "felizcumplejohny@gmail.com";
            string correoTo = "alvarejo9@gmail.com";
            string passwordCorreoFrom = "tequieroconlocura";

            string uno = System.Reflection.Assembly.GetExecutingAssembly().Location.Replace("\\bin\\Debug\\EnvioCorreo.exe", "");
            uno = uno + "\\Html\\LayoutCorreo.html";
            string dos = System.Reflection.Assembly.GetExecutingAssembly().CodeBase;

            string pathArchivoHtml = @"C:\Users\jalva\Documents\EnvioCorreo\Html\LayoutCorreo.html";

            StringBuilder archivoHtml = new StringBuilder();
            archivoHtml.Append(File.ReadAllText(uno));

            archivoHtml.Replace("#TITULO", "Primer correo");
            archivoHtml.Replace("#MENSAJE", "Cuerpo del mensaje.");
            archivoHtml.Replace("#URL", "https://localhost:44340/Activacion/ActivacionCuenta/HolaPrueba");

            MailMessage message = new MailMessage();
            message.From = new MailAddress(correoFrom);
            message.To.Add(new MailAddress(correoTo));
            message.Subject = "Test";
            message.IsBodyHtml = true; //to make message body as html  
            message.Body = archivoHtml.ToString();

            SmtpClient smtp = new SmtpClient();
            smtp.Port = 587;
            smtp.Host = "smtp.gmail.com"; //for gmail host  
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential(correoFrom, passwordCorreoFrom);
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Send(message);
        }
    }
}
