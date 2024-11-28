
using exercise_02.Models;
using exercise_02.Modules;

/// <Summary> I am currently making exercise 2 from the scraps of exercise 1</Summary>
/// 


List<Todo> todos = [];

// CREATE
List<string> shoppingList = new List<string>();
// ADD
shoppingList.Add("Äpplen");
shoppingList.Add("Mjölk");

// REMOVE
shoppingList.Remove("Äpplen");

// OUTPUTDEFAULTS
var addToList = "";
string month = DateTime.UtcNow.ToString("MMMM");
bool isRunning = true;

// YOU SPIN ME ROUND AND ROUND. . . LOOP
do
{
    // COMMUNICATIONS OUTPUT
    Console.WriteLine($"Shoppinglista inför {month} (Avsluta genom att skriva 'Klar')");
    Console.Write($"Addera : ");
    // USER INPUT
    addToList = Console.ReadLine()!;

    // TEACHER EMILS VERSION
    // CHECK LIST INPUT FOR DESCREPENCIES SUCH AS EMPTY OR SPACES
    if (string.IsNullOrWhiteSpace(addToList))
    {
        // IF SO ERROR MESSAGE
        Console.WriteLine("Du måste ange en vara");
    }
    else
    {
        // ELSE CHECK THE WORD IN INPUT WITH A SWITCH CASE FOR ADD
        switch (addToList)
        {
            // ENDS LOOP
            case "klar":
                isRunning = false;
                break;

            case "ej tillåtet":
                break;

            // DEFAULT ACTION ADD TO LIST
            default:
                shoppingList.Add(addToList);
                Console.WriteLine($"{addToList} har lagts till i listan.");
                break;
        }
    }

    // PAUSE THE LOOP
    Console.WriteLine("Tryck valfri knapp för att fortsätta.");
    Console.ReadKey();
    Console.Clear();

} while (isRunning); 


// DISPLAY LOGIC FOR THE LIST
Console.WriteLine("Din shoppinglista:");
int id = 1;

// LIST OUTPUT
foreach (var item in shoppingList)
{
    Console.WriteLine($"{id}: {item}.");
    id++;
}

Console.WriteLine("Tryck valfri knapp för att avsluta.");
Console.ReadKey();