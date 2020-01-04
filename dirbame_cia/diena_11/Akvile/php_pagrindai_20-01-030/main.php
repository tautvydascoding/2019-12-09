<body>
    <div class="container  bg-light">
      <div class="row">
      <?php for ($i=0; $i < 6; $i++) {
        include ('template-preke.php');
      } ?>
      </div>
      <div class="row">
        <?php
        foreach ($pictures as $pic) {
          echo "<div class='col-4'><img src='pictures/$pic' alt='' width='100%' /></div>";
        }
         ?>
      </div>

    </div>
