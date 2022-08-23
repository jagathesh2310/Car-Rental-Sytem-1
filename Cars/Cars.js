
import './Cars.css';
import { useNavigate } from 'react-router-dom';
function Cars() {
	let navigate = useNavigate();
	return (
		<div class="heading heading-1">
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
                            <button type="button" class="btn btn-light border-bottom" onClick={() => {navigate("/Cover");}}>Home</button><span class="sr-only"></span></a>
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
			<section>
				<div class="row fadeIn second">
				<div class="image-container-1">
					<div class="card card-cars" >
						<img src="https://ik.imagekit.io/q8kcz62nx/images/th__1__lYhzSawO5F.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1659507776174" height={260} width={398}  class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Mini</h5>
							<p class="card-text">
								<h6 class="price-1">Starting at <span>rs 250</span></h6>
								<ul>
									<li>4 Seats</li>
									<li>2 Luggage</li>
									<li>Cost Effective</li>
									<li>Safe and Fast</li>
								</ul>
							</p>
							<a href="#" class="btn btn-danger " onClick={() => {navigate("/book");}}>Book Now</a>
						</div>
					</div>
					<div class="card card-cars" >
						<img src="https://ik.imagekit.io/q8kcz62nx/images/sad_H4_COniot.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659507773589" height={260} width={398}  class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Prime Sedan</h5>
							<p class="card-text">
								<h6 class="price-1">Starting at <span>rs 250</span></h6>
								<ul>
									<li>4 Seats</li>
									<li>2 Luggage</li>
									<li>Good Comfort</li>
									<li>Safe and Fast</li>
								</ul>
							</p>
							<a href="#" class="btn btn-danger" onClick={() => {navigate("/Book");}}>Book Now</a>
						</div>
					</div>
					<div class="card card-cars">
						<img src="https://ik.imagekit.io/q8kcz62nx/images/car-12_4eCby9c47q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659507770840" height={260} width={398}  class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Prime SUV</h5>
							<p class="card-text">
								<h6 class="price-1">Starting at <span>rs 250</span></h6>
								<ul>
									<li>7 Seats</li>
									<li>4 Luggage</li>
									<li>Perfect Comfort</li>
									<li>Safe and Fast</li>
								</ul>
							</p>
							<a href="#" class="btn btn-danger" onClick={() => {navigate("/Book");}}>Book Now</a>
						</div>
					</div>
				</div>
				</div>
				<div class="row fadeIn fourth">
				<div class="image-container-1">
					<div class="card card-cars" >
						<img src="https://ik.imagekit.io/q8kcz62nx/images/th_EbkVQbe3Xb.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1659507774406" class="card-img-top" width={398}  height={260} alt="..." />
						<div class="card-body">
							<h5 class="card-title">Mini</h5>
							<p class="card-text">
								<h6 class="price-1">Starting at <span>rs 250</span></h6>
								<ul>
									<li>4 Seats</li>
									<li>2 Luggage</li>
									<li>Cost Effective</li>
									<li>Safe and Fast</li>
								</ul>
							</p>
							<a href="#" class="btn btn-danger" onClick={() => {navigate("/book");}}>Book Now</a>
						</div>
					</div>
					<div class="card card-cars" >
						<img src="https://ik.imagekit.io/q8kcz62nx/images/car-2_n-JjMGBcUg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659507772348" class="card-img-top" width={398}  height={260} alt="..." />
						<div class="card-body">
							<h5 class="card-title">Prime Sedan</h5>
							<p class="card-text">
								<h6 class="price-1">Starting at <span>rs 250</span></h6>
								<ul>
									<li>4 Seats</li>
									<li>2 Luggage</li>
									<li>Good Comfort</li>
									<li>Safe and Fast</li>
								</ul>
							</p>
							<a href="#" class="btn btn-danger" onClick={() => {navigate("/Book");}}>Book Now</a>
						</div>
					</div>
					<div class="card card-cars">
						<img src="https://ik.imagekit.io/q8kcz62nx/images/3104657_5b4Y0rKgv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659507772836" height={260} width={398} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Prime SUV</h5>
							<p class="card-text">
								<h6 class="price-1">Starting at <span>rs 250</span></h6>
								<ul>
									<li>4 Seats</li>
									<li>4 Luggage</li>
									<li>Perfect Comfort</li>
									<li>Safe and Fast</li>
								</ul>
							</p>
							<a href="#" class="btn btn-danger" onClick={() => {navigate("/Book");}}>Book Now</a>
						</div>
					</div>
				</div>

				</div>

			</section>



		</div>
	);
}

export default Cars;