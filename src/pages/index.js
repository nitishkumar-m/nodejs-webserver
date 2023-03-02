import React  from 'react'; 
import Header from './header.js'
import Footer from './footer.js'

const Index=()=>{
    return(
        <>
         <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
            <Header />
            
            <div className="container-xxl py-5 bg-primary hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated zoomIn">All in one SEO tool need to grow your business rapidly</h1>
                            <p className="text-white pb-3 animated zoomIn">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                            <a href="/" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Free Quote</a>
                            <a href="/" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid" src="assets/img/hero.png" alt="dsfds"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="modal fade" id="searchModal" tabindex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content" style={{background: "rgba(29, 29, 39, 0.7)"}}>
                    <div className="modal-header border-0">
                        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center justify-content-center">
                        <div className="input-group" style={{maxWidth: "600px"}}>
                            <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword"/>
                            <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">About Us</h6>
                            <h2 className="mt-2">The best SEO solution with 10 years of experience</h2>
                        </div>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="/">Read More</a>
                            <a className="btn btn-outline-primary btn-square me-3" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="/"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="assets/img/about.jpg" alt="fadagdf"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height: "250px"}}>
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">Ready to get started</h3>
                        <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: "48px"}} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{height: "250px"}} src="assets/img/newsletter.png" alt="fdgf"/>
                    </div>
                </div>
            </div>
        </div>
  
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
                    <h2 className="mt-2">What Solutions We Provide</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">SEO Optimization</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Web Design</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Social Media Marketing</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Email Marketing</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">PPC Advertising</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">App Development</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Projects</h6>
                    <h2 className="mt-2">Recently Launched Projects</h2>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="btn px-3 pe-4 active" data-filter="*">All</li>
                            <li className="btn px-3 pe-4" data-filter=".first">Design</li>
                            <li className="btn px-3 pe-4" data-filter=".second">Development</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/portfolio-1.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/portfolio-2.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="assets/img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/portfolio-3.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="assets/img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/portfolio-4.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="assets/img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/portfolio-5.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="assets/img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/portfolio-6.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="assets/img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg" alt="" style={{width: "50px" ,height: "50px;"}}/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img alt="" className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg" style={{width: "50px", height: "50px;"}}/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img alt="" className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg" style={{width: "50px;",height: "50px;"}}/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img alt="" className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-4.jpg" style={{width: "50px", height: "50px"}}/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Team</h6>
                    <h2 className="mt-2">Meet Our Team Members</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"style={{width: "75px"}}>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src="assets/img/team-1.jpg" alt=""/>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Jhon Doe</h5>
                                <small>CEO</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{width: "75px;"}}>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src="assets/img/team-2.jpg" alt=""/>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Emma William</h5>
                                <small>Manager</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{width: "75px;"}}>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src="assets/img/team-3.jpg" alt=""/>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Noah Michael</h5>
                                <small>Designer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/lib/wow/wow.min.js"></script>
    <script src="assets/lib/easing/easing.min.js"></script>
    <script src="assets/lib/waypoints/waypoints.min.js"></script>
    <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="assets/lib/isotope/isotope.pkgd.min.js"></script>
    <script src="assets/lib/lightbox/js/lightbox.min.js"></script>

        </>
    )
} 
export default Index;