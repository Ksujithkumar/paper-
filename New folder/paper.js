class Paper 
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.7
        }
        this.paperIMG = loadImage("paper.png")
        this.x = x;
        this.y = y;
        this.r = r;
        this.body =Bodies.circle(this.x,this.y,(this.r/3),options)
        World.add(world,this.body)
    }
    display()
        {
           
           var paperpos = this.body.position
           push()
           translate(paperpos.x,paperpos.y)
           imageMode(CENTER)
           strokeWeight(3);
           fill(255,0,255)
           image(this.paperIMG,0,0,this.r,this.r)
           pop()
        }
    
}