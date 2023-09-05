/******************************************/
/* External dependencies */
/******************************************/
// Importing Inquirer for command line prompts
import { error } from "console";
import inquirer from "inquirer";
// Importing questions from questions.js
import {
  mainQuestions,
  managerQuestion,
  engineerQuestion,
  internQuestion,
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
    .prompt(mainQuestions)
    .then((answers) => {
      console.log({ answers });
      // Asking additional question if employee is a Manager
      if (answers.role === "Manager") {
        inquirer
          .prompt(managerQuestion)
          .then((answers) => console.log(answers))
          .catch((error) => console.error(error));
      }
      // Asking additional question if employee is an Engineer
      else if (answers.role === "Engineer") {
        inquirer
          .prompt(engineerQuestion)
          .then((answers) => console.log(answers))
          .catch((error) => console.error(error));
      }
      // Asking additional question if employee is an Intern
      else if (answers.role === "Intern") {
        inquirer
          .prompt(internQuestion)
          .then((answers) => console.log(answers))
          .catch((error) => console.error(error));
      }
    })
    .catch((error) => console.error(error));
}

// Calling the init function to prompt users in the CLI
init();
