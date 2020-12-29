class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,180,60,30,160);
        image(this.image2,160,50,30,120);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
           push();
           stroke(75,35,15);
           

            if(pointA.x<180){
                strokeWeight(8);
                line(pointA.x-20, pointA.y+5, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y+5,pointB.x+20,pointB.y+5);
                image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(2);
                line(pointA.x-20, pointA.y+5, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y+5,pointB.x+20,pointB.y+5);
                image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
            pop();
        }
        
    }
    
}