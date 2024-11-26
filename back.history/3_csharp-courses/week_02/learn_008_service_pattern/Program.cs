
using learn_008_service_pattern.Interfaces;
using learn_008_service_pattern.Services;

/// SERVICE PATTERN - Single Responsibility Principle.
/// 

IMenuDialogues dialogues = new MenuService();

dialogues.Show();