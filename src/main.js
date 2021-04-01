import { useInstructors, useStudents } from "./data/classroom.js";
import { getAvailableInstructors, getFullTimeStudents, getPolyglotStudents, getStudentsByInstructorId, getStudentsByLanguages, getStudentsInCohort } from "./filterExercises.js";
import { getStudentWithMostLangs, getInstructorOfStudent, getStudentById, getStudentByName } from "./findExercises.js";
import { StudentList } from "./mapExercises.js";

console.log(getStudentsByLanguages("Javascript", "C#"))