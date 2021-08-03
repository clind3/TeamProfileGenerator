let element = window.document.getElementById("employeeCards");
//will include js code to create team Cards
function Card() {
    cardList = []
}

function createCard(addToEnd, classInfo) {
    //create individual cards here in list format
    const profileCard = `
    <div class="col-sm-6" style="max-width: 18rem;">
            <div class="profileCard">
                <div class="card h-100">
                    <div class="card-header text-white bg-primary">
                        <h3>${classInfo.getName()}</h3>
                        <h5 class="card-title">${classInfo.getRole()}</h5>
                    </div>
                    <div class="card-body text-dark bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${classInfo.getId()} </li>
                            <li class="list-group-item">Email: <a href="mailto: ${classInfo.getEmail()}">emailLink</a> </li>
                            <li class="list-group-item">${addToEnd}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> `
    console.log(addToEnd + ' '+ classInfo.getName());
    return profileCard;
}

Card.prototype.getInfo = function (createdClass) {
    let role = createdClass.getRole();
    console.log(role);
    switch (role) {
        case 'Manager':
           createCard('created', createdClass);
            break;
            
        case 'Intern':
            let school = createdClass.getSchool();
            createCard('will need to get school value in format', createdClass);
            break;
        case 'Engineer':
            let github = createdClass.getGithub();
            createCard('will need to get github value in format', createdClass);
            break;
    }
    
}



module.exports = {Card};