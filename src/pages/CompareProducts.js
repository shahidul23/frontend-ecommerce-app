import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import CompareProduct from '../components/CompareProduct'

const CompareProducts = () => {
  return (
    <>
      <Meta title="Compare Products"/>
      <BreadCrumb title="Compare Products"/>
      <div className='compare-product-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
               <CompareProduct />
               <CompareProduct />
               <CompareProduct />
               <CompareProduct />
            </div>
        </div>
      </div>
    </>
  )
}

export default CompareProducts
