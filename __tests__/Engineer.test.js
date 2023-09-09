/******************************************/
/* External dependencies */
/******************************************/
// Importing the Engineer class from Engineer.js in the lib folder.
import { Engineer } from "../lib/Engineer.js";
/******************************************/
/* Mocks */
/******************************************/

/******************************************/
/* Test Constants */
/******************************************/
// Creating a new Engineer object to be used for testing.
const testEngineer = new Engineer(
  "John Doe",
  "43",
  "johndoe@gmail.com",
  "JohnDoe6"
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
// Main describe block for the Engineer tests.
describe("Engineer", () => {
  // Nested describe block to test the creation of a new Engineer object.
  describe("Creates a new Engineer Object", () => {
    // Test to ensure name, id, email and Github are added to the Engineer object.
    it("Should add a name, id, email and Github to the object", () => {
      expect(testEngineer.name).toBe("John Doe");
      expect(testEngineer.id).toBe("43");
      expect(testEngineer.email).toBe("johndoe@gmail.com");
      expect(testEngineer.github).toBe("JohnDoe6");
    });

    // Test to check if getName() returns the correct name.
    it("Should return the Engineer name when invoked", () => {
      expect(testEngineer.getName()).toBe("John Doe");
    });

    // Test to check if getId() returns the correct ID.
    it("Should return the Engineer Id when invoked", () => {
      expect(testEngineer.getId()).toBe("43");
    });

    // Test to check if getEmail() returns the correct email.
    it("Should return the Engineer Email when invoked", () => {
      expect(testEngineer.getEmail()).toBe("johndoe@gmail.com");
    });

    // Test to check if getGithub() returns the correct Github Profile.
    it("Should return the Engineer Github when invoked", () => {
      expect(testEngineer.getGithub()).toBe("JohnDoe6");
    });
  });
});
/******************************************/
/* Additional Test Suites */
/******************************************/
