<!--
Vartotojui paspaudus "registruotis" mygtuka - ivestus duomenis issaugoti DB.

SUkurti gydytoju registracijos  forma (pvz: registracija-form.php )
Vartotojui paspaudus "registruotis" mygtuka - vartotoja perkelti i naujasGydytojas.php faila (HINT: action='registracija.php')

registracija.php faile:
   Duomenis paimkite is $_GET ir perduokite i   createDoctor(....) f-ja, taip jums sukurs gydytoja  -->

   <!DOCTYPE html>
   <html>
       <head>
           <meta charset="utf-8">
           <title></title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0">

           <link rel="stylesheet" href="css/normalize.css">

           <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">

           <!-- MANO CSS visada pats zemiausias!!! -->
           <link rel="stylesheet" href="css/style.css">
       </head>
       <body>
           <div class="container  bg-light">

    <h1>Gydytoju registracijos forma</h1>

<!-- <form class="" action="../controlers/naujasGydytojas.php" method="get"> -->
<form class="" action="../controlers/deleteGydytojas.php" method="get">
<!-- <input type="text" name="vardas" placeholder="jusu vardas">
<input type="text" name="pavarde" placeholder="jusu pavarde">

<button type="submit" name="button">Pateikti</button> -->

<!-- <button type="submit" name="button">Delete</button> -->
</form>

           </div>

           <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
           <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
           <!-- MANO JS pats zemiausias -->
           <script type="text/javascript" src="js/main.js"></script>

        </body>
   </html>
