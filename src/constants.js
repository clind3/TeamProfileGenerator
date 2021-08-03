class Questions {
    generalInfo = [
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

    managerInfo = [{
        name: 'officeNumber',
        type: 'input',
        message: 'Enter their office number:',
    }]

    engineerInfo = [{
        name: 'github',
        type: 'input',
        message: 'Enter your github link:',
    }]

    internInfo = [{
        name: 'school',
        type: 'input',
        message: 'Enter your school:',
    }]
}


const outputFile = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel='stylesheet' href="style.css" />
</head>

<body>
    <header>
        <h1>Team Profile</h1>
    </header>
    <main class="row row-cols-1 row-cols-md-3 g-4" id="employeeCards">
       
        ${profiles}

    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
<script src='/index.js'></script>
<script src='/src/generateCard.js'></script>

</html>` ;



module.exports = { Questions, outputFile }