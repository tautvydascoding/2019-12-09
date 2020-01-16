
       <!-- uzduotis 3.3 -->
       <?phpe bnm,?.mn9b8v yc
       require_once('doctor-functions.php');
       $numeris = $_GET['x'];
       // print_r( $_GET);
       $gydytojas = getDoctor($numeris);
       // print_r ($gydytojas);
       // echo $gydytojas[1] .  $gydytojas[2] ;
       echo "<p>".$gydytojas["name"] . " " . $gydytojas['lname']."</p>" ;
        echo "<hr />";
        ?>
