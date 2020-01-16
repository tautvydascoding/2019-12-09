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
             <h1 class="bg-info mb-5 mt-5 pt-2 pb-2">  FORM </h1>


             <div class="row">
               <form class="col-8" action="registracija.php" method="GET">
                 <input type="text" name="vardas" value="" placeholder="vardas" class="mb-3"> <br />
                 <input type="text" name="pavarde" value="" placeholder="pavarde" class="mb-3"><br />
                 <input type="text" name="telefonas" value="" placeholder="telefonas" class="mb-3"><br />
                 <input type="submit" name="registruotis" value="Registruotis" class="btn bg-success" class="mb-3"><br />
               </form>

             </div>











        </div>
        <!-- 1. index.php faile sukurti HTML form'a naudojant metoda (GET) ir  su ivedimo laukais:
         vardas, pavarde, telefonas, mygtukas 'registruotis'

        2. kai paspaudzia 'registruotis', vartotoja perkelti i registracija.php faila (formoje action='registracija.php')

        3. registracija.php faile pasinaudojant globaliu PHP masyvu $_GET atspausdinti vartotojo ivestu duomenis
        pvz.:
        print_r( $_GET);

        // PASIBANDYTI PAPILDOMAI
        pvz.: print_r( $GLOBALS)



        // UZDUOTIS
        // pasisveikinti su katik uzsiregistravusius zmogumi ir
        // graziai atspausdinti uzsiregistravusio zmoguas duomenis -->


























































        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
