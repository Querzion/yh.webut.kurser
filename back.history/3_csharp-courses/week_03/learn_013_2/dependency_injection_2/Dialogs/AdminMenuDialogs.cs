using static System.Console;
using dependency_injection_2.Models;
using dependency_injection_2.Services;

namespace dependency_injection_2.Dialogs;

// Phase 0 - Original class
// public class AdminMenuDialogs
// Phase 5 - Primary Constructor is created.
// public class AdminMenuDialogs(UserService userService)
// Phase 6 - Extract Interface from StandardMenuDialogs to its own file.
// public class AdminMenuDialogs(UserService userService)
// Phase 7 - Ready for Dependency Injection
public class AdminMenuDialogs(UserService userService) : IAdminMenuDialogs
{
    // Phase 1 - Create list
    // private readonly UserService _userService = new UserService();
    // Phase 2 - Shorten it for a constructor initialization.
    // private readonly UserService _userService;
    // Phase 3 - CTRL + . >> Initiate Constructor
    // private readonly UserService _userService;
    // Phase 4 - Constructor is created 
    //  Next >> CTRL + . >> Convert to primary constructor  
    // public AdminMenuDialogs(UserService userService)
    // {
    //     _userService = userService;
    // }


    public void CreateUserOption()
    {
        var user = new User();
        
        WriteLine("ADMIN - ADD USER");
        Write("Enter name: ");
        user.Name = ReadLine();

        userService.AddUser(user);
        
        ReadKey();
        WriteLine();

    }

    public void ShowAllUsersOption()
    {
        var users = userService.GetUsers();
        
        WriteLine("ADMIN - VIEW ALL USERS");
        foreach (var user in users)
            WriteLine(user.Name);
        
        ReadKey();
        WriteLine();
    }
}