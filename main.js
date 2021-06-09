noseX=0;
noseY=0;
right_wristx=0;
left_wristx=0;
diffrence=0;
gas="";
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(600,300)

 posenet=ml5.poseNet(video,modelLoaded);
 posenet.on('pose',gotPoses);
}
function draw(){
    background("red");
    fill("#A52A2A")
    stroke("#8B0000");
    textSize(diffrence);
    text(gas,noseX,noseY);
}
function modelLoaded(){
    console.log('model LOADED!')
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    left_wristx=results[0].pose.leftWrist.x;
    right_wristx=results[0].pose.rightWrist.x;
    diffrence=floor(left_wristx-right_wristx);
    document.getElementById("height").innerHTML="size= "+diffrence;
}    
}
function OK(){
    gas=document.getElementById("green").value;
}