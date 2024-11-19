
using System.Drawing;

var videoURL = "https://youtu.be/FrEHPbo1bj0";
Console.WriteLine($"This is the video url: {videoURL}");

const string birthName = "Mats";
Console.WriteLine("Constant Variable: " + birthName);

string changeableFirstName = "Mats";
Console.WriteLine("String Variable: " + changeableFirstName);
changeableFirstName = "Slisk";
Console.WriteLine("String Changed: " + changeableFirstName);

var myName = birthName;
Console.WriteLine(myName);

myName = "Slisk";
Console.WriteLine(myName);

var pi = 3.14;
double forcedDataType_PI = pi;
Console.WriteLine(forcedDataType_PI);



//dynamic (Variable without a specific value, most useful when working with JSON files and WebAPI's.)

// Object is a base variable without any value, it's a data holder, 
object data = 42;
// and in order to gain access to the value of the object, you will have to declare what it is, into a specific variable that can handle the value.
int number = (int)data;

Console.WriteLine("What is the meaning of life? " + number + " ;P");

// Heap vs Stack
// Value types are added to the stack, and acts as somewhat like the shortterm memory, which means it works fast.
// Value types: Are copied directly and stored in the stack. 
// Examples in C# include int, float, and struct. Each time a value type is assigned or passed as a parameter, a copy of the value is created.
// Reference types: Point to a memory address in the heap where the actual object is stored. 
// Examples in C# include class, string, and array. When a reference type is assigned or passed, it is the reference itself that is copied, not the data.

// Stack overflow = Memory Overload.

string firstName = myName;
var lastName = "Lindqvist";

string greeting1 = "Hej " + firstName + " " + lastName + ". Välkommen hit!";
string greeting2 = string.Format("Hej {0} {1}. Välkommen hit!", firstName, lastName);

// In order to have a string that is easy to read, this is foremost the most effective version.
string greeting3 = $"Hej {firstName} {lastName}. Välkommen hit!";

Console.WriteLine(greeting1);
Console.WriteLine(greeting2);
Console.WriteLine(greeting3);

// When it comes to strings where you want to combine a variable, + is more usable in scenarios like this.
string url = "https://domain.com/api/users/" + firstName.ToLower();
Console.WriteLine(url);

Console.ReadKey();