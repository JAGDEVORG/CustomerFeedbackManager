using Notifications.Models;
using System.Threading.Tasks;

namespace Notifications.Services
{
    public interface IDotLiquidMailEngine
    {
        public Task<ResponseModel> SendEmail(MailEngineModel mailEngine);
    }
}
