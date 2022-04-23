import Popup from './Components/Popup';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Slider from "react-slick";


const App =() =>  {

  const [buttonPopup, setPopup] = useState(false)

  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  
  return (
    <div>
    <div className="header">
        <Popup trigger={buttonPopup} setTrigger={setPopup}>
          myPop
        </Popup>
        <img src="/images/logo-studiomarigold.png" alt="logo-studiomarigold.png" />
        <div className="container">
          <h1>BeSpoke Interior Design Solutions</h1>
          <p>Let Us Give Your Home a New Face</p>
          <div className="c-spacer"></div>
          <div className="button1">
            <a href="/#" data-bs-toggle="modal" data-bs-target="#exampleModal" ><button type="button" onClick={()=> setPopup(true)} className="btn">REVAMP YOUR HOME TODAY</button>"</a>
         
          </div>
        </div>
    </div>
    <div className="fullwidth-text">
  <div className="container">
   <h2>GETTING PERSONALIZED INTERIOR <br/> IN HYDERABAD HAS NEVER BEEN THIS EASY</h2>
</div>
    </div>
    <div className="gallery">
        <div className="container">
          <p> See how our most sought-after interior designers in Hyderabad <br/> have previous worked their magic to create <br/> exceptional and purposeful spaces for our clients. </p>
            <div className="row">
              <div className="col-md-4">
              <img src="/images/Gallery-images-1.jpg" className="img-fluid" alt='Gallery-images-1.jpg'/>
              </div>
              <div className="col-md-4">
              <img src="/images/Gallery-images-2.jpg" className="img-fluid" alt='Gallery-images-2.jpg'/>
              </div>
              <div className="col-md-4">
              <img src="/images/Gallery-images-3.jpg" className="img-fluid" alt="Gallery-images-3.jpg"/>
              </div>

            </div>
          </div>
    </div>
      <div className="about-record">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">

              <img src="/images/Why-choose-us_new.gif" className="img-fluid d-hide" alt="Why-choose-us_new.gif" />

            </div>
            <div className="col-lg-7">
              <h2>WHY CHOOSE US ?</h2>

              <div className="row justify-content-center">

                <div className="col-md-4">
                  <img src="/images/anniversary.png-a.png" className="mx-auto d-block" width="100px" alt="anniversary.png-a.png" />
                    <p>25 Years of <br/> Experience</p>
                </div>
                <div className="col-md-4">
                  <img src="/images/calendar.png-a.png" className="mx-auto d-block" width="100px" alt="calendar.png-a.png" />
                    <p>45 Days Average <br/> Installation Time</p>
                </div>

                <div className="col-md-4">
                  <img src="/images/storage.png" className="mx-auto d-block" width="100px" alt="storage.png"/>
                    <p>20% Extra Storage <br/> Area Created</p>
                </div>


              </div>

              <div className="row">
                <div className="col-md-6">
                  <img src="/images/long-distance.png" className="mx-auto d-block" width="100px" alt="long-distance.png"/>
                    <p>Design solutions Provided To <br/> Customers Across 3Continents</p>
                </div>
                <div className="col-md-6">
                  <img src="/images/sales-support-a.png" className="mx-auto d-block" width="100px" alt="sales-support-a.png"/>
                    <p>A Life Time Of <br/> Post-Installation Service</p>
                </div>

              </div>
            </div>
          </div>


        </div>

      </div>
      <div className="c-spacer2"></div>
      <div className="client-words">
        <div className="container">
          <div className="button">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="/#"><button type="button" onClick={() => setPopup(true)} className="main-button">
              GET QUOTATION      </button> </a>
          </div>
          <h2>A FEW WORDS FROM OUR CLIENTS</h2>
          <div className="row">
            <div className="col-lg-6">

              <div id="carouseltesti" className="carousel carousel-dark slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                  <Slider {...settings}>
                  <div className="carousel-item active" data-bs-interval="1000">

                    <div className="carousel-caption d-md-block">

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h5>-Lorem ipsum</h5>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="500">

                    <div className="carousel-caption d-md-block">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h5>-Lorem ipsum</h5>
                    </div>
                  </div>
                  <div className="carousel-item">

                    <div className="carousel-caption d-md-block">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h5>-Lorem ipsum</h5>
                    </div>
                  </div>
                  </Slider>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouseltesti" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouseltesti" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden"></span>
                </button>
              </div>

            </div>
            <div className="col-lg-6 business-iframe">

              <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZpEPJGFpZtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

            </div>
          </div>

        </div>


      </div>
      <div className="studio-button">
        <div className="container">
          <div className="button">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="/#"><button onClick={() => setPopup(true)} className="main-button">
              BE ANOTHER STUDIO MARIGOLD <br /> SUCCESS STORY     </button></a>
          </div>
        </div>
      </div>
      <div className="about-place">
        <div className="container">
          <p>From giving a new and distinctive look to the existing <br/>
            furniture to redesigning your home to add a contemporary flair to it, Studio <br/>
              Marigold has cost-effective design solutions for your every requirement.</p>
            <h2>SPACE WEB DESIGN</h2>

            <div className="row">
              <div className="col-md-4 images">
              <img src="/images/Spaces-images-Homes.jpg" className="mx-auto d-block" width="200px" alt="Spaces-images-Homes.jpg"/>
                  <h3>Homes</h3>
                  <p>1/2/3/4/5 BHK | Bungalows | Villas | Studio Apartment | Penthouses
                  </p>

              </div>
              <div className="col-md-4 images">
              <img src="/images/Spaces-images-rooms.jpg" className="mx-auto d-block" width="200px" alt="Spaces-images-rooms.jpg"/>
                  <h3>Rooms</h3>
                  <p>Bedrooms | Living Room | Pantry
                  </p>
              </div>
              <div className="col-md-4 images">
              <img src="/images/Spaces-images-Bathroom.jpg" className="mx-auto d-block" width="200px" alt="Spaces-images-Bathroom.jpg"/>
                  <h3>Bathroom</h3>
                  <p>Full | Half | Quarter| Split | Jack-and-Jill
                  </p>
              </div></div>
            <div className="row">
              <div className="col-md-6 ">
              <img src="/images/Spaces-images-Kitchen.jpg" className="mx-auto d-block" width="200px" alt="Spaces-images-Kitchen.jpg"/>
                  <h3>Modular Kitchen</h3>
                  <p>Parallel | L-shaped | U-Shaped |Open
                  </p>
              </div>
              <div className="col-md-6 images2">
              <img src="/images/Spaces-images-outdoors.jpg" className="mx-auto d-block" width="200px" alt="Spaces-images-outdoors.jpg" />
                  <h3>Outdoor</h3>
                  <p>Patio | Gazebo</p>
              </div>

            </div>
            <h2>SERVICES WE PROVIDE</h2>
            <div className="row">
              <div className="col-md-4">
              <img src="/images/design-consultation-a.png" className="mx-auto d-block" width="100px" alt="design-consultation-a.png" />
                  <p>Complete design consultation        </p>
              </div>
              <div className="col-md-4">
              <img src="/images/furnitures-a.png" className="mx-auto d-block" width="100px" alt="furnitures-a.png" />
                  <p>Customized furniture &amp; furshinings        </p>
              </div>
              <div className="col-md-4">
              <img src="/images/vastu.png" className="mx-auto d-block" width="100px" alt="vastu.png" />
                  <p>Vastu-complaint decor
                  </p>
              </div>

            </div>
            <div className="row justify-content-center">
              <div className="col-md-4">
              <img src="/images/delivery-a.png" className="mx-auto d-block" width="100px" alt="delivery-a.png"/>
                  <p>Purchasing,delivery,&amp; installation.</p>
              </div>
              <div className="col-md-4">
              <img src="/images/sales-support-a.png" className="mx-auto d-block" width="100px" alt="sales-support-a.png"/>
                  <p>After-sales support
                  </p>
              </div>
              <div className="col-md-4">
              <img src="/images/contact-assistance-a.png" className="mx-auto d-block" width="100px" alt="contact-assistance-a.png"/>
                  <p>One point contact for all assistance.
                  </p>
              </div>
            </div>
          </div>
          </div>
      <div className="about-button">
        <div className="container">
          <div className="button">
            <div className="modal-button">
              <button type="button" className="main-button" onClick={() => setPopup(true)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                TELL US WHAT WE CAN <br/> DO FOR YOU
              </button>

            </div>


          </div>
        </div>


      </div>
      <div className="consultation-video">
        <div className="container">
          <h2>HEAR WHAT OUR INTERIOR DESIGNER, <br/> DEEPA SEN,HAS TO SAY</h2>
          <div className="row justify-content-center">
            <div className="col-lg-6 consultation-iframe">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZgqwjeGj4nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
          </div>


        </div>
      </div>
      <div className="about-button">
        <div className="container">
          <div className="button">
            <div className="modal-button">
              <button type="button" className="main-button" onClick={() => setPopup(true)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                BOOK A FREE CONSULTATION <br /> WITH DEEPA SEN TODAY
              </button>

            </div>


          </div>
        </div>


      </div>
      <div className="packages">
        <div className="container">
          <h2>3 PERSONALIZED DESIGN PACKAGES FROM <br/> ONE OF THE TOP INTERIOR DESIGNERS <br/> IN HYDERABAD</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <h3>LIFESTYLE TURNKEY <br/> PACKAGE</h3>
                  <p>You get complete home <br/> decor and <br/> renovation services, <br/> including
                  </p>
                    <ul>
                      <li>Personalized lighting, flooring. cabinet,&amp;counterop surfacing solutions
                      </li>
                      <li>Procurement assistance
                      </li>
                      <li>Professional execution</li>

                    </ul>

                  </div>
                    <div className="button">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="/#"><button type="button" className="main-button">
                        BOOK NOW      </button></a>
                    </div>
                  </div>
                    <div className="col-md-4">
                      <div className="box">
                        <h3>COMPREHENSIVE CONSULTATION PACKAGE</h3>
                        <p>After the submission of <br/> floor plans and room <br/> measurements, you get <br/>
                          a detailed <br/> interior design plan that consists of:
                          </p>
                          <ul>
                            <li>Custom design concepts (shown through 3D rendering&amp; 2D visualizations).
                            </li>
                            <li>Space planning&amp; furniture arrangement solutions
                            </li>
                            <li>Furnishes &amp; finishing guidance</li>

                          </ul>
                        </div>
                          <div className="button">
                            <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="/#"><button type='button' className="main-button">
                              BOOK NOW      </button></a>
                          </div>

                        </div>
                          <div className="col-md-4">
                            <div className="box">
                              <h3>DEEPA SEN'S  EXCLUSIVE <br/> DESIGN-IN-A-DAY <br/>PACKAGE </h3>
                                <p>Includes 4 hours of <br/> one-on-one <br/> consultation with <br/> DEEPA DAS,where you <br/> can polish
                                  your design <br/> strategy by reviewing <br/> challenges such as paint <br/> slection, <br/>
                                    furniture placement, <br/> etc.
                                    </p>

                                  </div>
                                    <div className="button">
                                      <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="/#"><button type='button' className="main-button">
                                        BOOK NOW      </button> </a>
                                    </div>
                                  </div>

                                  </div>


                                  </div>

      </div>
      
      <div class="form-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3"></div>

            <div class="col-lg-6">
              <form>
                <div class="form-box">
                  <div class="row">
                    <div class="col-md-5">
                      <label for="fname">BUDGET</label>
                    </div>
                    <div class="col-md-7">
                      <select name="cars" id="cars" form="carform">
                        <option value="Option1">option1</option>
                        <option value="Option2">0ption2</option>
                        <option value="Option3">0ption3</option>
                        <option value="Option4">option4</option>
                      </select>
                    </div>

                    <div class="col-md-5">
                      <label for="fname">SQUARE FOOTAGE</label>
                    </div>
                    <div class="col-md-7">
                      <select name="cars" id="cars" form="carform">
                        <option value="Option1">option1</option>
                        <option value="Option2">0ption2</option>
                        <option value="Option3">option3</option>
                        <option value="Option4">option4</option>
                      </select>
                    </div>

                    <div class="col-md-5">
                      <label for="fname">PROPERTY TYPE</label>
                    </div>
                    <div class="col-md-7">
                      <select name="cars" id="cars" form="carform">
                        <option value="Option1">option1</option>
                        <option value="Option2">option2</option>
                        <option value="Option3">option3</option>
                        <option value="Option4">option4</option>
                      </select>
                    </div>

                    <div class="col-md-5">
                      <label for="fname">BEDROOMS</label>
                    </div>
                    <div class="col-md-7">
                      <select name="cars" id="cars" form="carform">
                        <option value="Option1">option1</option>
                        <option value="Option2">option2</option>
                        <option value="Option3">option3</option>
                        <option value="Option4">option4</option>
                      </select>
                    </div>

                    <div class="col-md-5">
                      <label for="fname">SCOPE OF WORK</label>
                    </div>
                    <div class="col-md-7">
                      <select name="cars" id="cars" form="carform">
                        <option value="Option1">option1</option>
                        <option value="Option2">option2</option>
                        <option value="Option3">option3</option>
                        <option value="Option4">option4</option>
                      </select>
                    </div>
                  </div>

                </div>
                <input type="submit" value="Proceed " />
              </form>

            </div>
            <div class="col-lg-3"></div>

          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
