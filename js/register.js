window.onload=pageLoad;
function pageLoad(){
	var Form = document.getElementById("Form");
	Form.onsubmit= validate;
}
function validate(){
	var check = true;
	var Fname = document.getElementById("Fname").value;
	var Lname = document.getElementById("Lname").value;
	var mail = document.getElementById("email").value;
	var phone = document.getElementById("telephone").value;
	var password = document.getElementById("password").value;
	var address = document.getElementById("address").value;
	var sign_gender = document.getElementById("gender").value;

	
	if(Fname == ""){
		alert('Please Enter Your First-Name');
		check= false;
		return check;
	}
	if (!Fname.match(/^[A-Za-z ]+$/)){ 
		alert("only letters or space allowed in name field");
		check= false;
		return check;
	}
	if(Lname == ""){
		alert('Please Enter Your Last-Name');
		check= false;
		return check;
	}
	if (!Lname.match(/^[A-Za-z ]+$/)){ 
		alert("only letters or space allowed in name field");
		check= false;
		return check;
	}

	if(mail == ""){
		alert('Please Enter Your E-mail');
		check= false;
		return check;
	}
	if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check= false;
		return check;
	}
	if(password == ""){
		alert('Please Enter Your Password');
		check= false;
		return check;
	}
	
	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
	    alert("Password is Not Valid, It must be between 8 to 15 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check= false;
		return check;
	}
	
	if (phone == "") {
		alert('Please Enter Your phone Number');
		check= false;
		return check;
	}
	if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check= false;
		return check;
	}
	if (address == "") {
		alert('Please Enter Your Address');
		check= false;
		return check;
	}
	if (sign_gender == "") {
		alert("Please select your gender");
		check=false;
		return check;
	  }
	if(check==true){
		alert('thanks '+Fname+" "+Lname+' for join to us');
		window.location.href='index.html';
	}
	return check;
}
