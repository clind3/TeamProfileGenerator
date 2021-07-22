class Intern extends Employee {
    construnctor(name, id, email,school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
    return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

