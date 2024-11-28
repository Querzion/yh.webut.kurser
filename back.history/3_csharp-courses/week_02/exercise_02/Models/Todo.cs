namespace exercise_02.Models;

public class Todo
{
    public string Id { get; set; } = null!;
    public bool IsCompleted { get; set; } = false;
    public string Description { get; set; } = null!;


    public Todo()
    {

    }

    public Todo(string description)
    {
        Description = description;
    }


    public Todo(string description, bool isCompleted)
    {
        Description = description;
        IsCompleted = isCompleted;
    }
}
