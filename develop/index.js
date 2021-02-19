// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

	{
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub Username (Required)',
		validate: githubInput => {
			if (githubInput) {
				return true;
			} else {
				console.log('Please enter your GitHub username!');
				return false;
			}
		}
	},

	{
		type: 'input',
		name: 'repo',
		message: 'Enter the name of your GitHub repository (Required)',
		validate: repoInput => {
			if (repoInput) {
				return true;
			} else {
				console.log('You need to enter your GitHub  repository name!');
				return false;
			}
		}
	},

	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project? (Required)',
		validate: titleInput => {
			if (titleInput) {
				return true;
			} else {
				console.log('You need to enter a project name!');
				return false;
			}
		}
	},

	{
		type: 'input',
		name: 'description',
		message: 'Provide a description of the project (Required)',
		validate: descriptionInput => {
			if (descriptionInput) {
				return true;
			} else {
				console.log('You need to enter a project description!');
				return false;
			}
		}
	},

	{
		type: "input",
		name: "badge",
		message: "Enter the badge links that you would like included."
	},

	{
		type: 'input',
		name: 'installation',
		message: 'What are the steps required to install your project?',
	},

	{
		type: 'input',
		name: 'usage',
		message: 'Provide instructions and examples for use. Include screenshots as needed',
	},

	{
		type: 'input',
		name: 'license',
		message: 'Chose the appropriate license for this project: ',
		choices: [
			'GNU AGPLv3',
			'GNU GPLv3',
			'GNU LGPLv3',
			'Mozilla Public License 2.0',
			'Apache License 2.0',
			'MIT License',
			'Boost Software License 1.0',
			'The Unlicense',
		]
	},

	{
		type: 'input',
		name: 'contributing',
		message: 'Who are the contributors of this projects?',
	},

	{
		type: 'input',
		name: 'test',
		message: 'Provide any tests written for your application and provide examples on how to run them.',
	},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, data, err => {
			// if there's an error, reject the Promise 
			if (err) {
				reject(err);
				// return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
				return;
			}
			// if everything went well, resolve the Promise and send the successful data
			resolve({
				ok: true,
				message: 'README.md file has been created!'
			});
		});
	});

}
writeToFile(fileName,data);

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
