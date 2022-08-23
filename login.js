
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  let navigate = useNavigate();
  function myFunction(e) {
    e.preventDefault();
    var a = document.getElementById("inputEmail").value;
    var b = document.getElementById("inputPassword").value;
    if (a==="" && b===""){
      alert("Fill the Email and Password")
    
    }
    else {
      if (a === "admin" && b === "1234") {
        window.location = "/admincars";
      } else {
        window.location = "/cover";
      }
    }
  }
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
          <button type="button" class="btn btn-info-login-1" >Don't Have a Account yet? </button>
          </div>
            <div>
          
            <button type="button" class="btn btn-primary btn-primary-login"  onClick={() => {navigate("/signup");}}>Sign up</button>
            </div>
          </div>
				</div>
			</header>
      <div class="wrapper wrapper-1 fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            Login
          </div>

   
          <form action='/cover'>
            <input type="text" id="inputEmail" class="fadeIn second" name="login" placeholder="User name" required/>
            <input type="password" id="inputPassword" class="fadeIn third" name="login" placeholder="Password"/>
            <input type="submit" class="fadeIn fourth bg-primary" onClick={(event) => myFunction(event)} value="Log In"/>
            <br>
            </br>
            <div class="sign_up fadeIn fourth">
              <span>Don't have a Account yet? </span><a class="signuploader" onClick={() => {navigate("/signup");}}>signup</a>
            </div>
          </form>

          <div id="formFooter">
            <a class="underlineHover fadeIn fifth" href="#">Forgot Password?</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
