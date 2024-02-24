import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProdictCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link>
               <img src='images/wish.svg' alt='wishlist'/>
            </Link>
        </div>
        <div className='product-image'>
            <img src='images/watch.jpg' className='img-fluid' alt='Product' />
            <img src='images/speaker.jpg' className='img-fluid' alt='Product' />
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Note that the development build is not optimized.</h5>
            <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this...</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column'>
                <Link>
                  <img src='images/prodcompare.svg' alt='compare'/>
                </Link>
                <Link>
                  <img src='images/view.svg' alt='view'/>
                </Link>
                <Link>
                  <img src='images/add-cart.svg' alt='add cart'/>
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link>
               <img src='images/wish.svg' alt='wishlist'/>
            </Link>
        </div>
        <div className='product-image'>
            <img src='images/watch.jpg' className='img-fluid' alt='Product' />
            <img src='images/speaker.jpg' className='img-fluid' alt='Product' />
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Note that the development build is not optimized.</h5>
            <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this...</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column'>
                <Link>
                  <img src='images/prodcompare.svg' alt='compare'/>
                </Link>
                <Link>
                  <img src='images/view.svg' alt='view'/>
                </Link>
                <Link>
                  <img src='images/add-cart.svg' alt='add cart'/>
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link>
               <img src='images/wish.svg' alt='wishlist'/>
            </Link>
        </div>
        <div className='product-image'>
            <img src='images/watch.jpg' className='img-fluid' alt='Product' />
            <img src='images/speaker.jpg' className='img-fluid' alt='Product' />
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Note that the development build is not optimized.</h5>
            <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this...</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column'>
                <Link>
                  <img src='images/prodcompare.svg' alt='compare'/>
                </Link>
                <Link>
                  <img src='images/view.svg' alt='view'/>
                </Link>
                <Link>
                  <img src='images/add-cart.svg' alt='add cart'/>
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link>
               <img src='images/wish.svg' alt='wishlist'/>
            </Link>
        </div>
        <div className='product-image'>
            <img src='images/watch.jpg' className='img-fluid' alt='Product' />
            <img src='images/speaker.jpg' className='img-fluid' alt='Product' />
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Note that the development build is not optimized.</h5>
            <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this...</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column'>
                <Link>
                  <img src='images/prodcompare.svg' alt='compare'/>
                </Link>
                <Link>
                  <img src='images/view.svg' alt='view'/>
                </Link>
                <Link>
                  <img src='images/add-cart.svg' alt='add cart'/>
                </Link>
            </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default ProdictCard
