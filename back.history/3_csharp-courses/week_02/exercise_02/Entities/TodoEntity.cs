namespace exercise_02.Entities;

public class TodoEntity
{
    public bool IsCompleted { get; set; } = false;
    //public bool IsDeleted { get; set; } = false;
    //public string Id { get; set; } 
    //public string Title { get; set; }
    public string Description { get; set; } = null!;
    //public DateTime CreatedDate { get; set; }
    //public DateTime UpdatedDate { get; set; }

}
