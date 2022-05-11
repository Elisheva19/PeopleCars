using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ReactPplCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPplCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarController : ControllerBase
    {
        public readonly string _connectionstring;
        public PeopleCarController(IConfiguration configuration)
        {
            _connectionstring = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        [HttpGet]
        public List<Person> GetAll()
        {
            var repo = new PersonCarRepository(_connectionstring);
            return repo.GetAll();
        }

        [Route("addcar")]
        [HttpPost]
        public void AddCar(Car newcar)
        {
            var repo = new PersonCarRepository(_connectionstring);
            repo.AddCar(newcar);
        }

        [Route("getbyid")]
        public Person GetById(int id)
        {
            var repo = new PersonCarRepository(_connectionstring);
           return repo.GetById( id);
        }

        [Route("addperson")]
        [HttpPost]
        public void AddCar(Person newperson)
        {
            var repo = new PersonCarRepository(_connectionstring);
            repo.AddPerson(newperson);
        }

        [Route("carsforperson")]
        [HttpGet]
        public List<Car> GetCars(int id)
        {

            var repo = new PersonCarRepository(_connectionstring);
           return repo.CarsForPerson(id);

        }
        [Route("deletecars")]
        [HttpPost]
        public void DeleteCars(PersonId Pi)
        {
            var repo = new PersonCarRepository(_connectionstring);
            repo.DeleteCars(Pi.Id);
        }

    }

        }

    

