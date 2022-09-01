namespace SkillCom_Mobile_Api.Models
{
    public class Contract
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public int PlanId { get; set; }
        public int DeviceId { get; set; }



        //NAvigation PRoperties
        public User User { get; set; }
        public Plan Plan { get; set; }
        public Device Device { get; set; }

    }
}
