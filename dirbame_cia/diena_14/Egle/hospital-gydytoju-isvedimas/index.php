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
             <h1 class=" bg-info ">Hospital</h1>

             <a class="mt-5 mb-5 mr-5" href="page-results.php?x=gydytojai"> Visi Gydytojai </a>
             <a class="mt-5 mb-5" href="page-results.php?x=pacientai"> Visi Pacientai </a>


             <form class="mt-5" action="naujasGydytojas.php" method="post">
                <input type="text" name="vardas" value=""> <br />
                <input type="text" name="pavarde" value=""> <br />
                <input type="submit" name="" value="Registruotis">
             </form>
























        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
