namespace learn_012_inheritance_abstract.Models;

public class Private : Customer
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;

    
    // Phase 3 - Creating a Constructor
    // public Private()
    // {
    //     
    // }
    
    // Phase 4 - Link Customer variables with base, and they can be eradicated from the Company constructor 
    public Private(string id, String email, string firstName, string lastName) : base(id, email)
    {
        // Id = id;
        // Email = email;
        FirstName = firstName;
        LastName = lastName;
    }
}