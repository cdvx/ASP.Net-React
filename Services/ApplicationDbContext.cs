using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Tugende.Entities;
namespace Tugende.Services
{
     public class ApplicationDbContext : DbContext
     {
          public DbSet<EmployeeType> EmployeeTypes { get; set; }
          public DbSet<Employee> Employees { get; set; }

          protected override void OnModelCreating(ModelBuilder modelBuilder)
          {
              base.OnModelCreating(modelBuilder);

              modelBuilder.Entity<EmployeeType>()
                    .Property(s => s.Name);

              modelBuilder.Entity<Employee>()
                    .HasIndex(b => b.Name)
                    .IsUnique();

          //     modelBuilder.Entity<Employee>()
          //           .Property(s => s.EmployeeTypeId = EmployeeTypeEnum.Id == );
                    // .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
          }

          public ApplicationDbContext(
               DbContextOptions<ApplicationDbContext> options)
               : base(options)
          {
               Database.EnsureCreated();
          }
     }
}

// dotnet add package Microsoft.EntityFrameworkCore.Design --version 3.1.4
// dotnet ef migrations add initial
// dotnet ef databse update
// dotnet add package NpgSql.EntityFrameworkCore.PostgreSQL.Design