<?php include('header.php') ?>


<!-- SLIDE BAR ----------------------------------------------------------------------------------------------- -->

<div id="carouselExampleIndicators" class="carousel slide container mt-1" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active aukstis-60">
      <img src="img/slide1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item aukstis-60">
      <img src="img/slide2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item aukstis-60">
      <img src="img/slide3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<?php include('footer.php') ?>
