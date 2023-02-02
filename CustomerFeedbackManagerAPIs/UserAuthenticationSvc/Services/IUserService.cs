using System.Threading.Tasks;
using UserAuthentication.Models;

namespace UserAuthentication.Services
{
    public interface IUserService
    {
        public Task<ResponseModel> ValidateUser(UserModel userModel);
        public Task<ResponseModel> GenerateQRCode(QRModel userModel);
    }
}
