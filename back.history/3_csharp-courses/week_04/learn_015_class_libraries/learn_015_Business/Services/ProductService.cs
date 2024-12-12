using learn_015_Business.Models;
using learn_015_Data.Data;

namespace learn_015_Business.Services;

public class ProductService(DataContext<Product> context)
{
    private readonly DataContext<Product> _context = context;

    public bool SaveProduct(Product product)
    {
        // Count product id as long as the count is not 0 take the last id and add +1 otherwise set it as 1.
        // product.Id = _context.Items().Count() != 0 ? _context.Items().Last().Id + 1 : 1;
        // If the source is null/empty give it id 1, otherwise take the last id and add +1
        product.Id = _context.Items().Any() ? _context.Items().Last().Id + 1 : 1;
        _context.Save(product);
        return true;
    }

    public IEnumerable<Product> GetAllProducts()
    {
        return _context.Items();
    }
}