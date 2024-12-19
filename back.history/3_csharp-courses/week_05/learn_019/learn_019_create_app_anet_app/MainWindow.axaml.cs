using System.Diagnostics;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Interactivity;
using learn_019_Business.Helpers;
using learn_019_Business.Models;

namespace learn_019_create_app_anet_app;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        
    }

    private void AddActivity_Click(object? sender, RoutedEventArgs e)
    {
        var activityItem = new ActivityItem()
        {
            Activity = Activity.Text
        };
        
        Activities.Items.Add(activityItem);
        Activity.Clear();
    }
}