using Microsoft.AspNetCore.Mvc;

namespace AspNetCore9MvcDemo.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
