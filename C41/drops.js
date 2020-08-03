class drops{
    constructor(x,y){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        
        this.body=Bodies.circle(x, y,5,options)
        this.r = 5; 
        this.x =x;
        this.y =y;
		World.add(world, this.body);
    }
      update(){
      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
         }
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
       fill("blue");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}