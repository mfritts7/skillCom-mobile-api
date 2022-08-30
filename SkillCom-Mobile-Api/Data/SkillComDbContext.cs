using Microsoft.EntityFrameworkCore;
using SkillCom_Mobile_Api.Models;


namespace SkillCom_Mobile_Api.Data
{
    public class SkillComDbContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Device> Device { get; set; }
        public DbSet<Plan> Plan { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            //modelBuilder.Entity<Post>()
            //    .HasOne(p => p.Blog)
            //    .WithMany(b => b.Posts);

            //modelBuilder.Entity<User>().HasKey(ps => ps.Id);
            //modelBuilder.Entity<Plan>().HasKey(ps => ps.Id);
            //modelBuilder.Entity<Device>().HasKey(ps => ps.Id);

            modelBuilder.Entity<User>().HasMany(b => b.Plans).WithOne();
            modelBuilder.Entity<Plan>().HasMany(b => b.Devices).WithOne();

            modelBuilder.Entity<Plan>()
                .HasOne(p => p.User)
                .WithMany(b => b.Plans);
            modelBuilder.Entity<Device>()
            .HasOne(p => p.Plan)
            .WithMany(b => b.Devices);


        }



        public SkillComDbContext(DbContextOptions<SkillComDbContext> options) : base(options)
        {


        }
    }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{


        //}
}
