import react from "react"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home6 () {
    return (
        <div className="home6">
        <h1>WHAT OUR CUSTOMERS SAY</h1>
        <p className="line"></p>
        <h2>Safety, quality and professionalism in performance</h2>
            
        
        <div className="home6-1">
           <Carousel>
           <Carousel.Item className="home6-2">
        <img
          className="d-block w-100"
          src="images/Home6blue.jpg"
          alt=""
        />
        <Carousel.Caption className="home6-3">
        <img className="home6img" src="images/margaret.jpg"></img>
          <h3>Margaret</h3>
          <p>Your ability to handle any size load, to-and-from anywhere withing any service time frame 
          has made you our best and only choice for handling our shipments</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="home6-2">
        <img
          className="d-block w-100"
          src="images/Home6blue.jpg"
          alt=""
        />

        <Carousel.Caption className="home6-3">
        <img className="home6img" src="images/david.webp"></img>
          <h3>David</h3>
          <p>Very courteous and fast to help with any questions you might have on claims 
          we have, they help follow them up. I actually have a personal agents that cares.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="home6-2">
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt=""
        />

        <Carousel.Caption className="home6-3">
        <img className="home6img" src="images/john.jpeg"></img>
          <h3>John</h3>
          <p>
            Your rates are competitive, and I did shop around.Your people have been courteous 
            and prompt with answers to my questions. So far it has been a great relationship.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  




            </div>
        </div>
    )
}

export default Home6 ;