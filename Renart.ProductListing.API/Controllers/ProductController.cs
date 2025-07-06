using Microsoft.AspNetCore.Mvc;
using Renart.ProductListing.API.Models;
using Renart.ProductListing.API.Services;
using System.Text.Json;

namespace Renart.ProductListing.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly GoldPriceService _goldService;
        private readonly IWebHostEnvironment _env;

        public ProductsController(GoldPriceService goldService, IWebHostEnvironment env)
        {
            _goldService = goldService;
            _env = env;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var jsonPath = Path.Combine(_env.ContentRootPath, "Data", "products.json");
            var json = await System.IO.File.ReadAllTextAsync(jsonPath);
            var products = JsonSerializer.Deserialize<List<Product>>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            var goldPrice = await _goldService.GetGoldPriceAsync();

            foreach (var product in products)
            {
                product.Price = Math.Round((product.PopularityScore + 1) * product.Weight * goldPrice, 2);
            }

            return Ok(products);
        }
    }
}
