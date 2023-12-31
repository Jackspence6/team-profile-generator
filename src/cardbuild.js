/******************************************/
/* External dependencies */
/******************************************/

/******************************************/
/* Global variables and constants */
/******************************************/
// Card Building code for employee cards
// Manager Card
const managerCardBuild = (manager) => `
    <!-- Manager Card  -->
    <div class="col">
    <div class="card m-0 p-0 rounded" style="width: 18rem">
      <!-- Div to hold both h5 and h6 with the same blue background -->
      <div
        class="bg-primary text-white m-0 p-2"
        style="border-bottom: 5px solid black"
      >
        <h5 class="mb-0 text-center">${manager.getName()}</h5>
        <h6 class="mb-0 text-center"> <span class="material-symbols-outlined">
          coffee
          </span> ${manager.getRole()}</h6>
      </div>
      <!-- Separate card to hold the list items -->
      <ul class="list-group list-group-flush m-0 p-4 border border-black">
        <li class="list-group-item border border-secondary-subtle rounded-top">
          ID:  ${manager.getId()}
        </li>
        <li class="list-group-item border border-secondary-subtle">
          Email:  <a href="mailto:${manager.getEmail()}">${manager.getName()}</a>
        </li>
        <li
          class="list-group-item border border-secondary-subtle rounded-bottom"
        >
          Office Number:  ${manager.getOfficeNumber()}
        </li>
      </ul>
    </div>
    </div>
`;
// Engineer Card
const engineerCardBuild = (engineer) => `
    <!-- Engineer Card  -->
    <div class="col">
    <div class="card m-0 p-0 rounded" style="width: 18rem">
      <!-- Div to hold both h5 and h6 with the same blue background -->
      <div
        class="bg-primary text-white m-0 p-2"
        style="border-bottom: 5px solid black"
      >
        <h5 class="mb-0 text-center">${engineer.getName()}</h5>
        <h6 class="mb-0 text-center"> <span class="material-symbols-outlined">
        eyeglasses
        </span> ${engineer.getRole()}</h6>
      </div>
      <!-- Separate card to hold the list items -->
      <ul class="list-group list-group-flush m-0 p-4 border border-black">
        <li class="list-group-item border border-secondary-subtle rounded-top">
          ID:  ${engineer.getId()}
        </li>
        <li class="list-group-item border border-secondary-subtle">
          Email:  <a href="mailto:${engineer.getEmail()}">${engineer.getName()}</a>
        </li>
        <li
          class="list-group-item border border-secondary-subtle rounded-bottom"
        >
          Github:  <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
        </li>
      </ul>
    </div>
    </div>
`;
// Intern Card
const internCardBuild = (intern) => `
    <!-- Intern Card  -->
    <div class="col">
    <div class="card m-0 p-0 rounded" style="width: 18rem">
      <!-- Div to hold both h5 and h6 with the same blue background -->
      <div
        class="bg-primary text-white m-0 p-2"
        style="border-bottom: 5px solid black"
      >
        <h5 class="mb-0 text-center">${intern.getName()}</h5>
        <h6 class="mb-0 text-center"> <span class="material-symbols-outlined">
          school
          </span> ${intern.getRole()}</h6>
      </div>
      <!-- Separate card to hold the list items -->
      <ul class="list-group list-group-flush m-0 p-4 border border-black">
        <li class="list-group-item border border-secondary-subtle rounded-top">
          ID:  ${intern.getId()}
        </li>
        <li class="list-group-item border border-secondary-subtle">
          Email: <a href="mailto:${intern.getEmail()}">${intern.getName()}</a>
        </li>
        <li
          class="list-group-item border border-secondary-subtle rounded-bottom"
        >
          School:  ${intern.getSchool()}
        </li>
      </ul>
    </div>
    </div>
`;
/******************************************/
/* Function and class declarations */
/******************************************/

/******************************************/
/* Event listeners */
/******************************************/

/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/

/******************************************/
/* Main logic */
/******************************************/
// Exporting card building code
export { managerCardBuild, engineerCardBuild, internCardBuild };
