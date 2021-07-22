class Engineer extends Employee {
    construnctor(name, id, email,officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}