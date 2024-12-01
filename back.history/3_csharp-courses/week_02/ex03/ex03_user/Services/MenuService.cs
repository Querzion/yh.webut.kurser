using System.Runtime.InteropServices;

namespace ex03_user.Services;

public class MenuService
{
    public void ShowMenu()
    {
        while (true)
        {
            MainMenu();
        }
    }
    
    private void MainMenu()
    {
        Console.Clear();
        Console.WriteLine("************************************");
        Console.WriteLine($"{"1.",-8} Create User");
        Console.WriteLine($"{"2.",-8} List Users");
        Console.WriteLine($"{"Q.",-8} Quit Application");
        Console.WriteLine("************************************");
        Console.Write("Choose an option: ");
        var option = Console.ReadLine()!;
        
        MenuOptions(option);
    }

    private void MenuOptions(string option)
    {
        switch (option.ToLower())
        {
            case "1":
                break;
            case "2":
                Console.Clear();
                break;
            case "q":
                QuitOption();
                break;
            default:
                InvalidOption();
                break;
        }
    }

    private void QuitOption()
    {
        Console.Clear();
        Console.WriteLine("***********************************");
        Console.Write("Do you really want to quit? (y/n): ");
        var confirm = Console.ReadLine()!;

        if (confirm.Equals("y", StringComparison.CurrentCultureIgnoreCase))
        {
            Environment.Exit(0);
        }
    }

    private void CreateOption()
    {
        
    }

    private void InvalidOption()
    {
        Console.WriteLine("Please enter a valid option");
        Console.ReadKey();
    }
}