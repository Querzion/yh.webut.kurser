using static System.Console;
namespace learn_013_1_dependency_injection.Dialogs;

public interface IMainMenuDialogs
{
    void ShowMenuOptions();
}

public class MainMenuDialogs(
    UserManagementDialogs userManagementDialogs,
    ProductManagementDialogs productManagementDialogs,
    OrderManagementDialogs orderManagementDialogs) : IMainMenuDialogs
{
    
    private readonly UserManagementDialogs _userManagementDialogs = userManagementDialogs;
    private readonly ProductManagementDialogs _productManagementDialogs = productManagementDialogs;
    private readonly OrderManagementDialogs _orderManagementDialogs = orderManagementDialogs;


    public void ShowMenuOptions()
    {
        WriteLine("************** MAIN MENU **************");
        WriteLine("1. User Management");
        WriteLine("2. Product Management");
        WriteLine("3. Order Management");
        WriteLine("***************************************");
        Write("Enter option: ");
        string userInput = ReadLine();

        switch (userInput)
        {
            case "1":
                _userManagementDialogs.ShowMenuOptions();
                break;
            case "2":
                _productManagementDialogs.ShowMenuOptions();
                break;
            case "3":
                _orderManagementDialogs.ShowMenuOptions();
                break;
            default:
                WriteLine("Invalid option.");
                break;
        }
    }
}

