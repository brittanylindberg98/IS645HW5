/*
Declare Student List Array
*/

const students = [
  {
    firstname: "Allan",
    lastname: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstname: "Amy",
    lastname: "Alexander",
    scores: [80, 85, 92, 98]
  },
  {
    firstname: "Betty",
    lastname: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstname: "Bob",
    lastname: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstname: "Cindy",
    lastname: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstname: "Charles",
    lastname: "Chips",
    scores: [88, 99, 90,]
  },
];

const female = student => student.sex === "f";
const average = array =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

// Filter by sex, then map each student to an object containing her name and average grade
console.log(
  students.filter(female).map(student => {
    return {
      name: student.name,
      avgGrade: average(student.grades)
    };
  })
);

// Alternative solution using the classical function syntax
/* console.log(students.filter(female).map(function(student) {
  return {
    name: student.name,
    avgGrade: average(student.grades)
  };
})); */