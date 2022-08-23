import { useNavigate } from 'react-router-dom';
import './App.css';

function Cover() {
  let navigate = useNavigate();
  return (
    <div className="heading">
        <div class="bg-image">
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
      <div class="text-cover fadeInDown">
        <h1 class="head-cover text-warning fadeIn second">Find the Car For You</h1>
        <div class="des-cover fadeIn third">
          <div>A mission to deliver world class taxi service experience</div>
          <div>Now EFS available in multiple cities with thousands of happy business partners and satisfied customers…</div>
        </div>
        <button class="btn btn-primary btn-primary-cover fadeIn fourth" onClick={() => {navigate("/Cars");}}>View Cars</button>
      </div>
    </section>
  </div>

    </div>
  );
}

export default Cover;