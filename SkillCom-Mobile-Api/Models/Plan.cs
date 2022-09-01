namespace SkillCom_Mobile_Api.Models
{
    public class Plan
    {
        public int Id { get; set; }
        public string PlanName { get; set; }
        public int MonthlyPrice { get; set; }

        //Navigation Properties
        public virtual List<Contract> Contracts { get; set; }
    }
}
