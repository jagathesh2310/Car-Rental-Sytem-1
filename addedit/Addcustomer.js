import '../addedit/addedit.css';
import { useNavigate } from 'react-router-dom';

function Addcar() {
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
    <section class="section-ae">
        <div class="heading-ae">
            <button type="button" class="btn btn-primary btn-primary-ae">Add Customer</button>
        </div>
        <div>
            <form class="form-ae">
                <div class="mb-3">
                  <input type="text" class="form-control form-control-ae" placeholder="Customer Name" />
                  
                </div>
    
                <div class="mb-3">
                    
                    <select class="form-control form-control-ae" id="select">
                        <option value="" disabled="" selected="">Car Type</option>
                       <option value="1">Mini</option>
                        <option value="2">Sedan</option>
                        <option value="3">SUV</option>
                    </select>
                  </div>
    
                  <div class="mb-3">
                    <input type="number" class="form-control form-control-ae" placeholder="Amount Paid" />
                  </div>
    
                  <div class="mb-3">
                    <input class="form-control form-control-ae" type="date" />
                  </div>
    
    
            </form>
        </div>
            
        <div class="btn-add-ae">
            <button type="button" class="btn btn-danger" onClick={() => {navigate("/admincustomer");}}>Submit</button>
        </div>
        
    </section>

        </div>
        );
    }
        export default Addcar;
