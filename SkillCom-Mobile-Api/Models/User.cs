namespace SkillCom_Mobile_Api.Models
{
    public class User
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }
        //Navigation Properties
        public virtual ICollection<Plan> Plans { get; set; }

    }
}
