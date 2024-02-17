var step1 = document.getElementById("step1")
var step2 = document.getElementById("step2")

var next = document.getElementById("bt1");
var previous = document.getElementById('bt2');
var summit = document.getElementById("bt3");

next.addEventListener("click",function(){

step1.style.display ="none";
step2.style.display ="block";


});



previous.addEventListener("click",function(){

step1.style.display = "block";
step2.style.display = "none";

})


var input = document.getElementsByClassName("name");

var input2 = document.getElementsByClassName("name2");