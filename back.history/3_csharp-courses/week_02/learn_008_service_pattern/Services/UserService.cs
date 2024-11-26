using learn_008_service_pattern.Factories;
using learn_008_service_pattern.Models;

namespace learn_008_service_pattern.Services; 

public class UserService
{

    /*
        C = Create
        R = Read/Get/View
        U = Update
        D = Delete

     */

    public void Create(UserRegistrationForm form)
    {
        UserEntity userEntity = UserFactory.Create(form);
    }

}
