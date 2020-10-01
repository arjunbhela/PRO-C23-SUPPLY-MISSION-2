class Log {
    constructor(x,y,h,angle) {
      var optionsp={
          'restitution':1,
          'friction':2.8,
        'density':1.0
      }  
     this.body = Bodies.rectangle(x,y,20,h,optionsp);
     this.width =  20;
     this.height = h
     Matter.Body.setAngle(this.body,angle)
     World.add(world,this.body);

    }

    display()  {
  
    var pos = this.body.position;
    push()
    angleMode(RADIANS);
    translate(pos.x,pos.y);
    rotate(this.body.angle);  
    fill("white");
    strokeWeight(3)
    stroke("brown");

    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop()
     }
}