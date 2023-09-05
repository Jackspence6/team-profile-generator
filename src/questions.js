// User questions for command line Inquirer
const mainQuestions = [
  {
    name: "role",
    type: "list",
    message: "Please select the employee's position:",
    choices: ["Manager", "Intern", "Engineer"],
  },
  {
    name: "name",
    type: "input",
    message: "Please Provide your Full Name and Surname:",
  },
  {
    name: "id",
    type: "number",
    message: "Please provide you Employee ID number:",
  },
  {
    name: "email",
    type: "input",
    message: "Please provide your Email Address:",
  },
];

// Manager additional question
const managerQuestion = [
  {
    name: "phoneNumber",
    type: "number",
    message: "Please provide your Phone Number:",
  },
];

// Engineer additional question
const engineerQuestion = [
  {
    name: "githubUsername",
    type: "input",
    message: "Please provide your Github Profile URL:",
  },
];

// Intern additional question
const internQuestion = [
  {
    name: "school",
    type: "input",
    message: "Please provide the name of the school you attended:",
  },
];

// Exporting questions for use on different files
export { mainQuestions, managerQuestion, engineerQuestion, internQuestion };
