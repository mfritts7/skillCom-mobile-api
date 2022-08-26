using Microsoft.EntityFrameworkCore;
using SkillCom_Mobile_Api.Models;


namespace SkillCom_Mobile_Api.Data
{
    public class SkillComDbContext : DbContext
    {
        public DbSet<Person> Person { get; set; }
        public DbSet<Phone> Phone { get; set; }
        public DbSet<PhonePlan> PhonePlan { get; set; }


        public SkillComDbContext(DbContextOptions<SkillComDbContext> options) : base(options)
        {


        }
    }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{


        //}
}
