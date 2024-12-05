using static System.Console;
using Business.Services;

namespace learn_013_1_dependency_injection.Dialogs;

public interface IProductManagementDialogs
{
    void ShowMenuOptions();
}

public class ProductManagementDialogs(ProductService productService) : IProductManagementDialogs
{
    private readonly ProductService _productService = productService;
    
    public void ShowMenuOptions()
    {
        WriteLine("************** USER MANAGEMENT **************");
        WriteLine("1. Create New Product");
        WriteLine("2. View All Products");
        WriteLine("3. View Product");
        WriteLine("*********************************************");
        Write("Select an option: ");
        var option = ReadLine();
    }
}

