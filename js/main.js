"use strict";

// I'll finish this function later
(function() {
  var howMany = 0;
  function() sayHello() {
    howMany++;
    var template = document.querySelector('template');
    var clone = document.importNode(template.content, true);
    for (int i = 0; i < howMany + 1) {
      document.body.appendChild(clone);
    }
  }
})();

(function() {
  var canvas = document.getElementById('splash'),
  context = canvas.getContext('2d');
  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /**
     * Your drawings need to be inside this function otherwise they will be reset when
     * you resize the browser window and the canvas goes will be cleared.
     */
    draw();
  }
  resizeCanvas();
    function draw() {
    // do your drawing stuff here

    }
  })();
