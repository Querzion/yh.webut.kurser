using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Markup.Xaml;
using learn_020_mvvm.ViewModels;
using Microsoft.Extensions.DependencyInjection;

namespace learn_020_mvvm;

public partial class App : Application
{
    public override void Initialize()
    {
        AvaloniaXamlLoader.Load(this);
    }

    public override void OnFrameworkInitializationCompleted()
    {
        if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
        {
            var serviceProvider = new ServiceCollection()
                .AddSingleton<MainViewModel>()
                .AddSingleton<ActivitiesViewModel>()
                .BuildServiceProvider();

            var mainViewModel = serviceProvider.GetRequiredService<MainViewModel>();
            
            desktop.MainWindow = new MainWindow(mainViewModel);
        }

        base.OnFrameworkInitializationCompleted();
    }
}