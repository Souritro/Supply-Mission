class Package{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            friction:2,
        }
        this.body =  Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);
        this.height = height;
        this.width = width;
    }
    display(){


        rect(this.body.position.x,this.body.position.y,this.width, this.height);
      
	    //body.addImage(packageIMG)
	    //body.scale = 0.2

    }
}