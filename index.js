var arrow = document.getElementsByClassName("question");
var answ = document.getElementsByClassName("answer");
for(var i = 0; i < arrow.length; i++){
  arrow[i].addEventListener("click", function(){
    for(var i = 0; i < arrow.length; i++){
      arrow[i].style.fontWeight = "400";
      arrow[i].nextElementSibling.classList.add("answer");
      arrow[i].nextElementSibling.style.maxHeight = null;
    }
    this.nextElementSibling.classList.toggle("answer");
    this.style.fontWeight = "bold";
      var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
}
