using dependency_injection_2.Models;

namespace dependency_injection_2.Services;

public class UserService
{
    private List<User> _users = [];

    public void AddUser(User user)
    {
        _users.Add(user);
    }

    public IEnumerable<User> GetUsers()
    {
        return _users;
    }
}