using CustomerFeedbackSvc.Models.Entity;
using CustomerFeedbackSvc.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerFeedbackSvc.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class CustomerFeedbackController : ControllerBase
    {
        ICustomerFeedbackService feedbackService;
        public CustomerFeedbackController(ICustomerFeedbackService feedbackService)
        {
            this.feedbackService = feedbackService;
        }

        [HttpGet("GetCustomerById/{id}")]
        public IActionResult GetCustomerById(int id)
        {
            var customer = feedbackService.GetCustomerById(id);
            return Ok(customer);
        }
        [HttpGet("GetCustomerByIdUsingDapper/{id}")]
        public Task<Customer> GetCustomerByIdUsingDapper(int id)
        {
            var customer = feedbackService.GetCustomerByIdUsingDapper(id);
            return customer;
        }

    }
}
