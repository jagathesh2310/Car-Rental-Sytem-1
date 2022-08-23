
import './App.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();
  return (
    <div className="heading">
<header>
				<div class="navbar bg-light navbar-login">
					<div class="container-fluid d-flex w-100 justify-content-between">
						<a class="navbar-brand" href="#">

							<span class="nav-brand-1">ALPHA <span class="brand-2">CARS</span> </span>
						</a>
						
					</div>
          <div class="alter-navbar">
          <div>
          <button type="button" class="btn btn-info-login-1" >Already Have a Account? </button>
          </div>
            <div>
          
            <button type="button" class="btn btn-primary btn-primary-login"  onClick={() => {navigate("/Login");}}>Login</button>
            </div>
          </div>
				</div>
			</header>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            Signup
          </div>

   
          <form class="form-sign">
            <input type="text" id="username" class="fadeIn second" name="username" placeholder="Username"/>
            <input type="text" id="cusname" class="fadeIn second" name="name" placeholder="Name"/>
            <input type="text" id="City" class="fadeIn second" name="city" placeholder="Current City"/>
            <input type="text" id="email" class="fadeIn second" name="email" placeholder="Email Id"/>
            <input type="number" id="contactnumber" class="fadeIn second" name="contactnumber" placeholder="Contact Number"/>
            <div id="Help" class="form-text fadeIn second">Entry with Your Country Code</div>
            
            <input type="password" id="new_password" class="fadeIn second" name="Password" placeholder="New Password"/>
            <input type="password" id="confirm_password" class="fadeIn second" name="login" placeholder="Confirm Password"/>
            <input type="submit" class="fadeIn fifth bg-primary" onClick={() => {navigate("/cover");}} value="Submit"/>

          </form>



        </div>
      </div>
    </div>
  );
}

export default Signup;

