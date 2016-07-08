// "use strict";
// uh-oh global variable going to fix that soon.
// (Probably with a closure)
var howMany = 0;

// I'll finish this function later
function sayHello() {
  howMany++;
  var template = document.querySelector('template');
  var clone = document.importNode(template.content, true);
  for (int i = 0; i < howMany + 1) {
    document.body.appendChild(clone);
  }

};
