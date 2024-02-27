import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Blogs = () => {
  return (
    <>
      <Meta title="Blogs"/>
      <BreadCrumb title="Blogs"/>
      <Container class1='blogs-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Shop By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li><Link to="#">Watch</Link></li>
                            <li><Link to="#">Tv</Link></li>
                            <li><Link to="#">Camera</Link></li>
                            <li><Link to="#">Laptop</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-9'>
                <div className='row'>
                    <div className='col-4 mb-3'>
                    <BlogCard />
                    </div>
                    <div className='col-4 mb-3'>
                    <BlogCard />
                    </div>
                    <div className='col-4 mb-3'>
                    <BlogCard />
                    </div>
                    <div className='col-4 mb-3'>
                    <BlogCard />
                    </div>
                    <div className='col-4 mb-3'>
                    <BlogCard />
                    </div>
                    <div className='col-4 mb-3'>
                    <BlogCard />
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Blogs
