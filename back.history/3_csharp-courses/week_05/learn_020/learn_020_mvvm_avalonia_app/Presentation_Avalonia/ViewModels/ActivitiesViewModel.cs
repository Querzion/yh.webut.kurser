using CommunityToolkit.Mvvm.ComponentModel;

namespace Presentation_Avalonia.ViewModels;

public partial class ActivitiesViewModel : ObservableObject
{
    [ObservableProperty]
    private string _title = "Activities";
}