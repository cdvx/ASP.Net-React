using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Tugende.Entities
{
     public enum EmployeeTypeEnum
     {
           [Description("Consultant")]
           Consultant = 1,
           [Description("Permanent")]
           Permanent = 2
     }
     public class EmployeeType
     {
           [Required]
           public EmployeeTypeEnum Id { get; set; }
           public string Name { get; set; }
     }
     
}