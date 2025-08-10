using System.Web.Mvc;

namespace LoginApp.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string username, string password)
        {
           
            TempData["username"] = username;
            return RedirectToAction("NextPage");
        }

        public ActionResult NextPage()
        {
            //temporarily stores data
            var username = TempData["username"] as string;
            return Content($"Welcome, {username}! You are logged in.");
        }
    }

}
