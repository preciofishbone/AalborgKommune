using Aalborg.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Aalborg.Web.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressSearchController : ControllerBase
    {
        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<Address> Get()
        {
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
