<?php
/**
 * Load child theme css and optisonal scripts
 */
function hello_elementor_child_enqueue_scripts() {

	wp_enqueue_style(
		'child-theme', get_stylesheet_directory_uri() . '/style.css', [], '1.0.0'
	);

	wp_enqueue_style(
		'hello-elementor-child-style', get_stylesheet_directory_uri() . '/assets/css/main.css', [], '1.0.0'
	);
			
	// jQuery iScroll
	wp_enqueue_script( 
		'hello-elementor-child-style', get_stylesheet_directory_uri() . '/assets/js/main.js', array( 'jquery', 'elementor-frontend' ), '1.0.0', true
	);
}

add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 200 );
