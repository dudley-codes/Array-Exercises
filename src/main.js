import { getFullTimeStudents, getPolyglotStudents, getStudentsByInstructorId, getStudentsInCohort } from "./filterExercises.js";

console.log(getStudentsInCohort(42))
console.log(getFullTimeStudents())
console.log(getStudentsByInstructorId(6))
console.log(getPolyglotStudents(6))