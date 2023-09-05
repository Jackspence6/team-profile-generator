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

// manager additional question
const managerQuestions = [
  {
    name: "phoneNumber",
    type: "number",
    message: "Please provide you're Phone Number",
  },
];
