class weapon {
    constructor(x,y,width,height) {
      var options = {
          restitution:1,
          density:3,
          friction:1,
         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.width = width;
      this.height = height;
      this.image=loadImage("polygon.png")
      World.add(world, this.body);
    }
    display() {

        
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        

    }
  };