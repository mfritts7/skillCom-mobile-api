using System;
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
    public class ContractsController : ControllerBase
    {
        private readonly SkillComDbContext _context;

        public ContractsController(SkillComDbContext context)
        {
            _context = context;
        }

        // GET: api/Contracts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contract>>> GetContracts()
        {
            if (_context.Contract == null)
            {
                return NotFound();
            }

            return await _context.Contract.ToListAsync();
        }

        // GET: api/Contracts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contract>> GetContract(int id)
        {
            if (_context.Contract == null)
            {
                return NotFound();
            }

            var contract = await _context.Contract.FindAsync(id);

            if (contract == null)
            {
                return NotFound();
            }

            return contract;
        }

        // GET: api/Contracts/User/5
        [HttpGet("User/{id}")]
        public async Task<ActionResult<Contract>> GetContractsByUser(int id)
        {
            if (_context.Contract == null)
            {
                return NotFound();
            }

            var contracts = await _context.Contract.Where(c => c.UserId == id).ToListAsync();

            if (contracts == null)
            {
                return NotFound();
            }

            return Ok(contracts);
        }

        // PUT: api/Contracts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContract(int id, Contract contract)
        {
            if (id != contract.Id)
            {
                return BadRequest();
            }

            _context.Entry(contract).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContractExists(id))
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

        // POST: api/Contracts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contract>> PostContract(ContractDTO contractDto)
        {
            if (_context.Contract == null)
            {
                return Problem("Entity set 'SkillComDbContext.Contract'  is null.");
            }

            Contract contract = new Contract
            {
                UserId = contractDto.UserId,
                DeviceId = contractDto.DeviceId,
                PlanId = contractDto.PlanId,
                PhoneNumber = contractDto.PhoneNumber
            };


            _context.Contract.Add(contract);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContract", new { id = contract.Id }, contract);
        }

        // DELETE: api/Contracts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContract(int id)
        {
            if (_context.Contract == null)
            {
                return NotFound();
            }

            var contract = await _context.Contract.FindAsync(id);

            if (contract == null)
            {
                return NotFound();
            }

            _context.Contract.Remove(contract);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContractExists(int id)
        {
            return (_context.Contract?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
