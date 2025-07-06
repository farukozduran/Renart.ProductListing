namespace Renart.ProductListing.API.Models
{
    public class Product
    {
        public string Name { get; set; }
        public double PopularityScore { get; set; }
        public double Weight { get; set; }
        public Dictionary<string, string> Images { get; set; }
        public double Price { get; set; }
    }
}
