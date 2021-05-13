//this maps the callback to the id <- ids of anything you want to click that has function
const getCallbacks = function(){
	const callbacks = {};
	callbacks['register_'] = registerMenu; // NAVBAR - sign up
	callbacks['login_'] = loginMenu;	//NAVBAR - login
	callbacks['deliver-now'] = deliverMenu; //NAVBAR - deliver menu
	callbacks['registerButton'] = startRegister; //REGISTER PAGE - register button
	callbacks['sign-in-button'] = submitLogin; // SIGNIN PAGE - sign in button
	callbacks['deliver-submit'] = invoiceMenu; //DELIVER MENU to INVOICE MENU
	callbacks['process-delivery'] = successView; //INVOICE MENU to SUCCESS PAGE

	return callbacks;
}

//So in views.js we have addcontroller there, that passes IDs 
//when an ID is passed, we will get the elements of that id and pass it to button
//now when that button is cliccked, a view will be displayed based on the value of that 
//id in getCallbacks function.
const addController = function(...buttonIDs){
	const callbacks = getCallbacks();
	for (let id of buttonIDs){
		const button = document.getElementById(id);
		button.addEventListener('click', callbacks[id]);
	}
}

//When you store any value in any of this id it will be passed in to a variable
//for user.js purposes 
const getName = () => document.getElementById('full_name').value;
const getEmail = () => document.getElementById('email_address').value;
const getPhone = () => document.getElementById('phone_number').value;
const getPassword = () => document.getElementById('password').value;
const getMessage = () => document.getElementById('message').value;
const loginUsername = () => document.getElementById('loginUsername').value;
const loginPassword = () => document.getElementById('loginPassword').value;


