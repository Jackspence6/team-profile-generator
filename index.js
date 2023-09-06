/******************************************/
/* External dependencies */
/******************************************/
// Importing Inquirer for command line prompts
import inquirer from "inquirer";
// Importing questions from questions.js
import {
  managerQuestions,
  employeeRoleQuestion,
  engineerQuestions,
  internQuestions,
} from "./src/questions.js";
// Importing cardBuild from cardBuild.js
import {
  managerCardBuild,
  engineerCardBuild,
  internCardBuild,
} from "./src/cardbuild.js";
// Importing pagebuild from pagebuild.js
import { pageBuild } from "./src/pagebuild.js";
/******************************************/
/* Environment Variables and Constants */
/******************************************/

/******************************************/
/* Function Declarations */
/******************************************/
// Function to ask if the user wants to add another employee
function askToAddAnother() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
      },
    ])
    .then((answer) => {
      if (answer.addAnother) {
        return addEmployee();
      }
    });
}

// Function to handle adding an employee
function addEmployee() {
  return inquirer.prompt(employeeRoleQuestion).then((employeeRoleAnswer) => {
    if (employeeRoleAnswer.role === "Engineer") {
      return inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        console.log(engineerAnswers);
        return askToAddAnother();
      });
    } else {
      return inquirer.prompt(internQuestions).then((internAnswers) => {
        console.log(internAnswers);
        return askToAddAnother();
      });
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
