var i=0;
var text="Want To Share Something With The World?, Here you go!";
var speed = 110; 

function typeWriter() {
  if (i < text.length) {
    if(text.charAt(i)===","){
      document.getElementById("type").innerHTML += "<br>";
    }else{
    document.getElementById("type").innerHTML += text.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
if(i!==text.length){
setTimeout(typeWriter,speed);
}

