using System;

namespace Notifications.Models
{
    public class NotificationsDocTypeModel
    {
        public string id { get; set; }
        public string docType { get; set; }
        public string templateType { get; set; }
        public string templateName { get; set; }
        public string template { get; set; }
        public bool isActive { get; set; }
        
    }
}
