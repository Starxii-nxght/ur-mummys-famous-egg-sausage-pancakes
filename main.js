var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function(event) {
  console.log(event);

  var Content = event.results[0][0].transcript;
  console.log(Content);

  document.getElementById("textbox").innerHTML = Content;
  console.log(Content);
  if (Content == "take my selfie") {
    console.log("taking selfie...");
    speak();
  }
};

function speak() {
  var synth = window.speechSynthesis;

  var image_id = "selfie1"; 
  take_snapshot();
  var speak_data = "Taking your first selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);

  setTimeout(function() {
    take_snapshot();
    save();
  }, 5000);

 
  setTimeout(function() {
    image_id = "selfie1"; 
    take_snapshot();
    speak_data = "Taking your second selfie in 10 seconds";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 50000);
}

Webcam.set({
  width: 360,
  height: 250,
  image_format: 'png',
  png_quality: 90});
camera = document.getElementById("camera");

function take_snapshot() {
  console.log(img_id);

  Webcam.snap(function(data_uri) {
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie2"){
        document.getElementById("result1").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie3"){
        document.getElementById("result1").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }
  });
}

function save() {
  var link = document.getElementById("link");
  var image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}