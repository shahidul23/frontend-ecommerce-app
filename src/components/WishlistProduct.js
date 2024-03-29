import React from 'react'
import cross from "../images/cross.svg"
import watch from "../images/watch.jpg"

const WishlistProduct = () => {
  return (
    <>
      <div className='col-2'>
        <div className='wishlist-card position-relative'>
        <img src={cross} alt='cross' className='position-absolute cross img-fluid'/>
            <div className='wishlist-card-image'>
                <img src={watch} className='img-fluid w-100' alt='watch' />
            </div>
            <div className='wishlist-details py-3'>
                <h5 className='title'>Note that the development build is not optimized.</h5>
                <h6 className='price'>$ 120.00</h6>
            </div>
        </div>
    </div>
    </>
  )
}

export default WishlistProduct
