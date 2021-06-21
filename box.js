class Box {

//properties of the object
constructor(x,y,width,height){

    var options={
        restitution:0.5,
        friction:0.1,
        density:1.0
    }

        this.width = width;
        this.height = height;
        this.body = Bodies. rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body)
        console.log(this.body)


}
display()

{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate (pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    fill(255)
    rect(0,0,this.width,this.height)
    pop();

}


}