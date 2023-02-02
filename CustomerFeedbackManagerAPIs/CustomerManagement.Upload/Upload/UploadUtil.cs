using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.IO;
using Microsoft.Azure.Cosmos;
using System.Diagnostics;
using CustomerFeedbackUtilities.Upload;

namespace CustomerFeedbackUtilities.Upload
{
    public class UploadUtil
    {
        private const string EndpointUrl = "";
        private const string AuthorizationKey = "";
        private const string DatabaseName = "";
        private const string ContainerName = "";
        private const string PartitionKey = "/Category";
        private const string JsonFilePath = "C:\\DataToUpload\\Model.json";

        public async void UploadJsonToCosmosAsync()
        {

            CosmosClient cosmosClient = new CosmosClient(EndpointUrl, AuthorizationKey, new CosmosClientOptions() { AllowBulkExecution = true });

            Database database = await cosmosClient.CreateDatabaseIfNotExistsAsync(DatabaseName);

            //Configure indexing policy to execute all attributes to maximize RU/s usages
            await database.DefineContainer(ContainerName, PartitionKey)
                .WithIndexingPolicy()
                .WithIndexingMode(IndexingMode.Consistent)
                .WithIncludedPaths()
                   .Attach()
                .WithExcludedPaths()
                   .Path("/*")
                   .Attach()
               .Attach()
               .CreateAsync();
            List<Model> models = new List<Model>();
            int amountToInsert;
            using (StreamReader reader = new StreamReader(File.OpenRead(JsonFilePath)))
            {
                string json = await reader.ReadToEndAsync();
                models = JsonSerializer.Deserialize<List<Model>>(json);
                amountToInsert = models.Count();
                Console.WriteLine(String.Format("Total json objects to process {0}", amountToInsert));
            }

            Stopwatch stopwatch = Stopwatch.StartNew();

            Container container = database.GetContainer(ContainerName);
            List<Task> tasks = new List<Task>(amountToInsert);

            foreach (var item in models)
            {
                tasks.Add(container.CreateItemAsync(item, new Microsoft.Azure.Cosmos.PartitionKey(item.Category))
                    .ContinueWith(itemresponse =>
                    {
                        if (itemresponse.IsCompletedSuccessfully)
                        {
                            AggregateException innerExceptions = itemresponse.Exception.Flatten();
                            if (innerExceptions.InnerExceptions.FirstOrDefault(innerEx => innerEx is CosmosException) is CosmosException cosmosException)
                            {
                                Console.WriteLine(cosmosException.StatusCode);
                            }
                        }
                    }));
            }

            await Task.WhenAll(tasks);
            stopwatch.Stop();
            Console.WriteLine($"finished writing {amountToInsert} items in {stopwatch.Elapsed}");
        }
    }
}
