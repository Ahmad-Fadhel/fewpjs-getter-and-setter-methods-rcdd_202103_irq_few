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
    return pi * this.diameter
  }
  get area(){
    return pi * this.radius^2
  }
}

let circle = new Circle(6)
circle.diameter;
circle.circumference;
circle.area


