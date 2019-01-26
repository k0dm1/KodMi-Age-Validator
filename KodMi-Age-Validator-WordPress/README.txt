=== KodMi Age Validator ===
Contributors: KodMi
Web link: https://kodmi.com/
Tags: Age Check, Age Validation, Age Verify
Requires at least: 3.0.1
Tested up to: 5.1
Requires PHP: 5.2.4
Stable tag: 5.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Check a visitors age before allowing entry to your wordpress site, no mater which page they visit on.

== Description ==

A light-weight plugin that checks or validates all visitors by checking 
there age,  not only is it light weight but its also 100% responsive 
nor does it require any dependences(jquery,ajax,etc..), also it does
Not conflict with any pre-existing themes or plugins. 

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload `kodmi-age-validator` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

Once the plugin is active it is automatically on, and no further action is required
Unless you need to configure it for your specific needs.

= Configure =

To change the age settings and the sorry message or 
for our most advanced users alter the html or css
Your will need to alter a plugin file by following
The given instructions below.

1. Go to `Plugins->Editor` under the wordpress admin panel.

1. Once there, at the top right side of the page you will see `Select plugin to edit`
you will want to select `KodMi Age Validator` from the drop down then click the select button.

1. From the list under `Plugin Files` Navigate to 'Public->as` and click on `kodmi-age-validator-public.js`

1. Once you see `Editing kodmi-age-validator/public/js/kodmi-age-validator-public.js (active)`
at the top of the page, the file has loaded and you can edit it.

1. Scroll to the bottom of this file. Lines 111-115 are your configurations for
Age requirement, html, sorry message, and callback. There are comments on those lines to help you know what to change.

== Frequently Asked Questions ==

= Is there a way to configure plugin without changing code? =

Currently the answer is no. But in the future this will be a feature.


== Screenshots ==

1. /assets/kodmi-screen1.png
1. /assets/kodmi-screen2.png

== Changelog ==

= 1.0 =
* First Released
* Cross-Browser
* No Dependency's
* Mobile Responsive
* Non-Conflicting with pre-existing plugins or themes
* Callbacks
* Add your own custom theme with your own HTML/CSS
* Ability to change sorry message