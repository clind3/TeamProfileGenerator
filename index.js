//this file is going to include inquirer prompts 
//and starting code for terminal
const inquirer = require('inquirer');
const questions = require('./src/constants');

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// while(userAction != 'Quit') {
inquirer.prompt(questions.generalInfo.concat(questions.managerInfo)).then((answers)=> {
    //will use those answers to create Manager card
    console.log(answers);
    //now prompt user with options of what they want to do next
    //will need this list to continue populating until user selects finalize
    inquirer.prompt({
        name: 'userActions',
        type: 'list',
        message: 'Select your next action:',
        choices: ['Add Engineer', 'Add Intern', 'Finalize Team'],
    }).then((answers) => {
        if(answers.userActions == 'Add Engineer'){
            inquirer.prompt(questions.generalInfo.concat(questions.engineerInfo)).then((answers) => {
                //will need to generate engineer card create engineer object
                console.log('added engineer');
            })
        }else if(answers.userActions == 'Add Intern'){
            inquirer.prompt(questions.generalInfo.concat(questions.internInfo)).then((answers) => {
                //will need to generate engineer card create engineer object
                console.log('added intern');
            })
        }
    })
}) 
  
// }

