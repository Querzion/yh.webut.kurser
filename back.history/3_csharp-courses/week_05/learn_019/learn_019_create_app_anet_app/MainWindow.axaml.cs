using System.Diagnostics;
using Avalonia;
using Avalonia.Controls;
using learn_019_Business.Helpers;

namespace learn_019_create_app_anet_app;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        
        // Debug.WriteLine("Setting background...");
        // SystemBackgroundHelper.SetDesktopBackgroundBrush(Application.Current);
        
        // if (Application.Current != null)
        // {
        //     SystemBackgroundHelper.SetDesktopBackgroundBrush(Application.Current);  
        // }
    }
}