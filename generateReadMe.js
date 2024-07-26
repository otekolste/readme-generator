const fs = require('fs');

module.exports = {
    writeReadMe
};

function generateReadMe(response) {
    return `# ${response.projectTitle}

${generateLicenseBadge(response.projectLicense)}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Description
${response.projectDescription}

## Installation
${response.projectInstallation}

## Usage
${response.projectUsage}

#License
This project is covered under the ${response.projectLicense}. For more information, click on the badge beneath the title.

## Contributing
${response.projectContribution}

## Tests
${response.projectTests}


## Questions
Have any questions? Reach out to me via [my GitHub](github.com/${response.userUsername}), or email me at ${userEmail}.
    `;


    
}

function writeReadMe(response) {
    fs.writeFile('README.md',generateReadMe(response), (err) => 
        err ? console.log("Sorry, an error occurred: " + error) : console.log("Successfully generated README!")
    )

}

function generateLicenseBadge(license){
    let licenseBadge;
    switch(license){
        case "MIT License":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "GNU GPL v3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "Apache License 2.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "Mozilla Public License 2.0":
            licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            break;
        case "BSD 3-Clause License":
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            break;
        }
        return licenseBadge;
}