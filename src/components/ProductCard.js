import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProdictCard = () => {
  return (
    <div className='col-3'>
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
            <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
            />
            <h5 className='product-title'>Note that the development build is not optimized.</h5>
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
  )
}

export default ProdictCard
