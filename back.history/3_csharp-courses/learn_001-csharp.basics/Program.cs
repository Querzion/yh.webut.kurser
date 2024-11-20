
using System.ComponentModel.DataAnnotations;
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

// In order to have a string that is easy to read, use the placeholder, this is foremost the most effective version.
string greeting3 = $"Hej {firstName} {lastName}. Välkommen hit!";

Console.WriteLine(greeting1);
Console.WriteLine(greeting2);
Console.WriteLine(greeting3);

// When it comes to strings where you want to combine a variable, + is more usable in scenarios like this.
string url = "https://domain.com/api/users/" + firstName.ToLower();
Console.WriteLine(url);

// This is the path to this application file.
// C:\Projects\yh.webut.kurser\back.history\3_csharp-courses\learn_001-csharp.basics\Program.cs
// This is how a link or path will be formated when pasted as a string.
string filePath = "C:\\Projects\\yh.webut.kurser\\back.history\\3_csharp-courses\\learn_001-csharp.basics\\Program.cs";
// What can be done instead in order to have it show as the actual link is to use an (at) @ symbol, and it will work the same way.
string filePath2 = @"C:\Projects\yh.webut.kurser\back.history\3_csharp-courses\learn_001-csharp.basics\Program.cs";

// In order to link something to the link use dollarsign $ and a variable will be able to be used in a placeholder.
string fileName = "Program.cs";
string filePath3 = @$"C:\Projects\yh.webut.kurser\back.history\3_csharp-courses\learn_001-csharp.basics\{fileName}";

// It can also be done like this. 
string folderPath = @$"C:\Projects\yh.webut.kurser\back.history\3_csharp-courses";
string projectName = "learn_001-csharp.basics";

// Which is perfect for paths to multiple different files, or folders if you need to change the path along the way. 
string filePath4 = Path.Combine(folderPath, projectName, fileName);

Console.WriteLine(filePath);
Console.WriteLine(filePath2);
Console.WriteLine(filePath3);
Console.WriteLine(filePath4);

var fileNumber = 123;
var fileName2 = "File_";

string newFileName = fileName2 + fileNumber.ToString();

Console.WriteLine(newFileName);

string fName = " Slisk  ";
string mName = "Måts ";
string lName = "Lindqvist ";
string domainName = "querzion.com";

string email = $"{fName}.{mName}.{lName}@{domainName}";

fName = fName.Trim(); 
mName = mName.Trim();
lName = lName.Trim();

string email2 = $"{fName}.{mName}.{lName}@{domainName}";

mName = mName.Replace("å", "a");

string email3 = $"{fName}.{mName}.{lName}@{domainName}";

// This is instead of adding one change at a time. You can add multiple changes if you do it like this.
string email4 = email3
    .Trim()
    .ToLower()
    .Replace("å", "a")
    .Replace("ä", "a")
    .Replace("ö", "o")
    .Replace("é", "e");


Console.WriteLine(email);
Console.WriteLine(email2);
Console.WriteLine(email3);
Console.WriteLine(email4);

// float = 6-9 precision a maximum of 7 total numbers in length. (Needs the f or F suffix to work properly.)
float number0 = 0.1234567f;
float number1 = 22.123456f;
float number2 = 9998.123456F;
float number3 = 9998.1234567f;
float number4 = 9999.1234567f;
float number5 = 99999.12345678f;
float number6 = 999999.123456789f;

Console.WriteLine($"Float Number: {number0}");
Console.WriteLine($"Float Number: {number1}");
Console.WriteLine($"Float Number: {number2}");
Console.WriteLine($"Float Number: {number3}");
Console.WriteLine($"Float Number: {number4}");
Console.WriteLine($"Float Number: {number5}");
Console.WriteLine($"Float Number: {number6}");

// double = 15-17 precision (make the precision higher with the f suffix.)
double number7 = 0.123456789;
// f = float precision
double number8 = 0.123456789f;

// Maximum of 17 in precision. the *89 will be rounded up to 9.
double number9 = 123456789.123456789;

Console.WriteLine($"Double Number: {number7}");
Console.WriteLine($"Double Number: {number8}");
Console.WriteLine($"Double Number: {number9}");

// decimal = 28-29 precision (Needs the m or M suffix in order to work with precision numbers after the decimal.) 128-bits
decimal number10 = 123456789.123456789m;
decimal number11 = 123456789;
// maximum number precision of 29, so everything after *876* will be rounded up or down depending on the number after *6*.
decimal number12 = 12345678987654321.12345678987654321m;

Console.WriteLine($"Decimal Number: {number10}");
Console.WriteLine($"Decimal Number: {number11}");
Console.WriteLine($"Decimal Number: {number12}");

Console.ReadKey();