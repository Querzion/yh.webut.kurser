using Business.Interfaces;
using Business.Repositories;
using Business.Services;
using MA_Presentation_Console.Dialogs;
using MA_Presentation_Console.Interfaces;
using Microsoft.Extensions.DependencyInjection;

var serviceProvider = new ServiceCollection()
    .AddSingleton<IUserFileService>(new UserFileService("Data", "Contacts.json"))
    .AddSingleton<IUserRepository, UserRepository>()
    .AddSingleton<IUserService, UserService>()
    .AddTransient<IMenuDialog, MenuDialog>()
    .BuildServiceProvider();
    
var menuDialog = serviceProvider.GetRequiredService<IMenuDialog>();
menuDialog.ShowMainMenu();