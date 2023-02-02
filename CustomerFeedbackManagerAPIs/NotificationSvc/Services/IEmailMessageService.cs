using Notifications.Models;
using System.Threading.Tasks;

namespace Notifications.Services
{
    public interface IEmailMessageService
    {
        public Task<ResponseModel> SendEmail(EmailNotificationModel emailNotification);
    }
}
