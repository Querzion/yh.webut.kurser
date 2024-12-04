using static System.Console;
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
        Clear();
        WriteLine("************************************");
        WriteLine($"{"1.",-8} Create User");
        WriteLine($"{"2.",-8} List Users");
        WriteLine($"{"Q.",-8} Quit Application");
        WriteLine("************************************");
        Write("Choose an option: ");
        var option = ReadLine()!;
        
        MenuOptions(option);
    }

    private void MenuOptions(string option)
    {
        switch (option.ToLower())
        {
            case "1":
                break;
            case "2":
                Clear();
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
        Clear();
        WriteLine("***********************************");
        Write("Do you really want to quit? (y/n): ");
        var confirm = ReadLine()!;

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
        WriteLine("Please enter a valid option");
        ReadKey();
    }
}