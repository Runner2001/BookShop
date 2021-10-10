import Person,{Person2} from "./Modular"; //Person is default export & Person2 is just export

export class Teacher extends Person {
  //extend to Person to use all method function and variable
  teach() {
    console.log("teach");
  }
  constructor(name, age) {
    super(name);
    //super => when u add constructor in child class u need to call parent constructor (super)
    this.age = age;
  }
}
