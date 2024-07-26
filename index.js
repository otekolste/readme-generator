const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Welcome to the README generator! Start by inputting your project title:"

        },
        {
            type: "input",
            name: "projectDescription",
            message: "Great! Now enter a description for your project:"
        },
        {
            type: "input",
            name: "projectInstallation",
            message: "Now enter details about how to install your project:"
        },
        {
            type: "input",
            name: "projectUsage",
            message: "Now provide some information about your project usage:"
        },
        {
            type: "input",
            name: "projectContribution",
            message: "Now provide some contribution guidelines to your project:"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Now enter a description for your project:"
        },
        {
            type: "input",
            name: "projectTests",
            message: "Now provide some instructions as to how to test your application:"
        },
        {
            type: "list",
            name: "projectLicense",
            message: "Now choose a license from the list below:",
            choices: ["MIT License","GNU General Public License","GNU Lesser General Public License","Apache License 2.0","Mozilla Public License 2.0","BSD License"]
        },
        {
            type: "input",
            name: "userUsername",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name:"userEmail",
            message: "Finally, enter your email:"
        }
    ])
    .then(response => {
        fs.writeFile('README.md',response.projectTitle, (err) => 
            err ? console.log("Sorry, an error occurred: " + error) : console.log("Successfully generated README!")
        )
    })