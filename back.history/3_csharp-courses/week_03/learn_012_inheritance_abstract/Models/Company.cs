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
    // Phase 5 (real life example "databaseintegration project")
    public Company(string id, String email, string companyName, string contactPerson) 
        : base(id, email)
    {
        // Id = id;
        // Email = email;
        CompanyName = companyName;
        ContactPerson = contactPerson;
    }
    
    // Phase 6 - Protected variables!
    // If there are variables that end up being protected, there's basically only a few ways to interact with them.
    // By creating methods that get or set the properties of those variables.
    public string GetId()
    {
        return Id;
    }

    public void SetId(string id)
    {
        // by doing this you can add indications like C for company Customer.
        Id = "C-" + id;
    }
}