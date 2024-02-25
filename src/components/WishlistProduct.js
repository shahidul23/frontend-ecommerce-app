import React from 'react'

const WishlistProduct = () => {
  return (
    <>
      <div className='col-2'>
        <div className='wishlist-card position-relative'>
        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
            <div className='wishlist-card-image'>
                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
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
