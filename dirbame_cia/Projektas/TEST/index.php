<?php include('header.php'); ?>

<body>

<header class="container-fluid">
  <div class="row header-top">

    <div class="col-2">
      <a href="index.php"> <img src="libs/img/logo.png" alt="logo" class="logo"> </a>
    </div>




    <div class="col-3 mt-3">
      <div class="input-group">
        <input type="search" name="search" value="" placeholder="Search" class="form-control" autocomplete="off">
        <div class="input-group-append">
          <button type="button" name="button" class="btn btn-info"> Search </button>
        </div>

      </div>
      <div id="match_list" class="match_list w-100"></div>
    </div>

    <div class="col-2 mt-3">
      <a class="form-control text-center" href="admin.php" method='post'> Log in  </a>



    </div>
    <div class="col-2 mt-3">
      <a href="registracija.php ">
        <button type="button" name="button" value="" class="form-control" autocomplete="off"> Registration </button>
      </a>
    </div>
    <div class="col-1 mt-3 favs-cart text-right">
      <a href="#" class="cart"><img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"></a>
  </div>



  </div> <!-- closing row -->
  <div class="row menu-row">
    <nav class="Menu col-12 mx-0 px-0">
      <ul class="nav ">
        <?php
        require_once('models/get_Meniu.php');
         $visosMeniu = getMeniu(); // MYSQL objektas

                 $men = mysqli_fetch_assoc($visosMeniu);
        if ($men["id"]>0)
          { while ($men["id"])
            {
                                           ?>
   <li > <a href="#" class="navbar"> <?php  echo $men['Name']; ?> </a> </li> <?php
 $men = mysqli_fetch_assoc($visosMeniu);

 }
}
   ?>



      </ul>
    </nav>
  </div> <!-- closing menu row -->
</header>

<?php








 include('footer.php'); ?>
