
<?php

include('../models/getConnection.php');



  $id = $_GET['y'];


  $record = mysqli_query(getConnection(), "SELECT * FROM goods WHERE id=$id");

  if ($id > 0 ) {
    $n = mysqli_fetch_array($record);
// print_r($n['goods_name']);
// print_r($n['price']);
// print_r($n['discount']);
// print_r($n['position']);
// print_r($n['amount']);

    $g_name = $n['goods_name'];
    $price = $n['price'];
    $disc  = $n['discount'];
    $pos  = $n['position'];
    $amount  = $n['amount'];
  }
    if(isset($_POST['save']))
    {

        $g_name = $_POST['goods_name'];
      	$price = $_POST['price'];
      	$amount = $_POST['amount'];


     //$x = $_GET['y'];


         // uzkoduojam renklus:' " <

        //  $goods_name  = htmlspecialchars($g_name,    ENT_QUOTES );
        //  $price      = htmlspecialchars($price,     ENT_QUOTES );
        // // $discount   = htmlspecialchars($disc,      ENT_QUOTES );
        // // $position   = htmlspecialchars($pos,       ENT_QUOTES );
        //  $amount     = htmlspecialchars($amount,    ENT_QUOTES );




         $manoSQL = "UPDATE  goods
                             SET
                                 goods_name = '$g_name',
                                -- description = NULL,
                                -- type = NULL,
                                 price = '$price',
                                -- discount = '$disc',
                                 -- position = '$pos',
                                  amount = '$amount'

                             WHERE id = '$id'
                             LIMIT 1
                     ";

         $arPavyko = mysqli_query(getConnection(), $manoSQL);
         print_r( $goods_name);
         if ($arPavyko == false &&  DEBUG_MODE > 0) {
                 echo "ERROR: nepavyko redaguoti: $x prekės DB-je !!!! <br>";

     }
}
      include('../header.php'); ?>

      <form class="" action="controlers/edit.php" method="post">
        <h2>Prekių redagavimas</h2>
        <label>Prekė:</label>
        <input class="input" name="goods_name" type="text" value="<?php echo $g_name ?>">
        <label>Kaina, EUR:</label>
        <input class="input" name="price" type="text" value="<?php echo $price ?>">
        <!-- <label>Nuolaida:</label>
        <input class="input" name="discount" type="text" value="">
        <label>Pozicija:</label>
        <input class="input" name="position" type="text" value=""> -->
        <label>Kiekis, vnt:</label>
        <input class="input" name="amount" type="text" value="<?php echo $amount ?>">
        <br>
        <button class="btn" type="submit" name="save" >Save</button>
      </form>
      <?php
     include('../footer.php');

//header("location:../admin.php");
