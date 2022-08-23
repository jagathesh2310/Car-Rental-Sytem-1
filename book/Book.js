import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book() {
	let navigate = useNavigate();
	return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                    <span class="nav-brand-1">ALPHA <span class="brand-2">CARS</span> </span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <button type="button" class="btn btn-light" onClick={() => {navigate("/Cover");}}>Home</button><span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button type="button" class="btn btn-light" onClick={() => {navigate("/Cars");}}>Cars</button>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button type="button" class="btn btn-light" onClick={() => {navigate("/book");}}>Booking</button>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button type="button" class="btn btn-light" onClick={() => {navigate("/Contact");}}>Contact us</button>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button class="btn btn-primary" onClick={() => {navigate("/Login");}}>Log out</button>
                        </a>
                        </li>
                        
                    </ul>
                    </div>
                </nav>
            </header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div class="custom-select-book shadow mb-5 bg-white rounded">

	<div class="custom-select-book-body-book custom-book">

		
    <div class="shadow-book fadeInDown">

		<h2 class="searchText fadeIn second"><strong>Booking Form</strong></h2>

		<div class="row mb-3 mt-3 fadeIn third">

			<label class="radiobtn"><input type="radio" name="gender" value="male"/>One Way</label>
			<label class="radiobtn"><input type="radio" name="gender" value="male"/>Round Trip</label>

		</div>


		<div class="row fadeIn fourth">
            <h4 class="from-1 from-to text-info">Pickup Location and Time</h4>

			<div class="col-sm-6">
				
                <select class="browser-default input-book custom-select-book mb-4" id="select">
                    <option value="" disabled="" selected="">To City</option>
                   <option value="1">Coimbatore</option>
                    <option value="2">Chennai</option>
                    <option value="3">Bangalore</option>
                </select>
            
			</div>

			<div class="col-sm-6">
				<input class="input-form" type="text" placeholder="Address"/>
			</div>

		</div>
		<div class="row fadeIn fourth">

			<div class="col-sm-6">
				<input class="input-form" calss="input-book" type="date" placeholder="Date"/>
			</div>

				<div class="col-sm-6">
					<input placeholder="&#xf073; Arriving" type="time" id="date-picker-example" />
			</div>

				</div>

				<div class="row mt-4 fadeIn fifth">
                    <h4 class="to-1 from-to text-info">To</h4>

					<div class="col-sm-6">
						<select class="browser-default input-book custom-select-book mb-4" id="select">
                            <option value="" disabled="" selected="">To City</option>
                           <option value="1">Coimbatore</option>
                            <option value="2">Chennai</option>
                            <option value="3">Bangalore</option>
                        </select>
					</div>

					<div class="col-sm-6">
                        <input class="input-form" type="text" placeholder="Address"/>

						
					</div>

				</div>
                <a href="#" class="btn btn-primary btn-primary-book float-right mt-5 w-25 fadeIn fifth " onClick={() => {navigate("/cover");}}>Submit</a>
				</div>
			</div>
		</div>
        </div>

        );
    }
    
    export default Book;