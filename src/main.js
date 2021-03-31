import { useInstructors, useStudents } from "./data/classroom.js";
import { getAvailableInstructors, getFullTimeStudents, getPolyglotStudents, getStudentsByInstructorId, getStudentsInCohort } from "./filterExercises.js";
import { getStudentsWithMostLangs, getInstructorOfStudent, getStudentById, getStudentByName } from "./findExercises.js";
import { StudentList } from "./mapExercises.js";

const instructors = useInstructors()
const students = useStudents()

console.log(getAvailableInstructors())