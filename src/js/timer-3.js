var x = 50;

if (x > 10) {
  console.log('hello');
}

if (x+= 2 > 60) {
  console.log('what');
  console.log(x); // x is now 52!! (and the stuff inside the if loop runs too!
}

//
x = 50;
if (x+= 2 < 60) {
  console.log('what');
  console.log(x); // x is now 51?!
}

//
x = 50;
if (x+= 2 < 6) {
  console.log('what');
  console.log(x); // x is now 51?!
}

//
x = 50;
// --x is the decrement operator used as a PREFIX; it returns the value before decrementing
if (--x > 6) {
  console.log('what');
  console.log(x); // x is now 51?!
}

/////////////////////////////////////////////////////////////////

x = 1;
if (x++) {
  console.log(x); // 2 (and x is now 2)
}

// 
x = 1;
if (x++ > 10) {
  console.log(x); // This command doesn't run, but x is still incremented (x is now 2)
}

// Same result as prefix
x = 1;
if (++x > 10) {
  console.log(x); // This command doesn't run, but x is still incremented (x is now 2)
}

// Longer version without trickines
x = 1;
x++;
if (x > 10) {
  console.log(x);
}

///////////
aaa = 1,2,3;

a = 1;
b = 2;
c = 4;

d = a++, b++, c++;
// 4, because c++ is evaluated last, and c++ means that c is returned then incremented
a; // 2
b; // 3
c; // 4
d; // 2