namespace SkillCom_Mobile_Api.Models
{
    public class PhonePlan
    {
        public int Id { get; set; }
        public virtual ICollection<Phone> Phone { get; set; }

    }
}
