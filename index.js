var arrow = document.getElementsByClassName("question");
var answ = document.getElementsByClassName("answer");
for(var i = 0; i < arrow.length; i++){
  arrow[i].addEventListener("click", function(){
    for(var i = 0; i < arrow.length; i++){
      arrow[i].style.fontWeight = "400";
      arrow[i].nextElementSibling.classList.add("answer");
    }
    this.nextElementSibling.classList.toggle("answer");
    this.style.fontWeight = "bold";
  })
}
