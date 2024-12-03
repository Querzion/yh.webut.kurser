namespace learn_012_inheritance_abstract.Models;

public class Company : Customer
{
    public string CompanyName { get; set; } = null!;
    public string ContactPerson { get; set; } = null!;
    
    
    // Phase 3 - Creating a Constructor
    // public Company()
    // {
    //     
    // }
    
    // Phase 4 - Link Customer variables with base, and they can be eradicated from the Company constructor 
    // id & email are now validated through the Customer class.
    public Company(string id, String email, string companyName, string contactPerson) 
        : base(id, email)
    {
        // Id = id;
        // Email = email;
        CompanyName = companyName;
        ContactPerson = contactPerson;
    }
}