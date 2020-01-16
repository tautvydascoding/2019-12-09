<?php


/**
 * Proper way to enqueue scripts and styles.
 */
function failu_uzkrovimas() {//
    //                                                                                                                     1.0.0 versija   all - ant visus irenginiu
    wp_enqueue_style( 'manoID-bootstrap', get_template_directory_uri() . '/libs/bootstrap/css/bootstrap.min.css', array(), '1.0.0', 'all' );
    // mano CSS visasda zemiausias
    wp_enqueue_style( 'manoID-style', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all' );

    wp_enqueue_script( 'manoID_script1', get_template_directory_uri() . '/libs/jquery-3.4.1.min.js', array(), '1.0.0', true );         // true - ar footeryje ideji?
    wp_enqueue_script( 'manoID_script2', get_template_directory_uri() . '/libs/bootstrap/js/bootstrap.bundle.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'manoID_script3', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true );
}
//          kada paleisti          kokia f-ja paleisti
add_action( 'wp_enqueue_scripts', 'failu_uzkrovimas' );
