class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    rectMode(CENTER);
    fill(255);
    push();
    translate(50,50);
    rotate(angle);
    rect(0,0, this.width, this.height);
    pop();
  }
};
