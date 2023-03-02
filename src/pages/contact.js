import React from 'react'
import Footer from './footer'
import Header from './header'

const Contact = () =>{
    return (<>
    <body>
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
                <div  className="row justify-content-center">
                    <div  className="col-lg-7">
                        <div  className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6  className="position-relative d-inline text-primary ps-4">Contact Us</h6>
                            <h2  className="mt-2">Contact For Any Query</h2>
                        </div>
                        <div  className="wow fadeInUp" data-wow-delay="0.3s">
                            <form>
                                <div  className="row g-3">
                                    <div  className="col-md-6">
                                        <div  className="form-floating">
                                            <input type="text"  className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div  className="col-md-6">
                                        <div  className="form-floating">
                                            <input type="email"  className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div  className="col-12">
                                        <div  className="form-floating">
                                            <input type="text"  className="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div  className="col-12">
                                        <div  className="form-floating">
                                            <textarea  className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div  className="col-12">
                                        <button  className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         
         
        

        
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
    <Footer />
</body>
    </>)
}
export default Contact