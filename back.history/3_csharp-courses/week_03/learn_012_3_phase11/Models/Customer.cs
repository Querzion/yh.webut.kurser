using System.Security.Cryptography;
using System.Text;

namespace learn_012_3_phase11.Models;

public abstract class Customer
{
    // Phase 15 - Id to private property of set, needs a constructor for a change.
    public string Id { get; private set; } = null!;
    public string Email { get; set; } = null!;
    protected string Password { get; set; } = null!;
    protected string Salt { get; set; } = null!;
    
    // Phase 12 - Export the Logic
    // public abstract void SetSecurePassword(string password); 
    // public abstract bool ValidateSecurePassword(string password);
    
    // Phase 15 - Id private
    public Customer()
    {
        Id = Guid.NewGuid().ToString();
    }
    
    
    // Phase 13 - If the logic is standardized then just set it as virtual here.
    public virtual void SetSecurePassword(string password)
    {
        using var hmac = new HMACSHA256();
        Salt = Encoding.UTF8.GetString(hmac.Key);
        var hashBytes = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        Password = Convert.ToBase64String(hashBytes);
    }
    
    public virtual bool ValidateSecurePassword(string password)
    {
        using var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(Salt));
        var hashBytes = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        var hashedPassword = Convert.ToBase64String(hashBytes);
        
            // if (!hashedPassword.Equals(Password[i]))
        for (int i = 0; i < Password.Length; i++)
            if (hashedPassword[i] != Password[i])
                return false;
        
        return true;
    }
}