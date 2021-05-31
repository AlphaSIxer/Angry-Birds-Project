class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.x=[]
    this.y=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>5){
      var posx=[this.body.position.x]
      var posy=[this.body.position.y]
      this.x.push(posx)
      this.y.push(posy) 
    }
  
    for(var i=0 ; i<this.x.length ; i=i+1){
      fill(random(0,255),random(0,255),random(0,255))
      ellipse(this.x[i],this.y[i],10,10)
    }
  }
}
