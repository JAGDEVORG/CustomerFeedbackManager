using CustomerFeedbackSvc.Models.Entity;

namespace CustomerFeedbackSvc.Repositories.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {

        public UnitOfWork(CustomerFeedbackContext customerFeedbackContext)
        {
            Context = customerFeedbackContext;
        }
        public CustomerFeedbackContext Context { get; }

        public Task<int> SaveChangesAsync()
        {
            return Context.SaveChangesAsync();
        }

    }
}
