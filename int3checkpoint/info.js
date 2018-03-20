var life = document.getElementById("life");
var happy = document.getElementById("happy");
var display = document.getElementById("life");
life.addEVentListener("click", function(){
    display.innerHTML = "Life has a lot of twists and turns"
});

happy.addElementListener("click", function(){
    display.innerHTML = "Everyday could be your last so be happy as much as possible"
});
