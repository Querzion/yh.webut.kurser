using System.ComponentModel.DataAnnotations;

namespace ex03_infrastructure.Models;

// CREATION FORM (Model because of the [Required] validation without it's a Dto).
// If it's not going to be changed at a later point, you could make it a record (public record UserRegistrationForm(string FirstName, String Lastname...)).
public class UserRegistrationForm
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    
    [Required] public string FirstName { get; set; } = null!;

    [Required] public string LastName { get; set; } = null!;

    [Required] public string Email { get; set; } = null!;

    [Required] public string Password { get; set; } = null!;
    
    public DateTime CreatedAt { get; set; }

    public UserRegistrationForm()
    {
        CreatedAt = DateTime.UtcNow;
    }
}