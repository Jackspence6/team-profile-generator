/******************************************/
/* External dependencies */
/******************************************/
import { Employee } from "../lib/Employee.js";
/******************************************/
/* Mocks */
/******************************************/

/******************************************/
/* Test Constants */
/******************************************/

/******************************************/
/* Test Utilities */
/******************************************/

/******************************************/
/* Test Setup and Teardown */
/******************************************/

/******************************************/
/* Test Suites */
/******************************************/

/******************************************/
/* Additional Test Suites */
/******************************************/
const testEmployee = new Employee("John Doe", "43", "johndoe@gmail.com");

describe("Employee", () => {
  describe("Creates a new Employee Object", () => {
    it("Should add a name, id and email to the object", () => {
      expect(testEmployee.name).toBe("John Doe");
      expect(testEmployee.id).toBe(43);
      expect(testEmployee.email).toBe("johndoe@gmail.com");
    });
    it("Should return the Employee name when invoked", () => {
      expect(testEmployee.getName()).toBe("John Doe");
    });
    it("Should return the Employee Id when invoked", () => {
      expect(testEmployee.getId()).toBe(43);
    });
    it("Should return the Employee Email when invoked", () => {
      expect(testEmployee.getEmail()).toBe("johndoe@gmail.com");
    });
  });
});
