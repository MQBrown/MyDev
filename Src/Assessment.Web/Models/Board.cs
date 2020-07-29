using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assessment.Web.Models
{
    public class Board
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Name { get; set; }

        public Board() { }
        public Board(int id, DateTime createAt, string name)
        {

            Id = id;
            CreatedAt = createAt;
            Name = name;
        }
    }
}
