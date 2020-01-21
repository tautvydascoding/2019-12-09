  <?php
          include('models/doctor-functions.php');

          $visiGydytojai = getDoctors(); // MYSQL objektas

          //testuojame:
          // print_r( $visiGydytojai ) ;

          //visu gydytoju isvedimas
          $gyd = mysqli_fetch_assoc($visiGydytojai); // is visu paimame viena
          while ($gyd == true) {  // false, 0, NULL, ''
              //yra trys budai:

              //echo "{$gyd['name']}  {$gyd['lname']} <br>"; //pirmas
              echo "$gyd[name]  $gyd[lname] <br>"; //antras
              //echo $gyd['name'] . " " . $gyd['lname'] . "<br>"; //trecias
              // is visu paimame sekanti gydytoja
              $gyd = mysqli_fetch_assoc($visiGydytojai);

              ?>
