import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import CompareProduct from '../components/CompareProduct'
import Container from '../components/Container'

const CompareProducts = () => {
  return (
    <>
      <Meta title="Compare Products"/>
      <BreadCrumb title="Compare Products"/>
      <Container class1='compare-product-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <CompareProduct />
            <CompareProduct />
            <CompareProduct />
            <CompareProduct />
        </div>
      </Container>
    </>
  )
}

export default CompareProducts
