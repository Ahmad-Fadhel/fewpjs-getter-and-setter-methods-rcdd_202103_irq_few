// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
    this.pi = Math.pi;
  }
  
  get diameter(){
    return radius * 2
  }
  get circumference(){
    return pi * this.diameter
  }
  get area(){
    return pi * radius^2
  }
}

let circle = new Circle(6)
circle.diameter;
circle.circumference;
circle.area


