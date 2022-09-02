﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkillCom_Mobile_Api.Data;
using SkillCom_Mobile_Api.Models;
using SkillCom_Mobile_Api.DTO;

namespace SkillCom_Mobile_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlansController : ControllerBase
    {
        private readonly SkillComDbContext _context;

        public PlansController(SkillComDbContext context)
        {
            _context = context;
        }

        // GET: api/Plans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plan>>> GetPlans()
        {
            if (_context.Plan == null)
            {
                return NotFound();
            }

            return await _context.Plan.ToListAsync();
        }

        // GET: api/Plans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Plan>> GetPlan(int id)
        {
            if (_context.Plan == null)
            {
                return NotFound();
            }

            var plan = await _context.Plan.FindAsync(id);

            if (plan == null)
            {
                return NotFound();
            }

            return plan;
        }

        // PUT: api/Plans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlan(int id, Plan plan)
        {
            if (id != plan.Id)
            {
                return BadRequest();
            }

            _context.Entry(plan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanExists(id))
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

        // POST: api/Plans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Plan>> PostPlan(PlanDTO planDto)
        {
            if (_context.Plan == null)
            {
                return Problem("Entity set 'SkillComDbContext.Plan'  is null.");
            }

            Plan plan = new Plan
            {
                MonthlyPrice = planDto.MonthlyPrice,
                PlanName = planDto.PlanName
            };


            _context.Plan.Add(plan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlan", new { id = plan.Id }, plan);
        }

        // DELETE: api/Plans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlan(int id)
        {
            if (_context.Plan == null)
            {
                return NotFound();
            }

            var plan = await _context.Plan.FindAsync(id);

            if (plan == null)
            {
                return NotFound();
            }

            _context.Plan.Remove(plan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlanExists(int id)
        {
            return (_context.Plan?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
