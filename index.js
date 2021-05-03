// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
    
  }
  
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.pi * this.radius*2
  }
  get area(){
    return this.pi * Math.pow(this.radius,2)
  }
}

let circle = new Circle(6)
circle.diameter;
circle.circumference;
circle.area


