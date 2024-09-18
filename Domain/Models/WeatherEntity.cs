
namespace Domain;
public class WeatherEntity
{
    public WeatherEntity(Guid id, string adress, string timeZone, DateTime date,
        decimal temperature, decimal maxTemperature, decimal minTemperature)
    {
        Id = id;
        Adress = adress;
        TimeZone = timeZone;
        Date = date;
        Temperature = temperature;
        MaxTemperature = maxTemperature;
        MinTemperature = minTemperature;
    }
    public Guid Id { get; set; }
    public string Adress { get; set; }
    public string TimeZone { get; set; }
    public DateTime Date { get; set; }
    public decimal Temperature { get; set; }
    public decimal MaxTemperature { get; set; }
    public decimal MinTemperature { get; set; }
}