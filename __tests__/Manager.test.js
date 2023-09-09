/******************************************/
/* External dependencies */
/******************************************/
// Importing the Manager class from Manager.js in the lib folder.
import { Manager } from "../lib/Manager.js";
/******************************************/
/* Mocks */
/******************************************/

/******************************************/
/* Test Constants */
/******************************************/
// Creating a new Manager object to be used for testing.
const testManager = new Manager(
  "John Doe",
  "43",
  "johndoe@gmail.com",
  "0609270891"
);
/******************************************/
/* Test Utilities */
/******************************************/

/******************************************/
/* Test Setup and Teardown */
/******************************************/

/******************************************/
/* Test Suites */
/******************************************/
// Main describe block for the Manager tests.
describe("Manager", () => {
  // Nested describe block to test the creation of a new Manager object.
  describe("Creates a new manager Object", () => {
    // Test to ensure name, id, email and Office Number are added to the Manager object.
    it("Should add a name, id, email and Office Number to the object", () => {
      expect(testManager.name).toBe("John Doe");
      expect(testManager.id).toBe("43");
      expect(testManager.email).toBe("johndoe@gmail.com");
      expect(testManager.officeNumber).toBe("0609270891");
    });

    // Test to check if getName() returns the correct name.
    it("Should return the Manager name when invoked", () => {
      expect(testManager.getName()).toBe("John Doe");
    });

    // Test to check if getId() returns the correct ID.
    it("Should return the Manager Id when invoked", () => {
      expect(testManager.getId()).toBe("43");
    });

    // Test to check if getEmail() returns the correct email.
    it("Should return the Manager Email when invoked", () => {
      expect(testManager.getEmail()).toBe("johndoe@gmail.com");
    });

    // Test to check if getOfficeNumber() returns the correct Office Number.
    it("Should return the Manager Office Number when invoked", () => {
      expect(testManager.getOfficeNumber()).toBe("0609270891");
    });
  });
});
/******************************************/
/* Additional Test Suites */
/******************************************/
