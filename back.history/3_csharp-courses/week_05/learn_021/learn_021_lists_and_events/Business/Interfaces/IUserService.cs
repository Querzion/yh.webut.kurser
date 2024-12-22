using Business.Models;

namespace Business.Interfaces;

public interface IUserService
{
    bool CreateUser(UserRegistrationForm form);
    IEnumerable<User> GetUsers();
}