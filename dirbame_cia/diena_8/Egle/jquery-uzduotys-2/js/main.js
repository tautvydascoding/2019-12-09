// test
console.log("labas");
// alert("issokanti zinute");
//  visur naudoti tik jQuery!!!!!!

// UZDUOTIS 1

// .html kodas:
// <h1>Isijunk konsole</h1>
// <h1>Isijunk konsole</h1>
//
// <h2> 1. h2 Isijunk konsole</h2>
// <h2> 2. h2 Isijunk konsole</h2>
// <h2> 3. h2 Isijunk konsole</h2>
//
//  <section>
//      <h2> h2 Isijunk konsole</h2>
//      <h2> h2 Isijunk konsole</h2>
//      <h2> h2 Isijunk konsole</h2>
//      <h2> h2 Isijunk konsole</h2>
//  </section>
//
// <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li classs='reklama'>Gallery</li>
//     <li>Contact</li>
// </ul>
//        <input type="text" name="vardas" value="">
//        <input type="email" name="pastas" value="">

// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)

$("h1, h2").css("color", "blue");


// A2) kas antra h2 pakeisti i raudona

$("h2:odd").css("color","red");


// B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)


$("li").last().css("color", "green");



// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}

$("li").not(".reklama").css("color", "yellow");


//arba
// $("li:not('.reklama')").css("color", "pink");
