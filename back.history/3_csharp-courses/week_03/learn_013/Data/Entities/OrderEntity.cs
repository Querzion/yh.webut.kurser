namespace Data.Entities;

public class OrderEntity
{
    protected string Id { get; set; } = null!;
    
    
    public string CustomerId { get; set; } = null!;
    
    public string CustomerName { get; set; } = null!;
    
    protected DateTime OrderDate { get; set; } = DateTime.Now;
}