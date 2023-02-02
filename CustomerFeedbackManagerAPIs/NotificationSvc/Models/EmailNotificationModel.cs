namespace Notifications.Models
{
    public class EmailNotificationModel
    {
        public string Email { get; set; }
        public string CCEmail { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public bool IsAttachment { get; set; }

    }
}
