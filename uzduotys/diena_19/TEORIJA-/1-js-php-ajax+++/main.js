console.log("ar veikia?");

<!-- // JavaScript -->
$.ajax({
  url: "test.php",
  type: "POST",
  data: {name: "Tautvis", location: "Boston", age: 21},
  success: function(gryzo){
        console.log("lyg suveike");
        console.log(gryzo);

        // =======jei PHP darot: echo "String";================
        // gryzoPaverstasIString = JSON.stringify(gryzo);
        // console.log(gryzoPaverstasIString);
        // $("#results").append(gryzoPaverstasIString.vardas);
                /* OR */
        //====== jei PHP darot: echo parseTOJSON( $manoAray);====
        // kintamasis 'gryzo' - yra string tipo:  { 'vardas': 'John', 'vietove': 'Boston' }
        gryzoPaverstasIJSON = JSON.parse(gryzo);
        // JSON.parse sukuria is String (kuris atrodo kaip JSON)
        // tikra JSON objekta
        console.log(gryzoPaverstasIJSON);
        //this is what I am unsure about?
        document.querySelector('#results').innerHTML += gryzoPaverstasIJSON.vietove;
        // ARBA
         $("#results").append(gryzoPaverstasIJSON.vardas);
  },

  error: function(e) {
       //called when there is an error
       //console.log(e.message);
       $("#results").append( "Request failed: " + e );
       console.log("NESUVEIKE!@@@");
 }
});
