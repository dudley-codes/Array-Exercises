import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
export const getStudentById = (id) => {
  const studentId = students.find(student => {
    if(student.id === id){
      return student
    }
  })
return studentId
  }

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)
export const getInstructorById = (id) => {
  const teacherId = instructors.find(teach => {
    if(teach.id === id){
      return teach
    }
  })
  return teacherId
}
// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) => {
  const name = students.find(student => {
    if(student.lastName.toUpperCase() === lastName.toUpperCase()){
      return student
    }
  })
  return name
}

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")

export const getStudentByName = (fullName) => {
  const studentByName = students.find(student => {
    if(student.firstName.toUpperCase() + " " + student.lastName.toUpperCase() === fullName.toUpperCase()){
      return student
    }
  })
  return studentByName
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long

export const getInstructorOfStudent = (studentId) => {
  let instructor = {}
  const instructorOfStudent = students.find(student => {
    if(student.id === studentId){
      return instructor = instructors[student.instructorId - 1]
    }
  })
  return instructor
}

// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
export const getStudentWithMostLangs = () => {
  const mostLangs = students.map(s => s.languages.length)
  const topStudent = students.find(e => {
    if(e.languages.length >= Math.max(...mostLangs)){
      return e
    }
  })
  return topStudent
  }