using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2.Models
{
    //This model of Grade contains the percentages of each category of the class, includes assignments, project, quizzes, exams, and intex
    public class GradeModel
    {
        [Range(0,100)]
        public int assignments { get; set; }
        [Range(0, 100)]
        public int project { get; set; }
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Range(0, 100)]
        public int exams { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
