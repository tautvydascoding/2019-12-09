// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");


let x = 11;

function test() {
    let x = 22;
    if (true) {
        let x = 33;
    }
    console.log("viduje test()", x);
}
console.log("pries test()", x);
test();
console.log("po test()", x);
