class Engineer extends Employee {
    construnctor(name, id, email,github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}