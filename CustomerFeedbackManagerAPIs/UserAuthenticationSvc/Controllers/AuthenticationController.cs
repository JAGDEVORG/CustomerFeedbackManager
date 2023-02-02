using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace UserAuthentication.Controllers
{
    [Route("api/Authentication")]
    [ApiController]
    public class AuthenticationController : Controller
    {
        public IConfiguration _configuration;
        User userDao = new User();

        public AuthenticationController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [Route("token")]
        [HttpPost]
        public async Task<IActionResult> Login(AuthRequest user)
        {
            if (user != null && user.UserName != null && user.Password != null)
            {
                var loginUser = getUserLogin(user.UserName, user.Password, user.Role);

                if (loginUser != null)
                {
                    if (loginUser.IsTrialUser)
                    {
                        int trialPeriod = 1;
                        if (loginUser.TrialPeriod.HasValue)
                            trialPeriod = loginUser.TrialPeriod.Value;
                        if (loginUser.CreatedDate.HasValue && loginUser.CreatedDate.Value.AddMonths(trialPeriod) <= DateTime.Now)
                            return BadRequest("Trial period expired, please contact System Administrator!");
                    }
                
                    loginUser.UserID = user.UserId;
                    loginUser.Name = user.UserName;
                    loginUser.Role = user.Role;

                    var tokenValue = await GenerateJWTTokenAsync(loginUser);
                    //return Ok(this.DataTableToJSON(result));
                    return Ok(tokenValue);
                }
                else
                    return BadRequest("Invalid Login");

            }
            else
                return BadRequest();
        }       

        private async Task<AuthResult> GenerateJWTTokenAsync(AuthUser result)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, result.UserID.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("UserId", result.UserID.ToString()),
                new Claim("UserName", result.Name),
                new Claim("Role", result.Role)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Issuer"],
                claims, expires: DateTime.UtcNow.AddMinutes(30), signingCredentials: signIn);

            var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

            var response = new AuthResult()
            {
                Token = jwtToken,
                User = result,
                ExpireAt = token.ValidTo
            };

            return response;
        }

        private static AuthUser getUserLogin(string userName, string password, string role)
        {           
                return new AuthUser() { CreatedDate = DateTime.Now.AddDays(30), IsAuthenticated = true, IsTrialUser = false };
        }
    }
}
