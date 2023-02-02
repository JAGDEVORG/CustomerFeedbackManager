using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Microsoft.Extensions.Options;
using Notifications.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Notifications.Helpers
{
    public class CosmosDataAdapter : ICosmosDataAdapter
    {
        private readonly CosmosDBModel cosmosDB;
        private readonly DocumentClient _client;
        private static string SelectQueryString = "Select * from c ";
        public CosmosDataAdapter(IOptions<CosmosDBModel> options)
        {
            cosmosDB = options.Value;
            _client = new DocumentClient(new Uri(cosmosDB.Account), cosmosDB.Key);
        }
        public async Task<IEnumerable<dynamic>> GetTemplates(string TemplateName)
        {
            string queryString = SelectQueryString + "where c.docType='PushNotifications' and c.templateType= 'Email' and c.templateName= '" + TemplateName+"'";
            FeedOptions feedOptions = new FeedOptions();
            feedOptions.EnableCrossPartitionQuery = true;
            IDocumentQuery<dynamic> query = _client.CreateDocumentQuery(UriFactory.CreateDocumentCollectionUri(cosmosDB.DatabaseName, cosmosDB.ContainerName), queryString, feedOptions).AsDocumentQuery();
            List<dynamic> results = new List<dynamic>();
            while (query.HasMoreResults)
            {
                results.AddRange(await query.ExecuteNextAsync<dynamic>());
            }
            return results;
        }
    }
}
