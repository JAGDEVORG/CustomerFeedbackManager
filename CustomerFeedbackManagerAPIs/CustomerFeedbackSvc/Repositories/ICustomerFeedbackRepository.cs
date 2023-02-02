using CustomerFeedbackSvc.Models.Entity;

namespace CustomerFeedbackSvc.Repository
{
    public interface ICustomerFeedbackRepository
    {
        Task<int> SaveCustomerAsync(Customer customer);

        Task<Customer> GetCustomerById(int id);
        Task<Customer> GetCustomerByIdUsingDapper(int id);
    }
}
