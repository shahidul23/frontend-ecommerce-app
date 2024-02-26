import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import main_banner from "../images/main-banner-1.jpg"
import catbanner_1 from "../images/catbanner-01.jpg"
import catbanner_2 from "../images/catbanner-02.jpg"
import catbanner_3 from "../images/catbanner-03.jpg"
import catbanner_4 from "../images/catbanner-04.jpg"
import service_1 from "../images/service.png"
import service_2 from "../images/service-02.png"
import service_3 from "../images/service-03.png"
import service_4 from "../images/service-04.png"
import service_5 from "../images/service-05.png"
import camera from "../images/camera.jpg"
import tv from "../images/tv.jpg"
import headphone from "../images/headphone.jpg"
import famous_1 from "../images/famous-1.jpg"
import famous_2 from "../images/famous-2.jpg"
import famous_3 from "../images/famous-3.jpg"
import famous_4 from "../images/famous-4.jpg"
import brand_1 from "../images/brand-01.png"
import brand_2 from "../images/brand-02.png"
import brand_3 from "../images/brand-03.png"
import brand_4 from "../images/brand-04.png"
import brand_5 from "../images/brand-05.png"
import brand_6 from "../images/brand-06.png"
import brand_7 from "../images/brand-07.png"
import brand_8 from "../images/brand-08.png"

const Home = () => {
  return <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src={main_banner} alt='main banner' className='img-fluid rounded-3'/>
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
                  <img src={catbanner_1} alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>Bast Sales</h4>
                    <h5>HP Laptop</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img src={catbanner_2} alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>New arrable</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img src={catbanner_3} alt='main banner' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute '>
                    <h4>Bast Sales</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img src={catbanner_4} alt='main banner' className='img-fluid rounded-3'/>
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
                <img src={service_1} alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders over $100</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service_2} alt='services'/>
                <div>
                  <h6>Daily Surprise Offer</h6>
                  <p className='mb-0'>Save upto 25% foo</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service_3} alt='services'/>
                <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop whit an export</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service_4} alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get factory default price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service_5} alt='services'/>
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
                <img src={headphone} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt='camera'/>
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
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='famous-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous_1} alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>Smart Warch Series 7</h6>
                <p>Form $34.00 or $18.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous_2} alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>Samsung S22 Ultra</h6>
                <p>Form $134.00 or $12.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous_3} alt='tab' className='famous-image img-fluid'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>HP Laptop Serice 11</h6>
                <p>Form $313.00 or $15.00/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous_4} alt='tab' className='famous-image img-fluid'/>
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
    <section className='popular-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
                <img src={brand_1} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_2} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_3} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_4} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_5} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_6} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_7} alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src={brand_8} alt='brand'/>
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
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home
