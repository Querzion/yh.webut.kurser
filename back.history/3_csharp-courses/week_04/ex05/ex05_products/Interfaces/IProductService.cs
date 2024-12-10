using ex05_products.Dtos;

namespace ex05_products.Interfaces;

public interface IProductService
{
    public void AddProduct(ProductDto productDto);
    public ProductDto GetProductById(int id);
    public List<ProductDto> GetAllProducts();
}