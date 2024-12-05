using static System.Console;
using Business.Services;

namespace learn_013_1_dependency_injection.Dialogs;

public interface IUserManagementDialogs
{
    void ShowMenuOptions();
}

public class UserManagementDialogs(UserService userService) : IUserManagementDialogs
{
    private readonly UserService _userService = userService;

    public void ShowMenuOptions()
    {
        WriteLine("************** USER MANAGEMENT **************");
        WriteLine("1. Create New User");
        WriteLine("2. View All Users");
        WriteLine("3. View User");
        WriteLine("*********************************************");
        Write("Select an option: ");
        var option = ReadLine();
    }
}