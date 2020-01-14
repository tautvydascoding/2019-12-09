<?php session_start(); ?>

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
             <h1 class=" mb-3"> Booking Form </h1>

             <form class="" action="booking-form.php" method="GET">
               <input type="text" name="name" value="John" placeholder="Your name" class="mb-3"> <br />
               <input type="text" name="surname" value="Smith" placeholder="Your surname" class="mb-3"> <br />
               <input type="email" name="email" value="john@smith.org" placeholder="email" class="mb-3"> <br />
               <input type="text" name="phone" value="5848365896" placeholder="phone number" class="mb-3"> <br />
               <input type="date" name="date" value="2020-02-17" class="mb-3"> <br />
               <input type="text" name="peopleNumber" value="3" placeholder="Number of People" class="mb-3"> <br />
               <em>Comment (optional):</em><br />
               <textarea name="comment" rows="4" cols="40" class="mb-3"> lorem lorem lorem </textarea><br />
               <input type="text" name="productID" value="4" class="mb-3"><br />
               <input type="submit" name="submit" value="BOOK" class="mb-3 btn bg-success"> <br />
               <h5><?php echo $_SESSION['a']; ?></h5>
             </form>




        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
