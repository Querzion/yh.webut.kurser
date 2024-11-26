using learn_007_factory_pattern;
using learn_007_factory_pattern.Factories;
using learn_007_factory_pattern.Models;

var url = "https://youtu.be/JFDEzfBjbOM";
Console.WriteLine("Video Link: " + url);


UserRegistrationForm userRegistrationForm = UserFactory.Create();
#region User Registration Dialogue

Console.Write("Enter your first name: ");
userRegistrationForm.FirstName = Console.ReadLine()!;

Console.Write("Enter your last name: ");
userRegistrationForm.LastName = Console.ReadLine()!;

Console.Write("Enter your email: ");
userRegistrationForm.Email = Console.ReadLine()!;

Console.Write("Enter new password: ");
userRegistrationForm.Password = Console.ReadLine()!;

Console.Write("Enter the password again: ");
userRegistrationForm.ConfirmPassword = Console.ReadLine()!;

#endregion

UserEntity userEntity = UserFactory.Create(userRegistrationForm);
#region UserEntity Output Dialogue
// -15 creates spaces
Console.WriteLine("");
Console.WriteLine("UserEntity:");
Console.WriteLine($"{"Id:",-15}{userEntity.Id}");
Console.WriteLine($"{"Name:",-15}{userEntity.FirstName} {userEntity.LastName}");
Console.WriteLine($"{"Email:", -15}{userEntity.Email}");
Console.WriteLine($"{"Password:",-15}{userEntity.Password}");
Console.ReadKey();

#endregion

User user = UserFactory.Create(userEntity);
#region User Output Dialogue
// -15 creates spaces
Console.WriteLine("");
Console.WriteLine("User:");
Console.WriteLine($"{"Id:",-15}{user.Id}");
Console.WriteLine($"{"Name:",-15}{user.FirstName} {user.LastName}");
Console.WriteLine($"{"Email:",-15}{user.Email}");
Console.ReadKey();

#endregion

Console.WriteLine("Press any key to quit/continue...");
Console.ReadKey();