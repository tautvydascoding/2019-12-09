<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- search Bot'ai pvz: google neskanuos musu svetaines -->
         <meta name="robots" content="nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="libs/bootstrap-4/css/bootstrap.min.css">
        <!-- !! mano CSS failas visada pats zemiausias -->
        <link rel="stylesheet" href="css/master.css">

    </head>
    <body>

      <h1>REGISTRACIJA</h1>

  <!-- 1. index.php faile sukurti HTML form'a naudojant metoda (GET) ir  su ivedimo laukais:
       vardas, pavarde, telefonas, mygtukas 'registruotis' -->
       <form action="registracija.php" method="get">
         vardas: <input type="text" name="vardas" placeholder="jusu vardas"><br>
         pavarde: <input type="text" name="pavarde" placeholder="jusu pavardė"><br>
         telefonas: <input type="text" name="telefonas" placeholder="jusu telefonas"><br>

<!-- 2. kai paspaudzia 'registruotis', vartotoja perkelti i registracija.php faila (formoje action='registracija.php') -->

           <button type="submit">registruotis</button>  <!--nenaudoti a linko nes jis nunesa useri i ta puslapi, o button nunesa i ta puslapi ir nunesa duomenis -->
      </form>







        <script type="text/javascript"  src="libs/bootstrap-4/js/bootstrap.min.js">      </script><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script type="text/javascript"  src="libs/jquery.min.js"> </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <!-- !!! mano js failas pats zemiausias -->
        <script type="text/javascript"  src="main.js">    </script>

    </body>
</html>
