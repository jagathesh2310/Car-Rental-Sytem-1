
import { useNavigate } from 'react-router-dom';
import './App.css';

function AdminLogin() {
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
            <button type="button" class="btn btn-light btn-primary-login" onClick={() => {navigate("/login");}}>User</button>
            </div>
            <div>
            <button type="button" class="btn btn-primary btn-light-login">Admin</button>
            </div>
          </div>
				</div>
			</header>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            Login
          </div>

   
          <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login"/>
            <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password"/>
            <input type="submit" class="fadeIn fourth bg-primary"  onClick={() => {navigate("/admincars");}} value="Log In"/>
            <br>
            </br>
            
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
