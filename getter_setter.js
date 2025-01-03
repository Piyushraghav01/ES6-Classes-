class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    if (newDiameter >= 0) {
      this.radius = newDiameter / 2;
    } else {
      console.log('Invalid Input');
    }
  }

  //   getDiameter() {
  //     console.log(this.radius * 2);
  //   }
}

const circle = new Circle(4);
console.log(circle.radius);
// circle.getDiameter();
console.log(circle.diameter);
circle.radius = 6;
console.log(circle.diameter);
circle.diameter = 20;
console.log(circle.radius);
console.log(circle.diameter);
circle.diameter = -2;
console.log(circle.radius);
