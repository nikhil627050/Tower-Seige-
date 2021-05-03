class Blocks {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.1,
          density:20,
          friction:2.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      
      
      rect(pos.x,pos.y,this.width,this.height)
      
    }
    }