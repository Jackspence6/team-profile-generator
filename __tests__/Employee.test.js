/******************************************/
/* External dependencies */
/******************************************/
// Importing the Employee class from Employee.js in the lib folder.
import { Employee } from "../lib/Employee.js";
/******************************************/
/* Mocks */
/******************************************/

/******************************************/
/* Test Constants */
/******************************************/
// Creating a new Employee object to be used for testing.
const testEmployee = new Employee("John Doe", "43", "johndoe@gmail.com");
/******************************************/
/* Test Utilities */
/******************************************/

/******************************************/
/* Test Setup and Teardown */
/******************************************/

/******************************************/
/* Test Suites */
/******************************************/
// Main describe block for the Employee tests.
describe("Employee", () => {
  // Nested describe block to test the creation of a new Employee object.
  describe("Creates a new Employee Object", () => {
    // Test to ensure name, id, and email are added to the Employee object.
    it("Should add a name, id and email to the object", () => {
      expect(testEmployee.name).toBe("John Doe");
      expect(testEmployee.id).toBe("43");
      expect(testEmployee.email).toBe("johndoe@gmail.com");
    });

    // Test to check if getName() returns the correct name.
    it("Should return the Employee name when invoked", () => {
      expect(testEmployee.getName()).toBe("John Doe");
    });

    // Test to check if getId() returns the correct ID.
    it("Should return the Employee Id when invoked", () => {
      expect(testEmployee.getId()).toBe("43");
    });

    // Test to check if getEmail() returns the correct email.
    it("Should return the Employee Email when invoked", () => {
      expect(testEmployee.getEmail()).toBe("johndoe@gmail.com");
    });
  });
});
/******************************************/
/* Additional Test Suites */
/******************************************/
