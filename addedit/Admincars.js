import '../addedit/addedit.css';
import { useNavigate } from 'react-router-dom';

function Admincars() {
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
          
            <button type="button" class="btn btn-primary btn-primary-login"  onClick={() => {navigate("/Login");}}>Logout</button>
            </div>
          </div>
				</div>
			</header>

    <div class="main-btn-admin">
      <button type="button" class="btn btn-main-admin btn-primary">  Cars   </button>
      <button type="button" class="btn btn-light btn-main-admin"  onClick={() => {navigate("/admincustomer");}}>Customers</button>
    </div>
    <div class="container container-admin">
      <div class="row row-admin">
        <div class="col-sm col-sm-adminpage">
          <select class="search-bar-admin" id="select">
            <option value="" disabled="" selected="">Types</option>
           <option value="1">Mini</option>
            <option value="2">Sedan</option>
            <option value="3">SUV</option>
        </select>
        </div>
        <div class="col-sm col-sm-adminpage">
          <select class="search-bar-admin" id="select">
            <option value="" disabled="" selected="">Price Range</option>
           <option value="1">200-300</option>
            <option value="2">300-400</option>
            <option value="3">500+</option>
        </select>
        </div>
        <div class="col-sm col-sm-adminpage">
          <input class="input-form-admin search-bar-admin" type="date"/>
        </div>
        <div class="col-sm ">
          <div class="col-sm">
            <button type="button" class="btn btn-primary btn-admin">Search</button>
        </div>
        </div>
      </div>
    </div>
    <div class="Add-btn-4">
      <button class="btn btn-success btn-success-admin" onClick={() => {navigate("/addcar");}}>Add Cars +</button>
    </div>
    <section class="seection-items">
      <div class="row ">
        <div class="col-sm-8 col-sm-8-admin">
          <div class="col4-admin">Car Name : Name1</div>
          
          <div class="col4-admin">Type : Type1</div>

          <div class="col4-admin">Price : Price1</div>

          <div class="col4-admin">Date of Added : date1</div>

          

        </div>
   
        <div class="col-sm-4 col2-admin">
          <button type="button" class="btn btn btn-light"onClick={() => {navigate("/editcar");}}>Edit</button>
          <button type="button" class="btn btn-primary btn btn-danger">Remove</button>
        </div>
      </div>

      <div class="row ">
        <div class="col-sm-8 col-sm-8-admin">
          <div class="col4-admin">Car Name : Name2</div>
          
          <div class="col4-admin">Type : Type2</div>

          <div class="col4-admin">Price : Price2</div>

          <div class="col4-admin">Date of Added : date2</div>

          

        </div>
   
        <div class="col-sm-4 col2-admin">
          <button type="button" class="btn btn btn-light"onClick={() => {navigate("/editcar");}}>Edit</button>
          <button type="button" class="btn btn-primary btn btn-danger">Remove</button>
        </div>
      </div>
      <hr></hr>

      <div class="row ">
        <div class="col-sm-8 col-sm-8-admin">
          <div class="col4-admin">Car Name : Name2</div>
          
          <div class="col4-admin">Type : Type1</div>

          <div class="col4-admin">Price : Price1</div>

          <div class="col4-admin">Date of Added : date1</div>

          

        </div>
   
        <div class="col-sm-4 col2-admin">
          <button type="button" class="btn btn btn-light"onClick={() => {navigate("/editcar");}}>Edit</button>
          <button type="button" class="btn btn-primary btn btn-danger">Remove</button>
        </div>
      </div>
      <hr></hr>
    </section>
        </div>
         );
        }
        
        export default Admincars;