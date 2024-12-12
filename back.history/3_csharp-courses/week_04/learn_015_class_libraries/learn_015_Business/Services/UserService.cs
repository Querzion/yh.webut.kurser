using learn_015_Business.Models;
using learn_015_Data.Data;

namespace learn_015_Business.Services;

public class UserService(DataContext<User> context)
{
    private readonly DataContext<User> _context = context;

    public bool SaveUser(User user)
    {
        // Count user id as long as the count is not 0 take the last id and add +1 otherwise set it as 1.
        // user.Id = _context.Items().Count() != 0 ? _context.Items().Last().Id + 1 : 1;
        // If the source is null/empty give it id 1, otherwise take the last id and add +1
        user.Id = _context.Items().Any() ? _context.Items().Last().Id + 1 : 1;
        _context.Save(user);
        return true;
    }

    public IEnumerable<User> GetAllUsers()
    {
        return _context.Items();
    }
}