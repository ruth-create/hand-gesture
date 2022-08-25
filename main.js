    Webcam.set({
        width:400,
        height:350,
        image_format:"png",
        png_quality:90
    });
    cam=document.getElementById("webcam");
    Webcam.attach("#webcam");
    function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function snap(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML="<img id='capturedImage' src='"+data_uri+"'>";
    });
}
classifier=ml5.imageClassifier("")
function check(){

}

function gotResult(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}

function speak(){

}
