using Business.Models;

namespace Business.Services;

public class UserService
{
    private List<UserBase> _users;

    public UserService(List<UserBase> users)
    {
        _users = users;
    }
    
    public void AddUser(UserBase user)
    {
        _users.Add(user);
    }

    public IEnumerable<UserBase> GetUserById(int id)
    {
        return _users.Where(u => u.Id == id);
    }
    
    public IEnumerable<UserBase> GetAllUsers()
    {
        return _users;
    }
}