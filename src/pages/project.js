import React from 'react'
import Header from './header'
import Footer from './header'

const Project = () =>{

    return(<>
   
    <div  className="container-xxl bg-white p-0">

    
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
        
         
        <div  className="container-xxl py-5">
            <div  className="container px-lg-5">
                <div  className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6  className="position-relative d-inline text-primary ps-4">Our Projects</h6>
                    <h2  className="mt-2">Recently Launched Projects</h2>
                </div>
                <div  className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <div  className="col-12 text-center">
                        <ul  className="list-inline mb-5" id="portfolio-flters">
                            <li  className="btn px-3 pe-4 active" data-filter="*">All</li>
                            <li  className="btn px-3 pe-4" data-filter=".first">Design</li>
                            <li  className="btn px-3 pe-4" data-filter=".second">Development</li>
                        </ul>
                    </div>
                </div>
                <div  className="row g-4 portfolio-container">
                    <div  className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div  className="position-relative rounded overflow-hidden">
                            <img  className="img-fluid w-100" src="assets/img/portfolio-1.jpg" alt="" />
                            <div  className="portfolio-overlay">
                                <a  className="btn btn-light" href="assets/img/portfolio-1.jpg" data-lightbox="portfolio"><i  className="fa fa-plus fa-2x text-primary"></i></a>
                                <div  className="mt-auto">
                                    <small  className="text-white"><i  className="fa fa-folder me-2"></i>Web Design</small>
                                    <a  className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div  className="position-relative rounded overflow-hidden">
                            <img  className="img-fluid w-100" src="assets/img/portfolio-2.jpg" alt="" />
                            <div  className="portfolio-overlay">
                                <a  className="btn btn-light" href="assets/img/portfolio-2.jpg" data-lightbox="portfolio"><i  className="fa fa-plus fa-2x text-primary"></i></a>
                                <div  className="mt-auto">
                                    <small  className="text-white"><i  className="fa fa-folder me-2"></i>Web Design</small>
                                    <a  className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div  className="position-relative rounded overflow-hidden">
                            <img  className="img-fluid w-100" src="assets/img/portfolio-3.jpg" alt="" />
                            <div  className="portfolio-overlay">
                                <a  className="btn btn-light" href="assets/img/portfolio-3.jpg" data-lightbox="portfolio"><i  className="fa fa-plus fa-2x text-primary"></i></a>
                                <div  className="mt-auto">
                                    <small  className="text-white"><i  className="fa fa-folder me-2"></i>Web Design</small>
                                    <a  className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div  className="position-relative rounded overflow-hidden">
                            <img  className="img-fluid w-100" src="assets/img/portfolio-4.jpg" alt="" />
                            <div  className="portfolio-overlay">
                                <a  className="btn btn-light" href="assets/img/portfolio-4.jpg" data-lightbox="portfolio"><i  className="fa fa-plus fa-2x text-primary"></i></a>
                                <div  className="mt-auto">
                                    <small  className="text-white"><i  className="fa fa-folder me-2"></i>Web Design</small>
                                    <a  className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div  className="position-relative rounded overflow-hidden">
                            <img  className="img-fluid w-100" src="assets/img/portfolio-5.jpg" alt="" />
                            <div  className="portfolio-overlay">
                                <a  className="btn btn-light" href="assets/img/portfolio-5.jpg" data-lightbox="portfolio"><i  className="fa fa-plus fa-2x text-primary"></i></a>
                                <div  className="mt-auto">
                                    <small  className="text-white"><i  className="fa fa-folder me-2"></i>Web Design</small>
                                    <a  className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div  className="position-relative rounded overflow-hidden">
                            <img  className="img-fluid w-100" src="assets/img/portfolio-6.jpg" alt="" />
                            <div  className="portfolio-overlay">
                                <a  className="btn btn-light" href="assets/img/portfolio-6.jpg" data-lightbox="portfolio"><i  className="fa fa-plus fa-2x text-primary"></i></a>
                                <div  className="mt-auto">
                                    <small  className="text-white"><i  className="fa fa-folder me-2"></i>Web Design</small>
                                    <a  className="h5 d-block text-white mt-1 mb-0" href="/">Project Name</a>
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
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

     
    <script src="js/main.js"></script>
 
    </>)
}

export default Project