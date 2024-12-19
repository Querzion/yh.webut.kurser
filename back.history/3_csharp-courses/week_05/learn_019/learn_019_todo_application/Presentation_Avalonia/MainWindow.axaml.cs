using Avalonia.Controls;
using Avalonia.Interactivity;
using Business.Models;

namespace Presentation_Avalonia;

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