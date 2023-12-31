/******************************************/
/* External dependencies */
/******************************************/
import { HtmlCards } from "../index.js";
/******************************************/
/* Global variables and constants */
/******************************************/
// Adding html code for page to constant
const pageBuild = (HtmlCards) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/css/bootstrap.min.css"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>My Team</title>
  </head>
  <body>
    <header
      class="p-3 mb-2 bg-danger bg-gradient text-white border-bottom border-black border-3"
    >
      <h1 class="text-center">My Team</h1>
    </header>
    <div class="container mt-4">
      <div class="row row-cols-1 row-cols-md-3 g-4" id="card-container">
      ${HtmlCards}
      </div>
    </div>
      <style>
      .container {
        display: flex;
        justify-content: center;
      }
      #card-container {
        margin: 2rem;
      }
      .card {
        height: 100%;
      }
    </style>
  </body>
</html>
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
// Exporting Page Building code
export { pageBuild };
