<?php include('../header.php');

?>

<header class="container">
<h1>Prekių išvedimo puslapis</h1>
<div class="row bg-dark">
  <div class="col-6">
      <?php


        require_once('../models/get_Goods.php');
         $visosPrekes = getGoods(); // MYSQL objektas

           $pre =  mysqli_fetch_assoc($visosPrekes);

           if ($pre["id"]>0)
             {
             echo "<table ><tr>
             <th style='width: 60px;  border: 1px solid black; text-align:center'>  Prekė nr. </th>
             <th style='width: 150px; border: 1px solid black; text-align:center'>  Prekė </th>
             <th style='width: 500px; border: 1px solid black; text-align:center'>  Aprašymas </th>
             <th style='width:  80px; border: 1px solid black; text-align:center'>  Kaina, EUR   </th>
             <th style='width: 100px; border: 1px solid black; text-align:center'>  Kiekis, vnt </th></tr>";

               while ($pre) {
                                                              ?>  <tr><td  style='border: 1px solid black; text-align:center'>
                <?php   echo $pre['id'];                      ?> </td><td  style='border: 1px solid black; text-align:center'>
                <?php   echo $pre['goods_name'];              ?> </td><td  style='border: 1px solid black; text-align:center'>
                <?php   echo $pre['description'];             ?> </td><td  style='border: 1px solid black; text-align:center'>
                <?php   echo $pre['price'];                   ?> </td><td  style='border: 1px solid black; text-align:center'>
                <?php   echo $pre['amount'] ;                 ?> </td><td  
                 <a class="btn bg-warning" href='delete.php?y=<?php echo $pre['id']?>' method='post'  >  Trinti  </a>          </td><td>
                 <a class="btn bg-warning" href='edit.php?y=<?php echo $pre['id']?>' method='get'  >  redaguoti  </a>          </td></tr> <?php


           $pre = mysqli_fetch_assoc($visosPrekes);

               }
            echo "</table>";
          } ?>

          <a align="center" class="btn bg-warning" href='../admin.php' method='get'>Grįžti</a>

        </div>
      </div>
    </header>

          <?php

         include('../footer.php'); ?>
