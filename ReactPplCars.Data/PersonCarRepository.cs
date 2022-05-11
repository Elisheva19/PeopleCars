using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPplCars.Data
{
   public class PersonCarRepository
    {
        private readonly string _connectionString;

        public PersonCarRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAll()
        {
            using var context = new PeopleDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public void AddCar(Car newcar)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.Cars.Add(newcar);
            context.SaveChanges();

        }
        public void AddPerson(Person newperson)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.People.Add(newperson);
            context.SaveChanges();

        }
        public Person GetById(int id)
        {
            using var context = new PeopleDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
          
        }

        public List<Car> CarsForPerson(int id)
        {
            using var context = new PeopleDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();
        }

        public void DeleteCars(int id)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM CARS WHERE PersonId = {id}");
        }

    }
}
