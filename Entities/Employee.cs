using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Tugende.Entities
{
     public class Employee
     {

          [Key]
          [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
          public int Id { get; set; }

          [Required]
          [MaxLength(100)]
          public string Title { get; set; }

          [Required]
          [MaxLength(100)]
          public string Name { get; set; }
          
          [Required]
          public EmployeeTypeEnum EmployeeTypeId { get; set; }
          
          public virtual EmployeeType EmployeeType { get; set; }
     }
}