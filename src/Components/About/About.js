import React from "react";
import { Accordion } from "react-bootstrap";
import "./About.css"

const About = () => {
  return (
    <div className="container my-5">
        
      <div className="row">
        <div className="col-lg-6 col-sm-12">
            <img className = "w-100" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Layer-1200.png" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
        <h1>About Doctor</h1>
        <p className = "text-primary">EVERYTHING MATTERS</p>

        <Accordion defaultActiveKey="0">

  <Accordion.Item eventKey="0">
    <Accordion.Header>Doctor as human being</Accordion.Header>
    <Accordion.Body>


    Traits-wise, being a doctor requires someone who has 1) high intellectual fortitude, 2) natural desire to learn, 3) strong passion for medicine, and 4) integrity of character. Now, having said all that, different personality types are drawn to different medical specialties.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>What is an ideal doctor?</Accordion.Header>
    <Accordion.Body>
    Confident: "The doctor's confidence gives me confidence." Empathetic: "The doctor tries to understand what I am feeling and experiencing, physically and emotionally, and communicates that understanding to me." Humane: "The doctor is caring, compassionate, and kind."
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>Here's To Being A Doctor And Being Human Too</Accordion.Header>
    <Accordion.Body>
    “Many children faced with this question will change their answer as they grow older. For me and others like myself, our answers never changed. Medicine is and always has been my calling. There’s a sense of pride in caring for others – taking humanistic repair in the direst of times and giving gravity to an extraordinary outcome.”
    </Accordion.Body>
  </Accordion.Item>

</Accordion>


        </div>
      </div>

     {/* service section  */}

    <div className="container1 my-5">
      <h2 className = "text-center p-4 text-primary">Supports For our Beloved</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card  shadow p-2 mb-5 bg-body rounded">
      <img src="https://athenahhc.com/wp-content/uploads/sites/62/2019/12/iStock-648709040-e1518410546589-1024x703.jpg" class="card-img-top" alt="..."/>
      <div class="card-body1">
      <div class="card-body">
        <div className="about-details">
          <h5>Emergency Care</h5>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  shadow p-2 mb-5 bg-body rounded">
      <img src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/SjCSVUHjyr15l3lT8DiabwNZh3ChSmiwINe7hb8V.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body1">
      <div class="card-body">
        <div className="about-details">
          <h5>24 Hour Pharmacy</h5>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card  shadow p-2 mb-5 bg-body rounded">
      <img src="https://primecareni.com/wp-content/uploads/2020/02/Care-Services-NI-1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body1">
      <div class="card-body">
        <div className="about-details">
          <h5>Prime Care</h5>
        </div>
      </div>
    </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card  shadow p-2 mb-5 bg-body rounded">
      <img src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/J6AqkMN5modHWERF9HTC8rLF1KcfZEBqUlp1XwZd.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body1">
      <div class="card-body">
        <div className="about-details">
          <h5>Imaging</h5>
        </div>
        </div>
      </div>
    </div>
  </div>

  
  <div class="col">
    <div class="card  shadow p-2 mb-5 bg-body rounded">
      <img src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Clinics-in-Dubai-D-20-02-1024x640.jpg" class="card-img-top" alt="..."/>
      <div class="card-body1">
      <div class="card-body">
        <div className="about-details">
          <h5>Specialist Clinics</h5>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  shadow p-2 mb-5 bg-body rounded">
      <img src="http://atmiyalabs.com/wp-content/uploads/2017/04/24-hours-lab.jpg" class="card-img-top" alt="..."/>
      <div class="card-body1">
      <div class="card-body">
        <div className="about-details">
          <h5>24 Hr Laboratoy</h5>
        </div>
      </div>
      </div>
    </div>
  </div>
  
 
  
</div>
      

    </div>




    </div>

 

   

  );
};

export default About;
