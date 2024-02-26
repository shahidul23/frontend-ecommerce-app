import React from 'react'
import Color from './Color'
import cross from "../images/cross.svg"
import watch from "../images/watch.jpg"

const CompareProduct = () => {
  return (
    <>
      <div className='col-3'>
        <div className='compare-product-card position-relative'>
        <img src={cross} alt='cross' className='position-absolute cross img-fluid'/>
        <div className='product-card-image'>
            <img src={watch} alt='watch'/>
        </div>
        <div className='compare-product-details'>
            <h5 className='title'>Note that the development build is not optimized.</h5>
            <h6 className='price mb-3 mt-3'>$ 120.00</h6>
            <div>
                <div className='product-details'>
                    <h5>Beand:</h5>
                    <p>Havels</p>
                </div>
                <div className='product-details'>
                    <h5>Type:</h5>
                    <p>Watch</p>
                </div>
                <div className='product-details'>
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                </div>
                <div className='product-details'>
                    <h5>Color:</h5>
                    <Color />
                </div>
                <div className='product-details'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompareProduct
