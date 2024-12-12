using System.ComponentModel.DataAnnotations;
using learn_016_Business.Dtos;
using static System.Console;
namespace learn_016_2_asterisk.Dialogs;

public class MenuDialog
{
    public void ShowMenu()
    {
        while (true)
        {
            MenuDialogOptions();
        }
    }

    private void MenuDialogOptions()
    {
        Dialogs.MenuHeading("Menu Options");
        WriteLine("1. Register User");
        var switchOption = Dialogs.Prompt("Choose option: ");

        switch (switchOption)
        {
            case "1":
                Dialogs.MenuHeading("Register User");
                UserRegistrationDialog();
                break;
            default:
                WriteLine("Invalid option");
                break;
        }
    }

    private void UserRegistrationDialog()
    {
        var urf = new UserRegistrationForm();
        
        urf.FirstName = PromptAndValidate("Enter your first name: ", nameof(urf.FirstName));
        urf.LastName = PromptAndValidate("Enter your last name: ", nameof(urf.LastName));
        urf.Email = PromptAndValidate("Enter your email: ", nameof(urf.Email));
        urf.Password = PromptAndValidate("Enter your password: ", nameof(urf.Password));
        urf.ConfirmPassword = PromptAndValidate("Confirm your password: ", nameof(urf.ConfirmPassword));
        
        // Validate the entire form after data entry to check if passwords match and other validation rules
        var validationResults = new List<ValidationResult>();
        var validationContext = new ValidationContext(urf);
        if (!Validator.TryValidateObject(urf, validationContext, validationResults, true))
        {
            // If validation fails, display the error message and prompt the user again
            foreach (var validationResult in validationResults)
            {
                WriteLine(validationResult.ErrorMessage);
            }
            return; // Exit the registration process if validation fails
        }

        WriteLine("User registration successful!");
        ReadKey();
    }

    private string PromptAndValidate(string prompt, string propertyName)
    {
        while (true)
        {
            WriteLine();
            WriteLine(prompt);
            
            // Check if the property being validated is Password or ConfirmPassword
            string input = propertyName == nameof(UserRegistrationForm.Password) || propertyName == nameof(UserRegistrationForm.ConfirmPassword)
                ? ReadPassword() // If it's a password field, read input with hidden characters
                : ReadLine() ?? string.Empty; // Otherwise, use ReadLine for normal input

            var results = new List<ValidationResult>();
            var context = new ValidationContext(new UserRegistrationForm()) { MemberName = propertyName };
            
            if (Validator.TryValidateProperty(input, context, results))
                return input;
            
            WriteLine($"{results[0].ErrorMessage}. Please try again.");
        }
    }

    private string ReadPassword()
    {
        string password = string.Empty;
        ConsoleKey key;

        do
        {
            var keyInfo = ReadKey(intercept: true); // Do not display the key
            key = keyInfo.Key;

            if (key == ConsoleKey.Backspace && password.Length > 0)
            {
                // Remove the last character from the password
                password = password.Remove(password.Length - 1);
                Write("\b \b"); // Move the cursor back, overwrite with a space, and move back again
            }
            else if (!char.IsControl(keyInfo.KeyChar))
            {
                password += keyInfo.KeyChar; // Add the character to the password
                Write("*"); // Display an asterisk instead
            }
        } while (key != ConsoleKey.Enter); // Stop when the Enter key is pressed

        WriteLine(); // Move to the next line after Enter
        return password;
    }

}