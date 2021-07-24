const generalInfo = [
    {
        name: 'name',
        type: 'input',
        message: "What is the Employee's name?",
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter their Employee ID:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter their email address:',
    },
]

const managerInfo = [{
    name: 'officeNumber',
    type: 'input',
    message: 'Enter their office number:',
}]

const engineerInfo = [{
    name: 'github',
    type: 'input',
    message: 'Enter your github link:',
}]

const internInfo = [{
    name: 'school',
    type: 'input',
    message: 'Enter your school:',
}]

module.exports = {internInfo, generalInfo, engineerInfo, managerInfo}