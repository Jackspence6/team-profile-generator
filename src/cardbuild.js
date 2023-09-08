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
    <div class="card m-0 p-0 rounded" style="width: 18rem">
      <!-- Div to hold both h5 and h6 with the same blue background -->
      <div
        class="bg-primary text-white m-0 p-2"
        style="border-bottom: 5px solid black"
      >
        <h5 class="mb-0 text-center">${manager.getName()}</h5>
        <h6 class="mb-0 text-center">${manager.getRole()}</h6>
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
`;
// Engineer Card
const engineerCardBuild = `
    <!-- Engineer Card  -->
    <div class="card m-0 p-0 rounded" style="width: 18rem">
      <!-- Div to hold both h5 and h6 with the same blue background -->
      <div
        class="bg-primary text-white m-0 p-2"
        style="border-bottom: 5px solid black"
      >
        <h5 class="mb-0 text-center">Employee Name</h5>
        <h6 class="mb-0 text-center">Employee Title</h6>
      </div>
      <!-- Separate card to hold the list items -->
      <ul class="list-group list-group-flush m-0 p-4 border border-black">
        <li class="list-group-item border border-secondary-subtle rounded-top">
          ID:
        </li>
        <li class="list-group-item border border-secondary-subtle">
          Email: <a href="mailto: "></a>
        </li>
        <li
          class="list-group-item border border-secondary-subtle rounded-bottom"
        >
          Github: <a href="https://github.com/ " target="_blank"></a>
        </li>
      </ul>
    </div>
`;
// Intern Card
const internCardBuild = `
    <!-- Intern Card  -->
    <div class="card m-0 p-0 rounded" style="width: 18rem">
      <!-- Div to hold both h5 and h6 with the same blue background -->
      <div
        class="bg-primary text-white m-0 p-2"
        style="border-bottom: 5px solid black"
      >
        <h5 class="mb-0 text-center">Employee Name</h5>
        <h6 class="mb-0 text-center">Employee Title</h6>
      </div>
      <!-- Separate card to hold the list items -->
      <ul class="list-group list-group-flush m-0 p-4 border border-black">
        <li class="list-group-item border border-secondary-subtle rounded-top">
          ID:
        </li>
        <li class="list-group-item border border-secondary-subtle">
          Email: <a href="mailto: "></a>
        </li>
        <li
          class="list-group-item border border-secondary-subtle rounded-bottom"
        >
          School:
        </li>
      </ul>
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
