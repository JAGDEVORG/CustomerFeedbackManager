using CustomerFeedbackSvc.Models;
using CustomerFeedbackSvc.Models.Entity;
using CustomerFeedbackSvc.Repositories.Dapper;
using CustomerFeedbackSvc.Repositories.UnitOfWork;
using Dapper;
using Newtonsoft.Json;

namespace CustomerFeedbackSvc.Repository
{
    public class CustomerFeedbackRepository : ICustomerFeedbackRepository
    {
        public IUnitOfWork UnitOfWork { get; }
        public readonly ILogger<Customer>? logger;
        private readonly IDapperService _dbService;

        public CustomerFeedbackRepository(IUnitOfWork unitOfWork, IDapperService dapper, ILogger<Customer>? logger)
        {
            UnitOfWork = unitOfWork;
            _dbService = dapper;
            this.logger = logger;
        }

        public async Task<int> SaveCustomerAsync(Customer customer)
        {
            return await UnitOfWork.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task<Customer> GetCustomerById(int id)
        {
            Customer customer = UnitOfWork.Context.Customers.Where(x => x.Id == id).First();
            return customer;
        }
        public async Task<Customer> GetCustomerByIdUsingDapper(int custId)
        {
            try
            {
                string query = DapperQueries.getQuery("GetCustomerById");
                var param = new DynamicParameters();
                param.Add("@id", custId);
                var customer = await _dbService.GetAsync<Customer>(query, param);
                return customer;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
