import React from 'react'
import "./css/bootstrap.css"
import "./css/responsive.css"
import "./css/style.css"

function App() {
  return (
    <>
    <div className="hero_area">

    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +91 8186978069
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : abdulrahman.81869@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                TECH-DEVS
              </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>

 
   
  </div>




  <section className="about_section layout_padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="detail-box">
            <h2>
              About us
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="img-box">
            <img src="./tech-dev-logo.jpeg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

 

  <section className="professional_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="./services.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="detail-box">
            <h2>
              We help buisnesses build professional <br/>
              Mobile and web apps.
            </h2>
            <p>
             we build android mobile apps and dynamic web applications for our customers to grow their buisnesses.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  <section className="service_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2> Our Services </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
              <img src="./app.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Mobile Apps
              </h5>
              <p>
                we can build mobile apps for buisness for both android and ios.⚡
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
              <img src="./web app.jpeg" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                web apps
              </h5>
              <p>
                we are also expertised in building secure web applications for your buisness
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
              <img src="./deployment.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Deployment
              </h5>
              <p>
                We also make sure to securely deploy your both mobile and web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>

 

  <section className="client_section ">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          What Our Clients Say
        </h2>
      </div>
      <div className="carousel-wrap layout_padding2-top ">
        <div className="owl-carousel">
          <div className="item">
            <div className="box">
              <div className="client_id">
                <div className="img-box">
                  <img src="images/client-1.jpg" alt=""/>
                </div>
                <div className="client_detail">
                  <div className="client_info">
                    <h6>
                      Jorch morik
                    </h6>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
              <div className="client_text">
                <p>
                  the tech-devs agency helped me build my buisness excelently by making web apps and mobile apps.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="client_id">
                <div className="img-box">
                  <img src="images/client-2.jpg" alt="" />
                </div>
                <div className="client_detail">
                  <div className="client_info">
                    <h6>
                      Jorch morik
                    </h6>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
              <div className="client_text">
                <p>
                 i've seen my buisness grow 10x after getting my mobile and web app built from tech-devs community
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="client_id">
                <div className="img-box">
                  <img src="images/client-1.jpg" alt=""/>
                </div>
                <div className="client_detail">
                  <div className="client_info">
                    <h6>
                      Jorch morik
                    </h6>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
              <div className="client_text">
                <p>
                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="client_id">
                <div className="img-box">
                  <img src="images/client-2.jpg" alt="" />
                </div>
                <div className="client_detail">
                  <div className="client_info">
                    <h6>
                      Jorch morik
                    </h6>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
              <div className="client_text">
                <p>
                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 

  <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <div className="map">
              <div id="googleMap" style = {{height: "100px", width:"100px"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <section className="info_section ">
    <div className="container">
      <h4>
        Get In Touch
      </h4>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="info_items">
            <div className="row">
              <div className="col-md-4">
                <a href="">
                  <div className="item ">
                    <div className="img-box ">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <div className="item ">
                    <div className="img-box ">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <p>
                      +02 1234567890
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <div className="item ">
                    <div className="img-box">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <p>
                      demo@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="social-box">
      <h4>
        Follow Us
      </h4>
      <div className="box">
        <a href="">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </section>




  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayDateYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>


    </>
  )
}

export default App