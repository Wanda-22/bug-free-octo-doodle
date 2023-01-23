Webcam.attach( '#camera' );

camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function cap() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="pic" src="'+data_uri+'"/>';
    } );
 }

 console.log("ml5 version is",ml5.version);
 o=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9s6azkQBS/model.json',modelloaded);
function modelloaded() {
    console.log("all the models are loaded");
}
p1="";
p2="";

function speak() {
    var voice=window.speechSynthesis;
    s1="First Prediction is " + p1;
    s2="Second Prediction is " + p2;
    var u=new SpeechSynthesisUtterance(s1 + s2);
    voice.speak(u);
}

function p() {
    se=document.getElementById('pic');
    o.classify(se,ans);
}

function ans(error,result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        document.getElementById('result_emotion_name').innerHTML=result[0].label;
        document.getElementById('result_emotion_name2').innerHTML=result[1].label;
        p1=result[0].label;
        p2=result[1].label;
        speak();
        if (result[0].label=="Sad") {
            document.getElementById('e1').innerHTML="&#128532;";
        }
        if (result[0].label=="Surprise") {
            document.getElementById('e1').innerHTML="&#128550;";
        }
        if (result[0].label=="Angry") {
            document.getElementById('e1').innerHTML="&#128520;";
        }
        if (result[1].label=="Sad") {
            document.getElementById('e2').innerHTML="&#128532;";
        }
        if (result[1].label=="Surprise") {
            document.getElementById('e2').innerHTML="&#128550;";
        }
        if (result[1].label=="Angry") {
            document.getElementById('e2').innerHTML="&#128520;";
        }
    }
}

