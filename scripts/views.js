//defining index, registerMenu, loginMenu, deliverMenu, invoiceMenu, loginErrors, successView
const index = function(){
	const view = document.getElementById('view')
	const main_menu = `

	<header class="item header margin-top-0">
	<div class = "wrapper ">
		<nav class="navbar navbar-dark bg-warning sticky">
  		<div class="container-fluid">
  			 <a class="navbar-brand" href="index.html">ECS DELIVERY</a>
  			 <ul class="nav justify-content-end">
          <li id="user-name" class="nav-item">
            <a id='user-name' class="nav-link" href="#">Hi ${name}</a>
          </li>
  			 	<li class="nav-item">
    				<a id='deliver-now' class="nav-link" href="#">Deliver Now</a>
 				 </li>
        		 <li class="nav-item">
    				<a id='login_' class="nav-link" href="#">Login</a>
 				 </li>
  				<li class="nav-item">
    				<a  id='register_' class="nav-link" href="#">Sign up</a>
  				</li>
  			</ul>
  		</div>
	</nav>
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<div class = "text-homeimage">
					<div class="maintext-image"></div>
				</div>
			</div>
		</div>
	</div>
</div>
</header>

<div class="container" id="features">
	<div class = "row">
		<div class="col-md-12">
			<div class="main_heading">
				<h1>Features </h1>
				<div class="text-center"><span class="underline"></span></div>
			</div>
		</div> <!-- End col-md-12 -->
	</div>  <!-- End row -->

	<div class="row">
		<div class="col-md-3 col-sm-6">
			<div class="features-div">
				<i class="fa fa-money"></i>
				<h4> Affordable Price </h4>
				<p>We offer the cheapest delivery rates starting at $3.00  </p>
			</div>
		</div>
		<div class="col-md-3 col-sm-6">
			<div class="features-div">
				<i class="fa fa-truck"></i>
				<h4> Short Distance Delivery </h4>
				<p>Same area deliveries are accepted. </p> 
			</div>
		</div>
		<div class="col-md-3 col-sm-6">
			<div class="features-div">
				<i class="fa fa-car"></i>
				<h4> Vehicle Options </h4>
				<p> Choose vehicle based on your package. </p>
			</div>
		</div>
		<div class="col-md-3 col-sm-6">
			<div class="features-div">
				<i class="fa fa-user"></i>
				<h4> Job Opportunities </h4>
				<p> to be announced</p> 
			</div>
		</div>
	</div> 
</div>
<div class="container" id="features">
	<div class = "row">
		<div class="col-md-12">
			<div class="main_heading">
				<h1>About Us </h1>
				<div class="text-center"><span class="underline"></span></div>
			</div>
		</div> <!-- End col-md-12 -->
	</div>  <!-- End row -->
</div>

	    <div class="about_section">
    	<div class="row">
    		<div class="col-md-6">
    			<div class="about_ECS">
    				<h1 class="about_text">What is ECS delivery?</h1>
    			  <p class="long_text_2">Efficient, Convenient, Secured short delivery web application. ECS web app offers the fastest and most convenient way to send packages to everyone as long as it is close range. Everyone could book a delivery. ECS app is most convenient for online sellers who don’t have time to make a trip to any delivery services or don’t have time to make errands to deliver their parcels within the city. Also, ECS web app is not only limited for online sellers, everyone could use it as long as there’s an item that needs to be delivered. </p>
    			</div>
    		</div>
    		<div class="col-md-6">
    			<div class="about_img"><img src="assets/delivery.jpg"></div>
    		</div>
    	</div>
    </div>
    <div class="footer text-center">
  <div class="container">
    <div class="row">
      
      <ul class="social-iconsfooter pt-5">
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
      </ul>
      <p>
         ECS Delivery Company
        
      </p>
    </div>
  </div>
</div>


  		`
  	view.innerHTML = main_menu; //add this to the view at index
  	addController('register_', 'login_', 'deliver-now'); //for controller button function
}

const registerMenu = function(){
	const view = document.getElementById('view');
	const html = `
	<div class=form-body>
	<header class="item header margin-top-0">
		<div class = "wrapper ">
			<nav class="navbar navbar-dark bg-warning sticky">
  				<div class="container-fluid">
  			 		<a class="navbar-brand" href="index.html">ECS DELIVERY</a>
  			 		<ul class="nav justify-content-end">
             <li id="user-name" class="nav-item">
              <a id='user-name' class="nav-link" href="#">Hi ${name}</a>
            </li>
  			 			<li class="nav-item">
    						<a id='deliver-now' class="nav-link" href="#">Deliver Now</a>
 					 	</li>
        			 	<li class="nav-item">
    						<a id='login_' class="nav-link" href="#">Login</a>
 				 		</li>
  						<li class="nav-item">
    						<a id='register_' class="nav-link" href="#">Sign up</a>
  						</li>
  					</ul>
  				</div>
			</nav>
		</div>
</header>
<main class="my-form ">
	<div class="container">
		<div class = "row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<h3 id="message" class="card-header bg-warning text-center text-white">Sign Up</h3>
					<div class="card-body">
						<form>
							<div class="row">
								<label class="col-md-4 col-form-label text-md-left"> Name 
								</label>
								<div class="col-md-6">
									<input type="text" id="full_name" class="form-control" name="full_name">
								</div>
							</div>
							<br>

							<div class="row">
                <label class="col-md-4 col-form-label text-md-left">E-Mail Address</label>
                <div class="col-md-6">
                  <input type="text" id="email_address" class="form-control" name="email_address">
                </div>
              </div>
              <br>

              <div class="row">
                <label class="col-md-4 col-form-label text-md-left">Phone Number</label>
                <div class="col-md-6">
                  <input type="text" id="phone_number" class="form-control">
                </div>
              </div>
              <br>

              <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-left">Password</label>
                  <div class="col-md-6">
                      <input type="text" id="password" class="form-control">
                  </div>
              </div>
              <br>

              <div class="col-md-6 offset-md-6">
                <button id="registerButton" type="submit" class="btn btn-primary">
                    Register
                </button>
              </div>
            </form>
        </div>
    </div>
  </div>
</div>
</div>
</main>
</div>



	`

	view.innerHTML = html;
	addController('register_', 'login_', 'deliver-now', 'registerButton');

}

const loginMenu = function(){
	const view = document.getElementById('view');
	const html = `
<div class=form-body>
  <header class="item header margin-top-0">
    <div class = "wrapper ">
      <nav class="navbar navbar-dark bg-warning sticky">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">ECS DELIVERY</a>
            <ul class="nav justify-content-end">
             <li id="user-name" class="nav-item">
               
              </li>
              <li class="nav-item">
                <a id='deliver-now' class="nav-link" href="#">Deliver Now</a>
              </li>
                <li class="nav-item">
                <a id='login_' class="nav-link" href="#">Login</a>
            </li>
              <li class="nav-item">
                <a id='register_' class="nav-link" href="#">Sign up</a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
</header>

	<div id="login"> 
		<div class="container"> 
			<div id="login-row" class="row justify-content-center align-items-center">
				<div id="login-column" class="col-md-6">
					<div id="login-box">
						<form id="login-form">
							<h3 id="message" class="text-center text-white"> Login</h3>
							 <div id="error-message">

               </div>
              <div>
                <label class="text-white">Email Address:</label><br>
                <input type="text" name="username" id="loginUsername" class="form-control">
              </div>
                               
              <div>
                <label for="password" class="text-white">Password:</label><br>
                <input type="text" name="password" id="loginPassword" class="form-control">
              </div>
                    
              <div>
                <br>
                <button id = "sign-in-button" type="button" class="btn btn-primary"> LOGIN </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> `

        view.innerHTML = html;
        addController('sign-in-button', 'register_', 'login_', 'deliver-now',);


   }


 const deliverMenu = function(){
	const view = document.getElementById('view');
	const html = `
  <div class=form-body>
  <header class="item header margin-top-0">
    <div class = "wrapper ">
      <nav class="navbar navbar-dark bg-warning sticky">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">ECS DELIVERY</a>
            <ul class="nav justify-content-end">
             <li id="user-name" class="nav-item">
              <a id='user-name' class="nav-link" href="#">Hi ${name}</a>
            </li>
              <li class="nav-item">
                <a id='deliver-now' class="nav-link" href="#">Deliver Now</a>
            </li>
                <li class="nav-item">
                <a id='login_' class="nav-link" href="#">Login</a>
            </li>
              <li class="nav-item">
                <a id='register_' class="nav-link active" aria-current="page" href="#">Sign up</a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
</header>
  <div id="login"> 
		<div class="container"> 
			<div id="login-row" class="row justify-content-center">
				<div id="login-column" class="col-md-6">
					<div id="login-box" style=" height: 430px;" class="col-md-12">
						<form id="login-form" class="form">

							<h3 class="text-center text-white"> PICKUP ADDRESS</h3>
							<div>
                <label class="text-white">Address:</label><br>
                  <input type="text" id="address1" class="form-control">
              </div>
              <br>

              <h3 class="text-center text-white"> DROPOFF ADDRESS</h3>
              <div>
                <label class="text-white">Receiver Address:</label><br>
                <input type="text" id="address2" class="form-control">
              </div>
              <br>

              <h3 class="text-center text-white"> TYPE OF VEHICLE</h3>
              <div class="col-md-4 offset-md-4">
                <select class="form-control">
                  <option>Sedan</option>
                  <option>Pickup Truck</option>
                  <option>Van</option>
                  <option>Motorcycle</option>
                </select>
              </div>
              <br>

  						<button id="deliver-submit" type="button" class="btn btn-primary offset-md-5"> SUBMIT </button>

            </form>
          </div>
        </div>
      </div>

         `

         view.innerHTML = html;
         addController('register_', 'login_', 'deliver-now','deliver-submit');
  }

  const invoiceMenu = function(){
    const view = document.getElementById('view');
    const html = `

    <header class="item header margin-top-0">
        <div class = "wrapper ">
            <nav class="navbar navbar-dark bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">ECS DELIVERY</a>
                    <ul class="nav justify-content-end">
                      <li id="user-name" class="nav-item">
                        <a id='user-name' class="nav-link" href="#">Hi ${name}</a>
                      </li>
                        <li class="nav-item">
                            <a id='deliver-now' class="nav-link" href="#">Deliver Now</a>
                        </li>
                        <li class="nav-item">
                            <a id='login_' class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a id='register_' class="nav-link active" aria-current="page" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
</header>
<div class="invoice-body">
  <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
    <div class="card">
      <div class="card-header p-4 bg-warning">
         <div class="pt-2 d-inline-block">ECS DELIVERY</div>
         <div class="float-right">
                  <h3 class="mb-0">Billings</h3>
                  Date: Jan 12, 2021
              </div>
             </div>
             <div class="card-body">
              <div class="row mb-4">
                <div class="col-sm-6">
                  <h5 class="mb-3 h5-size">Sender:</h5>
                      <h3 class="text-dark mb-1 h3-size">Name:</h3>
                      <div>Address</div>
                      <div>Phone:  </div>
                  </div>
                     <div class="col-sm-6">
                     <h5 class="mb-3 h5-size">Receiver:</h5>
                     <h3 class="text-dark mb-1 h3-size">Name</h3>
                     <div>Address:</div>
                     <div>Phone:</div>
                  
                 </div>
             </div>
             <div class="table-responsive-sm">
               <table class="table table-striped">
                     <thead>
                         <tr>
                             <th class="center">#</th>
                             <th>Item</th>
                             <th>Description</th>
                             <!-- <th>Packaging</th> -->
                             
                         </tr>
                     </thead>
                       <tbody>
                         <tr>
                             <td class="center">1</td>
                             <td class="left strong">Bracelet</td>
                             <td class="left">Accessories</td>
                             <!-- <td class="left">Envelope</td> -->
                             
                         </tr>
                        </tbody>
                 </table>
             </div>
             <div class="row">
              <div class="col-lg-4 col-sm-5"></div>
              <div class="col-lg-4 col-sm-5 ml-auto">
                     <table class="table table-clear">
                      <tbody>
                             <tr>
                                 <td class="left">
                                     <strong class="text-dark">Handling Fee</strong>
                                 </td>
                                 <td class="right">$ 2.00</td>
                             </tr>
                             <tr>
                                 <td class="left">
                                     <strong class="text-dark">Transportation Fee</strong>
                                 </td>
                                 <td class="right"> $ 3.00</td>
                             </tr>
                              <tr>
                                 <td class="left">
                                     <strong class="text-dark">Tax </strong>
                                 </td>
                                 <td class="right">$ 0.15</td>
                             </tr>
                             <tr>
                                 <td class="left">
                                     <strong class="text-dark">Total</strong> </td>
                                 <td class="right">
                                     <strong class="text-dark">$5.15</strong>
                                 </td>
                             </tr>
                             </tbody>
                     </table>
                     <button id="process-delivery" type="button" class="btn btn-primary col-md-6 offset-md-4"> SUBMIT </button>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white">                 
         <p class="mb-0">ECS Delivery</p>
         </div>
         </div>
    </div>
  </div>`

      view.innerHTML = html;
      addController('register_', 'login_', 'deliver-now', 'process-delivery');

  }

// const viewUser = function(name){
//   viewName = document.getElementById('user-login');
//   viewName.innerHTML = ` <a id='user-name' class="nav-link" href="#">Hi ${name}</a>`
// }

const viewError = function(){
  viewErrorMsg = document.getElementById('error-message');
  viewErrorMsg.innerHTML = `<p id="error-message" class="text-center" style="color: red"> Error login: Check username or password.  </p> `
}


const successView = function(){
   const view = document.getElementById('view');
    const html = `
<header class="item header margin-top-0">
        <div class = "wrapper ">
            <nav class="navbar navbar-dark bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">ECS DELIVERY</a>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a id='deliver-now' class="nav-link" href="#">Deliver Now</a>
                        </li>
                        <li class="nav-item">
                            <a id='login_' class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a id='register_' class="nav-link active" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
</header>
<div class="justify-content-center d-flex my-form-success">
    <h2 class='success-bg'> SUCCESSFULLY PROCESSED! </h2>
</div>
</div>
<div class="footer text-center">
  <div class="container">
    <div class="row">
      <p class="footernote">
         Connect with Scorilo
      </p>
      <ul class="social-iconsfooter">
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>

      </ul>
      <p>
         ECS Delivery Company
        
      </p>
    </div>
  </div>
</div>
    `
    view.innerHTML = html;
    addController('register_', 'login_', 'deliver-now')
}

 

