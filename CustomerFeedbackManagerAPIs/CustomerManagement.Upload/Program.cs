namespace CustomerManagement.Upload
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Text.Json;
    using System.IO;
    using Microsoft.Azure.Cosmos;
    using System.Diagnostics;
    using CustomerFeedbackUtilities.Upload;

    public class Program
    {
       

        static async Task Main(string[] args)
        {
            UploadUtil uploadUtil = new UploadUtil();
            uploadUtil.UploadJsonToCosmosAsync();
        }

    }


}
