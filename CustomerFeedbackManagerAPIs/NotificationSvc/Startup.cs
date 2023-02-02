using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Notifications.Helpers;
using Notifications.Models;
using Notifications.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notifications
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<EmailSettingsModel>(this._configuration.GetSection("EmailSettings"));
            services.Configure<CosmosDBModel>(this._configuration.GetSection("CosmosDB"));
            services.AddTransient<ICosmosDataAdapter, CosmosDataAdapter>();
            services.AddTransient<IDotLiquidMailEngine, DotLiquidMailEngine>();
            services.AddTransient<IEmailContainer, EmailContainer>();
            services.AddTransient<IEmailMessageService, EmailMessageService>();
            services.AddTransient<ISMSMessageService, SMSMessageService>();
            services.AddControllers();
            services.AddSwaggerGen();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "CustomerFeedback: NotificationAPI");
            });
        }
    }
}
