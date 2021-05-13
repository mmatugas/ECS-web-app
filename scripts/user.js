async function startRegister(){
	name = getName(); //store the elements here from controller
	email = getEmail();
	phone = getPhone();
	password = getPassword();
	message = getMessage();
	const body = JSON.stringify({name: name, email: email, phone: phone, password:password}) //convert information in to a JSON string
	//this will indicate the server that the request body format is JSON and client only accepts JSON format
	const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' } 
	console.log('body', body)
	const url = `http://localhost:3000/api/user/register`; //will be used to request http /register
	//this start an http request post (sending something to the server) to /register with json format
	//since the await is present, async function is paused until the request is complete
	const response = await fetch(url, {method: 'post', body: body, headers:headers }); 
	console.log(response);
	//async function is stopped and wait for the json response from the server
	const data = await response.json(); 
	console.log(data)
	userID = data.userID //store id to userID
	//viewUser();
	loginMenu(); //then proceed to loginMenu after register
}

async function submitLogin(){
	loginEmail = loginUsername();
	loginPass = loginPassword();
	const body = JSON.stringify({email: loginEmail, password: loginPass })
	const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
	const url = `http://localhost:3000/api/user/login`;
	const response = await fetch(url, {method: 'post', body: body, headers:headers });
	if (response.status === 401){
		//if the server response with 401 status go to catch error
		catchError();
	} else {
		//if everything is okay, receive the json response the procedd to index menu
		const data = await response.json();
		index();
	} 

	//When an error is caught display an error message to the client
	function catchError(){
		console.log("Unable to login")
		viewError(); //display error
	}










	// console.log(response)
	// const data = await response.json()
	// console.log(data);
	
	// if(data=== undefined){
	// 	console.log(error)
	// }

	
	//console.log("submit login:",data);
	//message = data.message;

}







window.onload = index; //when you refresh it this what first appears 


