

// sukurti f-ja getData(masyvas, x), kuri grazina is masyvo "masyvas" "x" stalciaus duomenis
//
//
//
//  sukurti f-ja rikiuojaDid(masyvas), kuri grazina surikiuota masyva dedejimo tvarka
//  sukurti f-ja rikiuojaMaz(masyvas), kuri grazina surikiuota masyva mazejimo tvarka
//
// sukurti f-ja rastiKiekElementaiPasiakrtoja(masyvas), to find the most frequent item of an array
//
// sukurti f-ja kuri pasalina besikartojancias reiksmes (remove duplicate items from an array )






//
let masyvas = [];
function masyvoUzpildymas(){
  for (i=0; i < 60; i++){
    masyvas[i] = Math.floor(Math.random() * (100 - 10)) + 10;
  }
  console.log(masyvas);
}

masyvoUzpildymas();

function sortBubbleMin(){
  for (i=0; i < 60; i++){
    for (j = 0; j < masyvas.length; j++) {
      if(masyvas[j] > masyvas[j+1] ){
        let pirmas = masyvas[j];
        masyvas[j] = masyvas[j+1];
        masyvas[j+1] = pirmas;
      }
    }
  }
  console.log(masyvas);
}

sortBubbleMin();

function sortBubbleMax(){
  for (i=0; i < 60; i++){
    for (j = 0; j < masyvas.length; j++) {
      if(masyvas[j] < masyvas[j+1] ){
        let pirmas = masyvas[j];
        masyvas[j] = masyvas[j+1];
        masyvas[j+1] = pirmas;
      }
    }
  }
  console.log(masyvas);
}

sortBubbleMax();

// sukurti f-ja rastiKiekElementaiPasiakrtoja(masyvas), to find the most frequent item of an array
let arr = [1 ,2, 3, 3, 4, 5, 6, 7, 7,1,2,5,6,4,2,1,3,3];
console.log(arr);
function rastiKiekElementaiPasiakrtoja(x){
  let mf = 0;
  let pirmas = 0;
for (var i = 0; i < x.length; i++) {
   var count = 0;
   for (var j = i; j < x.length; j++) {
     if (x[i] === x[j]){
        count++;
        if (mf < count){
          mf = count;
          pirmas = x[i];
        }
      }   //baigesi IF
   }  // Baigesi antras FOR
  } // baigesi pirmas FOr
  console.log("skaicius " + pirmas + ":" + "pasikartoja : " + mf);
} // baigesi funkcija

rastiKiekElementaiPasiakrtoja(arr);

arr.splice()


function pasikartojancios(x){
  let count = 0;
  for (var i = 0; i < x.length; i++) {
     for (var j = 0; j < x.length; j++) {
       if (x[i] === x[j]){
         count++;
         if (count > 1){
         arr.splice(j, 1);
       }
       }
     }
     count = 0;
   }
   console.log(arr);
}

pasikartojancios(arr);
