using CustomerFeedbackSvc.Repositories;
using CustomerFeedbackSvc.Repositories.Dapper;
using CustomerFeedbackSvc.Repositories.UnitOfWork;
using CustomerFeedbackSvc.Repository;
using CustomerFeedbackSvc.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<CustomerFeedbackContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("CustomerFeedbackContext"), sqlServerOptionsAction: sqlOptions =>
{
    sqlOptions.EnableRetryOnFailure();
}));
builder.Services.AddScoped<ICustomerFeedbackService, CustomerFeedbackService>();
builder.Services.AddScoped<ICustomerFeedbackRepository, CustomerFeedbackRepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddTransient<IDapperService, DapperService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
