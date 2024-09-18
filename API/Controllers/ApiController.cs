using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/")]
    public class ActivitiesController : ControllerBase
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        [Route("get/{id}")]
        public async Task<IActionResult> GetWeatherEntity(Guid id)
        {
            var weatherEntity = await _context.WeatherEntityList.FindAsync(id);
            if (weatherEntity == null)
            {
                return NotFound();
            }
            return Ok(weatherEntity);
        }

        [HttpGet]
        [Route("getlist")]
        public IActionResult GetWeatherEntityList()
        {
            var weatherEntityList = _context.WeatherEntityList;
            if (!weatherEntityList.Any())
            {
                return NoContent();
            }

            return Ok(weatherEntityList);
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateWeatherEntity(WeatherEntity weatherEntity)
        {
            _context.WeatherEntityList.Add(weatherEntity);

            var result = await _context.SaveChangesAsync() > 0;
            if (!result)
            {
                return BadRequest();
            }

            return Ok(weatherEntity);
        }
    }
}