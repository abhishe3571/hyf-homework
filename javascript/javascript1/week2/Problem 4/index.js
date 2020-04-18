// Problem 4: Student manager

/* A coding school have contacted us to make some functionality
   for managing their classes. We will create functionality for 
   adding students to a class.

   For this exercise you need to figure out how Array.push works. 
   Learn about the concept by researching about it.

   Copy the following code into your homework js file

    const class07Students = [];
    function addStudentToClass(studentName) {
        // You write code here
    }

    function getNumberOfStudents() {
        // You write code here
    }

    addStudentToClass function
    
    The addStudentToClass should add the studentName to the class07Students array.

    But there are some other requirements:

        . There can be only 6 students in a class. If more students are tried to be added, 
          log out the following: "Cannot add more students to class 07".
        . The same person cannot be added to the class. If the same person is added to the 
          class, log out the following: 'Student Benjamin is already in the class' where 
        . Benjamin is substituted for the studentName.
        . We are very fond of our Queen in Denmark, so if the Queen is added to the class 
          she should always get a space. Even if the class has been filled out.
        . You cannot add an empty string to a class


    getNumberOfStudents function


    getNumberOfStudents should simply return the number of students in the class.

    Now lets try and use the functions!

    Try out all the cases:
        . Add some students to the class.
        . Add more students than there is space for
        . Add a student that is already in the class
        . Add the Queen to a full class
        . Call the getNumberOfStudents to log out the number of students.

    To see your code applied on a webapp, go here: https://codepen.io/hackyourfuture-cph/pen/PLPmOB and paste your javascript code

*/



const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length > 6) {
        console.log(`\"Cannot add more students to class 07\"`);

    }
    else if (class07Students.includes(studentName)) {
        console.timeLog(`\" Student ${studentName} is already in the class\"`);

    }
    else if ( studentName === " ") {
        alert(`\"Please add the student name to class\"`);
    }
    else if (studentName === "queen") {
        class07Students.pop();
        class07Students.push("queen");
      } else {
        console.log("Going to add", studentName);
        class07Students.push(studentName);
      }

}

function getNumbersOfStudent() {
    return (n = class07Students.length);
}

addStudentToClass("Benjamin");
addStudentToClass("Peter");
addStudentToClass("Jack");
addStudentToClass("Jill");
addStudentToClass("Handcomb");
addStudentToClass("Taylor");

console.log(class07Students);

addStudentToClass("queen");
console.log(class07Students);

console.log(getNumbersOfStudent());

