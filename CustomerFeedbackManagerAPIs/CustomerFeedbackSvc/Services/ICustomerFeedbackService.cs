using CustomerFeedbackSvc.Models.Entity;

namespace CustomerFeedbackSvc.Services
{
    public interface ICustomerFeedbackService
    {
        Task<int> SaveCustomerAsync(Customer customer);

        Task<Customer> GetCustomerById(int id);
        Task<Customer> GetCustomerByIdUsingDapper(int id);
    }
}
