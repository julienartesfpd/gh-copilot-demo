using Microsoft.AspNetCore.Mvc;

namespace AspNetCore9MvcDemo.Controllers;

public class UsersController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
