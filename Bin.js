class Bin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness=20;
        this.angle = 0;

        var Bin_bottom = Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true});
        World.add(world,this.Bin_bottom);

        var Bin_left_wall = Bodies.rectangle(x,y,this.height,this.thickness,{isStatic:true});
        Matter.Body.setAngle(this.Bin_left_wall,this.angle);
        World.add(world,this.Bin_left_wall);

        var Bin_right_wall = Bodies.rectangle(x,y,this.height,this.thickness,{isStatic:true});
        Matter.Body.setAngle(this.Bin_right_wall,this.angle);
        World.add(world,this.Bin_right_wall);

    }
    display(){
        var pos_bottom=this.Bin_bottom.position;
        var pos_left = this.Bin_left_wall.position;
        var pos_right = this.Bin_right_wall.position;

        push()
        translate(pos_left.x,pos_left.y);
        // rotate()
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.thickness,this.height);
        pop()

        push()
        translate(pos_right.x,pos_right.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this,this.thickness,this.height);
        pop()
        
        push()
        translate(pos_bottom.x,pos_bottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.thickness,this.height)
        pop()
    }
}