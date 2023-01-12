

const students = [
    {
        name:"Marta",
        age: 30,
        isNeolander: true,
    },
    {
        name: "Pepe",
        age: 21,
        isNeolander: true
    },
    {
        name: "carlos",
        age: 30,
        isNeolander: true
    }
]

let studentsFilteredList = []
for ( let i = 0; i < students.length; i++) {
  if (students[i].age == 30 && students[i].isNeolander) {
    studentsFilteredList.push(students[i])
  };
}

console.log(studentsFilteredList)


