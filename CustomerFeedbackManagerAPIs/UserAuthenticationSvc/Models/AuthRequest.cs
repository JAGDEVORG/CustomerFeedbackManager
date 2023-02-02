using System;

namespace UserAuthentication.Controllers
{
    public class AuthRequest
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
      
    }

    public class User
    {
       
    }

    public class AuthUser
    {
        public bool IsTrialUser { get; set; }

        //TrialPeriod - in Months
        public int? TrialPeriod { get; set; }
        public bool IsAuthenticated { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int UserID { get; set; }

        public string Name { get; set; }

        public string Role { get; set; }

    }

}