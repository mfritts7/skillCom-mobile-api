using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillCom_Mobile_Api.Models;
using SkillCom_Mobile_Api.DTO;
using System.Security.Cryptography;

namespace SkillCom_Mobile_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();

        [HttpPost("register")]
        // Does this need to be async? There are no awaits in the method body
        public async Task<ActionResult<User>> Register(UserDTO request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt); 
            user.Email = request.Email;
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            return Ok(user);
        }

        [HttpPost("login")]
        // Does this need to be async? There are no awaits in the method body
        public async Task<ActionResult<string>> Login(UserDTO request)
        {
            if (user.Email != request.Email)
            {
                return BadRequest("User Not Found");
            }
            if (VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Wrong Password");
            }
            return Ok("My Token");

        }
        
        
        private void CreatePasswordHash(string password,out byte[] passwordHash,out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(user.PasswordSalt))
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            
            }
        }
    }
}
