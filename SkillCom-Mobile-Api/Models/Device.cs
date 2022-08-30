namespace SkillCom_Mobile_Api.Models
{
    public class Device
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }
        //public int PhonePlanId { get; set; }

        public Plan Plan { get; set; }

    }
}
