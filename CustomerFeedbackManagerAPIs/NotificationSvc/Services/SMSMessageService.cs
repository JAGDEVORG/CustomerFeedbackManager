using Notifications.Models;
using System.Threading.Tasks;

namespace Notifications.Services
{
    public class SMSMessageService : ISMSMessageService
    {
        public Task<ResponseModel> SendSMS(SMSNotificationModel sMSNotification)
        {
            throw new System.NotImplementedException();
        }
    }
}
