
// 1. Ka atspausdina console?
var x = 10;
function test1() {
    console.log(x);
}
test1();

// 2. Ka atspausdina console?
var x = 10;
function test1() {
    console.log(x);
}

// 3. Ka atspausdina console?
var x = 5;
function test1() {
    x = 0;
}
test1();
console.log(x);


// 4. Ka atspausdina console?
var x = 5;
function test1() {
    x = 0;
}
console.log(x);
test1();

// 5. Ka atspausdina console?
var x = 0;
function test1() {
    var x = 100;
}
console.log(x);
test1();


// 6. Ka atspausdina console?
var x = 200;
function test1(x) {
    var x = 100;
    console.log(x);
}
test1(555);

// 7. Ka atspausdina console?
var x = 50;
function test1(x) {
    var x = 10;
}
test1(99);
console.log(x);


// 8. Ka atspausdina console?
var x = 22;
function test1(x) {
     x = 11;
}
test1(13);
console.log(x);


// 9. Ka atspausdina console?
var x = 33;
function test1(x) {
     x = 44;
     console.log(x);
}
test1(55);


// 10. Ka atspausdina console?
var x = 999;
function test1(x) {
     console.log(x);
}
test1(888);

// 11. Ka atspausdina console?
var x = 999;
function test1(x) {
     console.log(x);
     x = 555;
}
test1(888);

// 12. Ka atspausdina console?
var x = 999;
function test1(x) {
     x = 555;
     console.log( this.x);
}
test1(888);

// 13. Ka atspausdina console?
var x = 444;
function test1(x) {
      x = 777;
      window.x = x;
}
test1(333);
console.log(x);

// let ir const  scope'ai viekia ir IF sakiniuose
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

let x = 1;

if (true) {
  let x = 2;
  console.log(x); //
}
console.log(x);   //
