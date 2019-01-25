<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://kodmi.com/
 * @since      1.0.0
 *
 * @package    Kodmi_Age_Validator
 * @subpackage Kodmi_Age_Validator/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Kodmi_Age_Validator
 * @subpackage Kodmi_Age_Validator/includes
 * @author     KodMi <support@kodmi.com->
 */
class Kodmi_Age_Validator_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'kodmi-age-validator',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
