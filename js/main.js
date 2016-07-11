"use strict";

// I'll finish this function later
//(function() {
//  var howMany = 0;
//  function() sayHello() {
//    howMany++;
//    var template = document.querySelector('template');
//    var clone = document.importNode(template.content, true);
//    for (int i = 0; i < howMany + 1) {
//      document.body.appendChild(clone);
//    }
//  }
// })();

function doNothing() {
  alert("I don't do anything yet");
}

(function() {
  var c=document.getElementById("splash");
  var ctx=c.getContext("2d");
  ctx.beginPath();
  //Draws a Circle
  ctx.arc(100, 75, 50, 0, 2*Math.PI);
  ctx.stroke();
})();



(function() {
//  var canvas = document.querySelector('#splash'),
//  context = canvas.getContext('2d');
//  // Resizes Canvas to fill Browser Window
//  window.addEventListener('resize', resizeCanvas, false);
//  function resizeCanvas() {
//    canvas.width = window.innerWidth;
//    canvas.height = window.innerHeight;
//    draw();
//  }
//  resizeCanvas();
//    function draw() {
    // Let's Go!

    }
  })();
