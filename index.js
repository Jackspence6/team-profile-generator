/******************************************/
/* External dependencies */
/******************************************/
// Importing Inquirer for command line prompts
import { error } from "console";
import inquirer from "inquirer";
// Importing questions from questions.js
import {
  managerQuestions,
  employeeRoleQuestion,
  engineerQuestions,
  internQuestions,
} from "./src/questions.js";
/******************************************/
/* Environment Variables and Constants */
/******************************************/

/******************************************/
/* Function Declarations */
/******************************************/
// Function to handle adding an employee
function addEmployee() {
  return inquirer.prompt(employeeRoleQuestion).then((employeeRoleAnswer) => {
    console.log(employeeRoleAnswer);
    if (employeeRoleAnswer.role === "Engineer") {
      return inquirer
        .prompt(engineerQuestions)
        .then((engineerAnswers) => console.log(engineerAnswers));
    } else {
      return inquirer
        .prompt(internQuestions)
        .then((internAnswers) => console.log(internAnswers));
    }
  });
}
/******************************************/
/* Class Declarations */
/******************************************/

/******************************************/
/* Event Listeners */
/******************************************/

/******************************************/
/* Middleware Definitions */
/******************************************/

/******************************************/
/* Route Definitions */
/******************************************/

/******************************************/
/* Database Connections */
/******************************************/

/******************************************/
/* Server Initialization */
/******************************************/

/******************************************/
/* Main Logic */
/******************************************/
// Initializing function
function init() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      console.log(answers);
      if (answers.addEmployee) {
        return addEmployee();
      }
    })
    .catch((error) => console.error(error));
}
// Calling the init function to prompt users in the CLI
init();
