<?php
    get_header(); // inlude header.php
 ?>
        <div class="container  bg-light">
             <h1>Poliklinika</h1>
             <?php

                if (have_posts()) :
                    echo "<div class='row'> ";
                        // $manoPostai= new wp_query("type=post&post_per_page=2");
                        // while ($manoPostai->have_posts()) :
                        while (have_posts()) :
                            the_post(); // ~ mysqli_fetch  paima viena {sekanti} irasa
                            ?>
                            <div class="col-4">
                                <h2>  <?php the_title(); ?>  </h2>
                                <p>  <?php the_content(); ?>  </p>
                                <h6>  <?php the_date('y/M/D'); ?>  </h6>
                                <div>  <?php // reik ijungti paildomus paveiksliukus the_post_thumbnail( ); ?>  </div>
                             </div>
                        <?php endwhile;
                    echo "</div> ";
                else :
                    echo "Jokiu irasu nera....";
                endif;

              ?>
        </div>

<?php
    get_footer(); // inlude footer.php
 ?>
