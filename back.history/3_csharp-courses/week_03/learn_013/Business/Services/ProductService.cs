using Data.Contexts;
using Data.Entities;

namespace Business.Services;

public class ProductService(DataContext context)
{
    private readonly DataContext _context = context;
    
    public void CreateProduct(string title, decimal price)
    {
        var productEntity = new ProductEntity
        {
            Title = title,
            Price = price
        };
        
        context.Products.Add(productEntity);
        context.SaveChanges();
    }
}