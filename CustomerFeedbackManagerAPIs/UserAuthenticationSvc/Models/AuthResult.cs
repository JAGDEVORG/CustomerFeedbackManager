using System;

namespace UserAuthentication.Controllers
{
    internal class AuthResult
    {
        public string Token { get; set; }
        public AuthUser User { get; set; }
        public DateTime ExpireAt { get; set; }
    }
}