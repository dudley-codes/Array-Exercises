import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
export const getStudentsInCohort = (cohort) => {
  const studentArray = students.filter(oneStudent => {
    if(oneStudent.cohort === cohort){
      return oneStudent
    }
  })
  return studentArray
}

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students
export const getFullTimeStudents = () => {
  const fullTimeStudents = students.filter(oneStudent => {
    if(oneStudent.fullTime === true){
      return oneStudent
    }
  })
  return fullTimeStudents
}

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor
export const getStudentsByInstructorId = (instructorId) => {
  const getStudentsById = students.filter(oneStudent => {
    if(oneStudent.instructorId === instructorId){
      return oneStudent
    }
  })
  return getStudentsById
}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
export const getPolyglotStudents = (languageCount) => {
  const getPolyglots = students.filter(oneStudent => {
    if(oneStudent.languages.length >= languageCount){
      return oneStudent
    }
  })
  return getPolyglots
}

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students

export const getAvailableInstructors = () => {
  let unemployed = instructors
  let unemployed2 = []
  const instructorIds = students.map(oneStudent => oneStudent.instructorId)
  console.log("InstructorIds", instructorIds)
  
  const checkInstructor = () => {
    for(let i = 0; i < instructors.length; i++){instructorIds.filter(oneId => {
      // console.log("i", i)
      if(oneId === unemployed[i].id){
        // console.log("ins",  oneId)
        // console.log("id", instructorIds[i])
        // // return console.log("it worked")
        return unemployed2 = unemployed.slice(i, 1)
      } 
    })
  }
}
  checkInstructor()
  return unemployed2
  
} 
 




// const availableInstructors = instructors.filter(oneTeach => {
//   if(oneTeach.id !== students.filter(oneStudent => {return oneStudent.instructorId})){
//     return oneTeach
//   }
// })
// return availableInstructors



// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method
// export const getStudentsByLanguage = (language) => {
//   const studentsLanguage = students.filter(oneStudent => {
//     if(oneStudent.languages )
//   })
// }

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
