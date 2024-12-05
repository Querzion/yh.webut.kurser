// Packages that needs to be installed are
// Microsoft.EntityFrameworkCore,
// Microsoft.EntityFrameworkCore.SqlServer,

// Phase 3

using Business.Services;
using Data.Contexts;
using learn_013_1_dependency_injection.Dialogs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = Host.CreateDefaultBuilder()
    .ConfigureServices((config, services) =>
    {
        services.AddDbContext<DataContext>(options => options.UseSqlServer("Server=your_server_name;Database=your_database_name;Trusted_Connection=True;"));

        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<IOrderService, OrderService>();

        services.AddScoped<IUserManagementDialogs, UserManagementDialogs>();
        services.AddScoped<IProductManagementDialogs, ProductManagementDialogs>();
        services.AddScoped<IOrderManagementDialogs, OrderManagementDialogs>();
        services.AddScoped<IMainMenuDialogs, MainMenuDialogs>();

    })
    .Build();

using (var scope = host.Services.CreateScope()) {
    var mainMenuDialogs = scope.ServiceProvider.GetRequiredService<MainMenuDialogs>();
    mainMenuDialogs.ShowMenuOptions();
}


// Phase 2
// using Business.Services;
// using Data.Contexts;
// using learn_013_1_dependency_injection.Dialogs;
// using Microsoft.EntityFrameworkCore;
//
// var options = new DbContextOptionsBuilder<DataContext>().UseSqlServer("").options;
// var dataContext = new DataContext(options);
//
// var userService = new UserService(dataContext);
// var userManagementDialogs = new UserManagementDialogs(userService);
//
// var productService = new ProductService(dataContext);
// var productManagementDialogs = new ProductManagementDialogs(productService);
//
// var orderService = new OrderService(dataContext, userService);
// var orderManagementDialogs = new OrderManagementDialogs(orderService);
//
// var mainMenu = new MainMenuDialogs(userManagementDialogs, productManagementDialogs, orderManagementDialogs);
// mainMenu.ShowMenuOptions();