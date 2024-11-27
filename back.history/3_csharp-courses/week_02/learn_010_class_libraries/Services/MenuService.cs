using Infrastructure.Dtos;
using Infrastructure.Factories;
using Infrastructure.Models;
using Infrastructure.Services;

namespace learn_010_class_libraries.Services;

public class MenuService
{
    private readonly UserService _userService = new();

    public void CreateUserDialog()
    {
        Console.Clear();

        UserRegistrationForm user = UserFactory.Create();

        Console.Write("Enter your first name: ");
        user.FirstName = Console.ReadLine()!;

        Console.Write("Enter your last name: ");
        user.LastName = Console.ReadLine()!;

        Console.Write("Enter your email: ");
        user.Email = Console.ReadLine()!;

        _userService.Add(user);
    }

    public void ViewAllUsersDialog()
    {
        Console.Clear();

        var users = _userService.GetAll();

        foreach (var user in users)
        {
            Console.WriteLine($"{"Id:",-15}{user.Id}");
            Console.WriteLine($"{"Name:",-15}{user.FirstName} {user.LastName}");
            Console.WriteLine($"{"Email:",-15}{user.Email}");
            Console.WriteLine("");
        }
    }
}