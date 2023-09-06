// Importing Employee class
import { Employee } from "./Employee";
// Created a class of Engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    // Adding Property to class of Engineer
    this.github = github;
  }
  //   Adding methods to Engineer Class
  getGithub = () => this.github;
  getRole = () => "Engineer";
}

export { Engineer };
