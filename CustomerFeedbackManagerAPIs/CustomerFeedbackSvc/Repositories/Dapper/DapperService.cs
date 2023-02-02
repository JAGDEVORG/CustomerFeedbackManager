using Microsoft.AspNetCore.Connections;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Data;
using Dapper;

namespace CustomerFeedbackSvc.Repositories.Dapper
{
    public class DapperService: IDapperService
    {
        private readonly IConfiguration _configuration;
        private readonly IDbConnection _db;
        public DapperService(IConfiguration configuration)
        {
            _configuration = configuration;
            _db = new SqlConnection(configuration.GetConnectionString("CustomerFeedbackContext"));
        }
        public async Task<T> GetAsync<T>(string command, object parms)
        {
            T result;
            result = (await _db.QueryAsync<T>(command, parms).ConfigureAwait(false)).FirstOrDefault();
            return result;
        }

        public async Task<List<T>> GetAll<T>(string command, object parms)
        {
            List<T> result = new List<T>();
            result = (await _db.QueryAsync<T>(command, parms)).ToList();
            return result;
        }


    }
}
