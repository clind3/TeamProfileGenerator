//import inquirer and file writing functionality
const inquirer = require('inquirer');
const fs = require('fs');
//import constants and class files
const constantsFile = require('./src/constants');
const {Card} = require('./src/generateCard');
const { Manager } = require('./lib/Manager');
const {Engineer} = require('./lib/Engineer');
const {Intern} = require('./lib/Intern');


//create question variables
const manager = constantsFile.generalInfo.concat(constantsFile.managerInfo);
const engineer = constantsFile.generalInfo.concat(constantsFile.engineerInfo);
const intern = constantsFile.generalInfo.concat(constantsFile.internInfo);
const card = new Card();
let profiles = '';

//create user action list
const selectAction = () => {
    inquirer.prompt([{
        name: 'userActions',
        type: 'list',
        message: 'Select your next action:',
        choices: ['Add Engineer', 'Add Intern', 'Finalize Team'],
    }]).then((action) =>{
        switch (action.userActions) {
            case 'Add Engineer':
                askEngineer();
                break;
            case 'Add Intern':
                askIntern();
                break;
            case 'Finalize Team':
                // console.log('finalizing!!');
                writingFile()
                break;
                
        }
    })
}

//get engineer info
const askEngineer = () => {
    inquirer.prompt(engineer).then((info) => {
    //will need to create eng. object then create card
    let newEng = new Engineer(info.name, info.id, info.email, info.github);
    profiles += card.getInfo(newEng);
    // console.log('index.js FILE'+ profiles);
    // console.log('added engineer');
    selectAction();
})}

//get intern info
const askIntern =() => {
    inquirer.prompt(intern).then((info) => {
        //will need to create intern object then create card
        const newIntern = new Intern(info.name, info.id, info.email, info.school);
        profiles += card.getInfo(newIntern);
        // console.log('added intern');
        // console.log('index.js FILE'+ profiles);
        selectAction();
    })
}

// WHEN I start the application
// THEN I am prompted to enter the team manager???s name, employee ID, email address, and office number
inquirer.prompt(manager).then(async (answers)=>{
    //will use those answers to create Manager card
    const newMngr = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    //add new card with given info
    profiles += card.getInfo(newMngr);
    // console.log('index.js FILE'+ profiles);
    //prompt user with options of what to do next (continue to ask until user selects finalize)
    selectAction();
}) 
  
function writingFile() {
    //create write file function
    fs.writeFile('./dist/index.html', constantsFile.writeOutput(profiles), (err) => {
    err ? console.log(err) : console.log('Created');
    });
}
module.exports = profiles;