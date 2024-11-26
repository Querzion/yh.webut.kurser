
namespace Pocos;

internal class Product
{
    public int Id { get; set; }

    public string? ArticleNumber { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public decimal Price { get; set; }
}