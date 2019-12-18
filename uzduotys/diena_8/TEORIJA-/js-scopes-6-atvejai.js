
// Ka atspausdina console?
var x = 10;
function test1() {
    console.log(x);
}
test1();

// Ka atspausdina console?
var x = 10;
function test1() {
    console.log(x);
}

// Ka atspausdina console?
var x = 5;
function test1() {
    x = 0;
}
test1();
console.log(x);


// Ka atspausdina console?
var x = 5;
function test1() {
    x = 0;
}
console.log(x);
test1();


// Ka atspausdina console?
var x = 0;
function test1() {
    var x = 100;
}
console.log(x);
test1();


// Ka atspausdina console?
var x = 200;
function test1(x) {
    var x = 100;
    console.log(x);
}
test1(555);

// Ka atspausdina console?
var x = 50;
function test1(x) {
    var x = 10;
}
test1(99);
console.log(x);


// Ka atspausdina console?
var x = 22;
function test1(x) {
     x = 11;
}
test1(13);
console.log(x);


// Ka atspausdina console?
var x = 33;
function test1(x) {
     x = 44;
     console.log(x);
}
test1(55);


// Ka atspausdina console?
var x = 999;
function test1(x) {
     console.log(x);
}
test1(888);

// Ka atspausdina console?
var x = 999;
function test1(x) {
     console.log(x);
     x = 555;
}
test1(888);


// Ka atspausdina console?
var x = 999;
function test1(x) {
     console.log(x);
     x = 555;
}
test1(888);


// let ir const  scope'ai viekia ir IF sakiniuose
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

let x = 1;

if (true) {
  let x = 2;
  console.log(x); // 2
}
console.log(x);   //  1
