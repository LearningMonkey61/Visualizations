function Particle(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.yspeed = random(-1,1);
    this.xspeed = random(-1,1);
}

Particle.prototype.show = function(){
    stroke(255,0,100);
    strokeWeight(7);
    point(this.x,this.y);
}

Particle.prototype.move = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    if (this.y >= height || this.y <= 0)  {
         this.yspeed = 0 - this.yspeed;
    }
    if (this.x >= width || this.x <= 0)  {
        this.xspeed = 0 - this.xspeed;
   }
}