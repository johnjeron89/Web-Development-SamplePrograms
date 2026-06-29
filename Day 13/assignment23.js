// Create a student object with name, age, and marks.

let student = {
    name: "Abinaya",
    age: 18,
    marks: 80
};

console.log(student);

//Add a new property city to the object.

student.city = "Chennai";

console.log(student);

//Update the student's marks.

student.marks = 95;

console.log(student);

//  Delete a property from an object.
delete student.age;

console.log(student);

// Print all keys and values of an object.
for (let key in student) {
    console.log(key + " : " + student[key]);
}

// Use object destructuring to extract values.
let { name, marks, city } = student;

console.log(name);
console.log(marks);
console.log(city);

//  Use the spread operator to copy an object.
let studentCopy = { ...student };

console.log(studentCopy);

// Merge two objects using the spread operator.
let courseInfo = {
    course: "JavaScript",
    grade: "A"
};

let mergedObject = { ...student, ...courseInfo };

console.log(mergedObject);

//  Use template literals to print student details.
console.log(`
Name : ${student.name}
Marks : ${student.marks}
City : ${student.city}
`);