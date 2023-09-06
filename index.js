/******************************************/
/* External dependencies */
/******************************************/
// Importing Inquirer for command line prompts
import { error } from "console";
import inquirer from "inquirer";
// Importing questions from questions.js
import {
  managerQuestions,
  additionalEmployeeQuestion,
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
  // prompting users in the CLI
  inquirer
    .prompt(managerQuestions)
    .then((answers) => console.log({ answers }))
    .catch((error) => console.error(error));
}
// Calling the init function to prompt users in the CLI
init();
