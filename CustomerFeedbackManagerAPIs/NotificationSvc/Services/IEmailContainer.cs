using Notifications.Models;
using System.Threading.Tasks;

namespace Notifications.Services
{
    public interface IEmailContainer
    {
        public Task<ResponseModel> SendEmail(EmailNotificationModel emailNotification);
    }
}
