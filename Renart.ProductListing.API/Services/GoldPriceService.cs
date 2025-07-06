using Renart.ProductListing.API.Models;
using System.Text.Json;

namespace Renart.ProductListing.API.Services
{
    public class GoldPriceService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        readonly DateTime today = DateTime.UtcNow;

        public GoldPriceService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }
        public async Task<double> GetGoldPriceAsync()
        {
            string yesterdayStr = today.AddDays(-1).ToString("yyyyMMdd");

            var price = await FetchPriceByDate(yesterdayStr);
            if (price != null && price > 0)
            {
                return price.Value;
            }

            return 100.0; // Fallback value
        }
        private async Task<double?> FetchPriceByDate(string date)
        {
            string apiKey = _configuration["GoldApi:ApiKey"];
            string api = $"https://www.goldapi.io/api/XAU/USD/{date}";
            try
            {
                _httpClient.DefaultRequestHeaders.Add("x-access-token", apiKey);
                var response = await _httpClient.GetStringAsync(api);
                var data = JsonSerializer.Deserialize<GoldPriceResponse>(response, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                return data?.Price_gram_24k;
            }
            catch
            {
                return null;
            }
        }
    }
}
