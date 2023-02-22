var noseX = 0;
var noseY = 0;

function preload(){
    lips = loadImage("https://i.postimg.cc/0jfDyYpQ/20-201120-female-red-lips-png-clip-art-tongue-removebg-preview.png");
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
}

function modelLoaded(){
    console.log("poseNet loaded")
}
function take_snapshot(){
    save("RTF_pic.jpg");
}

function getPoses(result) {
    if(result.length > 0){
        console.log(result);
        noseX=result[0].pose.nose.x-15;
        noseY=result[0].pose.nose.y+7;
        console.log("noseX="+ noseX+" noseY="+ noseY);
    }

}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lips, noseX, noseY, 30,30);
}