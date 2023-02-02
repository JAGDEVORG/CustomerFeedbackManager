using CustomerFeedbackSvc.Models.Entity;

namespace CustomerFeedbackSvc.Repositories.UnitOfWork
{
    public interface IUnitOfWork
    {

        Task<int> SaveChangesAsync();

        CustomerFeedbackContext Context { get; }
    }
}
