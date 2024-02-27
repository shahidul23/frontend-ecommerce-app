import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us"/>
      <BreadCrumb title="Contact Us "/>
      <Container class1='contact-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462637538702!2d90.39441833345148!3d23.778895394663852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1708842955852!5m2!1sen!2sbd"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-items-between'>
              <div className=''>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='Name'/>
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name='' id='' className='form-control w-100' cols="30" rows="4" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button type='submit' className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div className=''>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div className=''>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaHome className='fs-5'/>
                      <address className='mb-0'>Arzed Chamber, Bir Uttam AK Khandakar Rd, Dhaka 1212</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaPhoneAlt className='fs-5'/>
                      <a href='tel: +8801967288486'>+8801967288486</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiTwotoneMail className='fs-5'/>
                      <a href='mailto:shaidul238.si@gmail.com'>shaidul238.si@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaInfo className='fs-5'/>
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
