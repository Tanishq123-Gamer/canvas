var currentPath=[],drawing=[];

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
   canvas.mousePressed(startPath);
   canvas.mouseReleased(endPath);
}

function draw(){
    background("white");
    if(mouseIsPressed){
        var point={x:mouseX,y:mouseY}
        currentPath.push(point);
    }
    strokeWeight(4);
    noFill();
    console.log("drawing"+drawing.length)
    for(var i=0;i<drawing.length;i++){
        var path=drawing[i];
        stroke("red");
        beginShape();
        for(var i=0;i<path.length;i++){
            vertex(path[i].x,path[i].y);

        }
        endShape();
    }
}

function startPath(){
       
    drawing.push(currentPath);
    currentPath=[];
}
function endPath(){;

   console.log(currentPath);

}