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
	this.thecss = "";
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
	//document.body.innerHTML = html + document.body.innerHTML;
	//document.body.innerHTML = html + document.body.innerHTML;
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
	 $.force_appear(); // Jquery function call
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
