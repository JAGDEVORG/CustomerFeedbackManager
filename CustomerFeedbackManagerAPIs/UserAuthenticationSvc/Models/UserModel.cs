namespace UserAuthentication.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Enabled { get; set; }
            
    }
     public class QRModel
    {
        public int? Id { get; set; }
            
    }
}
