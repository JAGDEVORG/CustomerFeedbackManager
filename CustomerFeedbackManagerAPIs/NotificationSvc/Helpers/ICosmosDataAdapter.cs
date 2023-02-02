using Notifications.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Notifications.Helpers
{
    public interface ICosmosDataAdapter
    {
        Task<IEnumerable<dynamic>> GetTemplates(string TemplateName);
    }
}
