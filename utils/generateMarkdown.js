// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license passed in
    // You can customize this based on the licenses you want to support
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
} else {
    // If there is no license, return an empty string
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'GPL': '[GPL License](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache': '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)'
    
};

if (license && licenseLinks[license]) {
    return licenseLinks[license];
} else {
    return ''; // Return an empty string if no license or invalid license is provided
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
This project is licensed under ${renderLicenseLink(license)} \n ${renderLicenseBadge(license)}.
`;
} else {
    return ''; // Return an empty string if no license is provided
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Project Title:
  ${data.title}

  ## Description

  A Node.js command-line application that allows users to generate ${data.title} files by giving inputs.
  ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  Include instructions on how to install any dependencies required for your project. You can mention running npm install to install necessary packages.

  To run the SVG Logo Maker application, follow these steps to install the required dependencies:

  ${data.installation}

  running npm install to install necessary packages.
  

  ## Usage

  Clone the repository to your local machine.

  Open a terminal in the project directory.

  Run npm install to install the required dependencies, including the Inquirer package.

  Run node index.js to start the application.

  Answer the prompts to provide information about your project, such as the title, description, installation instructions, usage information, etc.

  Once you have answered all the prompts, the application will generate a professional README file based on your inputs.

  Find the generated README file in the application folder. ${data.usage}  

  ${renderLicenseSection(data.license)}
    The README Generator project is distributed under the ${data.license}. 
    This license allows you to use, modify, and distribute the project for both personal and commercial purposes, with attribution to the original author.

  
  ## Contributing
  Fork the repository on GitHub.

  Clone your forked repository to your local machine.
  
  Create a new branch for your contribution.
  
  Make your changes or additions to the codebase.
  
  Test your changes locally to ensure they work as intended.
  
  Commit your changes with descriptive commit messages.
  
  Push your changes to your fork on GitHub.
  
  Create a pull request from your branch to the main repository's main branch.
  
  Provide a detailed description of your contribution in the pull request.
  
  Wait for the maintainers to review your pull request and address any feedback they provide.
  ${data.contributing}
  
  ## Tests
  Clone the repository to your local machine.

  Open a terminal in the project directory.

  Run npm install to install the required dependencies, including the Inquirer package.

  Run node index.js to start the application.

  Follow the prompts and provide information about your project, such as the title, description, installation instructions, usage information, etc.

  Once you have completed all the prompts, the application will generate a README file based on your inputs.

  Check the generated README file to ensure it includes all the information you provided and is formatted correctly.

  ${data.tests}

  ## Author:

  This README Generator project was created by:

  - **Your Name**: Hemalatha Prakasam
  - **GitHub**: [GitHub Profile](https://github.com/${data.githubUsername})

  Feel free to connect with me for any inquiries or feedback related to the SVG Logo Maker application. I hope you enjoy using the application and creating custom logos with it.
    
  ## Questions
 
  If you have any feedback, questions, or suggestions regarding the application, feel free to reach out to me:

  - **Email**: ${data.email}

  I welcome any feedback or inquiries and am happy to assist with any queries related to the project. Your input is valuable in improving the application and making it more user-friendly.


`;
}

module.exports = {generateMarkdown};
