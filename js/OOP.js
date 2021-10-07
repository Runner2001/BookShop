class Person{
    walk(){   //method in es6 original is walk : funtion(){}
        console.log("walk");
    }

    constructor(name){
        this.name = name;
    }
}

class Teacher extends Person { //extend to Person to use all method function and variable
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher('Runner');
