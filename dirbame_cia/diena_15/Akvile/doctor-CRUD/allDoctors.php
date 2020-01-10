<?php
        require_once('models/doctor.php');
        include('form-modals/createNew-form.php');
        include('form-modals/edit_form.php');

        ?>


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
             <h1>Poliklinika</h1>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registration">
               KURTI NAUJĄ GYDYTOJĄ
             </button>
             <table class="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Vardas</th>
                      <th scope="col">Pavardė</th>
                       <th scope="col">Trinti</th>
                       <th scope="col">Taisyti</th>
                    </tr>
                  </thead>
                  <tbody>
                      <?php

                      $gydytojai = getDoctors();
 // is visu paimame pirma

                      while ( $gyd = mysqli_fetch_assoc($gydytojai)) {
                          echo "
                          <tr id='$gyd[ID]'>
                              <td>$gyd[ID]</td>
                              <td>$gyd[Name]</td>
                              <td>$gyd[LastName]</td>
                              <td><button class='trinti btn btn-danger' id='$gyd[ID]' href=''>Trinti</button></td>
                              <td><a href='#edit_form' class='btn btn-info' type='button' data-id='$gyd[ID]' data-toggle='modal'>Taisyti</button></td>
                          </tr>";
                      }
                       ?>
                  </tbody>
                </table>
        </div>

        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
