namespace ex05_products.Models;

public class Product
{
    public string Id { get; set; }
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
}