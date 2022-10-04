using Aalborg.Models;
using Aalborg.Web.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aalborg.Web.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressSearchController : ControllerBase
    {

        public AddressSearchController( AddressService address) {
            AddressService = address;
        }

        public AddressService AddressService { get; }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<IEnumerable<Address>> Get(string name)
        {
            return await AddressService.GetAddresses(name);
        }

    }
}
