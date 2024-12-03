namespace learn_012_inheritance_abstract.Models;

// Keyword "abstract" makes it possible to share data with other classes, variables, methods and functions,
// but you cannot initialize it anywhere outside its designation.
public abstract class Customer
{
    public string Id { get; set; } = null!;
    public string Email { get; set; } = null!;

    
    // Phase 4 - Separation of responsibility
    //
    protected Customer(string id, string email)
    {
        if (string.IsNullOrWhiteSpace(id))
            throw new ArgumentNullException("Id cannot be null or empty", nameof(id));
        
        if (string.IsNullOrWhiteSpace(email))
            throw new ArgumentNullException("Email cannot be null or empty", nameof(email));
        
        Id = id;
        Email = email;
    }
}