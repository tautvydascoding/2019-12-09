// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");


   // UZDUOTIS
   // 1.1 sukurti tuscia masyva "prekiautojai"
   var prekiautojai = []; // empty array
   // 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
   prekiautojai[0] = "Sennukai";
   prekiautojai[1] = "Iki";
   prekiautojai[2] = "Depo";
   prekiautojai[3] = "Moki vezi";
   prekiautojai[4] = "Ermitazas";
   // 1.3 isvesti i console/ekrana "prekiautojai" masyva
   console.log( prekiautojai ); // ~

   console.log( prekiautojai[0], prekiautojai[1], prekiautojai[2] );

   // 2 pervadinti pirma stalciu pvz + "ir KO"
   prekiautojai[1] += "ir KO";
   console.log( prekiautojai ); // test

   // 3 sukeisti antro ir trecio stalciu reiksmes vietomis
   // !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)
   let temp =   prekiautojai[2];   // temp, t, s, a, b, c, x
   prekiautojai[2] = prekiautojai[3];
   prekiautojai[3] = temp;

   console.log( prekiautojai ); // test

   // 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)
     function sukeistiMasyvo2elementus(x, y) {
         let temp =   prekiautojai[x];   // temp, t, s, a, b, c, x
         prekiautojai[x] = prekiautojai[y];
         prekiautojai[y] = temp;
     }
     sukeistiMasyvo2elementus(0, 3);
     console.log( prekiautojai ); // test
