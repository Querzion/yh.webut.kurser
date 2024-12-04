using ex02_todo.Models;

namespace ex02_todo.Services;

public class MenuService
{
    private readonly TodoService _todoService = new ();

    public void ShowMainMenu()
    {
        bool isRunning = true;
        
        do
        {
            Console.Clear();
            Console.WriteLine("*************** MENU ***************");
            Console.WriteLine("1. Add new item");
            Console.WriteLine("2. View all items");
            Console.WriteLine("Q. Quit Application");
            Console.WriteLine("************************************");
            Console.Write("Please select an option: ");
            string option = Console.ReadLine()!;

            switch (option.ToLower())
            {
                case "1":
                    ShowAddTodo();
                    break;
                case "2":
                    ShowAllTodos();
                    break;
                case "q":
                    Console.Clear();
                    Console.WriteLine("Press any key to exit application...");
                    Console.ReadKey();
                    isRunning = false;
                    
                    // Environment.Exit(0);
                    break;
                default:
                    InvalidOption("Invalid option, please try again!");
                    break;
            }
            
            

        } while (isRunning);
    }

    public void ShowAddTodo()
    {
        var todoModel = new TodoModel();
        
        Console.Clear();
        Console.WriteLine("*************** NEW TODO ***************");
        Console.Write("Enter new todo: ");

        todoModel.Description = Console.ReadLine();
        
        _todoService.AddTodoItem(todoModel);
        
    }

    public void ShowAllTodos()
    {
        var todos = _todoService.GetAllTodoItems();
        
        Console.Clear();
        Console.WriteLine("*************** ALL TODOS ***************");


        foreach (var todosItem in todos)
        {
            var status = todosItem.isCompleted ? "Completed" : "Un-Completed";
            Console.WriteLine($"#{todosItem.Id} :: {todosItem.Description} ({status})");
        }
        
        Console.WriteLine();
        Console.WriteLine("Enter 'Id' to mark a todo as completed, else press 'Enter' to go back");
        var option = Console.ReadLine();

        if (int.TryParse(option, out int id))
        {
            _todoService.UpdateTodoItem(id);
            ShowAllTodos();
        }
        
    }

    public void InvalidOption(string? message)
    {
        Console.WriteLine(message);
        Console.ReadKey();
    }
    
}