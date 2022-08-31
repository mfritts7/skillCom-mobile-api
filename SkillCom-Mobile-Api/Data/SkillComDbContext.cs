using Microsoft.EntityFrameworkCore;
using SkillCom_Mobile_Api.Models;


namespace SkillCom_Mobile_Api.Data
{
    public class SkillComDbContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Device> Device { get; set; }
        public DbSet<Plan> Plan { get; set; }
        public DbSet<Contract> Contract { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contract>().HasKey(t => new { t.UserId, t.DeviceId, t.PlanId });

            modelBuilder.Entity<Contract>()
                .HasOne(t => t.User)
                .WithMany(t => t.Contracts)
                .HasForeignKey(t => t.UserId);

            modelBuilder.Entity<Contract>()
                .HasOne(t => t.Device)
                .WithMany(t => t.Contracts)
                .HasForeignKey(t => t.DeviceId);

            modelBuilder.Entity<Contract>()
                .HasOne(t => t.Plan)
                .WithMany(t => t.Contracts)
                .HasForeignKey(t => t.PlanId);



        }



        public SkillComDbContext(DbContextOptions<SkillComDbContext> options) : base(options)
        {


        }
    }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{


        //}
}
