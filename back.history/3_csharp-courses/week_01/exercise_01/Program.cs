
List<string> shoppingList = new List<string>();

shoppingList.Add("Äpplen");
shoppingList.Add("Mjölk");

var addToList = "";
string month = DateTime.UtcNow.ToString("MMMM");

do
{
    Console.WriteLine($"Shoppinglista inför {month} (Avsluta genom att skriva 'Klar')");
    Console.Write($"Addera : ");
    addToList = Console.ReadLine();

    if (addToList != "")
    {
        if (addToList != "klar")
        {
            shoppingList.Add(addToList!);
        }
    }
    else
    {
        Console.WriteLine("Du la inte till något.");
    }

    Console.Clear();

} while (addToList != "Klar" && addToList != "klar");

Console.WriteLine("Din shoppinglista:");
foreach (var item in shoppingList)
{
    Console.WriteLine($"{shoppingList.Count}: {item}.");
    
}

Console.WriteLine("Tryck valfri knapp för att avsluta.");

Console.ReadKey();