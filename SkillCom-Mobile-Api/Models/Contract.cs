using System.ComponentModel.DataAnnotations;

namespace SkillCom_Mobile_Api.Models
{
    public class Contract
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PlanId { get; set; }
        public int DeviceId { get; set; }
        public string PhoneNumber { get; set; }

        //Navigation Properties
        public User User { get; set; } = null!;
        public Plan Plan { get; set; } = null!;
        public Device Device { get; set; } = null!;
    }
}
