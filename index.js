function anim(){

    var randomNumber1=Math.floor((Math.random())*3 + 1);
    document.querySelector("img.left").setAttribute("src","left" + randomNumber1 + ".jpg");
    document.querySelector("img.right").setAttribute("src","right" + randomNumber1 + ".jpg");

  } 
  
  
  