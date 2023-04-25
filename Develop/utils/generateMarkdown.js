const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/license/License-2.0'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'N/A') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license} `
  }
  return licenseSection;
}

// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Description:
  ### ${answer.description}

  ## Table of Contents
  ### * [License](#license)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributing](#contributing)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation:
  ### You must Install the following for this application to function:
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Contributing:
  ### ${answer.contributing}

  ## Tests:
  ### Run the following in your terminal to test this application:
  ### ${answer.test}

  ## Questions:
  ### If you have any questions, contact me at
  ### GitHub: https://github.com/${answer.GitHub}
  ### or
  ### Email: ${answer.email}

`;
}

module.exports = generateMarkdown;
