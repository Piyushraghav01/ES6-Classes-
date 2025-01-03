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

    //constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    //methods
    getDetails() {
        console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    `);
    }
}

const veh1 = new VehicleCl(
    'Scooter',
    'Grey',
    2
);


console.log(veh1);
veh1.getDetails();
