// User questions for command line Inquirer
const mainQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please Provide your Full Name and Surname",
  },
  {
    name: "id",
    type: "number",
    message: "Please provide you Employee ID number",
  },
  {
    name: "email",
    type: "input",
    message: "Please provide your Email Address",
  },
];

// Manager additional question
const managerQuestion = [
  {
    name: "phoneNumber",
    type: "number",
    message: "Please provide your Phone Number",
  },
];

// Engineer additional question
const engineerQuestion = [
  {
    name: "githubUsername",
    type: "input",
    message: "Please provide your Github Profile URL",
  },
];
