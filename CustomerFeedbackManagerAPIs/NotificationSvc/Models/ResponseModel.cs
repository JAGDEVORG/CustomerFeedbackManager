namespace Notifications.Models
{
    public class ResponseModel
    {
        public string RequestId { get; set; }
        public string StatusCode { get; set; }
        public bool IsSuccess { get; set; }
        public string ErrorMessage { get; set; }
        public string Content { get; set; }
        public string Test { get; set; }
    }
}
