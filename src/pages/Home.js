import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProdictCard from '../components/ProdictCard';
import SpecialProduct from '../components/SpecialProduct';

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
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
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
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service.png' alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders over $100</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-02.png' alt='services'/>
                <div>
                  <h6>Saily Surprise Offer</h6>
                  <p className='mb-0'>Save upto 25% foo</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-03.png' alt='services'/>
                <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop whit an export</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-04.png' alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get factory default price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-05.png' alt='services'/>
                <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% protected payment</p>
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
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='feature-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProdictCard />
          <ProdictCard />
          <ProdictCard />
          <ProdictCard />
        </div>
      </div>
    </section>
    <section className='famous-wrappre home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-1.jpg' alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>Smart Warch Series 7</h6>
                <p>Form $34.00 or $18.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-2.jpg' alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>Samsung S22 Ultra</h6>
                <p>Form $134.00 or $12.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-3.jpg' alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>HP Laptop Serice 11</h6>
                <p>Form $313.00 or $15.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-4.jpg' alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>Smart TV Series 7</h6>
                <p>Form $94.00 or $19.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='special-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div> 
    </section>
    <section className='populer-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Populer Products</h3>
          </div>
          <ProdictCard />
          <ProdictCard />
          <ProdictCard />
          <ProdictCard />
        </div>
      </div>
    </section>
    <section className='marque-wrapper home-wrapper-2 ho py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper bg-white p-3 card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand'/>
              </div>
            </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='blog-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  </>
}

export default Home
