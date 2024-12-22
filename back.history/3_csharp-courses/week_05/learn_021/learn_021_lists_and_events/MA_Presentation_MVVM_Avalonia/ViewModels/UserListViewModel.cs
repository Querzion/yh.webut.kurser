using System;
using System.Collections.ObjectModel;
using Business.Interfaces;
using Business.Models;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.Extensions.DependencyInjection;

namespace MA_Presentation_MVVM_Avalonia.ViewModels;

public partial class UserListViewModel(IUserService userService, IServiceProvider serviceProvider) : ObservableObject
{
    private readonly IUserService _userService = userService;
    private readonly IServiceProvider _serviceProvider = serviceProvider;
    
    [ObservableProperty]
    private ObservableCollection<User> _users = [];

    [RelayCommand]
    private void GoToAddView()
    {
        var mainViewModel = _serviceProvider.GetRequiredService<MainViewModel>();
        mainViewModel.CurrentViewModel = _serviceProvider.GetRequiredService<UserAddViewModel>();
    }
}