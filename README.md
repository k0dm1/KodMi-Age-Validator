# KodMi-Age-Validator

No Dependencys, Light Weight.

Validate a customers age before you allow them to enter your website with KodMi age checker.

HOW TO USE:
```
Just link the "age_check.js" in your website, just before the end of </body>
```
HOW TO EDIT:

Change the following code at he bottom of "age_check.js"
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
