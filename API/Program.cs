using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<DataContext>(opt =>
    {
        opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    });

builder.Services.AddCors(opt =>
    {
        opt.AddPolicy("CorsPolicy", policy => 
        {
            policy.WithOrigins("http://localhost:3001").AllowAnyHeader().AllowAnyMethod();
        });
    });

var app = builder.Build();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.MapControllers();
app.UseCors("CorsPolicy");

app.Run();
