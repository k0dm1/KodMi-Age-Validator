class age_verify{

constructor(call_back,age_limit,thecode,thecss,sorrycode){
	this.call_back = call_back;
	this.age_limit = age_limit;
	
	if(thecode){
	this.thecode = thecode;
	}else{
	this.thecode = "<div class='age_verify_kodmi'><div class='age_verify_inner_kodmi'><p class='top-kodmi-text'>What is your age?</p><span>It's the law that we ask.</span><div id='age_numb_kodmi'>21</div><div class='slidecontainer_kodmi'><input type='range' min='1' max='100' value='"+this.age_limit+"' class='slider_kodmi' id='myRange_kodmi'></div><button id='kodmi-button' onclick='age_pop.close_km();'>Enter</button><span><a href='javascript:window.history.back();'>Leave</a></span></div></div>";
	}
	if(thecss){
	this.thecss = thecss;
	}else{
	this.thecss = "<style>.age_verify_inner_kodmi{width:100%;max-width:500px;padding:0 15px;display:block;text-align:Center}.age_verify_kodmi{font-family:Arial;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;display:grid;place-items:center center;z-index:9999;}.age_verify_kodmi p{color:#000;display:block;font-size:2em;margin:10px 0 0}.top-kodmi-text{margin-top:0!important}.age_verify_kodmi span{font-size:1em;display:block;color:#ccc;margin-top:0}.age_verify_kodmi span a{color:green}.slidecontainer_kodmi{width:100%;margin-top:25px}.slider_kodmi{-webkit-appearance:none;appearance:none;width:100%;height:25px;background:#d3d3d3;outline:0;opacity:.7;-webkit-transition:.2s;transition:opacity .2s}.slider_kodmi:hover{opacity:1}.slider_kodmi::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:50px;height:50px;background:#4CAF50;cursor:pointer}.slider_kodmi::-moz-range-thumb{width:50px;height:50px;background:#4CAF50;cursor:pointer}#age_numb_kodmi{font-size:3em;margin-bottom:10px}#kodmi-button{background-color:#4CAF50;border:none;color:#fff;padding:16px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:50px 2px 4px;-webkit-transition-duration:.4s;transition-duration:.4s;cursor:pointer}.fixed-km-height{height:100% !important;overflow: hidden;}</style>";
	}
	if(sorrycode){
	this.sorrycode = sorrycode;
	}else{
	this.sorrycode = "<div class='age_verify_kodmi'><div class='age_verify_inner_kodmi'><p>Sorry it's the law, you must be "+this.age_limit+" or older to enter our website.</p><p>You will be kicked out shortly.</div></div>";
	}
	
	
    if(this.getsession()){
		this.call_back();
		//this.delete_session();
		//$.force_appear();	
    }else{
	    //this.setsession();
	    this.page_html();
    }
}
	
setsession(){
	//console.log("add");
    sessionStorage.setItem('age_verified','true');
}

age_check(){
    var age = document.getElementById("myRange_kodmi").value;
    if(age >= this.age_limit){
        console.log(age);
        return age;
    }
}

getsession(){
	var data = sessionStorage.getItem('age_verified');
	return data;
}

delete_session(){
	sessionStorage.removeItem('age_verified');
}

close_km(){
  	var km_popup = document.getElementsByClassName("age_verify_kodmi")[0];
 	//km_popup.getElementsByClassName("child")[0].innerHTML = "Milk";
    if(this.age_check()){
        //console.log(this.age_check());
    km_popup.style.display = 'none';
    this.setsession();
    document.querySelector('body').classList.remove('fixed-km-height');
     this.call_back();	
    }else{
        //this.delete_session();
        var html = this.sorrycode;
        document.body.innerHTML = html;
        setTimeout(() => {
            window.history.back();
          }, 5000);
    }
}

page_html(){
	document.body.classList.add("fixed-km-height");
	var html = this.thecode;
	var css = this.thecss;
	//document.body.innerHTML = html + document.body.innerHTML;
	//document.body.innerHTML = html + document.body.innerHTML;
	 window.document.head.insertAdjacentHTML( 'beforeend', css);
	 window.document.body.insertAdjacentHTML( 'afterbegin', html);
	 
	 var slider = document.getElementById("myRange_kodmi");
	 var output = document.getElementById("age_numb_kodmi");
	 output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
  		output.innerHTML = this.value;
	}

}

}






// Javascript Function to pass Jquery function call to class
function call_back_kodmi(){
	 //$.force_appear(); // Jquery function call
}
// End of Javascript Function to pass Jquery function call to class

var callback = call_back_kodmi; // sets your callback variable as your javascript function.

const age_pop = new age_verify(
callback, // Callback Function | This excutes if Age is successfully validated, or session is already set.
18, // Minimum Required Age
null, // Custom  Html for age checker.
null, // Custom Css for age checker.
null //  Custom Html for sorry message.
);
