using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using CustomerFeedbackSvc.Models.Entity;

namespace CustomerFeedbackSvc.Repositories
{
    public class CustomerFeedbackContext: DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        public CustomerFeedbackContext(DbContextOptions<CustomerFeedbackContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customer");
        }
    }
}
