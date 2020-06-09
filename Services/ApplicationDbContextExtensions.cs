using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity.Migrations;
using Tugende.Entities;
namespace Tugende.Services
{
     public static class ApplicationDbContextExtensions
     {
          public static void CreateSeedData
               (this ApplicationDbContext context)
          {
               if (context.EmployeeTypes.Any())
                    return;
               
               context.EmployeeTypes.Add(new EmployeeType(){
                    Id = EmployeeTypeEnum.Consultant,
                    Name = "Consultant"
               });
               context.EmployeeTypes.Add(new EmployeeType(){
                    Id = EmployeeTypeEnum.Permanent,
                    Name = "Permanent"
               });
               context.SaveChanges();
          }
     }
}