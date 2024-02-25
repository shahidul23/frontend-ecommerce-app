import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import WishlistProduct from '../components/WishlistProduct'
const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist"/>
      <BreadCrumb title="Wishlist"/>
      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <WishlistProduct />
                <WishlistProduct />
                <WishlistProduct />
                <WishlistProduct />
            </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
