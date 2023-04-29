<?php
/*
Plugin Name: Anode Calculator
Plugin URI: https://github.com/smithyrr/anode-calculator
Description: A simple anode calculator plugin for WordPress
Version: 1.0
Author: R.smith
Author URI: https://github.com/smithyrr
License: GPL2
*/

function anode_calculator_enqueue_scripts() {
    wp_enqueue_script('anode-calculator-js', plugins_url('anode-calculator.js', __FILE__), array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'anode_calculator_enqueue_scripts');

function anode_calculator_shortcode() {
    ob_start();
    ?>
    <div>
        <label for="boatMaterial">Boat Material:</label>
        <select id="boatMaterial">
            <option value="fiberglass">Fiberglass</option>
            <option value="aluminum">Aluminum</option>
            <option value="steel">Steel</option>
            <option value="wood">Wood</option>
        </select>
        <br>
        <label for="boatLength">Boat Length:</label>
        <input type="number" id="boatLength" step="0.01" required>
        <br>
        <label for="boatWidth">Boat Width:</label>
        <input type="number" id="boatWidth" step="0.01" required>
        <br>
        <label for="boatDepth">Boat Depth:</label>
        <input type="number" id="boatDepth" step="0.01" required>
        <br>
        <label for="waterType">Water Type:</label>
        <select id="waterType">
            <option value="freshwater">Freshwater</option>
            <option value="saltwater">Saltwater</option>
            <option value="brackish">Brackish</option>
        </select>
        <br>
        <label for="currentAnodesWeight">Current Anodes Weight:</label>
        <input type="number" id="currentAnodesWeight" step="0.01" required>
        <br>
        <label for="unit">Unit:</label>
        <select id="unit">
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
        </select>
        <br>
        <button id="calculateButton" onclick="calculateAnodes()">Calculate Anodes</button>
        <div id="result"></div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('anode_calculator', 'anode_calculator_shortcode');