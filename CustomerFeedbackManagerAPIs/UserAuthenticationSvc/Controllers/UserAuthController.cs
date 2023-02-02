using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using UserAuthentication.Models;
using UserAuthentication.Services;

namespace UserAuthentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class UserAuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserAuthController> _logger;
        private readonly IWebHostEnvironment _environment;
        public UserAuthController(IUserService userService, ILogger<UserAuthController> logger, IWebHostEnvironment environment)
        {
            _userService = userService;
            _environment = environment;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _environment = environment;
        }
        [Route("login")]
        [HttpPost]
        public async Task<ResponseModel> Post([FromBody] UserModel userModel)
        {            
            return await _userService.ValidateUser(userModel);
        }
        [HttpPost]
        [Route("GenerateQRCode")]
        public async Task<ResponseModel> GenerateQRCode([FromBody] QRModel qrModel)
        {
            return await _userService.GenerateQRCode(qrModel);
        }

      

    }
}
