/******************************************/
/* External dependencies */
/******************************************/
// Importing the Intern class from Intern.js in the lib folder.
import { Intern } from "../lib/Intern.js";
/******************************************/
/* Mocks */
/******************************************/

/******************************************/
/* Test Constants */
/******************************************/
// Creating a new Intern object to be used for testing.
const testIntern = new Intern(
  "John Doe",
  "43",
  "johndoe@gmail.com",
  "Oakhill College"
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
// Main describe block for the Intern tests.
describe("Intern", () => {
  // Nested describe block to test the creation of a new Intern object.
  describe("Creates a new Intern Object", () => {
    // Test to ensure name, id, email and School are added to the Intern object.
    it("Should add a name, id, email and School to the object", () => {
      expect(testIntern.name).toBe("John Doe");
      expect(testIntern.id).toBe("43");
      expect(testIntern.email).toBe("johndoe@gmail.com");
      expect(testIntern.school).toBe("Oakhill College");
    });

    // Test to check if getName() returns the correct name.
    it("Should return the Intern name when invoked", () => {
      expect(testIntern.getName()).toBe("John Doe");
    });

    // Test to check if getId() returns the correct ID.
    it("Should return the Intern Id when invoked", () => {
      expect(testIntern.getId()).toBe("43");
    });

    // Test to check if getEmail() returns the correct email.
    it("Should return the Intern Email when invoked", () => {
      expect(testIntern.getEmail()).toBe("johndoe@gmail.com");
    });

    // Test to check if getSchool() returns the correct School.
    it("Should return the Intern School when invoked", () => {
      expect(testIntern.getSchool()).toBe("Oakhill College");
    });
  });
});
/******************************************/
/* Additional Test Suites */
/******************************************/
