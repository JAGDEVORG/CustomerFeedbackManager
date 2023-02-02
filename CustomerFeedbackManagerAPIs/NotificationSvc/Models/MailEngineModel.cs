namespace Notifications.Models
{
    public class MailEngineModel
    {
        public string Email { get; set; }
        public string Subject { get; set; }
        public string TemplateName { get; set; }
        public object Data { get; set; }
    }
}
