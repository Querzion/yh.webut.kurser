// Part of Lesson 010
using Infrastructure.Models;

namespace Infrastructure.Services;

public class UserService
{
    private List<User> _users = [];
    private readonly FileService _fileService = new();

    public void Add(User user)
    {
        _users.Add(user);
        _fileService.SaveListToFile(_users);
    }

    public IEnumerable<User> GetAll()
    {
        _users = _fileService.LoadListFromFile();
        return _users;
    }
}
