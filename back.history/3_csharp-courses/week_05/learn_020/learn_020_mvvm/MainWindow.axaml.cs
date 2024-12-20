using Avalonia.Controls;
using learn_020_mvvm.ViewModels;

namespace learn_020_mvvm;

public partial class MainWindow : Window
{
    public MainWindow(MainViewModel viewModel)
    {
        InitializeComponent();
        DataContext = viewModel;
    }
}