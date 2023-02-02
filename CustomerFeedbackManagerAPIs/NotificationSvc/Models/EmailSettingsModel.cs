namespace Notifications.Models
{
    public class EmailSettingsModel
    {
        public string FromAddress { get; set; }
        public string FromAdressTitle { get; set; }
        public string SmtpServer { get; set; }
        public int SmtpPortNumber { get; set; }
        public string SmtpEmail { get; set; }
        public string SmtpPassword { get; set; }
    }
}
