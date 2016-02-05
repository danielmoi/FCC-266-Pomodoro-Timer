var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");

var myVar = "hello";

function readVar() {
  console.log(myVar);
}


// Calling readVar() now will print "hello"
b1.addEventListener("click", readVar(), false);

// You want to wait until the event actually happens
b2.addEventListener("click", function () {
  console.log('hello');
});

// Now myVar is "world" and that will be printed whenever b2 is clicked
myVar = "world";