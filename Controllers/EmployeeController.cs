using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tugende.Services;
using Tugende.Entities;

namespace Tugende.Controllers
{
     [Route("api/[controller]")]
     public class EmployeesController : ControllerBase
     {
          private ApplicationDbContext _context;
          public EmployeesController(ApplicationDbContext context)
          {
               _context = context;
          }

        [HttpGet] 
        public ActionResult<List<Employee>> GetAll() 
        {     
            return _context.Employees
                           .Include(s => s.EmployeeType).ToList(); 
        } 
        
        [HttpGet("{id}", Name = "GetEmployee")] 
        public ActionResult<Employee> GetById(int id) 
        {    
            var item = _context.Employees
                               .Where(s => s.Id == id)
                               .Include(s => s.EmployeeType)
                               .FirstOrDefault(); //.Include("EmployeeTypes");     
            if (item == null)    
            {         
                return NotFound();     
            }     
            return item; 
        }

        [HttpPost]
        public ActionResult<Employee> Create([FromBody] Employee employee)
        {
            if (ModelState.IsValid)
            {
                var collection = new Dictionary<string, object>();

                if (_context.Employees.Any((c => c.Name == employee.Name)))
                {
                    collection.Add("error", string.Format("User {0} already exists.", employee.Name));
                    return BadRequest(collection);
                }
                _context.Employees.Add(employee);
                _context.SaveChanges();
                
                collection.Add("message", "Employee added successfully.");

                return Ok(collection);
            }
            else
            {
                var collection = new Dictionary<string, object>();
                var errors = ModelState.Select(x => x.Value.Errors)
                        .Where(y=>y.Count>0)
                        .ToList();
                collection.Add("error", "Bad Request.");
                collection.Add("data", errors);

                return BadRequest(collection);

            }
        }
     }
}