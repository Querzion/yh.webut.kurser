using exercise_02.Models;
using exercise_02.Services;

namespace learn_008_service_pattern.Services;

public class MenuService
{
    private readonly TodoService _todoService = new TodoService();

    public void Show()
    {
        while (true)
        {
            MainMenu();
        }
    }

    // With the first menu option, this needs to be a string and return option instead of the switch statement.
    private void MainMenu()
    {
        // The number that is visible in this output ($"{"This",-8} That") is the amount of spaces there is between "This" and "That". 

        Console.Clear();
        Console.WriteLine("*******************************");
        Console.WriteLine($"{"1.",-8} CREATE TO:DO");
        Console.WriteLine($"{"2.",-8} VIEW TO:DO LIST");
        Console.WriteLine($"{"Q.",-8} QUIT APPLICATION");
        Console.WriteLine("*******************************");
        Console.Write("Choose your menu option: ");
        var option = Console.ReadLine()!;

        switch (option.ToLower())
        {
            case "q":
                QuitOption();
                break;

            case "1":
                CreateOption();
                break;

            case "2":
                ViewOption();
                break;

            default:
                InvalidOption();
                break;

        }

        Console.ReadKey();
    }


    public void QuitOption()
    {
        Console.Clear();

        Console.Write("Do you want to exit this application (y/n): ");
        var option = Console.ReadLine()!;

        if (option.Equals("y", StringComparison.CurrentCultureIgnoreCase))
        {
            Environment.Exit(0);
        }
    }

    public void CreateOption()
    {
        TodoService todoService = new TodoService();
        
        Console.Clear();

        Console.Write("Enter your first name: ");
        todoService. = Console.ReadLine()!;

        bool result = _todoService.Create(userRegistrationForm);

        if (result)
            OutputDialogue("User was successfully created.");
        else
            OutputDialogue("User creation failed.");
    }

    public void ViewOption()
    {
        var users = _userService.GetAll();

        Console.Clear();

        foreach ( var user in users)
        {
            Console.WriteLine($"{"Id:",-15}{user.Id}");
            Console.WriteLine($"{"Name:",-15}{user.FirstName}{user.LastName}");
            Console.WriteLine($"{"Email:",-15}{user.Email}");
            Console.WriteLine("");
        }

        Console.ReadKey();
    }  

    public void InvalidOption()
    {
        Console.WriteLine("You must enter a valid option.");
        Console.ReadKey();
    }

    public void OutputDialogue(string message)
    {
        Console.Clear();
        Console.WriteLine(message);
        Console.ReadKey();
    }
}
