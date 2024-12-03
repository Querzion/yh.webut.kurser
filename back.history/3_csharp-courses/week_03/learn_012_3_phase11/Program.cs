using learn_012_3_phase11.Models;

Private privateCustomer = new Private();

privateCustomer.FirstName = "John";
privateCustomer.LastName = "Doe";
privateCustomer.Id = Guid.NewGuid().ToString();
privateCustomer.Email = "johndoe@gmail.com";

Console.Write("Enter a secure private password: ");
var input = Console.ReadLine();
privateCustomer.SetSecurePassword(input);

Company companyCustomer = new Company()
{
    Id = Guid.NewGuid().ToString(),
    Email = "email@email.com",
    CompanyName = "John Doe Express",
    ContactPerson = "John Doe"
};

Console.Write("Enter a secure company password: ");
input = Console.ReadLine();
companyCustomer.SetSecurePassword(input);

// Phase 14 - privateCustomer custom changes with override.
privateCustomer.GetSecurePassword(input);

Console.Write("Whoops! Your private password hash was leaked... Multiple times... >> \n");
Console.WriteLine(privateCustomer.GetSecurePassword(input));
Console.WriteLine(privateCustomer.GetSecurePassword(input));
Console.WriteLine(privateCustomer.GetSecurePassword(input));


Console.WriteLine("");
Console.WriteLine("Press any key to continue...");
Console.ReadKey();