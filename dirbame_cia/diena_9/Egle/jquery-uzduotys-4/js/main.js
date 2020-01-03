console.log("Labas");

// _______naudojant tik js_________(create and add_class)_____
//  atlikti   uzduotis naudojant tik jQuery




//=====================================
//  objekto (Node) arba teksto - idejimas i HTML
//=====================================
// append(x, [y], [z], ... ) - Inserts content at the end of the selected elements (viduje, gale)

// prepend() - Inserts content at the beginning of the selected elements (viduje, pradzioje)
// after() - Inserts content after the selected elements (isoreje, po elemento)
// before() - Inserts content before the selected elements (isoreja, pries elementa)
// insertBefore();    // The .before() and .insertBefore() methods perform the same task.
// appendTo() - i kur perkelti si elementa

// var elementasH1 =   $("h1"),
//     appendText  = "<p>appended text</p>",
//     prependText = "<b>prepend text</b>",
//     afterText   = "<b>after text</b>",
//     beforeText  = "<b>before text</b>";
//
// elementasH1.append( appendText);
// elementasH1.prepend( prependText);
// elementasH1.after( afterText);
// elementasH1.before( beforeText);
// elementasH1.appendTo( "html");  // h1 perkels i html pabaiga

// ========tricks=====================
// perkels (nekopijuos)  elementa i kita  vieta
// $( "body" ).append( $( "h1" ) );


// Important: If there is more than one target element, however, cloned copies of the inserted element will be created for each target except for the last one.




// UZDUOTIS  -------  pasikartojimas testui-----
// html faile
// <section>
//     <div>
//         <h2>  1 Antraste </h2>
//     </div>
//
//     <h2 class='reklama'>  2 Antraste </h2>
//     <h3>  3 Antraste </h3>
//     <h4>  4 Antraste </h4>
//     <h5>  5 Antraste </h5>
// </section>
//
// <article>
//     <nav> Tekstas </nav>
// </article>

// UZDUOTIS
// 1.0
// kaip perkelti klase 'h3' po 'h4'


$("h3").append($("h4"));


// kaip perkelti klase 'reklama' virs 'section'

$("section").before($(".reklama"));

// kaip perkelti 'h3' po 'div'

$("div").after($("h3"));

// kaip perkelti 'h4' i  'nav' vidu

$("h4").appendTo("nav");

// kaip perkelti 'h5'  virs  'article'

$("article").before($("h5"));

// 1.5
// kaip perkelti 'section'  po  'article'

  $("article").after($("section"));

//
