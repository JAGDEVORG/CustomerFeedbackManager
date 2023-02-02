using CustomerFeedbackSvc.Models.Entity;
using CustomerFeedbackSvc.Repository;

namespace CustomerFeedbackSvc.Services
{
    public class CustomerFeedbackService : ICustomerFeedbackService
    {
        private ICustomerFeedbackRepository CustomerFeedbackReposiroty;

        public CustomerFeedbackService(ICustomerFeedbackRepository customerFeedbackReposiroty)
        {
            CustomerFeedbackReposiroty = customerFeedbackReposiroty;
        }

        public async Task<int> SaveCustomerAsync(Customer customer)
        {
            return await CustomerFeedbackReposiroty.SaveCustomerAsync(customer).ConfigureAwait(false);
        }

        public Task<Customer> GetCustomerById(int id)
        { 
            return CustomerFeedbackReposiroty.GetCustomerById(id);
        }
        public Task<Customer> GetCustomerByIdUsingDapper(int id)
        {
            return CustomerFeedbackReposiroty.GetCustomerByIdUsingDapper(id);
        }
    }
}
