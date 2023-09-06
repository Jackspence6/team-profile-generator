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
function init() {
  // prompting users in the CLI for manager info
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      console.log(answers);
      if (answers.addEmployee) {
        return inquirer.prompt(employeeRoleQuestion);
      } else return;
    })
    .then((employeeRoleAnswer) => {
      console.log(employeeRoleAnswer);
      if (employeeRoleAnswer.role === "Engineer") {
        return inquirer.prompt(engineerQuestions);
      } else {
        return inquirer.prompt(internQuestions);
      }
    })
    .catch((error) => console.error(error));
}
// Calling the init function to prompt users in the CLI
init();
