import './Contact.css';
import { useNavigate } from 'react-router-dom';
function Contact() {
  let navigate = useNavigate();
  return (
    <div className="heading">
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
    <div class="content">
    <div class="container container-contact">
      <div class="row align-items-stretch justify-content-center no-gutters">
        <div class="col-md-7">
          <div class="form h-100 contact-wrap p-5">
            <h3 class="text-center">Contact us</h3>
            <form class="mb-5" method="post" id="contactForm" name="contactForm">
              <div class="row">
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Name *</label>
                  <input type="text" class="form-control" name="name" id="name" placeholder="Your name"/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Email *</label>
                  <input type="email" class="form-control" name="email" id="email"  placeholder="Your email"/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="budget" class="col-form-label">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Your subject"/>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-md-12 form-group mb-3">
                  <label for="message" class="col-form-label">Message *</label>
                  <textarea class="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-5 form-group text-center">
                  <button class="btn btn-primary" onClick={() => {navigate("/cover");}}>Send Message</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    </div>


    </div>
  );
}

export default Contact;