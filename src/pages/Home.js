import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src='images/main-banner-1.jpg' alt='main banner' className='img-fluid rounded-3'/>
              <div className='main-banner-content position-absolute '>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad s13+ Pro.</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-15'>
              <div className='small-banner position-relative '>
                  <img src='images/catbanner-01.jpg' alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>Bast Sales</h4>
                    <h5>HP Laptop</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg' alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>New arrable</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg' alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>Bast Sales</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>Bast Sales</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='service d-flex align-items-center justify-content-between'>
              <div>
                <img src='images/service.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src='images/service-02.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src='images/service-03.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src='images/service-04.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home
