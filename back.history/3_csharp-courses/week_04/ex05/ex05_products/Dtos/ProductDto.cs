namespace ex05_products.Dtos;

public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
}