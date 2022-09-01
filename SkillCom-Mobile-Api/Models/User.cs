using System.ComponentModel.DataAnnotations;

namespace SkillCom_Mobile_Api.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;

        //Navigation Properties
        public virtual ICollection<Contract> Contracts { get; set; } = null!;
    }
}
