using Notifications.Models;
using System.Threading.Tasks;

namespace Notifications.Services
{
    public interface ISMSMessageService
    {
        public Task<ResponseModel> SendSMS(SMSNotificationModel sMS);
    }
}
