class Person{
    constructor(){
        let name;
        let job;
    }
    getName(){
       return this.name
    }
    getJob(){
        return this.job;
    }
    setName(name){
        this.name= name;
    }
    setJob(job){
        this.job=job
    }
}

let person = new Person
person.setName('Ismayil')
person.setJob('Student')
console.log(`Name: ${person.getName()} 
Job: ${person.getJob()}`);