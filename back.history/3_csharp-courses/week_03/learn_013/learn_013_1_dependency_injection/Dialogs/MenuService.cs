using static System.Console;
namespace learn_013_1_dependency_injection.Dialogs;

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
        WriteLine("Welcome to Dependency Injection!");
        ReadKey();
    }
}