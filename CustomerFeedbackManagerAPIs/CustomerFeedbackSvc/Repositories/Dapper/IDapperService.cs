namespace CustomerFeedbackSvc.Repositories.Dapper
{
    public interface IDapperService
    {
        Task<T> GetAsync<T>(string command, object parms);
        Task<List<T>> GetAll<T>(string command, object parms);
    }
}
