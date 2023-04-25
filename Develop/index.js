// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input

const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What is the Project Title?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a Title');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project require?',
            choices: ['N/A', 'MIT', 'Apache 2.0'],
            validate: licenseInput = () => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose an option!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "What's a description of your Project?",
            validate: descriptionInput = () => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please input a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps to install your project?",
            validate: installationInput = () => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please Enter Steps for Installation!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: "How can this project be used?",
            validate: usageInput = () => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide a use for project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: "How can developers contribute to this project?",
            validate: contributionInput = () => {
                if(contributionInput) {
                    return true;
                } else {
                    console.log('Please Provide how a user can contribute to project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: "Are there tests for your application? How do you run them?",
            validate: testInput = () => {
                if(testInput) {
                    return true;
                } else {
                    console.log('Please Provide ways to test project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: "What is your github username so others can reach you for questions?",
            validate: githubInput = () => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please provide your Github username so others can reach you for questions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email for others to reach you?",
            validate: emailInput = () => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide email so others can reach you!')
                }
            }
        },
    ];


// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

module.exports = questions;