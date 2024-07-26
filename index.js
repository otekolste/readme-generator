const inquirer = require('inquirer');
const generator = require('./generateReadMe.js');

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
            message: "Now provide some information about how to use your project:"
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
            choices: ["MIT License","GNU GPL v3","Apache License 2.0","Mozilla Public License 2.0","BSD 3-Clause License"]
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
        generator.writeReadMe(response);
    })



