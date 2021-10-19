import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            
            <section class = "contact-section">
      <div class = "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div class = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class = "text">“A doctor is someone who is qualified in medicine and treats people who are ill. ... A doctor is someone who has been awarded the highest academic or honorary degree by a university.</p>
      </div>


      <div class = "contact-body">
        <div class = "contact-info">
          <div>
            <span><i class = "fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span class = "text">01913950877</span>
          </div>
          <div>
            <span><i class = "fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span class = "text">ashraks97@gmail.com</span>
          </div>
          <div>
            <span><i class = "fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span class = "text">Koltapara Main Office, Mymensingh, Bangladesh, 1217</span>
          </div>
          <div>
            <span><i class = "fas fa-clock"></i></span>
            <span>Opening Hours</span>
            <span class = "text">Monday - Friday (10:00 AM to 8:00 PM)</span>
          </div>
        </div>

        <div class = "contact-form">
          <form>
            <div>
              <input type = "text" class = "form-control" placeholder="First Name"/>
              <input type = "text" class = "form-control" placeholder="Last Name"/>
            </div>
            <div>
              <input type = "email" class = "form-control" placeholder="E-mail"/>
              <input type = "text" class = "form-control" placeholder="Phone"/>
            </div>
            <textarea rows = "5" placeholder="Message" class = "form-control"></textarea>
            <input type = "submit" class = "send-btn" value = "send message"/>
          </form>

          <div>
            <img src = "https://image.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg" alt = ""/>
          </div>
        </div>
      </div>

     {/* <div class = "map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>  */}

    </section>



        </div>
    );
};

export default Contact;