const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of this project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation instructions: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage of this project?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for this project: ",
            choices: [
                "Apache License 2.0",
                "BSD 3-Clause",
                "BSD 2-Clause",
                "GNU General Public License",
                "GNU Library General Public License",
                "MIT License",
                "Mozilla Public License 2.0",
                "Common Development and Distribution License",
                "Eclipse Public License 2.0",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

const generateContent = generateReadme(answers);

const init = async () => {
    const answers = await promptUser();
    console.log(answers);
}

init();