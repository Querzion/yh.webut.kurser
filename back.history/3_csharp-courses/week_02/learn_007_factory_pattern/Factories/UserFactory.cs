namespace learn_007_factory_pattern.Factories;

public static class UserFactory
{
    public static UserRegistrationForm Create()
    {
        return new UserRegistrationForm();
    }

    public static UserEntity Create(UserRegistrationForm userRegistrationForm)
    {
        return new UserEntity
        {
            Id = Guid.NewGuid().ToString(),
            FirstName = userRegistrationForm.FirstName.Trim(),
            LastName = userRegistrationForm.LastName.Trim(),
            Email = userRegistrationForm.Email.Trim().ToLower(),
            Password = SecurePasswordGenerator.Generate(userRegistrationForm.Password),
            EmailConfirmed = false
        };
    }

    public static User Create(UserEntity userEntity)
    {
        return new User
        {
            Id = userEntity.Id,
            FirstName = userEntity.FirstName,
            LastName = userEntity.LastName,
            Email = userEntity.Email
        };
    }
}
