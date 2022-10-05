function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/c1aaVMJpj/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
if(error){
   console.error(error) ;
}else{
   console.log(results) ;
   random_number_r = Math.floor(Math.random * 255) + 1;
   random_number_g = Math.floor(Math.random * 255) + 1;
   random_number_b = Math.floor(Math.random * 255) + 1;
   document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
   document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
   document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   img = document.getElementById('animal');
   if(results[0].label == "Lion"){
    img.src = 'img/lion.gif';
   }
   else if(results[0].label == "Cat"){
    img.src = 'img/cat.gif';
   }
   else if(results[0].label == "Dog"){
    img.src = 'img/dog.gif';
   }
   else if(results[0].label == "Donkey"){
    img.src = 'img/donkey.gif';
   }
   else if(results[0].label == "Horse"){
    img.src = 'img/horse.gif';
   }
   else{
    img.src = 'img/animal.png'
   }
}
}