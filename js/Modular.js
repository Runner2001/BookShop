export default class Person { //default export do not need to import {...} like this
  walk() {
    //method in es6 original is walk : funtion(){}
    console.log("walk");
  }

  constructor(name) {
    this.name = name;
  }
}
export function Person2(){ //not a default export so need to write {...}

}