using learn_009_save_open_from_json.Services;

var menuService = new MenuService();

while (true)
{
    menuService.ViewAllUsersDialog();
    menuService.CreateUserDialog();
}