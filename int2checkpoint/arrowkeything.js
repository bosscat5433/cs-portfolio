/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    background();
    
  
    if(mouseX > 201){
        ellipse(mouseX, mouseY, 30, 30);
        fill(0, 210, 247);
        strokeWeight(3);
        stroke(57, 0, 214);
    }
    else if(mouseX < 101){
        rect(mouseX, mouseY,40, 40)
        fill(100, 110, 47);
        strokeWeight(2);
        stroke(57, 20, 14)
    }
    else{
        rect(mouseX, mouseY, 40, 20);
        strokeWeight(1);
        stroke(60, 30, 20)
    }
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);