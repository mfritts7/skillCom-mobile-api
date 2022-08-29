namespace SkillCom_Mobile_Api.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }

        public PhonePlan PhonePlan { get; set; }

    }
}
