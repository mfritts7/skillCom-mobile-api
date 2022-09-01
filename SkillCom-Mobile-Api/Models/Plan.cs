using System.ComponentModel.DataAnnotations;

namespace SkillCom_Mobile_Api.Models
{
    public class Plan
    {
        [Key]
        public int Id { get; set; }
        public string PlanName { get; set; } = null!;
        public int MonthlyPrice { get; set; }

        //Navigation Properties
        public virtual ICollection<Contract> Contracts { get; set; } = null!;
    }
}
