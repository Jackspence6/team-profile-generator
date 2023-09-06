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
];

// Additional employee Question
const additionalEmployeeQuestion = [
  {
    name: "addEmployee",
    type: "confirm",
    message: "Do you want to add an additional Employee to the Team:",
  },
];

// Employee Role question
const employeeRoleQuestion = [
  {
    name: "role",
    type: "list",
    message: "Please select the employee's position:",
    choices: ["Manager", "Intern", "Engineer"],
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
    message: "Please provide the Engineer's Github Profile URL:",
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
  additionalEmployeeQuestion,
  employeeRoleQuestion,
  engineerQuestions,
  internQuestions,
};
