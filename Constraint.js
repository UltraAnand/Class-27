class Chain{
    constructor(bodyA,bodyB){
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
    
        this.conection = Constraint.create(options);
        World.add(world,this.conection)
    }
display(){
    var pointA = this.conection.bodyA.position
    var pointB = this.conection.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}