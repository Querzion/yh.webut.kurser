using Microsoft.EntityFrameworkCore;

namespace learn_012_2_databaseintegration.Contexts;

// DbContext is part of the Microsoft.EntityFrameworkCore nuget Package!!! 
public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }
}