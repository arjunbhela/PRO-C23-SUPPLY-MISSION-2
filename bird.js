class Bird {
    constructor(x,y) {
      var optionsp={
          'restitution':1,
          'friction':0.3,
        'density':1.0
      }  
     this.body = Bodies.rectangle(x,y,40,40,optionsp);
     this.width =  40;
     this.height = 40
     World.add(world,this.body);

    }

    display()  {
  
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    push()
    rectMode(CENTER)  
    fill("pink");
    strokeWeight(3)
    stroke("red");
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop()
     }
}