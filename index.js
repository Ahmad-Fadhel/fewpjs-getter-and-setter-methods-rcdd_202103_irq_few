// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
    this.pi = Math.pi;
  }
  
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.pi * this.diameter
  }
  get area(){
    return this.pi * Math.pow(this.radius,2)
  }
}

let circle = new Circle(18)
circle.diameter;
circle.circumference;
circle.area


