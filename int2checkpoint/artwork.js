/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

// for loop
for (var i = 0; i < width; i+= 30){
 for (var j = 0; j < height; j += 30) {
    var eyeSize = 20;
var a   = 40;

// if condition for the random pattern background
   if(random(30)<20)
    // face of the big happy face
    fill(29, 96, 209);
    ellipse(i, j, 30, 30);
    // eyes
    fill(a, 46, 41);
    ellipse(i - 50, j - 50, eyeSize, eyeSize);
    ellipse(i + 100, j- 50, eyeSize, eyeSize);
    
    // mouth of the big happy face
    fill(183, 12, 12);
    ellipse(random(30) + 30, random(30)+ 40, 130, 130);
   // if condition 
    if(random(30) < 78){
        a + 10  }
 }   
}
    
// Happy face
draw = function() {

    
// answer key
var eyeSize = 40;
var placeX = 40;

// if condition to make the hapopt face follow and look like it does rieght now
   if(mouseX<200)
    // head of the happy face
    fill(29, 96, 209);
    ellipse(mouseX, mouseY, 300, 300);
    // eyes of big happy face
    fill(placeX, 46, 41);
    ellipse(mouseX - 50, mouseY - 50, eyeSize, eyeSize);
    ellipse(mouseX + 100, mouseY- 50, eyeSize, eyeSize);
    
    // mouth of big happy face
    fill(183, 12, 12);
    ellipse(mouseX + 30, mouseY + 40, 130, 130);
   // if condition to make happy face change from blue to red at a specific part of the box
    if(mouseX < 78){
        placeX + 10  }
        
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);