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
    constructor(name,age){
        super(name);
        //super => when u add constructor in child class u need to call parent constructor (super)
        this.age = age;
    }
}

const teacher = new Teacher('Runner',21);
