using CommunityToolkit.Mvvm.ComponentModel;

namespace Presentation_MVVM_Avalonia.ViewModels;

public partial class ActivitiesViewModel : ObservableObject
{
    [ObservableProperty] 
    private string _title = "Activities will be somewhere over the rainbow.";
}