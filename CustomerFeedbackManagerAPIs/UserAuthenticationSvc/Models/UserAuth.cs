using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using UserAuthentication.Models;
using UserAuthentication.Services;

namespace UserAuthentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAuth : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserAuth> _logger;
        public UserAuth(IUserService userService, ILogger<UserAuth> logger)
        {
            _userService = userService;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpPost]
        public async Task<ResponseModel> Post([FromBody] UserModel userModel)
        {
            return await _userService.ValidateUser(userModel);
        }
    }
}
