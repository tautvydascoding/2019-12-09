
// Ka atspausdina console?
var x = 10;
fucntion test1() {
    console.log(x);
}
test1(); //10

// Ka atspausdina console?
var x = 10;
fucntion test1() {
    console.log(x);
}
// nieko
// Ka atspausdina console?
var x = 5;
fucntion test1() {
    x = 0;
}
test1();
console.log(x);


// Ka atspausdina console?
var x = 5;
fucntion test1() {
    x = 0;
}
console.log(x);
test1();


// Ka atspausdina console?
var x = 0;
fucntion test1() {
    var x = 100;
}
console.log(x);
test1();


// Ka atspausdina console?
var x = 200;
fucntion test1(x) {
    var x = 100;
    console.log(x);
}
test1(555); //100

// Ka atspausdina console?
var x = 50;
fucntion test1(x) {
    var x = 10;
}
test1(99);
console.log(x); //50


// Ka atspausdina console?
var x = 22;
fucntion test1(x) {
     x = 11;
}
test1(13);
console.log(x); //22


// Ka atspausdina console?
var x = 33;
fucntion test1(x) {
     x = 44;
     console.log(x);
}
test1(55);


// Ka atspausdina console?
var x = 999;
fucntion test1(x) {
     console.log(x);
}
test1(888);

// Ka atspausdina console?
var x = 999;
fucntion test1(x) {
     console.log(x);
     x = 555;
}
test1(888);


// Ka atspausdina console?
var x = 444;
fucntion test1(x) {
  x=777;
  window.x = x; // 444 = 777 globalus tampa local

     x = 555;
}
test1(333);
console.log(x);
