namespace SkillCom_Mobile_Api.Models
{
    public class User
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        //Navigation Properties
        public virtual List<Contract> Contracts { get; set; }

    }
}
