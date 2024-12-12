using static System.Console;

using learn_015_Business.Models;
using learn_015_Business.Services;
using learn_015_generics.Interfaces;

namespace learn_015_generics.Dialogs;

public class MenuDialogs(ProductService productService, UserService userService)
{

    public void ShowMenu()
    {
        while (true)
        {
            MenuOptionsDialog();
        }
    }

    public void MenuOptionsDialog()
    {
        Dialogs.MenuHeading("Main Menu");
        WriteLine("1. New Product");
        WriteLine("2. View Products");
        WriteLine("3. New User");
        WriteLine("4. View Users");
        WriteLine("_____________________________________");
        var option = Dialogs.Prompt(" Select an option: ");
        
        MenuOptionsSwitcher(option);
    }

    private void MenuOptionsSwitcher(string option)
    {
        switch (option)
        {
            case "1":
                AddProductDialog();
                break;
            case "2":
                ViewProductsDialog();
                break;
            case "3":
                AddUserDialog();
                break;
            case "4":
                ViewUsersDialog();
                break;
            default:
                WriteLine("Invalid option, please try again.");
                break;
        }
    }

    private void AddProductDialog()
    {
        Dialogs.MenuHeading("New Product");

        var product = new Product
        {
            Title = Dialogs.Prompt("Enter Product Title: "),
            Price = Dialogs.Prompt("Enter Product Price: ")
        };
        
        var result = productService.SaveProduct(product);
    }

    private void ViewProductsDialog()
    {
        Dialogs.MenuHeading("Products");
        foreach (var item in productService.GetAllProducts())
            WriteLine($"#{item.Id} - {item.Title} ({item.Price} SEK)");
        
        ReadKey();
    }

    private void AddUserDialog()
    {
        Dialogs.MenuHeading("New User");

        var user = new User
        {
            FirstName = Dialogs.Prompt("Enter First Name: "),
            LastName = Dialogs.Prompt("Enter Last Name: "),
            Email = Dialogs.Prompt("Enter Email: ")
        };
        
        var result = userService.SaveUser(user);
    }

    private void ViewUsersDialog()
    {
        Dialogs.MenuHeading("Users");
        foreach (var user in userService.GetAllUsers())
            WriteLine($"{user.FirstName} {user.LastName} <{user.Email}>");
        
        ReadKey();
    }
}