// Manager questions
const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please Provide the Manager's Full Name and Surname:",
  },
  {
    name: "id",
    type: "number",
    message: "Please provide the Manager's Employee ID number:",
  },
  {
    name: "email",
    type: "input",
    message: "Please provide the Manager's Email Address:",
  },
  {
    name: "phoneNumber",
    type: "number",
    message: "Please provide the Manager's Phone Number:",
  },
  {
    name: "addEmployee",
    type: "confirm",
    message: "Would you like to add an employee?",
  },
];

// Employee Role question
const employeeRoleQuestion = [
  {
    name: "role",
    type: "list",
    message: "Please select the employee's position:",
    choices: ["Intern", "Engineer"],
  },
];

// Engineer questions
const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please Provide the Engineer's Full Name and Surname:",
  },
  {
    name: "id",
    type: "number",
    message: "Please provide the Engineer's Employee ID number:",
  },
  {
    name: "email",
    type: "input",
    message: "Please provide the Engineer's Email Address:",
  },
  {
    name: "githubUsername",
    type: "input",
    message: "Please provide the Engineer's Github Name:",
  },
];

// Intern questions
const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please Provide the Intern's Full Name and Surname:",
  },
  {
    name: "id",
    type: "number",
    message: "Please provide the Intern's Employee ID number:",
  },
  {
    name: "email",
    type: "input",
    message: "Please provide the Intern's Email Address:",
  },
  {
    name: "school",
    type: "input",
    message: "Please provide the name of the school the Intern attended:",
  },
];

// Exporting questions for use on different files
export {
  managerQuestions,
  employeeRoleQuestion,
  engineerQuestions,
  internQuestions,
};
