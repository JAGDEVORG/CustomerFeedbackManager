using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerFeedbackSvc.Models.Entity
{
    [Table("Customer")]
    public class Customer
    {
        public int Id { get; set; }
        public string? CustomerCaseId { get; set; }
        public string? CustomerName { get; set; }
        public int? CustomerAge { get; set; }
        public string? CustomerGender { get; set; }
        public DateTime? CaseCreationDateTime { get; set; }
        public DateTime? CustomerArivalDateTime { get; set; }
        public DateTime? CustomerDepartureDatetime { get; set; }
        public int? CustomerImageBlobId { get; set; }
        public string CustomerContactNumber { get; set; }

    }
}
