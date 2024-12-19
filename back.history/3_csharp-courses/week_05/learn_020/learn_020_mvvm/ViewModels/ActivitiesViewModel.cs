using CommunityToolkit.Mvvm.ComponentModel;

namespace learn_020_mvvm.ViewModels;

public partial class ActivitiesViewModel : ObservableObject
{
    [ObservableProperty] 
    private string _title = "Activities";
}