
let arr = [5, 4, 8, 2, 1, 6, 3, 9, 7];
// sukurti f-ja getData(masyvas, x), kuri grazina is masyvo "masyvas" "x" stalciaus duomenis
//
//
//
function getData(arr, x){
  for(let i = 0; i < arr.length; i++){
    return arr[x];
  }
}
console.log(getData(arr, 4));
//  sukurti f-ja rikiuojaDid(masyvas), kuri grazina surikiuota masyva dedejimo tvarka
let arr2 = arr.slice();
console.log(arr2)
function rikiuojaDid(arr){
  for(let i = 0; i < arr2.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr2[j] > arr2[j + 1]){

        let temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = temp;
      }
    }
  }
  return arr2;
}
console.log(rikiuojaDid(arr2));
//  sukurti f-ja rikiuojaMaz(masyvas), kuri grazina surikiuota masyva mazejimo tvarka
//
function rikiuojaMaz(arr){
  for(let i = 0; i < arr2.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr2[j] < arr2[j + 1]){

        let temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = temp;
      }
    }
  }
  return arr2;
}
console.log(rikiuojaMaz(arr2));
// sukurti f-ja rastiKiekElementaiPasikartoja(masyvas), to find the most frequent item of an array
//
let arr3 = [5, 4, 8, 7, 2, 1, 7, 6, 3, 9, 7];
function rastiKiekElementaiPasikartoja(arr){
  let mostFrequent = 1;
  let m = 0;
  let result = 0;
  for(let i = 0; i < arr3.length; i++){
    for(let j = i; j < arr3.length; j++){
      if(arr[i] == arr[j]){
        m++;
        if(mostFrequent < m){
          mostFrequent = m;
          result = arr[i];
          //console.log("mf", mostFrequent, "m", m)
        }
      }
    }
    m = 0;
  }
  console.log(result + (" Pasikartoja " + mostFrequent + " kartus"))
}
rastiKiekElementaiPasikartoja(arr3);
// sukurti f-ja kuri pasalina besikartojancias reiksmes (remove duplicate items from an array )

function removeDupl(arr){
  let mostFrequent = 1;
  let m = 0;
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      if(arr[i] == arr[j]){
        m++;
        if(m > 1){
          arr.splice(j, 1);
        }
      }
    }
    m=0;
  }
  return arr;
}
console.log(removeDupl(arr3));



//
