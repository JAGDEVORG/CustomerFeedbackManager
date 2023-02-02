using Microsoft.Extensions.Logging;
using Notifications.Controllers;
using Notifications.Models;
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Notifications.Services
{
    public class EmailContainer : IEmailContainer
    {
        private readonly IEmailMessageService _messageService;
        private readonly ILogger<EmailContainer> _logger;
        public EmailContainer(IEmailMessageService messageService, ILogger<EmailContainer> logger)
        {
            _messageService = messageService;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        public async Task<ResponseModel> SendEmail(EmailNotificationModel emailNotification)
        {
            return await _messageService.SendEmail(emailNotification);
        }
        public async Task<ResponseModel> SendWelcomeEmail(EmailNotificationModel emailNotification)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Templates\\EmailTemplate\\Welcome_EmailTemplate.html");
            string getHtml = System.IO.File.ReadAllText(filePath);
            string body = getHtml.Replace("{{username}}", "JagdevMishra"); 
            emailNotification.Body = body;
            return await _messageService.SendEmail(emailNotification);
        }
    }
}
