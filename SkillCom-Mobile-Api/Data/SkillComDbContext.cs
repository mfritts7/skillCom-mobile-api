using Microsoft.EntityFrameworkCore;
using SkillCom_Mobile_Api.Models;


namespace SkillCom_Mobile_Api.Data
{
    public class SkillComDbContext : DbContext
    {
        public DbSet<Person> Person { get; set; }
        public DbSet<Phone> Phone { get; set; }
        public DbSet<PhonePlan> PhonePlan { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Post>()
            //    .HasOne(p => p.Blog)
            //    .WithMany(b => b.Posts);
            modelBuilder.Entity<PhonePlan>()
                .HasOne(p => p.Person)
                .WithMany(b => b.PhonePlans);

            modelBuilder.Entity<Phone>()
            .HasOne(p => p.PhonePlan)
            .WithMany(b => b.Phone);

        }



        public SkillComDbContext(DbContextOptions<SkillComDbContext> options) : base(options)
        {


        }
    }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{


        //}
}
