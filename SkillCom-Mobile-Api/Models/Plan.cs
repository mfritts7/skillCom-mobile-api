namespace SkillCom_Mobile_Api.Models
{
    public class Plan
    {
        public int Id { get; set; }
        public int Minutes { get; set; }
        public string PlanName { get; set; }
        //public int PersonId { get; set; }


        //Navigation Properties
        public User User { get; set; }
        public virtual ICollection<Device> Devices { get; set; }

    }
}
