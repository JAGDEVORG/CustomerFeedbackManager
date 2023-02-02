using DotLiquid.Mailer.Core;
using DotLiquid;
using Microsoft.Extensions.Logging;
using Notifications.Controllers;
using Notifications.Models;
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Notifications.Helpers;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace Notifications.Services
{
    public class DotLiquidMailEngine : IDotLiquidMailEngine
    {
        private readonly ICosmosDataAdapter _cosmosDataAdapter;
        private readonly IEmailMessageService _messageService;
        private readonly ILogger<EmailContainer> _logger;
        public DotLiquidMailEngine(IEmailMessageService messageService, ICosmosDataAdapter cosmosDataAdapter, ILogger<EmailContainer> logger)
        {
            _cosmosDataAdapter = cosmosDataAdapter;
            _messageService = messageService;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        public async Task<ResponseModel> SendEmail(MailEngineModel mailEngine)
        {
            LiquidFunctions.RegisterViewModel(typeof(object));

            EmailNotificationModel emailNotification = new EmailNotificationModel();
            emailNotification.Email = mailEngine.Email;
            emailNotification.Subject = mailEngine.Subject;

            var getTemplateDetails = await _cosmosDataAdapter.GetTemplates(mailEngine.TemplateName);
            var notificationsDocTypeModel = (NotificationsDocTypeModel)getTemplateDetails.FirstOrDefault();
            var template = Template.Parse(notificationsDocTypeModel.template);
            var body = template.RenderViewModel(mailEngine.Data);
            emailNotification.Body = body;
            return await _messageService.SendEmail(emailNotification);
        }
    }
}
