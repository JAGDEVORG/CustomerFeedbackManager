using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Notifications.Models;
using Notifications.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Notifications.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly IEmailContainer _emailContainer;
        private readonly IDotLiquidMailEngine _dotLiquidMailEngine;
        private readonly ILogger<NotificationsController> _logger;
        public NotificationsController(IEmailContainer emailContainer, IDotLiquidMailEngine dotLiquidMailEngine, ILogger<NotificationsController> logger)
        {
            _emailContainer = emailContainer;
            _dotLiquidMailEngine = dotLiquidMailEngine;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        /// <summary>
        /// Post Liquid : https://github.com/miseeger/DotLiquid.Mailer
        /// </summary>
        /// <param name="mailEngine"></param>
        [HttpPost]
        public async Task<ResponseModel> Post([FromBody] MailEngineModel mailEngine)
        {
            mailEngine.Email = "jagdevmishra85@gmail.com";
            mailEngine.Subject = "Jagdev Mishra";

            var welcomeMail = new
            {
                UserName = "Jagdev Mishra"
            };
            var orderConfirmation = new
            {
                Cust = new
                {
                    Greet = "Hello",
                    Firstname = "Jagdev",
                    Lastname = "Mishra"
                },
                ItemList = new[]
                {
                    new {Name = "Apple", Quantity = 5},
                    new {Name = "Banana", Quantity = 10}
                }
            };

            //mailEngine.TemplateName = "Welcome";
            mailEngine.TemplateName = "OrderConfirmation";
            mailEngine.Data = orderConfirmation;
            return await _dotLiquidMailEngine.SendEmail(mailEngine);
        }
    }
}
