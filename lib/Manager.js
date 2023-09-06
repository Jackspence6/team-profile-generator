// Importing Employee class
import { Employee } from "./Employee";
// Created a class of Manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Adding Property to class of Manager
    this.officeNumber = officeNumber;
  }
  //   Adding method to Manager Class
  getOfficeNumber = () => this.officeNumber;
  getRole = () => "Manager";
}

export { Manager };
