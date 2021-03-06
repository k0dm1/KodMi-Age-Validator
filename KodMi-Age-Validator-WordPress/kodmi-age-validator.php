<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://kodmi.com/
 * @since             1.0.0
 * @package           Kodmi_Age_Validator
 *
 * @wordpress-plugin
 * Plugin Name:       KodMi Age Validator
 * Plugin URI:        https://kodmi.com/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            KodMi
 * Author URI:        https://kodmi.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       kodmi-age-validator
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'kodmi_age_validator_version', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-kodmi-age-validator-activator.php
 */
function activate_kodmi_age_validator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-kodmi-age-validator-activator.php';
	Kodmi_Age_Validator_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-kodmi-age-validator-deactivator.php
 */
function deactivate_kodmi_age_validator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-kodmi-age-validator-deactivator.php';
	Kodmi_Age_Validator_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_kodmi_age_validator' );
register_deactivation_hook( __FILE__, 'deactivate_kodmi_age_validator' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-kodmi-age-validator.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_kodmi_age_validator() {

	$plugin = new Kodmi_Age_Validator();
	$plugin->run();

}
run_kodmi_age_validator();
