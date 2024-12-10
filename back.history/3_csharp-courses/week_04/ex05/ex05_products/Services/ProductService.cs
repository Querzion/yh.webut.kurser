using ex05_products.Dtos;
using ex05_products.Factories;
using ex05_products.Interfaces;
using ex05_products.Models;

namespace ex05_products.Services;

public class ProductService : IProductService
{
    private List<Product> _products = [];
    
    public void AddProduct(ProductDto productDto)
    {
        try
        {
            var product = ProductFactory.Create(productDto);
            _products.Add(product);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
        
    }

    public Product GetProductById(int id)
    {
        return _products.FirstOrDefault(p => p.Id == id);
    }

    public List<Product> GetAllProducts()
    {
        return _products;
    }
    
}