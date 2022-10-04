using Aalborg.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aalborg.Web.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressSearchController : ControllerBase
    {
        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<IEnumerable<Address>> Get()
        {
            await Task.Delay(5000);
            return new List<Address>
            {
                new Address
                {
                    Title = "Address 1"
                },
                 new Address
                {
                    Title = "Address 2"
                }
            };
        }

    }
}
