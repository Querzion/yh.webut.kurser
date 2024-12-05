using static System.Console;
using Business.Services;

namespace learn_013_1_dependency_injection.Dialogs;

public class UserManagementDialogs
{
    private readonly UserService _userService = new UserService(null);

    public void ShowMenuOptions()
    {
        WriteLine("************** USER MANAGEMENT **************");
        WriteLine("1. Create new user");
        WriteLine("2. View All Users");
        WriteLine("3. View User");
        WriteLine("*********************************************");
        Write("Select an option: ");
        var option = ReadLine();
    }
}