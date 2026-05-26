using Microsoft.AspNetCore.Mvc;

namespace AspNetCore9MvcDemo.Controllers;

public class ProductsController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
