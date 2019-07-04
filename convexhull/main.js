var particles = [];
var parnum = 10 ; 
function setup(){
    createCanvas(1200,800);
    background(0);
    for(var i = 0 ; i < parnum ; i++){
        var par = new Particle();
        particles.push(par);
    }
}
function draw(){
    background(0); 
    for(var i = 0 ; i < particles.length ; i++){
        var p1 = particles[i];
        for(var j = 0 ; j < particles.length ; j++){
            var p2 = particles[j];
            if (i == j){
                continue;
            }
            var allPointsOnTheRight = true;
            for(var k = 0 ; k < particles.length; k++) {
                if(k === i || k === j) {
                    continue;
                }
                
                var d = checkLineSide(p1, p2, particles[k]);
                if(d < 0) {
                    allPointsOnTheRight = false;
                    break;
                }                        
            }

            p1.show();
            if(mouseIsPressed){
                p1.move();}
            if(allPointsOnTheRight) {
                stroke(255);
                strokeWeight(1.5);                                                 
                line(p1.x,p1.y,p2.x,p2.y);
            }
        }
    }
  }

  var checkLineSide = function(PointA, PointB, ptSubject) {
    return (ptSubject.x - PointA.x) * (PointB.y - PointA.y) - (ptSubject.y - PointA.y) * (PointB.x - PointA.x);
};