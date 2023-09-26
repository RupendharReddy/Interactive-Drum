var drumsButtons = document.querySelectorAll(".drum");
var string='';

//  --------  music will plays when click event happen ----------

for( var i=0;i<drumsButtons.length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("i got clicked "+drumsButtons);

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        var text=this.innerHTML;
        string+=text.toUpperCase();
        //console.log(this.innerHTML);
        document.getElementById("para").innerText="Your Music : "+string;
        string+='-';
        sound(text);
    })
} 
// ------- keybord event ----------

document.addEventListener("keypress",function(event){
  string+=event.key.toUpperCase()+"-";
  document.getElementById("para").innerText="Your Music : "+string;
  sound(event.key);
})
// ------- function for sound -----
function sound(key)
{
  var text=key;
  if(text=='a')
  {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
  }
  else if(text=='s')
  {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
  }
  else if(text=='d')
  {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
  }
  else if(text=='f')
  {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
  }
  else if(text=='g')
  {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
  }
  else if(text=='h')
  {
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
  }
  else
  {
    if(text=='j')
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
  }
}

// ------- clear  Button ----------

var endButton = document.querySelector(".clear").addEventListener("click",function(){
    document.getElementById("para").innerText="Your Music : ";
    string='';
})

//  ------- Play Button :-this will play the music you composed ------

var playButton = document.querySelector(".play").addEventListener("click",function(){
    document.getElementById("para").innerText="Your Music : "+string;
    for(var i=0;i<string.length;i++)
    {
        var text = string[i].toLowerCase();
        // console.log(text);
        sound(text);
    }
})

