using static System.Console;
using Business.Services;

namespace learn_013_1_dependency_injection.Dialogs;

public interface IOrderManagementDialogs
{
    void ShowMenuOptions();
}

public class OrderManagementDialogs(OrderService orderService) : IOrderManagementDialogs
{
    private readonly OrderService _orderService = orderService;

    public void ShowMenuOptions()
    {
        WriteLine("************** USER MANAGEMENT **************");
        WriteLine("1. Create New Order");
        WriteLine("2. View All Orders");
        WriteLine("3. View Order");
        WriteLine("*********************************************");
        Write("Select an option: ");
        var option = ReadLine();
    }
}