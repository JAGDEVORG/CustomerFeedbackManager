using Notifications.Models;
using System;
using System.Threading.Tasks;
using Notifications.Helpers;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;
using Newtonsoft.Json;

namespace Notifications.Services
{
    public class EmailMessageService : IEmailMessageService
    {
        private readonly EmailSettingsModel emailSettingsModel;
        public EmailMessageService(IOptions<EmailSettingsModel> options)
        {
            emailSettingsModel = options.Value;
        }
        public async Task<ResponseModel> SendEmail(EmailNotificationModel emailNotification)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.IsSuccess = false;
            try
            {
                //From Address  
                string FromAddress = emailSettingsModel.FromAddress;
                string FromAdressTitle = emailSettingsModel.FromAdressTitle;
                //To Address  
                string ToAddress = emailNotification.Email;
                string ToAdressTitle = emailNotification.Title;
                string Subject = emailNotification.Subject;
                string BodyContent = emailNotification.Body;

                string SmtpServer = emailSettingsModel.SmtpServer;
                int SmtpPortNumber = emailSettingsModel.SmtpPortNumber;

                var mimeMessage = new MimeMessage();
                mimeMessage.From.Add(new MailboxAddress(FromAdressTitle, FromAddress));
                mimeMessage.To.Add(new MailboxAddress(ToAdressTitle, ToAddress));
                mimeMessage.Subject = Subject;
                mimeMessage.Body = new TextPart("html")
                {
                    Text = BodyContent
                };

                using (var client = new SmtpClient())
                {
                    client.Connect(SmtpServer, SmtpPortNumber, false);
                    client.Authenticate(emailSettingsModel.SmtpEmail, emailSettingsModel.SmtpPassword);
                    await client.SendAsync(mimeMessage);
                    await client.DisconnectAsync(true);
                    responseModel.IsSuccess = true;
                }
                responseModel.Content = "The mail has been sent successfully !!";
                return responseModel;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
