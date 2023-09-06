// Created a class of Employee
class Employee {
  constructor(name, id, email) {
    // Adding Properties to class of Employee
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //   Adding methods to Employee Class
  getName = () => this.name;
  getId = () => this.id;
  getEmail = () => this.email;

  getRole = () => "Employee";
}

export { Employee };
