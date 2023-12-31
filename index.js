/******************************************/
/* External dependencies */
/******************************************/
// Importing Inquirer for command line prompts
import inquirer from "inquirer";
// Importing fs for file writing
import fs from "fs";
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
// Importing employee classes
import { Manager } from "./lib/Manager.js";
import { Engineer } from "./lib/Engineer.js";
import { Intern } from "./lib/Intern.js";
import { error } from "console";
/******************************************/
/* Environment Variables and Constants */
/******************************************/
let employees = [];
let HtmlCards = "";
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
      } else console.log("Final list of employees:", employees);
    });
}

// Function to handle adding an employee
function addEmployee() {
  return inquirer.prompt(employeeRoleQuestion).then((employeeRoleAnswer) => {
    if (employeeRoleAnswer.role === "Engineer") {
      return inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        console.log(engineerAnswers);
        const engineer = new Engineer(
          engineerAnswers.name,
          engineerAnswers.id,
          engineerAnswers.email,
          engineerAnswers.githubUsername
        );
        employees.push(engineer);
        const engineerCard = engineerCardBuild(engineer);
        HtmlCards += engineerCard;
        return askToAddAnother();
      });
    } else {
      return inquirer.prompt(internQuestions).then((internAnswers) => {
        console.log(internAnswers);
        const intern = new Intern(
          internAnswers.name,
          internAnswers.id,
          internAnswers.email,
          internAnswers.school
        );
        employees.push(intern);
        const internCard = internCardBuild(intern);
        HtmlCards += internCard;
        return askToAddAnother();
      });
    }
  });
}

// Function to write file Async
function writeFileAsync(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (error) => {
      if (error) reject(error);
      else resolve();
    });
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
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.phoneNumber
      );
      employees.push(manager);
      const managerCard = managerCardBuild(manager);
      HtmlCards += managerCard;
      if (answers.addEmployee) {
        return addEmployee();
      }
    })
    .then(() => {
      console.log("Final list of employees:", employees);
      console.log(HtmlCards);
      // Building Html Page with cards inside
      const page = pageBuild(HtmlCards);
      // Logging the final Html Page Code to the console
      console.log(page);
      writeFileAsync("./dist/myTeam.html", page)
        .then(() => console.log("File Written Successfully"))
        .catch((error) =>
          console.error("There was an error writing the file:", error)
        );
    })
    .catch((error) => console.error(error));
}

// Calling the init function to prompt users in the CLI
init();

export { HtmlCards };
