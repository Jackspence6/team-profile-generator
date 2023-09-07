// Importing Employee class
import { Employee } from "./Employee";
// Created a class of Intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    // Adding Property to class of Intern
    this.school = school;
  }
  //   Adding methods to Intern Class
  getSchool = () => this.school;
  getRole = () => "Intern";
}

export { Intern };
