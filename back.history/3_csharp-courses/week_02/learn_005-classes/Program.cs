///     PROPERTIES
///     
///     There are four definitions that you can give,
///     a variable, method or class, and they work like this.
///     

///     Public
///     
//      Works Internally,
//      between classes that are nested,
//      between different classes in the same project,
//      between different classes in the same solution.

///     Internal
///     
//      Works internally,
//      between classes that are nested,
//      between different classes in the same project.

///     Protected
///     
//      Works internally,
//      between classes that are nested.

///     Private
///     
//      Works internally.

using learn_005_classes;

User user = new User();

var userTestCamp = new User()
{
    FirstName = "Dracul"
};


Console.Write("Gift me your name: ");
user.FirstName = Console.ReadLine();
Console.WriteLine(user.FirstName);

if (user.FirstName == "Why?")
{
    user.FirstName = userTestCamp.FirstName;
    Console.WriteLine("Is it " + user.FirstName + " then?");

    user.FirstName = "Slisk";
    Console.WriteLine("I know what you did last summer " + user.FirstName);
}

/// FIELDS
/// 



Console.ReadKey();