class Waste{

    constructor(x, y) {
        var options = {
            'restitution':true,
            'restitution':0.3,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, 40,options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        fill("white");
        ellipse(0, 0, 40);
        pop();
      }
    };  
