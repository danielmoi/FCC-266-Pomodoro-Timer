var three = new Date().getTime(); // 1454568647585
var four;


setTimeout(function() {
  var four = new Date().getTime();
  console.log(four); // 1454568648586
}, 1000);

var diff = four - three;
console.log(three);
  


// there is a gap of 1001 milliseconds!