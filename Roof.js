class roof{
    constructor(x,y,width,height){
     var options = {
         isStatic:true
     }
 
     this.body = Bodies.rectangle(x,y,width,height, options);
     World.add(world, this.body)
     
     this.width = width;
     this.height = height;
    }
 
   display(){
     push();
     translate(this.body.position.x, this.body.position.y);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("green");
     fill(255,0,0);
     rect(0, 0, this.width, this.height);
     pop();
   }
 
 
 
 
 
 }