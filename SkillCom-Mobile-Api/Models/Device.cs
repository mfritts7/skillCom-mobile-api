using System.ComponentModel.DataAnnotations;

namespace SkillCom_Mobile_Api.Models
{
    public class Device
    {
        [Key]
        public int Id { get; set; }
        public string PhoneNumber { get; set; } = null!;
        public int Price { get; set; }
        public string Type { get; set; } = null!;

        public virtual ICollection<Contract> Contracts { get; set; } = null!;
    }
}
