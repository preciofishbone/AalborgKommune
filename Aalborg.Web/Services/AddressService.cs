using Aalborg.Models;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace Aalborg.Web.Services
{
    public class AddressService
    {
        public AddressService(HttpClient client)
        {
            Client = client;
        }

        public HttpClient Client { get; }

        public async Task<IEnumerable<Address>> GetAddresses(string name)
        {
            var result = await Client.GetAsync($"https://api.dataforsyningen.dk/adresser?vejnavn={name}&struktur=mini");
            
            result.EnsureSuccessStatusCode();

            return await result.Content.ReadFromJsonAsync<IEnumerable<Address>>();

        }

    }
}
