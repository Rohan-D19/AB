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
        World.add(world, this.sling);

        this.slingy = loadImage("sprites/sling1.png");
        this.slingyy = loadImage("sprites/sling2.png");
        this.slingyyy = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingy, 200, 20);
        image(this.slingyy, 170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y);
        
        image(this.slingyyy, pointA.x-25, pointA.y-10, 20, 30);
    }
}
}