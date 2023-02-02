using CustomerFeedbackSvc.Models;
using Newtonsoft.Json;

namespace CustomerFeedbackSvc.Repositories.Dapper
{

    public class DapperQueries
    {
        private static string QueryPath = "SqlQuery.json";
        public static string getQuery(string queryName)
        {
            using (StreamReader r = new StreamReader(QueryPath))
            {
                string json = r.ReadToEnd();
                var item = JsonConvert.DeserializeObject<List<DapperQueryModel>>(json);
                return item.FirstOrDefault(x => x.queryName == queryName).queryValue;
            }
        }
    }
}
