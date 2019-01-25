# KodMi-Age-Validator


Built 2019 - No Dependencys - Light Weight - Responsive

Check a vistors age before you allow them to enter your website with the KodMi Age Validator.

It's easy to implant, can be done by adding 1 line of code. It's light weight and mobile responsive that's cross-browser friendly with zero dependencys and works without any pre-existing code conflictions, that can be fully customized to match your website or you can make use of the default theme.

# How To Use
Just link the "age_check.js" in your html/page, just before the end of </body>

Example:
```
<script src="age_check.js"></script>
</body>
```
# Configure

Change the following code at the bottom of "age_check.js"
```
// Javascript Function to pass Jquery function call to class
function call_back_kodmi(){
	 // $.force_appear(); // Jquery function call..
}
// End of Javascript Function to pass Jquery function call to class

var callback = call_back_kodmi; // sets your callback variable as your javascript function.

const age_pop = new age_verify(
callback, // Callback Function Variable | This excutes if Age is successfully validated, or session is already set.
18, // Minimum Required Age
null, // Custom  Html for age checker.
null, // Custom Css for age checker.
null //  Custom Html for sorry message.
);
```
 
