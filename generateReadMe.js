const fs = require('fs');

module.exports = {
    writeReadMe
};

function generateReadMe(response) {
    return `# ${response.projectTitle}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Description
${response.projectDescription}

## Installation
${response.projectInstallation}

## Usage
${response.projectUsage}


## Contributing
${response.projectContribution}

## Tests
${response.projectTests}


## Questions
    `;


    
}

function writeReadMe(response) {
    fs.writeFile('README.md',generateReadMe(response), (err) => 
        err ? console.log("Sorry, an error occurred: " + error) : console.log("Successfully generated README!")
    )

}