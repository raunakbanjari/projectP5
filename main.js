function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,250);
    background("white");
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video,0,0,600,400);
    rect(10,20,55,55,20);
    stroke("red");
    fill("blue");
    rect(230,20,55,55,20)
    stroke("blue");
    fill("red");
    rect(10,230,55,55,20,15,10,5);
    stroke("yellow");
    fill("green");
    rect(230,230,55,55,20,15,10,5);
    stroke("green");
    fill("yellow");
    circle(35,150,50);
    stroke("pink");
    fill("black");
    circle(260,150,50);
    stroke("brown");
    fill("purple");
    circle(150,260,50);
    stroke("aqua");
    fill("crimson");
    circle(150,45,50);
    stroke("aquamarine");
    fill("navy");
}
function take_snapshot(){
    save("Myphoto.png");
    console.log("snapshot clicked!!!");
    
}
