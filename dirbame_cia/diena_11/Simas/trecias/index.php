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
        <?php
        $menu = ["home", "about", "gallery", "contacts", "blog"];
        $img = ["1", "2", "3", "4", "5", "6"];
         ?>
        <div class="container  bg-light">
             <h1>Isijuk inspect->console</h1>
             <header class="row">
               <nav class="col">
                 <ul class="row">
                   <?php
                for ($i=0; $i < count($menu) ; $i++) {
                  echo "<li class='col'>$menu[$i]</li>";
                };
                  ?>
                </ul>
              </nav>
             </header>


             <div class="row">
               <?php
               for ($k=0; $k < count($img); $k++) {
                 echo "<img class='col-4' src='./images/$img[$k].jpg' alt='' />";
               };
                ?>
             </div>




        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
