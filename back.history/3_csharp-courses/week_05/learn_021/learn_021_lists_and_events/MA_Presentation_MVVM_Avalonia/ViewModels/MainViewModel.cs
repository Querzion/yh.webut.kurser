using CommunityToolkit.Mvvm.ComponentModel;

namespace MA_Presentation_MVVM_Avalonia.ViewModels;

public partial class MainViewModel : ObservableObject
{
    [ObservableProperty]
    private ObservableObject _currentViewModel = null!;
}