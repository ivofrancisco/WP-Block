<?php

/**
 * Plugin Name:       IF Testimonials
 * Description:       A Testimonials Section Block Slider.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ivo Francisco
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       if-testimonials
 *
 * @package           if-blocks
 */

function if_blocks_if_testimonials_block_init(): void
{
	register_block_type_from_metadata(__DIR__);
}

add_action('init', 'if_blocks_if_testimonials_block_init');
