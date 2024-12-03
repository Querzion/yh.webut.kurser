using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ex03_infrastructure.Entities;

// DATATABLE
public class UserEntity
{
    [Key] public string Id { get; set; } = null!;
    
    [Column(TypeName = "nvarchar(50)")]
    public string FirstName { get; set; } = null!;
    
    [Column(TypeName = "nvarchar(50)")]
    public string LastName { get; set; } = null!;
    
    [Column(TypeName = "nvarchar(200)")]
    public string Email { get; set; } = null!;
    
    [Column(TypeName = "nvarchar(50)")]
    public string Password { get; set; } = null!;
}