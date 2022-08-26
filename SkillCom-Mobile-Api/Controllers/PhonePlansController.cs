using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkillCom_Mobile_Api.Data;
using SkillCom_Mobile_Api.Models;

namespace SkillCom_Mobile_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhonePlansController : ControllerBase
    {
        private readonly SkillComDbContext _context;

        public PhonePlansController(SkillComDbContext context)
        {
            _context = context;
        }

        // GET: api/PhonePlans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhonePlan>>> GetPhonePlan()
        {
          if (_context.PhonePlan == null)
          {
              return NotFound();
          }
            return await _context.PhonePlan.ToListAsync();
        }

        // GET: api/PhonePlans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhonePlan>> GetPhonePlan(int id)
        {
          if (_context.PhonePlan == null)
          {
              return NotFound();
          }
            var phonePlan = await _context.PhonePlan.FindAsync(id);

            if (phonePlan == null)
            {
                return NotFound();
            }

            return phonePlan;
        }

        // PUT: api/PhonePlans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhonePlan(int id, PhonePlan phonePlan)
        {
            if (id != phonePlan.Id)
            {
                return BadRequest();
            }

            _context.Entry(phonePlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhonePlanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PhonePlans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PhonePlan>> PostPhonePlan(PhonePlan phonePlan)
        {
          if (_context.PhonePlan == null)
          {
              return Problem("Entity set 'SkillComDbContext.PhonePlan'  is null.");
          }
            _context.PhonePlan.Add(phonePlan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhonePlan", new { id = phonePlan.Id }, phonePlan);
        }

        // DELETE: api/PhonePlans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhonePlan(int id)
        {
            if (_context.PhonePlan == null)
            {
                return NotFound();
            }
            var phonePlan = await _context.PhonePlan.FindAsync(id);
            if (phonePlan == null)
            {
                return NotFound();
            }

            _context.PhonePlan.Remove(phonePlan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PhonePlanExists(int id)
        {
            return (_context.PhonePlan?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
