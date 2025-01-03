//constructor function
function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function () {
        console.log(`
          The ${this.name} is ${this.color} in color.
          It has ${this.wheels} wheels
    `);
    };
}

// const car = new Vehicle('Car', 'blue', 4);
// console.log(car.hasOwnProperty('getDetails'));

// car.getDetails();

//class expressions
// const Vehicle = class{

// }

// Classes in JS.. Class declaration
class VehicleCl {

    //Private properties
    #regNumber;
    //constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }

    // Private Method
    #getNumber(number){
        return number;
    }

    //methods
    getDetails() {
        console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    Registration NUmber is : ${this.#regNumber(this.#regNumber)}
    `);
    }
}

const veh1 = new VehicleCl('Scooter','Grey', 2, 8866);
console.log(veh1);

veh1.name = 'Car';
//console.log(veh1.#regNumber);
veh1.getDetails();
veh1.#getNumber();
