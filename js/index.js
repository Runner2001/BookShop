const person = {
  name: "Runner",
  age: 20,
  work() {
    //method
    console.log("Wed Fontend Developer");
  }
};
person.work();

const job = [
  { id: 1, active: true },
  { id: 2, active: true },
  { id: 2, active: false },
];

const activejob = job.filter(function (job) {
  return job.active;
});
const es6job = job.filter((job) => job.active);

console.log(activejob);

const rate = {
  usd: 2000,
  sgd: 1000,
  euo: 2500,
  method() {
    console.log("Hello I am Exchage Method");
  },
};

console.log(rate.usd);

function exchange(money, mmk) {
  console.log(mmk / rate[money]);
  return rate.method();
}

//function Expression
let run = function () {
  return "Hello";
};
console.log(run());

//funtion expression in es6
let ex = (mmk, money) => mmk / rate[money];

//map Method in array
const color = ["red", "green", "blue"];
//${} use to write javascript code in html
const item = color.map(function (color) {
  `<li>${color}</li>`;
}); //`<li></li>` This is template literal
const item2 = color.map((color) => `<li>${color}</li>`); //Es6 form

//Revariable of object
const person2 = {
  name: "Min",
  age: "21",
  work: "Desginer",
};
const person3 = {
  Location: "Myanmar",
};

const n = person2.name; // Normal javascript
const a = person2.age; // Normal javascript

const { name, age, work } = person2; //same all variable name in es6
const { name: name1, age: age1, work: work1 } = person2; //with different variable name

//cloning and concat or combine array/object

const first = [1, 2, 3];
const second = [4, 5, 6];

const combine = [...first, ...second]; //combining 2 array
const combine2 = [...first, "Another add", ...second, "Last add"]; //combining array and add another index
console.log(combine);
console.log(combine2);

const clone = [...first]; //cloning first array
console.log(clone);

const combineobject = { ...person2, ...person3 };
console.log(combineobject);

//Object and class useage

//When you wanna create new same object you need to crete this again
const phone = {
    name : 'iphone',
    price : 1000,
    mmkprice(){
        return '2000000';
    }
};

//When create a Class object you can recreate object again & again 
class Phone{
    constructor(name , price){ //constructor is class function no need to call that function. constructer work in auto 
        this.name = name;
        this.price = price;
    }

    mmkprice(){
        console.log(this.price * 2000);
    }
}
const phone2 = new Phone('iphone',999); //new key is to creat a new object
const phone3 = new Phone('iphone13',1088);

