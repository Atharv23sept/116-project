function preload() {
    clown_nose = loadImage('https://i.postimg.cc/TPc6jYy4/584999937b7d4d76317f5ffd.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intitialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX-20, noseY-27, 90, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.rightEye.x;
        noseY = results[0].pose.rightEye.y;
        console.log("nose x = " + noseX );
        console.log("nose y = " + noseY );
    }
}


noseX=0;
noseY=0;

