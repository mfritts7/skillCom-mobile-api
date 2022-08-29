namespace SkillCom_Mobile_Api.Models
{
    public class PhonePlan
    {
        public int Id { get; set; }
        public int Minutes { get; set; }
        public string PlanName { get; set; }

        public Person Person { get; set; }

        //Navigation Properties
        public virtual ICollection<Phone> Phone { get; set; }

    }
}
