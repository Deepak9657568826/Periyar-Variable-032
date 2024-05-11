import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import '../styles/contact.css';

function ContactUS() {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);
  let [submit, setSubmit] = useState(false);

  useEffect(() => {
    emailjs.init("V2-98SY8q_1anY9WW");
  }, []);

  const getData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      emailjs
        .sendForm(
          "service_rwqg9te",
          "template_y5af4u3",
          formRef.current,
          "V2-98SY8q_1anY9WW"
        )
        .then(
          (result) => {
            console.log(result.text);
            formRef.current.reset();
            setValidated(false);
            setSubmit(true);
            Swal.fire({
              title: 'Success!',
              text: 'Your message has been sent successfully.',
              icon: 'success',
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to send message. Please try again later.',
              icon: 'error',
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false
            });
          }
        );
    }
    setValidated(true);
    setSubmit(!submit);
  };

  return (
    <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2 className='contact-heading'>CONTACT US</h2>
          <div className="links">
            <div className="link">
              <a href="https://www.linkedin.com/in/aditi-dhiman008/" target="_blank" rel="noreferrer">
                <img className='social-icon' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" />
              </a>
            </div>
            <div className="link">
              <a href="https://github.com/itiaditi" target="_blank" rel="noreferrer">
                <img className='social-icon' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" />
              </a>
            </div>
            <div className="link">
              <a href="https://codepen.io/" target="_blank" rel="noreferrer">
                <img className='social-icon' src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" />
              </a>
            </div>
            <div className="link">
              <a href="mailto:aditi.tlgt244@gmail.com">
                <img className='social-icon' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
           {/* eslint-disable-next-line react/no-unknown-property */}
          <form noValidate validated={validated} onSubmit={getData} ref={formRef}>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="email" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;
