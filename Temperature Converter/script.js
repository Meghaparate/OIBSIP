const CF=()=>{
	var celsius=parseFloat(document.querySelector("#celsius").value);
	if(isNaN(celsius)){
		document.getElementById("error").innerHTML="Please Enter Numeric Value";
		document.querySelector("#celsius").value=" ";
		document.querySelector("#fahrenheit").value=" ";
		return false;
	}
	else{
		var fr=(1.8*celsius)+32;
		var a=fr.toFixed(2);
		document.querySelector("#celsius").value=celsius;
		document.querySelector("#fahrenheit").value=a;
		document.getElementById("error").innerHTML="Converted Temperature: "+a+"F";
		return true;
	}
	
}
const CC=()=>{
	var fahrenheit=parseFloat(document.querySelector("#fahrenheit").value);
	if(isNaN(fahrenheit)){
		document.querySelector("#celsius").value=" ";
		document.querySelector("#fahrenheit").value=" ";
		document.getElementById("error").innerHTML="Please Enter Numeric Value";
		return false;
	}
	else{
		var cr=(fahrenheit-32)/1.8;
		var b=cr.toFixed(2);
		document.querySelector("#celsius").value=b;
		document.querySelector("#fahrenheit").value=fahrenheit;
		document.getElementById("error").innerHTML="Converted Temperature: "+b+"C";
		return true;
	}
	
}
const reset=()=>{
	document.querySelector("#celsius").value=" ";
	document.querySelector("#fahrenheit").value=" ";
}