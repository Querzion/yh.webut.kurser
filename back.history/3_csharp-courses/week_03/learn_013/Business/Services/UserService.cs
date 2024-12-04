using System.Data.Common;
using Business.Models;
using Data.Contexts;
using Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.Services;

public class UserService
{
    // private readonly DataContext _context = new DataContext();
    private readonly DataContext _context;

    public UserService()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDBFilename=/home/username/Projects/yh.webut.kurser/back.history/3_csharp-courses/week_03/learn_013/Data/Contexts/database.mdf;Integrated Security=True Timeout=30)")
            .Options;
        
        _context = new DataContext(options);
    }
    
    public void CreateUser(User user)
    {
        _context.User.Add(user);
    }

    public IEnumerable<User> GetAllUsers()
    {
        return _context.User.ToList();
    }

    public UserEntity GetUser(string id)
    {
        return _context.User.Find(id);
    }
}